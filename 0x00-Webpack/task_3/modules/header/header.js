import { header } from "express/lib/request";
import $ from jQuery;

// Create and append the logo and title
$('body').prepend('<div id="logo"></div>');
$('body').prepend('<h1>Holberton Dashboard</h1>');

// Log initialization message
console.log('Init header');