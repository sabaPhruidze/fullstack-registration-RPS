import styled from "styled-components";

export const Wrapper = styled.div`
  background: #1c1c1c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 20px;
  flex-direction: column;
`;
