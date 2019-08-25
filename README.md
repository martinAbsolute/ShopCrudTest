# ShopCrudTest
Basic CRUD functions for a Shop-type application, Node w/ Express + MongoDB via Mongoose

To start:
> npm run watch

Server would be available on:
> http://localhost:3001

Get an array of all items
```
GET
  /api/product 
  /api/user 
  /api/category 
  /api/order
 ```
Create an instance in the database
```
POST	
  /api/product 
  /api/user 
  /api/category 
  /api/order
```
Get a specific instance in the database
```
GET 
  /api/product/:id 
  /api/user/:id 
  /api/category/:id 
  /api/order/:id
```
Update a specific instance in the database
```
PUT	
  /api/product/:id 
  /api/user/:id 
  /api/category/:id 
  /api/order/:id
```
Delete a specific instance in the database
```
DELETE	
  /api/product/:id 
  /api/user/:id 
  /api/category/:id 
  /api/order/:id
```
