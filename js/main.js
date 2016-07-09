// The main JS for Portfolio Free Code Camp project

// Mobile menu collapse
$(document).on('click','.navbar-collapse a',function(e) {
    $('.navbar-collapse').collapse('hide');
});
// Portfolio image item clicked behavior
$( "#procreative" ).click(function() {
    window.location.href="https://procreative.eu/";
});
$( "#costa" ).click(function() {
    window.location.href="http://theonewhodo.es/costadelsol/";
});
$( "#thedoer" ).click(function() {
    window.location.href="http://theonewhodo.es/doerinmalaga/";
});
$( "#tribute" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/pybKVp";
});
$( "#portfolio-fcc" ).click(function() {
    window.location.href="#about";
});
$( "#quote-machine" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/rezOLx";
});
$( "#sheep-weather-app" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/vGeYZp";
});
$( "#wiki-viewer" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/EKbrpO";
});
$( "#game-watcher" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/GZxdQO";
});
$( "#js-calculator" ).click(function() {
    window.location.href="https://s.codepen.io/thedoer/debug/RaEOme";
});
$( "#tictactoe" ).click(function() {
    window.location.href="http://theonewhodo.es/tictactoe/";
});
