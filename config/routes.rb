Rails.application.routes.draw do

  root 'locations#get_location'

  get 'locations/get_location'
end
