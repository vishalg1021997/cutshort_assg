# Cutshort.io Onboarding #Exploration Assigment

**Note: Comments are added for every component and function created for better understaing and flow of the code**

### Assgiment URL : https://dribbble.com/shots/15669113-Onboarding-Exploratio

## Assgiment is uploaded on Netlify

### Assgiment URL : https://eden-onboarding-cutshort.netlify.app/




**1. What is React?**
*React is a free and open-source front-end JavaScript library for building user interfaces based on UI components*

**2. Who made React?**
* React was originally created by Jordan Walke and It is maintained by Meta(Facebook)

**3. What is Babel?**
* Babel is a JavaScript transpiler, meaning it converts a newer version of ECMAScript, such as ES9, to a standard version (ES5).
* In React Babel helps to convert JSX code to browser compatiable code

**4. How does Babel convert html code in React into valid code?**
* Babel-transpiler converts the syntax of modern JavaScript into a form, which can be easily understood by older browsers. For example, arrow function, const, let classes will be converted to function, var, etc.

**5. What is ReactDOM used for? Write an example?**
* ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API * containing the following methods and a few more. 
* render()
* findDOMNode()
* unmountComponentAtNode()
* hydrate()
* createPortal()
 
* The react-dom package is the glue between React and the DOM

***Syntax ReactDOM.render(element, container, callback)***
***Syntax ReactDOM.render(h1, document.querySelector('#parent_container_div'), myfunc())***

**6 What are the packages that you need to import for react to work with?**
* import React from "react"; 

**7. How do you add react to a web application?**
* Open Folder In Visual code ---> Open Terminal in same directory ---> type npx create-react-app any_project_name

**8. What is React.createElement?**
* Create and return a new React element

**9. What are the three properties that createElement accept?**
* createElement() method takes the three arguments type , props ,children.
* Type - Type of the html element or component (example : h1,h2,p,button , etc)
* Props - The properties object (example: {style: { color: “red” }} or className or event handlers etc)
* children - Anything you need to pass between the dom elements
* Example - let welcome = React.createElement("h1",{ style: { color: "red" } },`Welcome to react world`); 
*                         ReactDOM.render(welcome, document.querySelector("#root"));

**10. What is the meaning of render and root?**
* React renders HTML to the web page by using a function called render().
* The purpose of the function is to display the specified HTML code inside the specified HTML element.

* The root node is the HTML element where you want to display the result. It is like a container for content managed by React.
