class Movie < ApplicationRecord
    has_many :reviews, :dependent => :destroy 
end
