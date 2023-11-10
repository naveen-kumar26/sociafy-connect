
import './App.css';
import Login from './Components/Login/login';
import Username from './Components/Login/userpage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Username2 from './Components/Login/userpage2';

function App() {
 
  return(
    <>
        <Router>
            <Routes>
                <Route
                        exact
                        path="/"
                        element={<Login/>}
                    />
                <Route
                exact
                        path="/userpage"
                        element={<Username />}
                />
                <Route
                exact
                        path="/userpage2"
                        element={<Username2 />}
                />
                <Route
                        path="*"
                        element={<Navigate to="/" />}
                />
            </Routes>
        </Router>

    </>
  )
}

export default App;
