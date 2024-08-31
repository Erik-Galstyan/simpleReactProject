import Form from "./Form";
import "./App.css";
import { Products } from "./products/Products";

const App = () => {
  return (
    <div className="App">
      <h2 className="app-header">Products</h2>
      <Products />
      <Form />
    </div>
  );
};

export default App;
