# React Intro

React is a popular JavaScript library used for building user interfaces, particularly single-page applications. It was developed by Facebook and is maintained by Facebook along with a community of individual developers and companies.

## Key Concepts:

- Component-Based Architecture: React is built around components, which are independent, reusable pieces of UI. Components can be thought of as JavaScript functions or classes that return React elements (usually, this means HTML structures) to be rendered on the page.

- Virtual DOM: React uses a virtual DOM, which is a lightweight copy of the actual DOM. When the state of a component changes, React updates the virtual DOM first, then it compares this updated virtual DOM with the previous version (a process called "reconciliation"). Only the parts of the DOM that have changed are updated in the real DOM, making React apps fast and efficient.

- JSX: JSX is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX makes it easy to write and understand components, as it allows mixing HTML with JavaScript logic.

- State: State is a built-in object that stores data that can change over the lifecycle of a component. State is managed within the component and can affect how that component renders and behaves.

- Props: props (short for "properties") are read-only inputs to a component. They allow data to be passed from one component to another, typically from a parent to a child component.

- Declarative: React allows you to describe what you want your UI to look like, and React will manage the rendering. Instead of directly manipulating the DOM, you define the desired state of the UI, and React ensures that the UI matches this state.

## Why use React?

- Efficiency: The use of the virtual DOM allows React to update and render efficiently.

- Component Reusability: React's component-based structure promotes code reuse, making development faster and easier to maintain.

- Ecosystem and Community: React has a large ecosystem of libraries, tools, and a strong developer community, which provides ample resources, support, and a wealth of third-party solutions.

- Flexibility: React can be used to build a wide range of applications, from small components to large, complex single-page applications.

```javascript
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

- In this example:

Welcome is a React component that takes props as input and returns a h1 element that says "Hello" followed by the name passed as a prop.
