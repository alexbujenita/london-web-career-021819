class Post < ApplicationRecord
    belongs_to :blogger
    belongs_to :destination
    # We've added in a validation on the length of the content
    validates :content, length: { minimum: 100 }
end
