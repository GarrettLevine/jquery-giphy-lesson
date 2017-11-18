const app = {};

// API setup
// NOTE: You need to go grab an API key for yourself and sign up with the giphy API.
// go to https://developers.giphy.com/docs/ to sign up!
app.apiKey = '';
app.apiSearchUrl = 'https://api.giphy.com/v1/gifs/search';

// Cached Selectors
app.giphContainer = $('#giphyContainer');
app.giphForm = $('#giphyForm');
app.giphInput = $('#giphyInput');

app.getGiphs = (searchValue) => {
    console.log(searchValue);
    $.ajax({
        url: app.apiSearchUrl,
        method: 'GET',
        data: {
            api_key: app.apiKey,
            q: searchValue,
        },
    })
        .then((data) => {
            app.renderGiphs(data.data)
        });
}

app.renderGiphs = (giphs) => {
    app.giphContainer.html('');

    giphs.forEach((giph) => {
        const img = $('<img>')
            .attr('src', giph.images.original.url)

        const giphElement = $('<figure>')
            .addClass('image column 1-by-1 is-one-fifth')
            .html(img);

        app.giphContainer.append(giphElement);
    })
}

app.searchGiphs = () => {
    app.giphForm.on('submit', function (event) {
        event.preventDefault();
        const searchValue = app.giphInput.val();

        app.getGiphs(searchValue);
    })
}

app.init = () => {
    app.searchGiphs();
    app.getGiphs('cheeseburgers');
};

$(() => {
    app.init();
});
