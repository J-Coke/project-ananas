# Project Ananas

## Technologies

- Node.js
- Express
- SASS
- GOV.UK Frontend
- Testing:
  - Cypress
  - Jest
- CI pipeline: Circle CI
- Hosting: Heroku

## Prerequisites

- [Node](https://nodejs.org/en/)

- npm

`npm install npm@latest -g`

## Installation

1. Clone the repo
   `git clone https://github.com/J-Coke/project-ananas`

2. Install NPM packages

   `npm install`

## Run project locally

Use `npm run devstart` to run server locally. This is so you don't have to restart the server, when a change is made. It will also convert the SASS file into CSS and watch for any changes to styles.scss

## Run Cypress tests locally

Use `npm run e2e`. This will start the server, run the tests and close the server

Use `npm run cypress:run` to run the tests if you already have a server started

## To add a page

1. Use the page template in templates/default-page-template
2. Copy the file into the public folder
3. Rename the file
4. Add code/components to line 68
