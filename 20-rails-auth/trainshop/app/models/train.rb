class Train < ApplicationRecord
  belongs_to :conductor
  has_many :journeys
  has_many :passengers, through: :journeys

  def choo_choo
    "chooo choooo chooo, I am #{self.name}"
  end
end
