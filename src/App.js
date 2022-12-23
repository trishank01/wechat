import { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }else {
      return children
    }
    
  };

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route  path="login" element={<Login />} />
          <Route   path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
