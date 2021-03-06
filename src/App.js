import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
// import SignUp from "./components/pages/SignUp";
import Sign from "./components/pages/Sign";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          {<Route path="/sign-up" component={Sign} />}
        </Switch>
      </Router>
    </>
  );
}

export default App;
