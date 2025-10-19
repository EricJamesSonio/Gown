client/
├── .gitignore
├── eslint.config.js
├── FOLDER.MD
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── requirements.txt
├── show-structure.sh
├── tailwind.config.js
├── vite.config.js
│
├── public/
│   ├── gowns/
│   │   ├── blackgown.jpg
│   │   ├── bluegown.jpg
│   │   ├── pinkgown.jpg
│   │   ├── purplegown.jpg
│   │   ├── redgown.jpg
│   │   └── whitegown.jpg
│   │
│   ├── profile/
│   │   └── profile.jpg
│   │
│   └── vite.svg
│
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── tailwind.css
    │
    ├── components/
    │   ├── AddToCartModal.jsx
    │   ├── Button.jsx
    │   ├── CartItem.jsx
    │   ├── CartSummary.jsx
    │   ├── ProductCard.jsx
    │   ├── ProfileModal.jsx
    │   ├── TeamCard.jsx
    │   │
    │   ├── login/
    │   │   └── AuthForm.jsx
    │   │
    │   └── orders/
    │       └── OrderSectionCard.jsx
    │
    ├── context/
    │   └── CartContext.jsx
    │
    ├── controls/
    │   ├── Navbar.jsx
    │   └── OrderSideBar.jsx
    │
    ├── css/
    │   ├── components/
    │   │   ├── AddToCartModal.css
    │   │   ├── AuthForm.css
    │   │   ├── Button.css
    │   │   ├── CartItem.css
    │   │   ├── CartSummary.css
    │   │   ├── OrderSectionCard.css
    │   │   ├── ProductCard.css
    │   │   ├── ProfileModal.css
    │   │   └── TeamCard.css
    │   │
    │   ├── controls/
    │   │   ├── Navbar.css
    │   │   └── OrderSideBar.css
    │   │
    │   ├── helpers/
    │   │   └── Font.css
    │   │
    │   └── pages/
    │       ├── About.css
    │       ├── App.css
    │       ├── Cart.css
    │       ├── Home.css
    │       ├── Login.css
    │       ├── Order.css
    │       ├── Product.css
    │       └── Profile.css
    │
    ├── layouts/
    │   ├── PageLayout.jsx
    │   └── PlainLayout.jsx
    │
    ├── pages/
    │   ├── About.jsx
    │   ├── Cart.jsx
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Order.jsx
    │   ├── Product.jsx
    │   └── Profile.jsx
    │
    ├── routes/
    │   └── AppRoutes.jsx
    │
    └── services/
        └── api.js
