import reactLogo from '../assets/react.svg'; 

function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="react logo" />
            <h1>ReactFacts</h1>
            </nav>
        </header>
    )
}

export default Navbar