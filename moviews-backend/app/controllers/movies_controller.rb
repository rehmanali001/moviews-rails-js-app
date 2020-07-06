class MoviesController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

    def index 
        @movies = Movie.all 
        render json: @movies, only: [:id, :title, :image, :description]
    end 

    def create 
        @movie = Movie.create(movie_params)
        render json: @movie
    end 

    def show
        render json: @movie
    end 


    def destroy
        @movie.destroy
    end 

    private 

    def movie_params
        params.require(:movie).permit(:title, :image, :description)
    end 

    def set_params
        @movie = Movie.find(params[:id])
    end 
end
