require 'pry'
require_relative './Driver.rb'
require_relative './Customer.rb'
require_relative './Ride.rb'

# Today: More relationships!
# Many to Many

stig = Driver.new('The Stig')
fangio = Driver.new('Fangio')
schumacher = Driver.new('Schumacher')

alex = Customer.new('Alex')
laura = Customer.new('Laura')
harry = Customer.new('Harry')

r1 = Ride.new(stig, alex, '19/02/2019', 9.92)
r2 = Ride.new(stig, laura, '20/02/2019', 15.73)
r3 = Ride.new(stig, harry, '20/02/2019', 60.22)
r4 = Ride.new(fangio, alex, '20/02/2019', 999.42)
r5 = Ride.new(fangio, laura, '19/02/2019', 1000.18)
r6 = Ride.new(fangio, harry, '22/02/2019', 1234567.99)
r7 = Ride.new(schumacher, alex, '21/02/2019', 88.12)
r8 = Ride.new(schumacher, laura, '22/02/2019', 56.11)
r9 = Ride.new(schumacher, harry, '19/02/2019', 32.41)

binding.pry
"pry!"




#
#
#
#
#
#
#
#
#
#
#
#
# require_relative './Driver.rb'
# require_relative './Customer.rb'
# require_relative './Ride.rb'
#

#
# # r1 = Ride.new(stig, alex)
# # r2 = Ride.new(stig, laura)
# # r3 = Ride.new(stig, harry)
# # r4 = Ride.new(fangio, alex)
# # r5 = Ride.new(fangio, laura)
# # r6 = Ride.new(fangio, harry)
# # r7 = Ride.new(schumacher, alex)
# # r8 = Ride.new(schumacher, laura)
# # r9 = Ride.new(schumacher, harry)
#
# r1 = Ride.new(stig, alex, '19/02/2019', 9.92)
# r2 = Ride.new(stig, laura, '20/02/2019', 15.73)
# r3 = Ride.new(stig, harry, '20/02/2019', 60.22)
# r4 = Ride.new(fangio, alex, '20/02/2019', 999.42)
# r5 = Ride.new(fangio, laura, '19/02/2019', 1000.18)
# r6 = Ride.new(fangio, harry, '22/02/2019', 1234567.99)
# r7 = Ride.new(schumacher, alex, '21/02/2019', 88.12)
# r8 = Ride.new(schumacher, laura, '22/02/2019', 56.11)
# r9 = Ride.new(schumacher, harry, '19/02/2019', 32.41)
#
# binding.pry
# puts 'Mischief managed!'
