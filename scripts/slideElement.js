import {toggle} from "https://cdn.skypack.dev/slide-element@2.1.0";

// toggle() example
document.getElementById('toggleButton').addEventListener('click', (e) => {
  toggle(document.getElementById('toggleExample')).then(isOpen => {
    e.target.innerText = `It's ${isOpen ? 'open' : 'closed'}!`;
  });
});