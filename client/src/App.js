import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home></Home> : <Navigate to="/login"></Navigate>}
          ></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/"></Navigate> : <Login></Login>}
          ></Route>
          <Route
            path="/watch"
            element={user ? <Watch></Watch> : <Navigate to="/login"></Navigate>}
          ></Route>
          <Route
            path="/register"
            element={
              user ? <Navigate to="/"></Navigate> : <Register></Register>
            }
          ></Route>
          <Route
            path="/series"
            element={user ? <Home type="series"></Home> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/movies"
            element={user ? <Home type="movies"></Home> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
