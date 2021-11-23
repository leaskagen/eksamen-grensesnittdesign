export default function Header(props) {
    return (
        <header className="block row center">
            <div>
                <a href="#/cart" onClick={() => alert('Til handlekurv')}>
                    Handlekurv{' '}
                    {props.countCartItems ? (
                        <button>{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' npmØ'}
            </div>
        </header>
    );
}