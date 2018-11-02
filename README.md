# NomNom Frontend Developer Coding Challenge

This zip contains my implementation of the NomNom Frontend Developer Coding Challenge by Marion Carambula. Through this app, the user will be able to add, edit, delete and search recipes by id or a regex.

For this project I use React + Redux + Redux Thunk + Sass.

## Tested on
This app has been tested on Chrome, Firefox and Safari.

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


## App Functionality

### Dashboard

On the main page you will see the listing of the recipes, in case there are. If there's no recipe you will get a message indicating so. If there are recipes, you will be able to search a particular recipe, edit  one or create new recipes.

### Add a recipe

From the dashboard you will be able to add a new recipe. To do it, click on the plus sign that you'll see at the bottom of your screen. You will be redirected to a new page. Add the title and the content, and hit the add button. After that you will be able to see the added recipe in your main view.

### Edit a recipe

If you want to edit a recipe, click on the particular recipe, that will redirect you to a new page where you'll be able to see the recipe in detail. From this page, you will be able to click on the "Edit" button at the bottom of the recipe. This will open a form where you'll be able to change any information. Hit on the submit button.

### Delete a recipe.

From detail recipe view, you will be able to delete a recipe. Hit on the trash button located on the top right corner. You will get a confirmation dialog, please hit the ok button, and your recipe will be deleted.


### Search a recipes

From the dashboard you will be able to search a particular recipe. Click on the magnifying  icon. Enter you search text and hit the enter key on your keyboard.
By default the search will be made by recipe id, if you want to search by a regex, please select the corresponding option.
