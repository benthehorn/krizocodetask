# krizocodetask
A code task for Krizo.dk

To run the code, first clone the repository, then run npm install.

Next, go to the config.js file in the root of the project, and insert your mongodb URL.

Next from the terminal in the project directory, run npm link. This will create the command line routes.

Finally, run npm start to start the express server that contains the api routes.

The routes are as follows:

POST : [http://localhost:3000/api/user/](http://localhost:3000/api/user/)

{

"username": "anewuser",

"password": "anewpassword"

}


POST : [http://localhost:3000/api/user/login](http://localhost:3000/api/user/login)

{

"username": "anewuser",

"password": "anewpassword"

}

Once logged in you need to copy the json web token into the headers as an x-access-token.

I have been using Postman for testing the routes as it is very easy to use. Once the token is copied, you should have 

access to the protected routes, ie the customer routes. All data in the body MUST be sent as json.

POST : [http://localhost:3000/api/customer](http://localhost:3000/api/customer)

{

"name": "god",

"email": "god@god",

"phone": "heaven"

}


GET : [http://localhost:3000/api/customer](http://localhost:3000/api/customer)

Empty body, this call will return a list of all customers.

GET : [http://localhost:3000/api/customer/search/${string}](http://localhost:3000/api/customer/${string})

This call will return a customer who's name matches the search parameter. 

http://localhost:3000/api/customer/search/ben  for example.
