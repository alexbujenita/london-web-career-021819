require 'pry'
require './User.rb'
require './Tweet.rb'

u1 = User.new('nmarcora')
u2 = User.new('tomi')
u3 = User.new('saqemlas')

t1 = Tweet.new('My first tweet!', u1)
t2 = Tweet.new('My first tweet!', u2)
t3 = Tweet.new('My first tweet!', u3)
t4 = Tweet.new('My second tweet!', u1)
t5 = Tweet.new('My third tweet!', u1)

binding.pry
"pry!"
