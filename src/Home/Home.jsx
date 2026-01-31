import React, { useState } from 'react';


const menuItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Contact" }
];

const Home = () => {

    return (
        <div>
            <p>your core concept is so good</p>
            {menuItems.map(menuItems =><>{menuItems.name}</>)}
        </div>
    );
};

export default Home;