# JS Code Test

For the code test, you'll build a simple restaurant-esque product ordering application using React and React hooks. Provided is a UI skeleton of the application that you need to add all of the functionality to. These are the specs for the final product:

* When a user clicks on one of the products, it should add that product to the Buy List box
* The Buy List product display should show the following information (theres a template for this in BuyList.jsx):
    * Product Image
    * Product Name
    * Product Description
    * Product Price
    * Quantity input
    * Total cost of (item price x amount)
    * Delete button
* When changing the quantity of a buy list item, it should update the total price
* When clicking the delete button in a buy list item, it should remove the item
* When adding, removing, and updating quantities for items, the total at the bottom should update with the correct total

## Things to note

The goal of this is to see how you handle react functionality and state management. Don't get caught up in styling, we're more interested in correct functionality and quality of code.

While writing tests is not a requirement of this code test, we do test our code. If you would like, feel free to write some tests to give us an idea of your thought process. We use a mix of Jest and React Testing Library. Here's a link for getting that setup [here](https://create-react-app.dev/docs/running-tests/).

## Getting set up

Follow these steps for setting up this code test locally:
* Create a new repo in your github account called "web-code-test"
* Clone this repo locally
* Install dependencies with yarn
* Run `git remote rm origin` in the repo to remove this origin from your local repo
* Add your origin for your repo
* Make an initial commit and you're good to go

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
