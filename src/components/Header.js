export default function Header(props) {

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