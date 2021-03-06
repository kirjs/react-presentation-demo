var React = require('react');
window.React = React;
var Presentation = require('react-presentation');
var Slide = Presentation.Slide;

React.render(
  <Presentation>
    <Slide>
      <h1>React Presentation</h1>
      <p>This is a react presention</p>
    </Slide>
    <Slide>
      <h1>Unordered List</h1>
      <ul>
        <li>You </li>
        <li>Can</li>
        <li>Have</li>
        <li>A</li>
        <li>List</li>
        <li>Of</li>
        <li>Items</li>
      </ul>
    </Slide>
    <Slide>
      <h1>Ordered List</h1>
      <ul>
        <li>Odered</li>
        <li>List</li>
        <li>Example</li>
      </ul>
    </Slide>
    <Slide>
      <h1>Some Text</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque dolore ea est fugit, itaque nemo recusandae! Aperiam beatae consequuntur corporis eum, incidunt iste laborum minima mollitia necessitatibus numquam omnis!</p>
    </Slide>
    <Slide>
      <h1>Videos</h1>
      <iframe
        width="1120"
        height="660"
        src="https://www.youtube.com/embed/7rDsRXj9-cU"
        frameborder="0" allowfullscreen
      ></iframe>

    </Slide>

  </Presentation>
  , document.body);