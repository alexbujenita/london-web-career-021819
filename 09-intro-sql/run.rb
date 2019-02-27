require 'sqlite3'
require 'pry'

db = SQLite3::Database.new('music.db')

binding.pry

prying = true
puts "Mischief managed!"
