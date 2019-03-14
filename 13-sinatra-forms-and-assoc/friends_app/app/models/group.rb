class Group < ActiveRecord::Base
  has_many :participants
  has_many :users, through: :participants
  has_many :messages
end