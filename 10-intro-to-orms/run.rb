require 'sqlite3'
require 'pry'
require_relative './Artist.rb'

DB = SQLite3::Database.new('music.db')
DB.results_as_hash = true

binding.pry
puts 'mischief managed!'
