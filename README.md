# Bushroot
This gardening website prototype is meant to help hobbyists organize and document their gardens. Create an account, define your own garden plot and map out what you’ve planted.
#### Live Website:
http://bushroot.herokuapp.com/
### Prerequisites
Be sure you have MongoDB installed with its own instance running on your machine when you try to run your local version.
You can install MongoDB from [here:](https://docs.mongodb.com/getting-started/shell/installation/)
### Installing
If you want to toy with this yourself, make a clone or download with the clone or download button.
be sure to do the same for the server side as well.
From here be sure to type
```
npm install
```
and install all of the necessary modules in our package.json 
From here you should have everything you need downloaded to run our code.
### Deployment
In order to see a local running version of our code start by creating a MongoDB instance
Next connect the Bushroot server with your MongoDB instance by typing npm start into your server’s command line
Finally you’ll be ready to start the app portion with another npm start in the app’s command line

## Running the tests
Starting any of the existing tests is as easy as writing npm test in the apps command process

## Built With
[React](https://reactjs.org/)- the frot-end web framwork from Facebook

[Redux](http://redux.js.org/) - the state management system you can intigrate with React

[ReactDnD](https://github.com/react-dnd/react-dnd) - a React module that gives us the means of draging and droping objects in the view

## Authors
Joe Churchman, Christopher Thomson, Mark Petrie, Andrew Potter

## Dev notes
Initial Plant Data
* Maturation Rate (Time to harvest)
* Water requirements
* Sun requirements
* Size/spread
* Expected yield
User input for plant data

Stretch
* Automatic garden generator
* Sharing a garden with other users
* Watering reminders*
* Crop rotation suggestions
* Expected Yield per crop
* Adjacency warnings/suggestions*
* Space optimization suggestions*
* Planting schedule
* Soil/plot preparation*
requires user input

MVP routes
* Not protected
    * sign up
    * sign in
    * about
* Dashboard with multiple views/layers
    * garden builder
    * plant lookup
* Add plant to database
* Plant browser

User model:
* Email, Password

Garden model:
* Dimensions
* Climate (Stretch goal?)
* Plant types and positions

Plant model:
* Name
* Size
* Time planted
* Time to yield
* Harvest amount
* Watering frequency
* Full sun/half shade/full shade
