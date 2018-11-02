# NomNom Frontend Developer Coding Challenge

This zip contains my implementation of the NomNom Frontend Developer Coding Challenge.

For this project I used React + Redux + Redux Thunk + Sass.

Through this app, the user will be able to add, edit, delete and search recipes by id or a regex.

## Tested on
This app has been tested on Chrome, Firefox, Safari and IE11.

## Getting started

### Step 1:
Extract all the files and install the latest version of [Node](https://nodejs.org/).

### Step 2:

After successfully finish the installation, cd into your project directory and run the command "npm install". This will take a while for your first install as it will download all the project dependencies.

```
cd /challenge_nomnom
$ npm install
```

### Step 3:
When the installation of the dependencies has finished, you should be able to do:

```
$ npm start
```

This will start the local server for development and the project will be now running on: `http://localhost:8080/`.
To test all the functionalities you need to start the Search engine API

## Search engine API

You will base the challenge on the API provided. To start it, run:

```
./start-api.sh
```

The only dependency is Docker, you can get it from https://www.docker.com/community-edition#/download

The API is available via `localhost` on port `8088`. Cross Origin Resource Sharing is
enabled and the API will be reachable from any browser context.
