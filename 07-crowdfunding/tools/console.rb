#!/usr/bin/env ruby

require_relative '../config/environment.rb'

def reload
	load '../config/environment.rb'
end

us1 = User.new('Merlin')
us2 = User.new('Gandalf')
us3 = User.new('Dumbledore')

prj1 = us1.create_project('Build A Bridge', 1000)
prj2 = us2.create_project('Cross Bridges', 30000)
prj3 = us3.create_project('Kill Voldemort', 10000000000000000000000000000*100000000)

plg1 = us2.back_project(prj1, 30)
plg2 = us1.back_project(prj2, 300)
plg3 = us3.back_project(prj1, 4354)
# plg4 = us1.back_project(prj3, 42)
plg5 = us2.back_project(prj2, 40)

binding.pry
0
