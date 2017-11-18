const app = {};

app.apiKey = 'MhyChAPB0JDGEU0Ph0cmikREziDQQp6e';
app.apiUrl = 'https://api.giphy.com/v1/gifs/search';

app.init = () => {
  console.log('it inits!');
};

$(() => {
  app.init();
});
