
import { useState } from "react";

function Customer() {

    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: "Anima Jain",
            mobile: "9876543210",
            laptop: "HP Laptop",
            problem: "Screen Problem",
            status: "Pending"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            mobile: "9876543211",
            laptop: "Dell Laptop",
            problem: "Keyboard Problem",
            status: "Completed"
        },
        {
            id: 3,
            name: "Priya Singh",
            mobile: "9876543212",
            laptop: "Lenovo Laptop",
            problem: "Battery Problem",
            status: "In Progress"
        }
    ]);

    return (
        <div>

            <h1>Customer Page</h1>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Laptop</th>
                        <th>Problem</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {customers.map((customer) => (
                        <tr key={customer.id}>

                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.laptop}</td>
                            <td>{customer.problem}</td>
                            <td>{customer.status}</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Customer;
