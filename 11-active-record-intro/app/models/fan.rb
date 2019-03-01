class Fan < ActiveRecord::Base
  has_many :fanships
  has_many :artists, through: :fanships
end
