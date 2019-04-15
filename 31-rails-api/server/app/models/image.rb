class Image < ApplicationRecord
  has_many :comments

  validates :name, presence: true
  validates :url, presence: true
  validates :like_count, presence: true
end
