const app = {};

// API setup
// NOTE: You need to go grab an API key for yourself and sign up with the giphy API.
// go to https://developers.giphy.com/docs/ to sign up!
app.apiKey = '';
app.apiUrl = 'https://api.giphy.com/v1/gifs/search';

app.init = () => {
  console.log('it inits!');
};

$(() => {
  app.init();
});
