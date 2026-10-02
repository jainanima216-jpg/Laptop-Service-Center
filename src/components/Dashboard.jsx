function Dashboard() {

    return (
        <div>

            <h1>Dashboard</h1>

            <div className="cards">

                <div className="card">
                    <h3>Total Customers</h3>
                    <p>120</p>
                </div>

                <div className="card">
                    <h3>Total Laptops</h3>
                    <p>85</p>
                </div>

                <div className="card">
                    <h3>Pending Jobs</h3>
                    <p>24</p>
                </div>

                <div className="card">
                    <h3>Completed Jobs</h3>
                    <p>61</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;