# Requirements for the Workshop

1. [Install Git](http://help.github.com/set-up-git-redirect)

2. [Install Node.js](http://nodejs.org/#download)

3. Install NPM

        curl http://npmjs.org/install.sh | sh

4. Clone this repository

        git clone git://github.com/glesperance/node-rocket-workshop.git
	
5. Install the required NPM packages. (You need to be in the git directory created in step 4)

        npm update

# How to Prepare Yourself for the Workshop

1. Read the [Rocket.js README](https://github.com/glesperance/node-rocket/blob/master/README.md)
2. (optional) Read the [Backbone.js Documentation](http://documentcloud.github.com/backbone/)

# Directions

## Create the pastes Controller
The pastes controller must provide the following REST methods :

* index
  This method is used to list all the pastes on the server.

* show
  This method is used to display the content of a specific paste.

* create
  This method is used to create a new paste entry.

* destroy
  This method is used to delete a given paste entry.

## Create the now.js API hooks to take the app real-time.

The following methods must be made available through the `pasteCollectionApi`
exported now.js object :

* `on(event, callback)`
  This sets up event listeners for the given `event`. The required events are 

  * _add_
    Calls `callback` with new content of any newly added paste.

  * _destroy_
    Calls `callback` with an object containing the id of any deleted paste.

