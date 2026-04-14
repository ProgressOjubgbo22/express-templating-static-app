# Express EJS CRUD & Static App

A full-stack Express.js project using EJS templating, static files, and in-memory data to build a simple blog system, product catalog, and user form handling system.

## Features

### Blog System
- Create, read, update, and delete posts
- View all posts
- View single post
- Edit posts dynamically

### Product System
- Add products
- View all products
- View single product
- Delete products

### User System
- User signup (in-memory storage)
- User login (basic authentication check)
- Contact form handling

### Frontend
- EJS templating engine
- Static HTML pages
- CSS styling
- Vanilla JavaScript (for mini e-commerce frontend)

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML/CSS/JavaScript
- bcrypt (installed but not fully implemented)

## Project Structure

routes/
blog.js
ecommerce.js
form.js

views/
index.ejs
post.ejs
create.ejs
edit.ejs
products.ejs
product.ejs
add-product.ejs

public/
css/
js/

server.js
package.json

Available Routes
Blog
/view/all
/view/post/:id
/view/create
/view/edit/:id
/view/delete/:id

Products
/products
/products/new
/products/:id
/products/:id/delete

User
/sign
/signup
/login
/contact
