class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :reviewer
  belongs_to :movie
end
