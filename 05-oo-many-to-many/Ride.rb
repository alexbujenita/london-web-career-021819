class Ride
  attr_reader :driver, :customer, :date, :fare, :rating
  @@all = []

  def initialize(driver, customer, date, fare, rating=nil)
    @driver = driver
    @customer = customer
    @date = date
    @fare = fare
    @rating = rating
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_date(date)
    @@all.select { |ride| ride.date == date }
  end
end
