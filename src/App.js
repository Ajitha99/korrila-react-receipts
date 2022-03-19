import { useState } from "react";
import './App.css';
import './styles/style.css'
// import receipt1 from './Data'
// import {receipt1,receipt2,receipt3} from './Data';
import receipts from './Data'
import Receipt from "./components/Receipt";


function App() {
  // const [receipt, setReceipt] = useState(receipt1);
  // const [receipt, setReceipt] = useState({receipt1,receipt2,receipt3});
  const [allReceipts, setReceipts] = useState(receipts);


  return (
    <div className="App">
      {
        allReceipts.map((receipt, index) =>{
        return <div>
                  <Receipt 
                      receipt = { receipt}
                      key={ index} 
                  />
              </div> 
  })}
      

      {/* <Receipt receipt = {receipt.receipt1} />
      <Receipt receipt = {receipt.receipt2} />
      <Receipt receipt = {receipt.receipt3} /> */}
    
        {/* <Receipt receipt = {receipt} /> */}
    </div>
  )
}

export default App;
