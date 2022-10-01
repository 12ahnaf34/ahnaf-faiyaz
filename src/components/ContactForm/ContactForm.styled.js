import styled from "styled-components";
import { Button, colors } from "../../GlobalStyles";

export const ContactFormContainer = styled.div`
  container-type: inline-container;
  width: 100%;
  margin-top: 200px;
  background-color: ${colors.grey};
  font-size: 1.5cqi;
  padding: 50px 0;

  @media (max-width: 800px) {
    font-size: 6cqi;
  }

  @media (max-width: 400px) {
    font-size: 6cqi;
  }
`;

export const FormItself = styled.form`
  width: 50cqi;
  display: grid;
  margin: auto;

  @media (max-width: 800px) {
    width: 80cqi;
  }

  @media (max-width: 400px) {
    width: 80cqi;
  }
`;

export const Input = styled.input`
  width: 50cqi;
  font-size: 30px;
  font-family: "Bahnschrift";
  border: 2px solid ${colors.dark};
  height: ${({ height }) => height || "fit-content"};

  @media (max-width: 800px) {
    width: 80cqi;
    font-size: 15px;
  }

  @media (max-width: 400px) {
    width: 80cqi;
    font-size: 15px;
  }
`;

export const MessageInput = styled.textarea`
  width: 50cqi;
  min-height: 400px;
  font-family: "Bahnschrift";
  font-size: 30px;
  border: 2px solid ${colors.dark};

  @media (max-width: 800px) {
    width: 80cqi;
    font-size: 15px;
    min-height: 100px;
  }

  @media (max-width: 400px) {
    width: 80cqi;
    font-size: 15px;
    min-height: 100px;
  }
`;

export const InputButton = styled.input`
  width: 10cqi;
  margin: 20px 0;
  background-color: ${colors.dark};
  color: ${colors.light};
  font-family: "Norwester";
  font-size: 2cqi;
  transition: all 0.4s ease;
  cursor: pointer;

  &: hover {
    background-color: ${colors.gold};
    color: ${colors.dark};
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    width: 20cqi;
    font-size: 6cqi;
  }

  @media (max-width: 400px) {
    width: 20cqi;
    font-size: 6cqi;
  }
`;
