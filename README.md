# Geo-Coordinates-App

Users can enter their address and then get the geo coordinates of their location. 
On the start page user can see list of locations (if there are such). 
Also user can create a new location by entering the address, for example _“St Pancras Station, London”_. 
After that you can see that the location was successfully created: latitude and longitude will be displayed on the page. 
Marker displays address on the static Google map. 
Under it you can see nearby locations. 

**You can see this app by this [this](https://limitless-bayou-16056.herokuapp.com/).**
 
**To run this project locally:**
* make sure that Ruby is installed on your system _ruby -v_
* make sure that Rails is installed _rails -v_
* if you see Ruby and Rails version then you are good to start, otherwise you need to install **ruby** and **rails** 
* clone repo
* go to folder with the project name
* run bundle install
* setup database with a username/password, modify the _# config/database.yml.example_ file to contain the username/password that you specified
* run rake db:create db:migrate db:seed
* run rails server
* You can now visit [http://localhost:3000](http://localhost:3000) to view website!