Rails.application.routes.draw do

  get :search, controller: :main
  root 'main#search'

  resources :locations
end
