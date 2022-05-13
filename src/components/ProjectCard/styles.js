import styled from "styled-components";

export const Card = styled.div`
    background: ${(props) => props.theme.secondary};
    border: 5px solid ${(props) => props.theme.primary};
    width: 500px;
    margin: 1%;
`

export const CardSection = styled.div`
    margin-left:10%;
    display: flex;
    flex-direction: columns;
    flex-wrap: wrap;
`