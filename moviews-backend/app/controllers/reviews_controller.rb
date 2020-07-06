class ReviewsController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]
    
    def index 
        @reviews = Review.all 
        render json: @reviews
    end

    def create  
        @review = Review.create(review_params)
        render json: @review
    end 

    def destroy 
        @review.destroy
    end 

    private 

    def review_params 
        params.require(:review).permit(:body, :reviewer, :movie_id)
    end 

    def set_params 
        @review = Review.find(params[:id])
    end 
end
