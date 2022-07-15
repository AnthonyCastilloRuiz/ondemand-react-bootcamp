import React from 'react';
import '../estilos/Header.css';
import logoUrl from '../../src/WizelineBootCamp.png';
import logoCart from '../../src/shopping-cart.svg';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
    };
  return (
      <>
        <div className='header'>
            <Link to="/">
              <img  className='logo' src={logoUrl} alt="logo" />
            </Link>

            <div className='derecha'>

                <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />

                <img className='carritoLogo' src={logoCart} alt="carrito" href="#news"/>
            </div>
        </div>

      </>

  )
}
