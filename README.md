# Catagram
Instagram style app  _only_ for Cats. Uses [CatAPI](https://thecatapi.com) as the backend.

<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
<img src="https://img.shields.io/badge/npm-6.13.4-brightgreen">
<img src="https://img.shields.io/badge/react-v17-brightgreen">
<img src="https://img.shields.io/badge/webpack-v5-brightgreen">
<img src="https://img.shields.io/badge/babel-v7-brightgreen">
<img src="https://img.shields.io/badge/coverage-98%25-brightgreen">
<img src="https://img.shields.io/badge/node-v12.4.1-brightgreen">
## Setup
```bash
git clone https://github.com/gunn_x/Catagram
cd Catagram
npm install
```

## Development
To start the development server
```
npm start
```

## Tests
```
npm test
```

### Coverage
Run coverage report, report available under `coverage/lcov-report/index.html`
```
npm run coverage
```

## Production
To run a production build 
```
npm run build
```


## Features
Mock login to allow you to upload images per user and keep track of your favourite and voting choices.

You can upload images of cats, images must be JPG or PNG. All images uploaded, favourties and votes will be
attached to the account _you are logged_ in as.

You are able to favourite an image by clicking the Heart icon below each Cat.

You can vote a cat image up or down, please note you can only vote __once__ per Cat.
You can undo your vote as well.

Light / Dark mode toggle - preferences are saved in local storage.

Image screen has infinite scrolling feature

### User Accounts
You can add new accounts by simply adding to the `UserAccounts` array in `src/config.js`
All passwords are currently set to `password`

Existing accounts:
* __Tom__ - has many images so you can see the infinite loading function
* __Felix__ - no images so you can see empty state
* __Salem__ - one image with favourite and vote status already set

## Development notes
:rotating_light: Please note there has been a slight change from the given requirements.

__Scoring__: Due to the way the API works I have the app showing a score of 1 or -1 for your Cat images.

This is because the API will only return favourite and vote data with each image if the same `sub_id` used for voting/favourite actions is passed.

If you didn't use any `sub_id` then you would not be able to set the favourite or vote buttons to their correct state each time you fetch images.

So as only you can vote on your images it will only be -1 or 1, this is not idea but I've chosen this option to preserve state for that users choices.

Ideally the API should provide a way to get all votes for a given `image_id` this way we could have fetched all images for the account whiles
still allowing people to favourite and vote.

__Voting__: Related to above, the API will only allow one vote per `sub_id` if you try to vote again it deletes the existing and replaces it.
In the code there is logic to delete a vote in case you like to undo your vote choice.

__Image Layout__: I originally started by copying the Instagram style which keeps 3x3 grid from small to large screens but
the issue was fitting the favourite/vote/score UI into such a small space was not good UX. Options were to have a model click
to bring up a menu that allows you to use those actions but modal is not my preferred option over having the controls visible at 
all times.  So instead it's using a grid layout that will fit max 3 items per row but scale down to one when required.

__Folders__:
I put hooks in own folder but you could move some to beside where they are only used once by a component.

__Testing__:
Have aimed to test as much as possible, coverage is up at ~98%. You could potentially remove some of the hook tests and cover those directly 
via the component tests that use them.
