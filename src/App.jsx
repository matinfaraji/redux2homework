
import Card from "./components/List/buyList";
import './App.css'
import Background from "./components/navbar/background";
import PurchaseTable from "./components/Shopping_cart/Shopping_cart"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Background/>
<Routes>

{/* <Route path="/" element={<Background/>}></Route> */}
<Route path="/" element={<Card/>}></Route>
<Route path="/PurchaseTable" element={<PurchaseTable/>}></Route>


</Routes>

</BrowserRouter>
    </>
  );
}

export default App;
