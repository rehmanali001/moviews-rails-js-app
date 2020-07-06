Rails.application.routes.draw do
  resources :reviews
  resources :movies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'movies#index'
end
