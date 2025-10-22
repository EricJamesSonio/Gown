Gown/
│
├── .git/
├── .gitignore
├── DATABASE.MD
├── package.json
├── package-lock.json
├── README.MD
│
├── client/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── FOLDER.MD
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.MD
│   ├── requirements.txt
│   ├── show-structure.sh
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── node_modules/
│   │
│   ├── public/
│   │   ├── gowns/
│   │   │   ├── blackgown.jpg
│   │   │   ├── bluegown.jpg
│   │   │   ├── pinkgown.jpg
│   │   │   ├── purplegown.jpg
│   │   │   ├── redgown.jpg
│   │   │   └── whitegown.jpg
│   │   ├── profile/
│   │   │   └── profile.jpg
│   │   └── vite.svg
│   │
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       │
│       ├── components/
│       │   ├── AddToCartModal.jsx
│       │   ├── Button.jsx
│       │   ├── CartItem.jsx
│       │   ├── CartSummary.jsx
│       │   ├── CheckoutButton.jsx
│       │   ├── ProductCard.jsx
│       │   ├── ProfileModal.jsx
│       │   ├── TeamCard.jsx
│       │   ├── Toast.jsx
│       │   │
│       │   ├── login/
│       │   │   └── AuthForm.jsx
│       │   └── orders/
│       │       └── OrderSectionCard.jsx
│       │
│       ├── context/
│       │   ├── CartContext.jsx
│       │   └── UserContext.jsx
│       │
│       ├── controls/
│       │   ├── Navbar.jsx
│       │   └── OrderSideBar.jsx
│       │
│       ├── css/
│       │   ├── tailwind.css
│       │   │
│       │   ├── components/
│       │   │   ├── AddToCartModal.css
│       │   │   ├── AuthForm.css
│       │   │   ├── Button.css
│       │   │   ├── CartItem.css
│       │   │   ├── CartSummary.css
│       │   │   ├── OrderSectionCard.css
│       │   │   ├── ProductCard.css
│       │   │   ├── ProfileModal.css
│       │   │   ├── TeamCard.css
│       │   │   └── Toast.css
│       │   │
│       │   ├── controls/
│       │   │   ├── Navbar.css
│       │   │   └── OrderSideBar.css
│       │   │
│       │   ├── helpers/
│       │   │   └── Font.css
│       │   │
│       │   └── pages/
│       │       ├── About.css
│       │       ├── App.css
│       │       ├── Cart.css
│       │       ├── Home.css
│       │       ├── Login.css
│       │       ├── Order.css
│       │       ├── Product.css
│       │       └── Profile.css
│       │
│       ├── layouts/
│       │   ├── PageLayout.jsx
│       │   └── PlainLayout.jsx
│       │
│       ├── pages/
│       │   ├── About.jsx
│       │   ├── Cart.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Order.jsx
│       │   ├── Product.jsx
│       │   └── Profile.jsx
│       │
│       ├── routes/
│       │   └── AppRoutes.jsx
│       │
│       └── services/
│           └── api.js
│
│
├── database/
│   ├── README.MD
│   ├── show-structure.sh
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── init.js
│   │
│   ├── model/
│   │   ├── address.js
│   │   ├── auth.js
│   │   ├── cart_item.js
│   │   ├── city.js
│   │   ├── contact.js
│   │   ├── country.js
│   │   ├── discount.js
│   │   ├── gown_item.js
│   │   ├── order.js
│   │   ├── order_item.js
│   │   ├── province.js
│   │   ├── receipt.js
│   │   ├── size.js
│   │   └── user.js
│   │
│   └── seed/
│       ├── auth.js
│       ├── gown_item.js
│       └── user.js
│
│
├── server/
│   ├── README.MD
│   ├── requirements.txt
│   ├── show-structure.sh
│   │
│   └── src/
│       ├── app.js
│       │
│       ├── config/
│       │   └── db.js
│       │
│       ├── controllers/
│       │   ├── cart.controller.js
│       │   ├── checkout.controller.js
│       │   ├── gown.controller.js
│       │   └── user.controller.js
│       │
│       ├── middleware/
│       │   ├── auth.js
│       │   └── errorHandler.js
│       │
│       ├── models/
│       │   ├── cart.model.js
│       │   ├── checkout.model.js
│       │   ├── gown.model.js
│       │   └── user.model.js
│       │
│       └── routes/
│           ├── cart.route.js
│           ├── checkout.route.js
│           ├── gown.route.js
│           └── user.route.js
│
└── node_modules/
