class User < ActiveRecord::Base
  has_many :participants
  has_many :groups, through: :participants
  has_many :messages
end