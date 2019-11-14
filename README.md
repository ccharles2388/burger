# YourWay Burger

## Overview:

Yourway-Burger is a node-based application -- basically a on demand burger restaurant
Server Node Express Handlebars Restaurant Application string Data In A MySQL Database
It Allows A Customer To Crate A Unique Burger To Be Ordered, It Shows Up Availiable And Then Sends It To A Devour Section, Ready For The Customer.

## Access Is Deployed On A Heroku Platform Linked By The URL Below
### https://yourway-burger.herokuapp.com/

## File Structure:

Yourway-Burger is a node-based application -- basically a on demand burger restaurant



### YourWay-Burger Application Features And Screen Shots

1. User goes to https://yourway-burger.herokuapp.com/ and is displayed a survey. The survey has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_1.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_1.png)
<br>
3. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_2.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_2.png)
<br>
4. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_3.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_3.png)
<br>
5. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_4.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_4.png)
<br>
6. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_5.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_5.png)
<br>
7. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_6.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_6.png)
<br>
8. User Is Displayed YourWay Burger Application 
![GitHub Logo](/public/assets/img/Screenshot_7.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/burger/blob/master/public/assets/img/Screenshot_7.png)
<br>

### Main File Structure Overview

1. The `server.js` file  requires the basic npm packages : `express`, `.config`,`body-parser` and `path`.

2. The `htmlRoutes.js` file includes two routes in the routing folder which resides under the app folder:

   * A GET Route to `/survey` displays the survey page.
   * A default, catch-all route that leads to `home.html` also displays on the home page.

3. The `apiRoutes.js` file also contain two routes in the routing folder which resides under the app folder:

   * A GET route with the url `/api/friends`displays on the main home page. This also displays a JSON of all possible friends.
   * A POST routes `/api/friends`, handles incoming survey results. This route is also  used to handle the compatibility logic.

4. Application data is saved inside  a MySQL Database. Each of these objects follows the format below:

## Technologies Used:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - High-level programming language
- [Node.js](https://nodejs.org/en/) - Open-source run-time environment that executes JS code outside of a browser
- [JSON](http://www.json.org) - Data format
- [MySQL](https://www.mysql.com) - Database
- [JQUERY](https://learn.jquery.com/using-jquery-core/) - Javascript Library
- [MAMP](https://www.mamp.info/en/) - Access to local PHP server and MYSQL server
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Styling Library

#### npm packages used:

- [express](https://www.npmjs.com/package/express) - A collection of common interactive command line user interfaces
- [mysql](https://www.npmjs.com/package/dotenv) - Node.js driver for MySQL ( For Future Expanded Database Usage)
- [path](https://www.npmjs.com/package/path) - Utilities for working with file and directory paths
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js ( For Future Time Tracing)
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware


#### API Information And Accessibility:

API Friends List In JSON Tree ( Accessed From Home Page)
![GitHub Logo](/img/ff_jsontree.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Yourway-Burger/blob/master/img/ff_jsontree.png)
<br>

-------------------------------------------------------------------------------------------------------------------------

### Author

* Curtis Charles

