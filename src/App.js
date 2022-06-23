import { Route } from "react-router-dom";
import Product from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
    </div>
  );
}

export default App;
