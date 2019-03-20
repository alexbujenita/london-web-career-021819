class Blogger < ApplicationRecord
    has_many :posts
    has_many :destinations, through: :posts
    validates :name, uniqueness: true
    validates :age, numericality: { minimum: 0 }
    validates :bio, length: { minimum: 30 }
end
