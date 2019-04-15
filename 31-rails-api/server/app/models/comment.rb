class Comment < ApplicationRecord
  belongs_to :image

  validates :content, presence: true
  validates :image_id, presence: true
end
