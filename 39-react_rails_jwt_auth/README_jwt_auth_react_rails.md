# JWT auth - React && Rails.

## What are we going to do

- vanilla react - this implementation is flexible and general
- set up a rails api that manages users.
- set up a react frontend that enables login/logout functionality
- restrict access to users data correctly

## Step 1: Rails API

`rails g model User username password_digest`
`rails g controller api/v1/users`

```rb
# Gemfile
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
```

```rb
#routes.rb
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
    end
  end
```

`rails db:migrate`

```rb
# seeds.rb
users = [
  { username: "Daniel", password: "daniel123" },
  { username: "Gabriel", password: "gabriel123" },
  { username: "Lucy", password: "lucy123" },
]

User.destroy_all

users.each do |user|
  User.create user
  puts "Created user #{user[:username]}, password: #{user[:password]}"
end

puts "Finished user creation"
puts "Finished seeding"
```

```rb
# in user.rb model file
has_secure_password
```

`rails db:seed`

What is wrong with that code?

```rb
# users controller
class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
end
```

That's more like it:

```rb
class Api::V1::UsersController < ApplicationController
  def index
    users = []
    User.all.each do |user|
      user_hash = {
        username: user[:username],
        id: user[:id]
      }
      users << user_hash
    end
    render json: users
  end
end
```

### JWT Basics

Token based authentication is stateless. We are not storing any information about a logged in user on the server. No stored information means that your application can scale and add more machines as necessary without worrying about where the user is logged in.

The flow:

- User requests access with username and password.
- The backend validates credentials.
- The app gives a signed token to the client.
- The client stores the token and presents it with every request.

Remember, the token (JWT) is just a string of text. Visit jwt.io for a lot of details on them - highly recommended.

Let's add the jwt gem.

```rb
# Gemfile
# use jwt for auth tokens
gem 'jwt'
```

```rb
# in console:
payload = {username: 'daniel', id: 3}
secret = 'a very long, random string, stored in the ENV, not in the codebase'
jwt = JWT.encode(payload, secret)
decoded_hash = JWT.decode(jwt, secret)
user_data = decoded_hash[0]
```

```rb
# application_controller.rb
class ApplicationController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, "supersecretcode")
  end

  def decode_token(token)
    JWT.decode(token, "supersecretcode")[0]
  end
end
```

Look at how we're using the secret in both `issue_token` and `decode_token` methods. We are checking the code into the repository, which is a cardinal error. Let's make sure that the code lives only in the environment. This environment variable you should set using Heroku's dashboard or manually on the console of the server you're using.

`export RAILS_SECRET=adsofijasdofijsadoifdasjio`
`echo $RAILS_SECRET`

`ENV["RAILS_SECRET"]`

```rb
# application_controller.rb
class ApplicationController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, ENV['RAILS_SECRET'])
  end

  def decode_token(token)
    JWT.decode(token, ENV['RAILS_SECRET'])[0]
  end
end
```

`rails g controller Auth`

```rb
# auth_controller.rb
class AuthController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      payload = {user_id: user.id}
      token = issue_token(payload)
      render json: { jwt: token }
    else
      render json: { error: "The token couldn't be created"}
    end
  end
end

# users_controller.rb
def create
  user = User.new(username: params[:username], password: params[:password])
  if user.save
    payload = {user_id: user.id}
    token = issue_token(payload)
    render json: { jwt: token }
  else
    render json: { error: "Signup not successful !"}
  end
end
```

```rb
# application_controller.rb
def get_token
  request.headers["Authorization"]
end

def current_user
  token = get_token
  decoded_token = decode_token(token)
  user = User.find(decoded_token["user_id"])
  user_hash = {
    username: user[:username],
    id: user[:id]
  }
end

def logged_in
  !!current_user
end
```

```rb
# routes.rb
    namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
    end
  end

  post "/auth/create", to: "auth#create"
```

```rb
# auth_controller
def show
  if logged_in
    render json: current_user
  else
    render json: {error: "Current user not found"}
  end
end
```

`rails g model Post title content user_id`

```rb
class Post < ApplicationRecord
  belongs_to :user
end

class User < ApplicationRecord
  has_secure_password
  has_many :posts
end
```

```rb
# seeds.rb
users = [
  { username: "Daniel", password: "daniel123" },
  { username: "Gabriel", password: "gabriel123" },
  { username: "Lucy", password: "lucy123" },
]

User.destroy_all

users.each do |user|
  User.create user
  puts "Created user #{user[:username]}, password: #{user[:password]}"
end

puts "Finished user creation"

Post.destroy_all
first_user = User.first
posts = [
  {title: 'my first post',content: 'this is my first post', user_id: first_user.id},
  {title: 'my second post',content: 'this is my second post', user_id: first_user.id},
  {title: 'my third post',content: 'this is my third post', user_id: first_user.id},
]
Post.create posts

puts "Finished posts creation"

puts "Finished seeding"
```

`rails g controller Post`

```rb
class PostsController < ApplicationController
  def my_posts
    if logged_in
      render json: User.find(current_user[:id]).posts
    else
      render json: {error: "Error fetching your posts"}
    end
  end
end
```

```rb
# routes
  get "/my_posts", to: "posts#my_posts"
```

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

## NOTE

If your app uses React Router, remember that you can 'redirect' from <Route> components using the `this.props.history.push('/');` api.
