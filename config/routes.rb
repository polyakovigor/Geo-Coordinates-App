Rails.application.routes.draw do
  get 'locations/get_location'

  root 'locations#get_location'
end
