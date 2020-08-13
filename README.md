# Test app

## This is a simple client-server app for displaying products.

### Description

Front-End:
-   Create-React-App used for bootstrapping the project
-   bootstrap is used for styling
-   App is bult using functional components, state and side-effects are managed with hooks
-   react-router is used for routing
-   axios is used for API calls

Back-End:
-   Express js app with 5 endpoints:
    -   root
    -   vendors
    -   products (along with search, search is made by query, if the query is empty, return all products)
    -   product by id
    -   promotion
-   Vendors and promotion are separated from products in order to have uniform interface for every entity
-   node-cache used for caching the search results

### Instructions

First, you need to run the backend.
Notice, that Node.js version >=10 is needed for this app to work correctly.

Back-End

rename the ```.env.sample``` file to ```.env``` , change the frontend url variable if you need

- ```cd server && npm install``` to setup  
- ```npm run start``` to run the app  

Also, you can run ```npm run test``` to run tests.  

Front-end

rename the ```.env.sample``` file to ```.env``` , change the backend url variable if you need

- ```cd client && npm install``` to setup
- ```npm run build``` to build production app
- ```npm install -g serve && serve -s build``` to start production server

You can run ```npm run test``` to run tests