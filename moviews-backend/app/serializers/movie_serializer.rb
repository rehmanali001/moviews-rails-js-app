class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description
  has_many :reviews
end
