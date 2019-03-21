class Bee < ApplicationRecord 
  belongs_to :hive
  has_many :flights
  has_many :flowers, through: :flights

  validates :name, presence: true, uniqueness: true
end
