require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


c1 = Customer.new('Customer', 'Customero 1')
c2 = Customer.new('Customer', 'Customero 2')
c3 = Customer.new('Customer', 'Customero 3')
c4 = Customer.new('Maria', 'Customera 3')

r1 = Restaurant.new("R1")
r2 = Restaurant.new("R2")
r3 = Restaurant.new("R3")

rev1 = Review.new(c1, r1, 5, "I loved it!")
rev1 = Review.new(c1, r1, 5, "I loved it!")
rev1 = Review.new(c1, r1, 5, "I loved it!")
rev1 = Review.new(c1, r1, 5, "I loved it!")
rev2 = Review.new(c2, r2, 4, "I sort of liked it!")
rev3 = Review.new(c3, r3, 3, "Meh!")
rev4 = Review.new(c4, r1, 2, "I hated it too!")
rev5 = Review.new(c1, r2, 1, "I hated it!")
rev6 = Review.new(c2, r3, 2, "Wouldn't recommend...")
rev7 = Review.new(c3, r1, 3, "Ok, I guess...!")

binding.pry
0 #leave this here to ensure binding.pry isn't the last line
