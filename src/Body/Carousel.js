import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import dena from "../Img/cn/denathrius.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const CarouselComponent = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundImage: `url(${dena})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "460px",
    color: "#fff",
    lineHeight: "360px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div style={{ width: "100%" }}>
      <Carousel dots="true" afterChange={onChange}>
        <div>
          {" "}
          <div style={contentStyle}>
            1{" "}
            <ArrowForwardIosIcon
              style={{ color: "white", justifySelf: "flex-end" }}
            />
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
