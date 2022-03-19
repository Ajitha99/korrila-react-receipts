import ReceiptStatus from "./ReceiptStatus";
function Receipt(props){
return(
    <div>
        {console.log("I am in Receipt")}
        <ReceiptStatus data = {props}
        />
        
    </div>
    )
}
export default Receipt;


