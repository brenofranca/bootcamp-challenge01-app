import React from "react";

import { Container, Items } from "./styles";

import ListItem from "../item";

const List = ({ data }) => {
  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <ListItem id={item.id} data={item} />;

  return (
    <Container>
      <Items
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    </Container>
  );
};

export default List;
