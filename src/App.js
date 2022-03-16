import { useState } from "react";
import './App.css';
import './styles/style.css'
import {receipt1,receipt2,receipt3} from './Data';
import Receipt from "./components/Receipt";

function App() {
  const [receipts, setReceipts] = useState({receipt1,receipt2,receipt3});
  
  // const receip = receipts.receipt1;
  return (
    <div className="App">
      <div><Receipt 
       receipt = {receipts.receipt1}
      /></div>
      <div><Receipt 
       receipt = {receipts.receipt2}
      /></div>
      <div> <Receipt 
       receipt = {receipts.receipt3}
      /></div>
      {/* <h1>Receipt: {receipt1}</h1> */}
      
    </div>
  );
}

export default App;





      // {  receipt1.map((receiptData , index) =>{
      //   return <Receipt receipt = { receiptData} key = { index} />
      //   })
      // }