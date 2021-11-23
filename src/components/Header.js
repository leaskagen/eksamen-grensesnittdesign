export default function Header(props) {

    return (
        <div className="cart-item-count">
            {' '}
            {props.countCartItems ? (
                <button className="badge">{props.countCartItems}</button>
            ) : (
                ''
            )}
            {''}
        </div>
    );
}