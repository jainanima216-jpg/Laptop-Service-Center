import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">

            <Link to="/">Dashboard</Link>

            <Link to="/customers">Customers</Link>

            <Link to="/laptops">Laptops</Link>

            <Link to="/job-cards">Job Cards</Link>

            <Link to="/services">Services</Link>

            <Link to="/employees">Employees</Link>

            <Link to="/billing">Billing</Link>

        </div>
    );
}

export default Sidebar;