# Router

## 1-irst things first, we want to connect your app to the browser's URL:

import { BrowserRouter } from "react-router-dom"; ----> inside index.js

 inside index.js  ---->      <BrowserRouter>
                             <App />
                             </BrowserRouter>

                             
## 2- add some link                             

import { Link } from "react-router-dom"; ---> inside app.js


  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}   <------ add link
        <Link to="/expenses">Expenses</Link>          <------ add link
      </nav>
    </div>
  );
}
## 3- add component//Routes to each link :

component for invoices
component for expenses

## 4- Route Config" inside of index.js.

### Finally, let's teach React Router how to render our app at different URLs by creating our first "Route Config" inside of main.jsx or index.js.



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from './components/invoices';
import Expenses from './components/expenses';

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>  <--- we didnt close this to be always in page 
                                              and thats call # Nasted Routes
        <Route path='invoices' element={<Invoice />} />
        <Route path='expenses' element={<Expenses />} />
      </Route >
    </Routes>
  </BrowserRouter>
);


## 5- add  <Outlet /> on app.js to Nasted Routes and render the component in the same page
     
      import { Outlet } from 'react-router-dom';

     <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />    <-------- HERE