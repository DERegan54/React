### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is an open-sourced front-end framework developed and sponsored by Facebook.  It is a tool that allows you to easily create a front-end for applications, and allows for the creation of modular applications.

- What is Babel?
    Babel is a JavaScript compiler that converts newer versions of JavaScript into code that works in older browsers.

- What is JSX?
    JSX is a special type of HTML that is adapted for JavaScript, howeverJSX cannot be interpreted by browsers and needs to be transformed into JavaScript using a compiler such as Babel. 

- How is a Component created in React?
    Since React has a hierarchical structure, to create a component you must start at the top level (usually called App.js).  This is where all other components are rendered.  Each component usually contains a JavaScript function that returns a JSX element to be rendered. Components can render other components as long as they are lower in the hierarchy.

- What are some difference between state and props?
    Props (or properties) are used to pass data from one component to another. Props are read-only and immutable.  State refers to the parts of the application that can change, however they can only be used within the component where the state was created.  So, props can pass data between components, whereas state only works within it's component.  Props are immutable, but state is mutable. 

- What does "downward data flow" refer to in React?
    Downward data flow refers to how data and functions are passed down from parent components to child components via props so that they can be rendered in the DOM.

- What is a controlled component?
    A controlled component is a component whose state is controlled by React. In controlled components (often used for forms) React controls the components value (what is shown), and what happpens when the user interacts with the component. In controlled components, all changes are associates with a handler function that modifies or validates the user's input.

- What is an uncontrolled component?
    An uncontrolled component is a component whose state is not controlled by React.   Some inputs and libraries require uncontrolled components, otherwise most everything is controlled by React. 


- What is the purpose of the `key` prop when rendering a list of components?
    A key prop is an attribute that serves as a unique identifier in an array of an elements.  It helps React identifiy which items have been changed, added or removed

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Since the items in an array can be moved around, using the index as a key is not wise, because the index might not always refer to the same item.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a built-in hook that controls the rendering of side-effects such as fetching data, starting a timer or changing DOM elements.  useEffect lets React know which effects to apply when.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is another built-in hook in React.  It returns a mutable object with a key of "current", which is equal to the initial value passed in.  This object persists across renders.  A change to a ref does NOT cause a rerender of the component.

- When would you use a ref? When wouldn't you use one?
    Refs are useful for when you need to access an element to make use of an external API or library, or when using timers.  You should NOT use refs to make changes to the DOM.

- What is a custom hook in React? When would you want to write one?
    Custom hooks are functions that contain business logic that is used over and over in an application.  Its name should start with "use" (like the names of built-in hooks).  When you see logic that is frequently repeated in an application, writing a custom hook for that functionality could be very useful.
