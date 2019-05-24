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
