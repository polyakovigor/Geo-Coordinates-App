Rails.application.routes.draw do
  root 'locations#index'
  resources :locations
  resources :distances, only: [:new, :create]
end
