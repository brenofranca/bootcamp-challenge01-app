import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import {
  Container,
  Header,
  UserName,
  Description,
  Avatar,
  AvatarIcon,
  Infos
} from "./styles";

export default function profile({ teste }) {
  const login = useSelector(state => state.login);

  return (
    <Container>
      <Header>
        <Avatar>
          <AvatarIcon name="user-secret" size={65} />
        </Avatar>
        <Infos>
          <UserName>{login.user.name}</UserName>
          <Description>{login.user.email}</Description>
          <Description>{login.user.kind}</Description>
        </Infos>
      </Header>
    </Container>
  );
}
