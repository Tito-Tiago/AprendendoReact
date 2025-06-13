import reactLogo from '../assets/react.svg'; 

function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="react logo" />
            </nav>
            <h1>ReactFacts</h1>
        </header>
    )
}

export default Navbar