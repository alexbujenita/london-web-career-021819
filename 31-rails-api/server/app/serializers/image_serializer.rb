class ImageSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :like_count, :comments
end
