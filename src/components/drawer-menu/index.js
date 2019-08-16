import React from "react";

import { Container, Header, MenuItems } from "./styles";

import { DrawerItems } from "react-navigation";

import Profile from "./profile";

export default function drawerMenu(props) {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
      <MenuItems>
        <DrawerItems {...props} />
      </MenuItems>
    </Container>
  );
}
