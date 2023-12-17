import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Offer.css'
import axios from 'axios';
import { useUser } from '../contexts/UserContext';

function BotaoToggle(props) {
    const navigate = useNavigate();
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [check, setCheck] = useState(false);
    //const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const { user, login, logout, refresh } = useUser();
    const max = props.max; // Assuming max is a prop passed to the component

    useEffect(() => {
        // Set the initial selected quantity if the flight is in the user's cart
        if (user && props.type === "flight") {
            const flightInCart = user.cartFlights.find(([cartSlug]) => cartSlug === props.slug);
            setSelectedQuantity(flightInCart ? flightInCart[1] : 0);
            if(flightInCart && flightInCart[1] > 0) {
                setCheck(true);
            }
        }
        if (user && props.type === "stay") {
            const stayInCart = user.cartStays.find(([cartSlug]) => cartSlug === props.slug);
            setSelectedQuantity(stayInCart ? stayInCart[1] : 0);
            if(stayInCart && stayInCart[1] > 0) {
                setCheck(true);
            }
        }
    }, [user, props.slug, props.type]);

    const handleQuantityChange = (newQuantity) => {
        // Ensure the new quantity is within the allowed range (0 to max)
        const clampedQuantity = Math.min(Math.max(newQuantity, 0), max);
        console.log(max, newQuantity, clampedQuantity); // prints newQuantity ok
        setSelectedQuantity(clampedQuantity);
        setCheck(false);
    };

    const addToCart = async () => {
        try {
            // Check if the user is logged in
                if (!user) {
                    navigate('/login'); // Navigate to the login page if not logged in
                        return;
                }

            // Calculate the updated quantity based on the current selected quantity and quantity in the cart
            const currentQuantityInCart = (props.type === "flight" ? user.cartFlights : user.cartStays)
                .filter(([cartSlug]) => cartSlug === props.slug)
                .reduce((total, [, quantity]) => { console.log(":", total, Number(quantity)) ;return total + Number(quantity); }, 0);

            console.log(currentQuantityInCart, selectedQuantity);

            const updatedQuantity = Number(selectedQuantity) - Number(currentQuantityInCart);
            console.log(updatedQuantity);

            // Send a request to update the user's cart using Axios
            const response = await axios.put("http://localhost:4001/accounts/" + (props.type === "flight" ? "flightCart" : "stayCart") + `/${user.email}/${user.password}`, {
                slug: props.slug,
                quantity: updatedQuantity,
            });

            refresh();

            // Handle the response if needed
            console.log(response.data);

            if(selectedQuantity > 0) {
                setCheck(true);
            }
            else {
                setCheck(false);
            }
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error('Error updating cart:', error.message);
        }
    };


  return (
    <div>
      <input
        type="number"
        value={selectedQuantity}
        onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
        min={0}
        max={max}
      />
      <button className={check ? 'added' : 'add'} onClick={addToCart}>
        {user && user.cartFlights ? (
          selectedQuantity > 0 ? (
            `Adicionar ${selectedQuantity} ao carrinho`
          ) : (
            'Remover do carrinho'
          )
        ) : (
          'Adicionar ao carrinho'
        )}
      </button>
    </div>
  );
}

function FlightOffer(props) {
    return (
        <div className='offerContainer'>
            <img src={props.image} alt="" />
            <div className='offerDesc'>
                <span>R$ {props.price}</span>
                <span>{props.origin}</span>
                <span>{props.destination}</span>
                <span>{props.departure}</span>
                <span>{props.arrival}</span>
                <span>{props.airline}</span>
                <BotaoToggle endpoint={props.endpoint} slug={props.slug} max={props.left} type="flight"/>
            </div>
        </div>
    )
}


function StayOffer(props) {
    return (
        <div className='offerContainer'>
            <img src={props.image} alt="" />
            <div className='offerDesc'>
                <span>R$ {props.price}</span>
                <span>{props.city}</span>
                <span>{props.checkIn}</span>
                <span>{props.checkOut}</span>
                <span>{props.establishment}</span>
                <BotaoToggle endpoint={props.endpoint} slug={props.slug} max={props.left} type="stay"/>
            </div>
        </div>
    )
}

export {FlightOffer, StayOffer, BotaoToggle}
