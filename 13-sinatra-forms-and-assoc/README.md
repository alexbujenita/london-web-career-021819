
## "Frank Sinatra (chairman of the board) for having so much class he deserves a web-framework named after him."

<a href="https://flatiron-sql-designer.herokuapp.com/" target="_blank">Flatiron SQL Designer</a>

### See bottom of the file for SQL info.

<a href=""></a>[Sinatra](http://sinatrarb.com/about.html){:target="_blank"}

<a href=""></a>[CRUD vs REST](https://image.slidesharecdn.com/restvssoap-130104080511-phpapp01/95/rest-vs-soap-40-638.jpg?cb=1357286773){:target="_blank"}

<a href=""></a>[RESTful routes](https://i.imgur.com/omvB7JJ.png){:target="_blank"}

<a href=""></a>[html forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form){:target="_blank"}

## What will we be doing:

- CRUD, REST, HTTP; The acronym festival
- Implementing RESTful routing for one resource
- Write html templates w/ `erb`
- Build params hashes from forms

## #RESTful routing for our resource: the user

| Name | Path | HTTP Verb | Purpose |
| --- | --- | --- | --- |
| Index | /users | GET | List all users |
| New  | /users/new | GET | Show new user *form* |
| Create | /users | POST | Create a new user, then redirect  |
| Show | /users/:id | GET | Show info about ONE specific user |
| Edit | /users/:id/edit | GET | Show edit *form* for one user |
| Update | /users/:id | PUT | Update a particular user, redirect |
| Destroy | /users/:id | DELETE | Delete a particular user, then redirect |

## Flow

- `corneal new friends_app`
- `bundle`

```ruby
# rakefile
task :console do
  Pry.start
end
```

```ruby
# models/user.rb
class User < ActiveRecord::Base

end
```

- `rake db:create_migration NAME=create_users_table`

```ruby
# migration file
class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :nickname
    end
  end
end
```

## Let's get some users created on the command line

```ruby
users = [
  {name: "Dave", nickname: "daveyboy"},
  {name: "Jim", nickname: "slimjim"},
  {name: "Rob", nickname: "bobby"},
  {name: "Stacey", nickname: "stace"},
  {name: "Siobahn", nickname: "shivawn"}]
```

READ

```ruby
# users_controller.rb

class UsersController < ApplicationController
get "/users" do
@users = User.all
erb :"users/index"
end

get "/users/:id" do
@user = User.find(params[:id])
erb :"users/show"
end
end
```

```ruby
# config.ru
use UsersController
```

- create a index view for user! Mimic that behaviour for every kind of REST endpoint that needs a view. Which ones do?
- https://loremflickr.com/

CREATE
```ruby
get "/users/new" do
  erb :"users/new"
end

post "/users" do
  user = User.create(params[:user])
  redirect "/users/#{user.id}"
end
```

CREATE FORM
```html
<h1>Create new user</h1>

<a href="/users">Go back</a>

<form action="/users" method="post">
<div>
<label for="">Name:</label>
<input type="text" name="user[name]" />
</div>
<div>
<label for="">Nickname:</label>
<input type="text" name="user[nickname]" />
</div>
<input type="submit" value="Create new user" />
</form>
```

### Caveat on PATCH and DELETE
- What kind of requests are browsers able to do by default?
- in config.ru `use Rack::MethodOverride`
- Why? [Here's the Link](https://stackoverflow.com/questions/165779/are-the-put-delete-head-etc-methods-available-in-most-web-browsers)

UPDATE
```ruby
get "/users/:id/edit" do
  @user = User.find(params[:id])
  erb :"users/edit"
end

patch "/users/:id" do
  user = User.find(params[:id])
  user.update(params[:user])
  redirect "/users/#{user.id}"
end
```

EDIT FORM
```html
<h1>Edit user</h1>

<a href="/users/<%= @user.id %>">Go back</a>

<form action="/users/<%= @user.id %>" method="post">
<input type="hidden" name="_method" value="patch" />
<div>
<label for="">name:</label>
<input type="text" name="user[name]" value="<%= @user.name %>" />
</div>
<div>
<label for="">nickname:</label>
<input type="text" name="user[nickname]" value="<%= @user.nickname %>" />
</div>
<input type="submit" value="Edit user" />
</form>

<form action="/users/<%= @user.id %>" method="post">
<input type="hidden" name="_method" value="delete" />
<input id="mysubmit" type="submit" value="Delete user" />
</form>
```

DELETE
```ruby
delete "/users/:id" do
  user = User.find(params[:id])
  user.destroy
  redirect "/users"
end
```

EXTRAs

```ruby
#Activerecord 'where' method across join
@groups = Group.joins(:participants).where(participants: {user_id: @user.id})
```

```html
#New Group Form
<h1>Create a new group</h1>

<a href="/users/<%= @user.id %>">Go Back</a>

<form action="/groups" method="post">
  <div>
    <label for="">Group title:</label>
    <input type="text" name="group[title]">
    <input type="text" name="user[id]" value="<%= @user.id %>" hidden>
  </div>
  <div>
    <label for="">Participants:</label>
    <ul>
      <% @users.each do |u| %>
        <li><input type="checkbox" name="group[user_ids][]" value="<%= u.id %>"
          <% if @user.id == u.id %>
            checked hidden>
          <% else %>
            ><%= u.name %>
          <% end %>
        </input></li>
      <% end %>
    </ul>
   </div>
  <input type="submit" value="Create Group" />
</form>
```
```html
#new messages and message list
<h1>Group: <%= @group.title %></h1>
<br><br><hr><br>
<h4>Participants</h4>
<ul>
  <% @group.participants.each do |p| %>
    <li><%= p.user.name %></li>
  <% end %>
</ul>

<br><br><hr><br>

<h4>Add message</h4>
<br><br><hr><br>
<form action="/users/<%= @user.id %>/groups/<%= @group.id %>/messages" method="post">
  <div>
    <label for="">Content:</label>
    <br>
    <textarea name="message[content]"></textarea>
    <input type="hidden" name="message[user_id]" value="<%= @user.id %>">
    <input type="hidden" name="message[group_id]" value="<%= @group.id %>">
  </div>
  <div>
    <input type="submit" value="Send Message">
  </div>
</form>
<br><br><hr><br>

<h4>Messages</h4>
<br><br><hr><br>
<ul>
  <% @group.messages.reverse.each do |m| %>
    <div style="display: flex; justify-content: <%= @user.id == m.user_id ? 'flex-end' : 'flex-start'; %>">
      <li style="background-color: <%= @user.id == m.user_id ? '#DFF8D0' : '#F3F6F1'; %>; padding: 10px; margin-bottom: 5px;width: 200px;"><%= m.content %></li>
    </div>
  <% end %>
</ul>
```
```ruby
#groups controller
  get '/groups/:user_id/new' do
    @user = User.find(params[:user_id])
    @users = User.all
    erb :"groups/new"
  end

  post '/groups' do
    # binding.pry
    group = Group.create(params[:group])
    # params[:participants][:users].each do |id|
    #   Participant.create(user_id: id, group_id: group.id)
    # end
    redirect "/users/#{params[:user][:id]}"
  end

  get '/users/:user_id/groups/:id' do
    @user = User.find(params[:user_id])
    @group = Group.find(params[:id])

    erb :"groups/show"
  end

  post '/users/:user_id/groups/:id/messages' do
    # binding.pry
    message = Message.new
    message.user_id = params[:user_id]
    message.group_id = params[:id]
    message.content = params[:message][:content]
    binding.pry
    message.save
    redirect "/users/#{params[:user_id]}/groups/#{params[:id]}"
  end
```

## Copy SQL into Flatiron SQL Designer

```sql
<?xml version="1.0" encoding="utf-8" ?>
<!-- SQL XML created by WWW SQL Designer, https://github.com/ondras/wwwsqldesigner/ -->
<!-- Active URL: http://flatiron-sql-designer.herokuapp.com/ -->
<sql>
<datatypes db="mysql">
<group label="Numeric" color="rgb(238,238,170)">
<type label="Integer" length="0" sql="INTEGER" quote=""/>
<type label="TINYINT" length="0" sql="TINYINT" quote=""/>
<type label="SMALLINT" length="0" sql="SMALLINT" quote=""/>
<type label="MEDIUMINT" length="0" sql="MEDIUMINT" quote=""/>
<type label="INT" length="0" sql="INT" quote=""/>
<type label="BIGINT" length="0" sql="BIGINT" quote=""/>
<type label="Decimal" length="1" sql="DECIMAL" re="DEC" quote=""/>
<type label="Single precision" length="0" sql="FLOAT" quote=""/>
<type label="Double precision" length="0" sql="DOUBLE" re="DOUBLE" quote=""/>
</group>

<group label="Character" color="rgb(255,200,200)">
<type label="Char" length="1" sql="CHAR" quote="'"/>
<type label="Varchar" length="1" sql="VARCHAR" quote="'"/>
<type label="Text" length="0" sql="MEDIUMTEXT" re="TEXT" quote="'"/>
<type label="Binary" length="1" sql="BINARY" quote="'"/>
<type label="Varbinary" length="1" sql="VARBINARY" quote="'"/>
<type label="BLOB" length="0" sql="BLOB" re="BLOB" quote="'"/>
</group>

<group label="Date &amp; Time" color="rgb(200,255,200)">
<type label="Date" length="0" sql="DATE" quote="'"/>
<type label="Time" length="0" sql="TIME" quote="'"/>
<type label="Datetime" length="0" sql="DATETIME" quote="'"/>
<type label="Year" length="0" sql="YEAR" quote=""/>
<type label="Timestamp" length="0" sql="TIMESTAMP" quote="'"/>
</group>

<group label="Miscellaneous" color="rgb(200,200,255)">
<type label="ENUM" length="1" sql="ENUM" quote=""/>
<type label="SET" length="1" sql="SET" quote=""/>
<type label="Bit" length="0" sql="bit" quote=""/>
</group>
</datatypes><table x="183" y="222" name="user">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
<table x="825" y="220" name="chat_group">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="title" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
<table x="551" y="285" name="message">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="user_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="user" row="id" />
</row>
<row name="chat_group_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="chat_group" row="id" />
</row>
<row name="content" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
<table x="545" y="89" name="participants">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="user_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="user" row="id" />
</row>
<row name="chat_group_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="chat_group" row="id" />
</row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
</sql>
```
