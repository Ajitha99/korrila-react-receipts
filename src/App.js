import { useState } from "react";
import './App.css';
import './styles/style.css'
// import {receipt1,receipt2,receipt3} from './Data';
import receipts from './Data'
import Receipt from "./components/Receipt";

function App() {
  
  // const [allReceipts, setReceipts] = useState({receipt1,receipt2,receipt3});
  const [allReceipts, setReceipts] = useState(receipts);

  const[paidStatus, setPaidStatus] = useState(false);

  // const changePaidStatus = (event) =>{
  //   const isPaid = event.target.value;
  //     setPaidStatus(isPaid);
  // };
  const changePaidStatus = () =>{
    // setPaidStatus(!paidStatus);
      setPaidStatus(true);
  }


  
  
  
  return (
    <div className="App">
     
       {
       allReceipts.map((receipt, index) =>{
          
           return <Receipt 
           receipt = { receipt}
           paidStatus ={paidStatus}
           changePaidStatus = {changePaidStatus}
           key={ index} />
           
         })
      }
         
         {/* const receip = receipts.receipt1; */}
      {/* <div><Receipt 
        receipt = {allReceipts.receipt1}
        /></div>
      <div><Receipt receipt = {allReceipts.receipt2}
        /></div>
      <div> <Receipt 
       receipt = {allReceipts.receipt3}
      /></div> */}
      
          
    </div>

  )}

export default App;


 {/* allReceipts.map((receipt, index) =>{
           return <Receipt 
           receipt = { receipt}
           key={ index} />
         }) */}




{/* <h1>Receipt: {receipt1}</h1> */}



// const [editPaid, setEditPaid] = useState(false);
// const toggleEditPaidStatus = (event) => {
//   const receiptPaid = event.target.paid;
//   setEditPaid(receiptPaid);
// }

