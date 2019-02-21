require 'pry'
require_relative './User.rb'
require_relative './Tweet.rb'

# code goes here!

# User instances
nico = User.new('Nicolas')
sal = User.new('Sal')
ebi = User.new('Ebi')
simone = User.new('Simone')
mariam = User.new('Mariam')

# Tweet instances
t1 = Tweet.new("I'm new to twitter, this looks cool!", nico)
t2 = Tweet.new("My second tweet, yay!!!", nico)
t3 = Tweet.new("@nico hey Nico, I'm here too!", sal)
t4 = Tweet.new("Awesome sauce!", ebi)
t5 = Tweet.new("You get a donut, you get a donut, everybody gets a donut!", sal)
t6 = Tweet.new("Hey everybody!", simone)
t7 = Tweet.new("Excited to be joining the Flatiron bootcamp!", mariam)
t8 = Tweet.new("Object Oriented Ruby is so cool!", ebi)
t9 = Tweet.new("@ebi You know it!", sal)
t10 = Tweet.new("@sal HELP, I CAN'T STOP SHOUTING", simone)
t11 = Tweet.new("#helpmyspacebarisnotworking", mariam)

binding.pry
puts "Mischief managed!"
