import { BrowserRouter as Router,Routes, useRoutes } from 'react-router-dom';
import Signup from './component/Pages/Signup';
import './App.css';
import Login from './component/Pages/Login';
import Goa from './component/Pages/goa';

import Home from './component/Pages/home';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/Signup", element: <Signup/> },
    { path: "/home", element: <Home/> },
    { path: "/goa", element: <Goa/> },

    // ...
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;