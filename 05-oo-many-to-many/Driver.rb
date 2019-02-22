class Driver
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def rides
    Ride.all.select { |ride| ride.driver == self }
  end

  def customers
    # [r1,r2,r3] -> [c1,c2,c3]
    rides.map { |ride| ride.customer }.uniq
  end

  def customer_names
    customers.map { |customer| customer.name }
  end

  def total_revenue
    # total = 0
    # rides.each { |ride| total += ride.fare }
    # total
    rides.map { |ride| ride.fare }.sum
  end
end
