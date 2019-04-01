class Passenger < ApplicationRecord
  has_many :journeys
  has_many :trains, through: :journeys
end
