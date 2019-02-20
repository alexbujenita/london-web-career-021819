require 'pry'

# ways to store data:

# 1: In loose variables:
# name = "Nicolas"
# age = 31
#
# Not great, especially if you need many of them:
# name2 = "Byron"
# age2 = 15

# 2: Arrays
# person = ["Nicolas", 31]
# person2 = ["Byron", 15]
#
# a little better, but why should person[0] be the name?
# it's not very intuitive

# 3: Hashes
# person = {
#   name: "Nicolas",
#   age: 31
# }
#
# person2 = {
#   name: "Byron",
#   age: 15
# }
#
# Way better, we can do stuff like person[:name] now
# But people are not just a collection of data
# they can also perform actions
# so how would you do it?
#
# def greet(person)
#   puts "Hi, I'm #{person[:name]} and I'm #{person[:age]}."
# end


# enter Classes
# a blueprint that allows us to describe
# what a thing should look like and be able to do
# and then create many of them (instances)
class Person

  # @@class_attribute
  # @instance_attribute
  # def instance_method
  # def self.class_method

  attr_reader :first_name, :last_name, :age
  @@all = []

  def initialize(first_name, last_name, age)
    @first_name = first_name
    @last_name = last_name
    @age = age
    # self changes depending on the context
    # self within an instance method refers to the instance we're in
    @@all << self
  end

  # self here refers to the Class itself
  def self.all
    @@all
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def greet
    puts "Hi, I'm #{full_name} and I'm #{@age}."
  end

end

p1 = Person.new("Nicolas", "Marcora", 31)
p2 = Person.new("Byron", "Skouear", 16)

Person # << CLASS
p1 # << INSTANCE

# now that we have *all* of the people created
# we can easily get a list of everyone's names:
Person.all.map { |p| p.full_name }

# or even find a specific person:
Person.all.find { |p| p.full_name === "Nicolas Marcora" }

binding.pry
"don't let pry escape!"
