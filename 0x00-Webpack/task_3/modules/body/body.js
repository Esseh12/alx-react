import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

// Create and append the button and counter
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));