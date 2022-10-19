import React from "react";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
function ShoppingCartApp() {
  const products = [
    {
      id:1,
      title: "JEANS ZW THE DREED FLARE",
      price: 18,
      img: "https://static.zara.net/photos///2022/I/0/1/p/1934/243/800/2/w/563/1934243800_1_1_1.jpg?ts=1663337327385",
    },
    {
      id:2,

      title: "CAMISETA LAVADA ESTAMPADA",
      price: 16,
      img: "https://static.zara.net/photos///2022/I/0/1/p/1131/864/807/2/w/563/1131864807_1_1_1.jpg?ts=1665735226189",
    },
    {
      id:3,

      title: "TOP CROPPED PUNTO",
      price: 13,
      img: "https://static.zara.net/photos///2022/V/0/1/p/3519/030/080/12/w/563/3519030080_2_1_1.jpg?ts=1648727095955",
    },
    {
      id:4,

      title: "PANTALÓN LANA LIMITED EDITION",
      price: 89,
      img: "https://static.zara.net/photos///2022/I/0/1/p/8180/875/922/2/w/563/8180875922_1_1_1.jpg?ts=1665474971348",
    },
    {
      id:5,

      title: "FALDA TULIPA LIMITED EDITION",
      price: 89,
      img: "https://static.zara.net/photos///2022/I/0/1/p/8296/213/251/2/w/563/8296213251_1_1_1.jpg?ts=1665475142168",
    },
    {
      id:6,

      title: "FALDA PANTALÓN",
      price: 23,
      img: "https://static.zara.net/photos///2022/I/0/1/p/7385/530/637/2/w/563/7385530637_1_1_1.jpg?ts=1661517689133",
    },
    {
      id:7,
      title: "CAMISETA HOMBRERAS",
      price: 23,
      img: "https://static.zara.net/photos///2022/I/0/1/p/2712/405/250/2/w/563/2712405250_1_1_1.jpg?ts=1657882045538",
    },
  ];
  const [cart,setCart]=useState([])

  return (
    <div className="main">
      <ShoppingCart setCart={setCart} cart={cart}/>
      <ProductsList products={products} setCart={setCart} cart={cart} />
    </div>
  );
}

export default ShoppingCartApp;
