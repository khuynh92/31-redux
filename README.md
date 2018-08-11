[![Build Status](https://travis-ci.com/khuynh92/31-redux.svg?branch=master)](https://travis-ci.com/khuynh92/31-redux)


heroku: http://khoa-31-redux.herokuapp.com  
PR: https://github.com/khuynh92/31-redux/pull/1  
Travis: https://travis-ci.com/khuynh92/31-redux  

# LAB 31-redux

This project is a basic react redux app that keeps track of categories and budgets. The data will persist on refresh. All application state is stored in a redux store

## To install
Download this repo and in the root directory, type in to the CLI `npm i` to install all dependencies 

## To Run
Type into the cli of the root directory `npm run watch` to start the react app. A new window will open in your default browser

## How To Use the App
To use the app, Click on Dashboard. Fill in the form with a Category, and Budget(numbers only). Upon submit, you will be displayed a list of created categories. To remove categories, simply click on the red x next to the title.

To Enter Category edit mode, `double click` a category. A new form will appear where you can change the contents of the category. Hit `update` to change the contents, or revert back to the old content with `cancel`
