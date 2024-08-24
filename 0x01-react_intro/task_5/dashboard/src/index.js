console.log('Hello, Webpack!');

const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

button.addEventListener('click', () => {
  alert('Button clicked!');
});
