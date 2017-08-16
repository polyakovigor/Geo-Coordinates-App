# Geo-Coordinates-App

###Simple **rails-app** which allows a user to enter their address and then returns the geo coordinates of the address location. 
On the start page user can see list of locations(if there are such), also he can create a new location by entering the _address_, for example “St Pancras Station, London”. After that you can see that the location was successfully created: latitude and longitude are displayed on the page. Marker displays address on the static google map. Under the map you can see the nearby locations if there are such.
 
For run this project locally:
* make sure Ruby is installed on your system _ruby -v_
* make sure Rails is installed _rails -v_
* if you see Ruby and Rails version then you are good to start, other wise visit [https://gorails.com/setup](https://gorails.com/setup) 
* clone repo
* go to folder with project name
* run bundle install
* setup database with a username/password, modify the _# config/database.yml.example_ file to contain the username/password that you specified
* run rake db:create db:migrate db:seed
* написать про GOOGLE_API_KEY
* run rails server
* You can now visit [http://localhost:3000](http://localhost:3000) to view website!