var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('./scss/stylesheet.scss', 'css/stylesheet.css', './');
});
