import Cards from "./Cards";
import hpImage from "../assets/HP-Laptop.webp";
import dellImage from "../assets/Dell-Laptop.jpeg";
import lenovoImage from "../assets/Lenovo-Laptop.webp";

function Laptop() {
    const laptops = [
        {
            id: 1,
            image: hpImage,
            name: "HP Pavilion 15",
            price: "₹55,000",
            ram: "16GB RAM | 512GB SSD",
        },
        {
            id: 2,
            image: dellImage,
            name: "Dell Inspiron 14",
            price: "₹62,000",
            ram: "16GB RAM | 1TB SSD",
        },
        {
            id: 3,
            image: lenovoImage,
            name: "Lenovo ThinkPad",
            price: "₹70,000",
            ram: "8GB RAM | 512GB SSD",
        },
    ];

    return (
        <div className="laptop-page">
            <h1>Laptops</h1>
            <p className="laptop-subtitle">Browse our laptop collection</p>

            <div className="card-container">
                {laptops.map((laptop) => (
                    <Cards
                        key={laptop.id}
                        image={laptop.image}
                        name={laptop.name}
                        price={laptop.price}
                        ram={laptop.ram}
                    />
                ))}
            </div>
        </div>
    );
}

export default Laptop;