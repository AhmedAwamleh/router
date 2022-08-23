
import './App.css';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>router app</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
