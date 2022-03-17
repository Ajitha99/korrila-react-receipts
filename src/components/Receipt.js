
function Receipt (props){

    return(
        <div>
        { !props.receipt.paid ? 
            
            <div className="divClass" onClick={props.changePaidStatus} >
                <h1>{props.receipt.person}</h1>
                <h3><span>Main: </span>{props.receipt.order.main}</h3>
                <h3><span>Protein: </span>{props.receipt.order.protein}</h3>
                <h3><span>Rice: </span>{props.receipt.order.rice}</h3>
                <h3><span>Sauce: </span> {props.receipt.order.sauce}</h3>
                <h3><span>Drink: </span>{props.receipt.order.drink}</h3>
                <h3><span>Cost: </span>{props.receipt.order.cost}</h3>
                <h3><span>Paid: </span>{props.receipt.paid = props.paidStatus}</h3>
                {/* <h3>{!props.receipt.paid}? {props.paidStatus}: return</h3> */}  
                </div> 
                : null}
        </div>
        
    )
}
export default Receipt;

{/* <div>
        { !props.receipt.paid ? 
            
        <div className="divClass"> 
            <h1>{props.receipt.person}</h1>
            <h3><span>Main: </span>{props.receipt.order.main}</h3>
            <h3><span>Protein: </span>{props.receipt.order.protein}</h3>
            <h3><span>Rice: </span>{props.receipt.order.rice}</h3>
            <h3><span>Sauce: </span> {props.receipt.order.sauce}</h3>
            <h3><span>Drink: </span>{props.receipt.order.drink}</h3>
            <h3><span>Cost: </span>{props.receipt.order.cost}</h3>
            </div> 
            : null}
        </div> */}

