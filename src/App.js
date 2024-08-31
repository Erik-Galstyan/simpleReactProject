import { Products } from "./products/Products";
import Form from "./form/Form";
import "./App.css";

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
