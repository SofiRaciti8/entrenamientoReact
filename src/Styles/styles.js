import styled from "styled-components"

export const Card = styled.div`
  background: ${(props) => props.theme.secondary};
  border: 5px solid ${(props) => props.theme.primary};
  margin: 1%;
  width: 20rem;
  border-radius: 5px;
  max-height: 7rem;
`

export const CardSection = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
`

export const ButtonN = styled.button`
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background-color: #1883ba;
  border-radius: 6px;
  border: 2px solid #0016b0;
  cursor: pointer;
  margin-left: 20px;
`

export const ButtonS = styled.button`
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background-color: #62d949;
  border-radius: 6px;
  border: 2px solid #1c1d24;
  cursor: pointer;
  margin-left: 100px;
`
