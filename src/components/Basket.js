//import '../App.css';
import { Container } from "@mui/material";
import {React} from "react";

export default function Basket(props) {
    const { cartItems, addItem, removeItem } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

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