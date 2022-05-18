import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ProductApp from './component/ProductApp';
import Search from './component/Search';

function App() {
  return (
    <div>
      <ProductApp/>
      <Search/>
    </div>
  );
}

export default App;
