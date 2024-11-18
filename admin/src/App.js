import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./page/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import Product from "./page/product/Product";
import NewProduct from "./page/newProduct/NewProduct";
import NewList from "./page/newList/NewList";
import Login from "./page/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./page/listList/ListList";
import List from "./page/list/List";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/users"
              element={user ? <UserList /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/user/:userId"
              element={user ? <User /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/newUser"
              element={user ? <NewUser /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/movies"
              element={user ? <ProductList /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/product/:productId"
              element={user ? <Product /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/newproduct"
              element={user ? <NewProduct /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/lists"
              element={user ? <ListList /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/list/:listId"
              element={user ? <List /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/newList"
              element={user ? <NewList /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login></Login>}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
