# Dev Stack

Dev Stack is a React-based web application that helps developers explore modern web technologies and build their own technology stack.

## Features

- Responsive navigation bar
- Hero section
- Explore technology cards
- Add technologies to My Stack
- Remove individual technologies from My Stack
- Clear all technologies from My Stack
- Prevent duplicate technologies
- Toast notifications for user actions
- Responsive layout for desktop, tablet, and mobile
- Footer with navigation links

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- React Toastify

## Installation and Setup

1. Clone the repository.
2. Navigate to the project folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It lets us write HTML-like code inside JavaScript. It makes React components easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a component store and update data. In Dev Stack, I used it to manage the technologies added to My Stack, the mobile menu, and the loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side-effect code after a component renders. In this project, I used it to update the loading state after the component mounted. The technology data comes from an imported JSON file, so `useEffect` was not needed to fetch that file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update the correct items efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In Dev Stack, I show an empty-stack message when `myStack.length === 0`. Otherwise, I show the technologies in the stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can communicate back by calling a callback function passed to it through props. For example, the parent can pass a function that lets the child request an action.

