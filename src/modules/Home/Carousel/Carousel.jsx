import React from "react";
import CarouselStyles from "./Carousel.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function Carousel() {
  return (
    <div className={`${CarouselStyles.carousel}`}>
      <div className={`${CarouselStyles.carousel_container}`}>
        <div className={`${CarouselStyles.carousel_container_bg}`}></div>
        <div className={`${CarouselStyles.carousel_container_player}`}>
          <img src="./img/newFile-3.png" />
        </div>
        <div className={`${CarouselStyles.carousel_container_search}`}>
          
        </div>
      </div>
    </div>
  );
}
