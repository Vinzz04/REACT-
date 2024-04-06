import React from "react";
import ReactDOM  from "react-dom/client";

let parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {}, 'i am an h1 tag'),
        React.createElement('h2', {}, 'i am an 2 tag')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'i am an h1 tag'),
        React.createElement('h2', {}, 'i am an 2 tag'),
    ]),
]);

console.log(parent); //object

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);