import React from "react";

export default function Basket(props) {
    const { cartItems, addItem, removeItem } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
        <div>
            <h2>Handlekurven</h2>
            <div>
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
                            <div>
                                <strong>TOTALPRIS</strong>
                            </div>
                            <div>
                                <strong>{itemsPrice},-</strong>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <button onClick={() => alert('HER MÅ VI IMPLEMENTERE CHECKOUT')}>
                                Til Betaling
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}