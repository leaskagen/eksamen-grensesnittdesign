export default function Header(props) {

    //Counting cartItems and listing out
    return (
            <div>
                    {' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}{' '}
            </div>
    );
}