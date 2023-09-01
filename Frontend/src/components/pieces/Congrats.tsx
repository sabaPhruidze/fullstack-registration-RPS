import styled from "styled-components";

export const Congrats = styled.div`
  width: 300px;
  height: 100px;
  background-color: ${(props) => props.theme.green.dark};
  color: ${(props) => props.theme.white};
  position: absolute;
  top: calc(100% / 2 - 50px);
  left: calc(100% / 2 - 150px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`;
