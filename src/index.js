import React from "react";
import ReactDOM from "react-dom/client"
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function Header() {
    // note that it is an object of styles all values are string
    // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"};
    const style = {};
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const numPizzas = pizzaData.length;
    // const numPizzas = 0;
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {
                numPizzas > 0 ?
                    // more than one element inside a piece of jsx
                    <React.Fragment>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from
                            our stone oven, all organic, all delicious.
                        </p>
                        <ul className="pizzas">{
                            // each time we render a list using map we need to supply a unique key
                            pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)
                        }</ul>
                    </React.Fragment>
                    : <p>We're still working on our menu, please come visit us later :)</p>
            }
        </main>
    );
}

function Pizza({pizzaObj}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // useful when we want to render an entire component as a whole but not a piece of it
    /*if(!isOpen){
        return <p>Closed</p>
    }*/

    return (
        <footer className="footer">
            {isOpen ? <Order closeHour={closeHour} openHour={openHour}/>
                : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
            }
        </footer>
    );
    // return React.createElement("footer",null,"We're currently open!")
}

function Order({closeHour, openHour}) {
    return (
        <div className="order">
            <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // strict mode will render the component twice to find bugs
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

/*
// React before v18
// and we will import ReactDOM from "react-dom" not "react-dom/client"
ReactDOM.render(<App/>,document.getElementById("root"));
*/

