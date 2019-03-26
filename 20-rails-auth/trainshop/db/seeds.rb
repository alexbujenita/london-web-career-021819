# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Passenger.destroy_all
Conductor.destroy_all

passengers = [
  {name: 'Dan'},
  {name: 'Lucy'},
  {name: 'Alice'},
  {name: 'Sam'}
]

Passenger.create(passengers)

conductors = [
  {name: 'conductor dan'},
  {name: 'conductor lucy'},
  {name: 'conductor alice'},
  {name: 'conductor sam'}
]

Conductor.create(conductors)
