.
├── .dockerignore
├── .env
├── .git/
├── .gitignore
│
├── client/
│   ├── .dockerignore
│   ├── .gitignore
│   ├── dockerfile
│   ├── eslint.config.js
│   ├── FOLDER.MD
│   ├── index.html
│   ├── jsconfig.json
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
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
│   ├── README.MD
│   ├── requirements.txt
│   ├── show-structure.sh
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── AddToCartModal.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   ├── CheckoutButton.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProfileModal.jsx
│   │   │   ├── TeamCard.jsx
│   │   │   ├── Toast.jsx
│   │   │   ├── login/
│   │   │   │   └── AuthForm.jsx
│   │   │   └── orders/
│   │   │       └── OrderSectionCard.jsx
│   │   ├── context/
│   │   │   ├── CartContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── controls/
│   │   │   ├── Navbar.jsx
│   │   │   └── OrderSideBar.jsx
│   │   ├── css/
│   │   │   ├── components/
│   │   │   │   ├── AddToCartModal.css
│   │   │   │   ├── AuthForm.css
│   │   │   │   ├── Button.css
│   │   │   │   ├── CartItem.css
│   │   │   │   ├── CartSummary.css
│   │   │   │   ├── OrderSectionCard.css
│   │   │   │   ├── ProductCard.css
│   │   │   │   ├── ProfileModal.css
│   │   │   │   ├── TeamCard.css
│   │   │   │   └── Toast.css
│   │   │   ├── controls/
│   │   │   │   ├── Navbar.css
│   │   │   │   └── OrderSideBar.css
│   │   │   ├── helpers/
│   │   │   │   └── Font.css
│   │   │   └── pages/
│   │   │       ├── About.css
│   │   │       ├── App.css
│   │   │       ├── Cart.css
│   │   │       ├── Home.css
│   │   │       ├── Login.css
│   │   │       ├── Order.css
│   │   │       ├── Product.css
│   │   │       └── Profile.css
│   │   ├── layouts/
│   │   │   ├── PageLayout.jsx
│   │   │   └── PlainLayout.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Order.jsx
│   │   │   ├── Product.jsx
│   │   │   └── Profile.jsx
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── tailwind.css
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── database/
│   ├── config/
│   │   └── db.js
│   ├── init.js
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
│   ├── README.MD
│   ├── seed/
│   │   ├── auth.js
│   │   ├── gown_item.js
│   │   └── user.js
│   └── show-structure.sh
│
├── DATABASE.MD
├── docker-compose.yml
├── FOLDER.MD
├── node_modules/
├── package-lock.json
├── package.json
├── README.MD
│
├── server/
│   ├── .dockerignore
│   ├── dockerfile
│   ├── README.MD
│   ├── requirements.txt
│   ├── show-structure.sh
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── cart.controller.js
│       │   ├── checkout.controller.js
│       │   ├── gown.controller.js
│       │   └── user.controller.js
│       ├── middleware/
│       │   ├── auth.js
│       │   └── errorHandler.js
│       ├── models/
│       │   ├── cart.model.js
│       │   ├── checkout.model.js
│       │   ├── gown.model.js
│       │   └── user.model.js
│       ├── routes/
│       │   ├── cart.routes.js
│       │   ├── checkout.routes.js
│       │   ├── gown.routes.js
│       │   └── user.routes.js
│       ├── server.js        # 🚀 Entry point for backend (run from root with: node server/src/server.js)
│       ├── services/
│       │   ├── checkout.service.js
│       │   ├── gown.service.js
│       │   └── user.service.js
│       └── utils/
│
├── show-structure.sh
└── tsconfig.backup.json


[Existing Dockerfile!]

CLIENT --> Dockerfile
# Build stage for Vite (React)
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the built app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


SERVER --> Dockerfile
# Use Node.js LTS
FROM node:18-alpine

# Working directory inside container
WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend source
COPY . .

# Expose API port
EXPOSE 5000

# Run your backend server
CMD ["node", "src/server.js"]

Root --> docker-compose.yml

version: "3.8"

services:
  database:
    image: mysql:8.0
    container_name: gown-database
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: gown_db
      MYSQL_USER: gown_user
      MYSQL_PASSWORD: gown_pass
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  server:
    build: ./server
    container_name: gown-server
    ports:
      - "5000:5000"
    volumes:
      - ./server:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - DB_HOST=database
      - DB_USER=gown_user
      - DB_PASSWORD=gown_pass
      - DB_NAME=gown_db
    depends_on:
      - database

  client:
    build: ./client
    container_name: gown-client
    ports:
      - "3000:80"
    depends_on:
      - server

volumes:
  mysql_data:


< ---------------- DOCKER IGNORES ------------------------ >

ROOT FOlDER - GOWN/.dockerignore
# Node stuff
node_modules
npm-debug.log

# Git
.git
.gitignore

# Logs
*.log

# OS junk
.DS_Store

# Environment files
.env
.env.*

# Project-specific artifacts
database/
show-structure.sh
FOLDER.MD
DATABASE.MD
README.MD
tsconfig.backup.json

{SERVER}
gown/server/.dockerignore

node_modules
npm-debug.log
.git
.gitignore
.DS_Store
.env
.env.*
Dockerfile
Dockerfile.dev
README.MD
show-structure.sh
requirements.txt


gown/client/.dockerignore

node_modules
dist
npm-debug.log
.git
.gitignore
.DS_Store
Dockerfile
Dockerfile.dev
README.MD
requirements.txt
show-structure.sh


[WORKING]
gown-server    | [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  enable debug logging with { debug: true }                                               
gown-server    | ✅ MySQL connected → database/gown_shop
gown-server    | Server running on port 5000
gown-initdb    | [dotenv@17.2.3] injecting env (0) from .env -- tip: 🛠️  run anywhere with `dotenvx run -- yourcommand`
gown-initdb    | 🧱 Creating tables...
gown-initdb    | ✅ users table created
gown-initdb    | ✅ contacts table created
gown-initdb    | ✅ auth table created
gown-initdb    | ✅ countries table created
gown-initdb    | ✅ provinces table created
gown-initdb    | ✅ cities table created
gown-initdb    | ✅ users table created
gown-initdb    | ✅ contacts table created
gown-initdb    | ✅ auth table created
gown-initdb    | ✅ countries table created
gown-initdb    | ✅ provinces table created
gown-initdb    | ✅ cities table created
gown-initdb    | ✅ addresses table created
gown-initdb    | ✅ gown_items table created
gown-initdb    | ✅ contacts table created
gown-initdb    | ✅ auth table created
gown-initdb    | ✅ countries table created
gown-initdb    | ✅ provinces table created
gown-initdb    | ✅ cities table created
gown-initdb    | ✅ addresses table created
gown-initdb    | ✅ gown_items table created
gown-initdb    | ✅ addresses table created
gown-initdb    | ✅ gown_items table created
gown-initdb    | ✅ sizes table created
gown-initdb    | ✅ cart_items table created
gown-initdb    | ✅ sizes table created
gown-initdb    | ✅ cart_items table created
gown-initdb    | ✅ cart_items table created
gown-initdb    | ✅ orders table created
gown-initdb    | ✅ receipts table created
gown-initdb    | ✅ discounts table created
gown-initdb    | 🌱 Seeding initial data...
gown-initdb    | 👤 Users seeded!
gown-initdb    | 🌸 Gown items successfully seeded!
gown-initdb    | 🔑 Auth records seeded!
gown-initdb    | ✅ All tables created and seeded successfully!
gown-initdb exited with code 0