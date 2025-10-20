Just wanting to start a practice on NODE.JS!

let's have some fun! (i hope so)

added type script

< ------------------------------ Project Folder ---------------------------------->
[Client]    - Frontend (REACT.JS)        
[Server]    - Backend (EXPRESS.JS)
[Database]  - Database (MYSQL XAMPP)
< -------------------------------------------------------------------------------->

Start Date : October 14, 2025

< ---------------------------- What i've learned ------------------------------ >

React - Single html, uses components pages!

[Pages] - Base pages like Home, Cart, Profile etc.
- in building pages we can use components for building it such as buttons, modal,cards, sections etc.

[Components] - Reusable components!
- such as buttons, modal, cards etc.
- customizable using porps! (parameter injections) then addapt to it!
- can combine cards + buttons components!

[Context] - Acts as the Live holder of truth! (database is the truth)!
- when we did something that updated database, we need this contecxt to let our website keep updated!
- Useful for log ins, log out , recognizing a variable , orders, etc.
- basically we need this since react is single frame !

[Controls] - customizable components thta acts as a cotnroller!
- Navbars ! stays at the top view and controls which page to go
- Sidebars also ! etc.

[Layout] - Acts as the boss of the pages! 
- decides which extra components it will have.
example. plain layout vs. page layout,, page layout allows the page to have Navbars
and the plain layout doesn't so wrapps the pages that doesn't need navbars ! 
can be used also in security if we want some pages don't have something that others have!

[Routes] - Acts as the builder of the pages!
- in here we build the pages using also layouts! we can also do context here! 
- wrapping pages with layouts ! and injecting it to the App.jsx so it stays clean !

App.jsx - The Holder of all pages! the one that will deliver the pages to the Main.jsx!
Main.jsx - The one that connected to the index.html! the WORLD HTML of react!

index.html - This is the WORLD of react, all pages, components etc. happens inside this realm!  

(Wrote this October 20, 2025) < --------------------------------------------------->