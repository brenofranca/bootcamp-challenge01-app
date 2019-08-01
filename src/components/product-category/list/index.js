import React, { useState, useEffect } from "react";

import { Container, Items } from "./styles";

import ProductCategoryItem from "../item";

const ProductCategoryList = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Pizzas",
        description:
          "Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.",
        time: "30 mins",
        image: "../../../assets/images/Pizzas/1.png"
      },
      {
        id: 2,
        title: "Massas",
        description:
          "10 tipos de massas com diferentes molhos para te satisfazer.",
        time: "25 mins",
        image: "../../../assets/images/Pizzas/1.png"
      },
      {
        id: 3,
        title: "Calzones",
        description:
          "Calzones super recheados com mais de 50 sabores diferentes.",
        time: "15 mins",
        image: "../../../assets/images/Pizzas/1.png"
      },
      {
        id: 4,
        title: "Bebidas não-alcóolicas",
        description: "Refrigerantes, sucos, chá gelado, energéticos e água.",
        time: "5 mins",
        image: "../../../assets/images/Pizzas/1.png"
      },
      {
        id: 5,
        title: "Bebidas alcóolicas",
        description: "Cervejas artesanais, vinhos e destilados.",
        time: "5 mins",
        image: "../../../assets/images/Pizzas/1.png"
      }
    ];

    setCategories(data);
  }, []);

  _keyExtractor = (item, index) => String(item.id);

  _onPressItem = item => {};

  _renderItem = ({ item }) => (
    <ProductCategoryItem
      id={item.id}
      title={item.title}
      product={item}
      onPress={this._onPressItem(item)}
    />
  );

  return (
    <Container>
      <Items
        data={categories}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    </Container>
  );
};

export default ProductCategoryList;
