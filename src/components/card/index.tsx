import React from "react";
import { ICardComposition } from "../../interfaces/ICard";
import {
  Button,
  Container,
  Desc,
  MiniDesc,
  Price,
  Row,
  Section,
  Split,
  SubTitle,
  Title,
} from "./styles/Card";

const Card: React.FC & ICardComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Card.Section = function CardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.MiniDesc = function CardMiniDesc({ children, ...restProps }) {
  return <MiniDesc {...restProps}>{children}</MiniDesc>;
};

Card.Desc = function CardDesc({ pos, children, ...restProps }) {
  return (
    <Desc pos={pos} {...restProps}>
      {children}
    </Desc>
  );
};

Card.Split = function CardSplit({ children, ...restProps }) {
  return <Split {...restProps}>{children}</Split>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Button = function CardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Card.Price = function CardPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

export default Card;
