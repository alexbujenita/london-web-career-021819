class Post < ApplicationRecord
  belongs_to :user

  validates :title, :content, presence: true
  validates :title, uniqueness: true
  validates :content, length: { minimum: 3 }
  validate :is_title_even


  def is_title_even
    if !(self.title.length % 2 == 0)
      errors.add(:title, "of your post does not have an even number of characters")
    end
  end
end
