import styled from "styled-components/macro";
import { media } from "../../../styles/global-style";
import {
  neutral,
  neutralAccent,
  primary,
  primaryAccent,
} from "../../../styles/style-guide";

export const Section = styled.section`
  background-color: ${neutral};
  min-height: 100vh;
  padding: 4.5rem 0;

  ${media.desktop} {
    padding: 0px;
    display: grid;
    place-items: center;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: max(310px, 50%);
  margin-inline: auto;
  border-radius: 4px;
  box-shadow: 0 1rem 2rem hsl(0deg 0% 0% / 10%);
  overflow: hidden;

  ${media.desktop} {
    width: 635px;
    height: 474px;
    border-radius: 8px;
  }
`;

export const Split = styled.div`
  padding: 0 1.5rem;

  ${media.desktop} {
    flex: 1;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.1rem;
  margin-top: 1.5rem;
  color: ${neutral};
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-block: 1.15rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  color: ${neutral};

  & > :not(&) {
    font-weight: normal;
    color: blue;
    display: inline-block;
    font-size: 1rem;
    margin-left: 0.7em;
    color: ${neutral};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-of-type(2) ${Split}:first-child {
    background-color: ${primary};
  }

  &:nth-of-type(2) ${Split} + ${Split} {
    background-color: rgb(74, 190, 189);
  }

  ${media.desktop} {
    &:nth-of-type(2) {
      flex-direction: row;
    }

    &:first-of-type ${Split} {
      padding: 2.6rem;
      padding-bottom: 2.5rem;
    }

    &:not(:first-of-type) ${Split} {
      padding: 2.6rem;
    }

    &:not(:first-of-type) ${Split} ${SubTitle} {
      margin-top: -1px;
      margin-left: -1px;
    }

    &:not(:first-of-type) ${Split} ${Price} {
      margin-left: -2px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.22rem;
  font-weight: 700;
  color: ${primary};
  margin-top: 1.8rem;

  ${media.desktop} {
    margin-top: 0rem;
    font-size: 1.45rem;
  }
`;

export const MiniDesc = styled.p`
  line-height: 1.4;
  color: ${primaryAccent};
  margin-top: 1.6rem;
  margin-bottom: 1rem;
  font-size: 0.924rem;
  font-weight: 700;

  ${media.desktop} {
    font-size: 1.097rem;
    margin-top: 1.48rem;
    margin-bottom: 0.5rem;
  }
`;

export const Desc = styled.p<{ pos: number }>`
  ${({ pos }) =>
    pos === 1 &&
    `
    font-size: 0.86rem; 
    line-height:1.95;
    margin-bottom:2rem;
    color: ${neutralAccent};

    ${media.desktop} {
      margin-top: 0.55rem;  
      width: 516px;
      font-size: .979rem;
      letter-spacing: 1;
      line-height:1.7;
      margin-bottom:0rem;

    }
  `}
  ${({ pos }) =>
    pos === 2 &&
    `
    margin-block: .5rem;
    font-size: .98rem;
    color: ${neutral};
    margin-bottom: 1.8rem;
  
    ${media.desktop} {
      margin-top: .55rem;
      margin-left: -1px;
    }
  `}
  ${({ pos }) =>
    pos === 3 &&
    `
    font-size:.86rem;
    line-height: 1.3rem;
    margin-top: 1.2rem;
    margin-bottom: 1.5rem;
    color: ${neutral};
 
    ${media.desktop} {
      margin-left: -2px;
      margin-top: 1.17rem;
    }
  `}
`;

export const Button = styled.button`
  width: 280px;
  padding: 1rem 0;
  border-radius: 0.4rem;
  border: 0;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: ${primaryAccent};
  margin-bottom: 1.5rem;
  display: block;
  box-shadow: 0 12px 8px hsl(0deg 0% 0% / 8%);

  &:hover {
    background-color: hsl(71, 73%, 60%);
  }

  ${media.desktop} {
    width: 235px;
  }
`;
