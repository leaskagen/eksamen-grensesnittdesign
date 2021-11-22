export default function Header(props) {
    return (
        <header>
            <div>
                <a href="#/cart" onClick={() => alert('Til handlekurv')}>
                    Handlekurv{' '}
                    {props.countCartItems ? (
                        <button>{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
            </div>
        </header>
    );
}