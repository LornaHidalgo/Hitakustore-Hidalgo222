import React from "react";
import {  Carousel } from "react-bootstrap";

import "../main.css";

export const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://media.vandalsports.com/master/2-2022/2022222185755_1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>HitakuStore</h3>
            <p>Bienvenido a la tienda online de HitakuStore</p>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};
