## Introduction
This assignment built in using RESTful APIs in Node.js, will allow us to get, post, update & delete the Vehicle and Violation's Data. 

## Functionalities:
The assignment has two models Vehicle and Violation, I have defined two tables’s Vehicle and Violation respectively to create collections in database.
I have created ten APIs that can perform CRUD operations such as create, get, update, delete the Vehicle and Violation data.

## Tech-Stack: 
* Node.js
* Express.js	            
* Express-rate-limit                
* My-sql
* Nodemon
* MySQL 
* Tools:
* VSCode
* Postman
* mongoDB Compass

## Implementation:
The entire project was coded on VS Code. First open VS code and start a terminal of gitbash and run the command “npm init -y” to create a package.json file. Then using mkdir command to create an src folder and similarly, inside the src folder I created five more folders ( controller, DB, middleware, models, routes ) and one main file which is index.js, I have defined the project in separate folders to make code clean and readable, all routes in the route folder, all API functions in the controller folder, all Schemas defined in the model's folder,  database connection in DB folder, and rate limiting in the middleware folder.
I used Postman to make requests to test the project on different HTTP requests like (post, get, patch, and delete).


### How to run the application in your local system:
* Follow these steps :
* Make sure that you have installed the node in your local system.

1. Open VS code editor and open a folder
2. Open terminal
3. Clone my GitHub repository by using this command 
```node.js
- git clone https://github.com/sarhan44/CURD-using-MySQL.git
``` 
4. Install all dependencies or packages by using this command
```
- npm install 
```
5. Run the app by using this command
 ```
- npm start 
```
### MySQL Setup:
* Open MySQL Command Line Client.
* Enter Your Password
* Create new database.
```
create database [db_name];
```
* Switch database.
```
use [db_name];
```
* Create new Vehicle table
```
CREATE TABLE vehicle(
    id int NOT NULL AUTO_INCREMENT,
    licensePlateNumber varchar(255) NOT NULL,
    manufacturerName varchar(255) NOT NULL,
    model varchar(255) NOT NULL,
    fuelType varchar(255) NOT NULL,
    ownerName varchar(255) NOT NULL,
    rc_status varchar(255) NOT NULL,
    vehicleColor varchar(255) NOT NULL,
    registrationDate date DEFAULT NULL,
    insuranceUpto date NOT NULL,
    fitnessUpto date NOT NULL,
    roadTaxUpto date NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uq_lpNumber Unique (licensePlateNumber)
);

```
* Create another Violation table.
```
CREATE TABLE violation(
    id int NOT NULL AUTO_INCREMENT,
    licensePlateNumber varchar(255) NOT NULL,
    violationType varchar(255) NOT NULL,
    violationstatus varchar(255) NOT NULL,
    violationDate date DEFAULT NULL,
    violationTime time NOT NULL,
    violationLocation varchar(255) NOT NULL,
    videoUrl varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```



#### Postman Collection link [Download](https://drive.google.com/file/d/1FLEY9PkDHNYWQhazy5bAuhwjl71e8rgj/view?usp=sharing)

### Postman Setup:
* Download postman collection 
* Open postman 
* Select Import in the left navigation menu.
* Select your file or folder
* Start making requests.
