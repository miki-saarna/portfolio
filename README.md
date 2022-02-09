# Personal Portfolio Website

> Note: This project is still at an early stage of production. Adjustments will continue to be made in the near-future to polish the website.

### Table of Contents

- [Live Application](#live-application)
- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [API Paths](#api-paths)
- [Version 2.0 (future upgrade)](#version-20)
- [License](#license)
- [Author Info](#author-info)

## Live Application

This application can be viewed here: [mikisaarna.com](http://mikisaarna.com)

The backend API is currently running here: [https://portfolio-server-three.vercel.app](https://portfolio-server-three.vercel.app)

Both the client and server are hosted on [Vercel](https://vercel.com/) with the databases hosted by [MongoDB](https://www.mongodb.com).

## Description

This is a portfolio meant to display my ability to create a full-stack website incorporating a beautiful and meticulously designed user experience with an API call that displays some of my other projects.

Current features include:

- Advanced mathematical operations to incorporate parallax effect on certain elements
- API call to back-end to display notable projects
- Contact form that incorporates an API call and the Nodemailer package to send an email
- Mobile-friendly navigation bar with smooth scrolling

Current sections include:

- Banner that displays a beautiful design with multiple moving elements as the page is vertically scrolled
- About/bio
- Portfolio that displays notable projects
- Contact form

## Technologies

This project's front-end is built on React, TypeScript and Vanilla CSS. An API handles all promises necessary to interact with the back-end API database. Complex mathematical equations were incorporated on multiple elements in place of utilizing a package such as [react-parallax](https://www.npmjs.com/package/react-parallax) as this package came with limitations from what I was trying to accomplish.

> I am considering creating my own NPM package(s) from a couple of the features such as the Linear Parallax effect (saturn) and/or Ellipse Parallax Effect (satellite)

The project's back-end is built on Express.js and MongoDB servers utilizing RESTful APIs. Implementation of the Nodemailer package allows easy and efficient capability for a form submission to send an email message to a given email address.

The Express CORS package is implemented for specified domains to access the back-end API. The CORS package is commented out for installation simplicity, but is ready to be used by uncommenting a few lines of code (Detailed instructions within [Installation](#installation) section below)

- Backend API setup
- Creating RESTful APIs
- Using Express for middleware request and response handling
- Implementing MongoDB servers
- Frontend built on React with React router and hooks
- TypeScript implemented on the frontend
- Express CORS package implemented
- Project deployed on Vercel
- Nodemailer package 

## How To Use

### Installation:

1. Fork and clone this repository
2. `cd` into the newly created directory
3. Run `cp ./server/.env.sample ./server/.env`
4. Update the newly created `.env` file in the `./server` directory
    - Alter the value of `DATABASE_URL` with the connection URL to your MongoDB database cluster unless you wish to use a local database connection
    - Input a valid email address. Nodemailer will use this email address to send an email
    - Input the password for this email address. Nodemailer cannot have access to send an email without the password
5. Run `cp ./client/.env.sample ./client/.env`
6. The newly created `.env` file in the `./client` directory does not need to be editted, unless you wish to connect to the server at a location other than `http://localhost:5000`
8. Run `npm install` to install project dependencies
9. Run `npm start` to start your client and server concurrently

Other:

- If a Gmail account is inputted in step 4 above, visit [https://myaccount.google.com/u/3/lesssecureapps](https://myaccount.google.com/u/3/lesssecureapps) and enable "Allow less secure apps". This gives Nodemailer access to use this email address
- Reconfigure lines 12 - 20 of the `./server/src/app.js` file to use the CORS package. Alter the value(s) of the `allowedDomains` array to include the location(s) where you plan to run the client of the project

Please reach out for assitance if you are having trouble getting the server to properly run.

## API Paths

| API Path | Function |
| -------- | -------- |
| `/projects` | GET: retrieve a list of all projects from the specific MongoDB database |
| `/form` | POST: creates and sends email from the received form data |

## Version 2.0

In addition to optimizing the current code base and updating some of the TypeScript type annotations, there are a number of updates planned for the near future for this website. These updates include:

- Updating JavaScript files using parallax effect to more efficiently and smoothly adjust to screen size changes
- Adding a rocket element within the parallax banner section
- Calculating mathematical isotopes into some of the complex functions, especially ones that implement changes to opacity based on vertical offset

Feel free to reach out to me if there are any other features not listed that you would like to request to be added.

## License

MIT License

Copyright (c) [2021] [Miki Saarna]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author Info

- GitHub: [miki-saarna](https://github.com/miki-saarna)
- LinkedIn: [Mikito Saarna](https://www.linkedin.com/in/mikito-saarna/)
- Website: [MikiSaarna.com](https://MikiSaarna.com)

[Back To The Top](#personal-portfolio-website)
