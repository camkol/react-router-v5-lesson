# React Router Lesson v5

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Navigate through various pages and links within the application.
- Utilize the search functionality to find relevant articles.
- Set up a new user profile with personalized details.
- Update or modify the display name of your profile.

### Screenshot

![](./screen.jpg)

### Links

- Live Site URL: [View](https://jammming624.netlify.app/)

## My process

- Install `react-router-dom` to add it to your React applications
- Enable routing by wrapping your application’s contents in the `BrowserRouter` component
- Make your code more concise by aliasing `BrowserRouter` component to `Router`
- Use the `Route` component to add routes to your application
- Use the `Route` component’s path prop to specify static routes (those without URL parameters, eg. `/users`) and dynamic routes (those with URL parameters, eg `/users/:userId`)
- Access the values of URL parameters using React Router’s `useParams` hook
- Declaratively redirect users by rendering React Router’s `Redirect` component
- Imperatively redirect users by accessing the `history` object via the `useHistory` hook and calling its `goForward`, `goBack`, and `push` methods.
- Access the value of query parameters using React Router’s `useLocation` hook

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Mobile-Responsive Design
- JavaScript - Scripting language
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

This was part of the lesson learning of react rounter.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)
