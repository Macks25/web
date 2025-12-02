import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/functional">Functional Component</Link>
        {" | "}
        <Link to="/class">Class Component</Link>
        {" | "}
        <Link to="/hooks">Hooks</Link>
        {" | "}
        <Link to="/theme">Theme</Link>
        </nav>
        
    );
}

export default Navbar;