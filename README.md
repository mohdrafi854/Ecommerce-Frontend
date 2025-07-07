# Ecommerce App

A full-featured E-commerce web application built to enables users to browse products, manage their carts and wishlists user manage products, categories, orders, and users through a dedicated dashboard.

---

## Demo Link

[Live Demo](https://internetshopping.vercel.app)

---

## Quick Start
```
git clone https://github.com/mohdrafi854/Ecommerce-Frontend.git
cd <your-repo>
npm install
npm run dev  # or `npm run start` / `yarn dev`
```

## Technologies
- React JS
- React Router
- Node JS
- Express JS
- MongoDB
---

## Demo Video
Watch a walkthrough (5–7 minutes) of all major features of this app: [Loom Video Link]()

## Features
**Home**
- Display product categories

**Lisitng Page**
- Display all the Products
- Product search by name
- Filter by categories
- Filter product by rating
- Sort product by price 
- Click wishlist icon and add item
- Click on Add to cart cart to add item

**Detail Page**
- View full information

**Wishlist Page**
- Show all wishlist items

**AddToCart Page**
- Show all add to cart items

## API Refrence

### **GET /api/categories**<br>
Display all categories<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **GET /api/products**<br>
Display all List<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/products**<br>
View full details<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/wishlist**<br>
Display all wishlist items<br>
Sample Response:<br>
```
[{_id, Category, imageUrl, name, price, rating, size}, ....]
```

### **GET /api/cart**<br>
Display all cart items<br>
Sample Response:<br>
```
[{_id, items, totalPrice}, ....]
```

### **POST /api/products**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **PATCH /api/products/:id**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **POST /api/categories**<br>
Create new category<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **DELETE /api/categories/:id**<br>
Delete item by id<br>
Sample Response:<br>
```
[{_id}, ....]
```
