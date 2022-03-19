import { useState } from "react";


function ReceiptStatus (data) {
   let [payStatus, setPayStatus] =  useState(data.data.receipt.paid)
   let [showResults, setShowResults] = useState(false)
    const onClick = (e) =>{
        e.preventDefault();
        setShowResults(true);
        setPayStatus(!payStatus);
    }
    return(
    <div>

        { !data.data.receipt.paid ? 
          <div className="divClass">
            {console.log(data)}
            <h1>{data.data.receipt.person}</h1>
            <h4><span>Order: </span>{data.data.receipt.order.main}</h4>
            <h4><span>Protein: </span>{data.data.receipt.order.protein}</h4>
            <h4><span>Rice: </span>{data.data.receipt.order.rice}</h4>
            <h4><span>Sauce: </span>{data.data.receipt.order.sauce}</h4>
            <h4><span>Drink: </span>{data.data.receipt.order.drink}</h4>
            <h4><span>Cost: </span>{data.data.receipt.order.cost}</h4>
            {/* <h4><span>Paid: </span>{(data.data.receipt.paid).toString()}</h4> */}
            <div><button onClick={onClick}>PAY</button> 
                {showResults ? data.data.receipt.paid = payStatus : null}
            </div> 
          </div>: null}

    </div>
    )
}
export default ReceiptStatus;
