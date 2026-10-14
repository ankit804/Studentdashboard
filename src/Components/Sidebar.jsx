import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Sidebar;