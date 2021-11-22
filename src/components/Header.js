export default function Header(props) {
    return (
        <header>
            <div>
                <h1>KJØP TING</h1>
            </div>
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