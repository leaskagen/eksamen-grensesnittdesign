//Importing stuff
import { Container } from "@mui/material";
import {React} from "react";

//function for basket
export default function Basket(props) {
    //Declaring variables
    const { cartItems, addItem, removeItem } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    //Returning output based on items added.
    return (
        <Container>
            <h2>Handlekurv</h2>
            <div className="text-center">
                {cartItems.length === 0 && <div>Handlekurven er tom</div>}
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => removeItem(item)}>
                                <strong>-</strong>
                            </button>{' '}
                            <button onClick={() => addItem(item)}>
                                <strong>+</strong>
                            </button>
                        </div>
                        <div>
                            {item.qty} x {item.price},-
                        </div>
                        <hr/>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div>
                            <div className="text-center">
                                <strong>TOTALPRIS</strong>
                            </div>
                            <div className="text-center">
                                <strong>{itemsPrice},-</strong>
                            </div>
                        </div>
                        <hr />
                        
                    </>
                )}
            </div>
        </Container>
        
    );
}