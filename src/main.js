import App from './App.js';
const app = new App(document.querySelector('#app'));
app.child.forEach(child => {
  child.render();
})