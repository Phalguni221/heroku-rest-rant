About: This project is a compiled demonstration of the lessons learned in Back-End Development unit of the Full Stack Development Bootcamp at NJIT.
The REST-Rant project involves making a website which allows a website user to access individual portfolios of different kinds of bread via created routes. The user's expreience and interaction with the webpage would be highly depenedent on the proper functioning of the client-server model. 

Part 1 Instructions:
1. Project setup
2. Stub three routes
3. Creating a README file

Part 2: 
1.Stub remaining GET and POST routes
2. Planning mock restaurant data
3. Drawing wireframes
4. Making your first view

Part 3: 
1. Making more views
2. Creating a layout page
3. Expanding your README

Part 4:
1. Adding some style with CSS

Part 5: 
1. Forms
2. Validation
3. Navigation

Part 6: 
1. Implementing delete functionality
2. Adding a DELETE route

Part 7: 
1. Implementing edit form and functionality 
2. Adding a PUT route

Part 8:
1. Implementing the Mongoose ODM

Part 9:
1. Seeding data
2. Validations
3. Helper methods

Part 10:
1. Adding commentary: rants and raves

Part 11:
1. Populating data for star ratings
    a. Calculate ratings for a place dynamically.
    b. Display stars instead of numbers for ratings.
    c. Implement the edit and delete routes for places with an appropriate Mongoose method.

Part 12:
1. Deploy your project

#Table of Routes for Rest-Rant Website

|Method|Path|Purpose
|-----|-----|-------|
|GET  | /   |Home Page |
|GET  | /places | Places index page|
|POST | /places | Create new place|
|GET  | /places/new| Form page for creating a new place|
|GET  | /places/:id| Details about a particular place| 
|PUT  | /places/:id| Update a particular place|
|GET  | /places/:id/edit| Form page for editing an exisiting place|
|DELETE| /places/:id| Delete a particular place|
|POST | /places/:id/rant| Create a rant(comment) about a particular place|
|DELETE| /places/:id/rant/:rantid | Delete a rant(comment) about a particular place|
|GET  | * | 404 page (matches any route not defined above)|



5 Names of Some of the Restaurants Reviewed:
- (H-Thai-M-L)-Chicago-IL-ThaiCuisine-![H-Thai-M-L Logo](https://github.com/Phalguni221/Thai-Restaurant-Menu/blob/main/logo.png?raw=true)
- BurgerKing-Mahwah-NJ-AmericanFastFood-![Burger King Logo](https://th.bing.com/th/id/R.180424d9891acbfe9e6446bfbd5d4368?rik=S%2bGdVKF0hj0o3Q&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f04%2fBurger_King_logo_emblem-2.png&ehk=j3T6tYeOtJNsvETcch%2fpSOBmsGu%2fkoYGPgbf6CgnpEY%3d&risl=&pid=ImgRaw&r=0)
- PandaExpress-NYC-NY-ChineseCuisine-![Panda Express Logo](https://th.bing.com/th/id/R.071a526af1d0c06352f33add065e9168?rik=HPu%2fihgHuVL6Tg&pid=ImgRaw&r=0)
