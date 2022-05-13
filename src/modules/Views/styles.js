import styled from "styled-components"

export const StyledView = styled.div`
  background-color: ${(props) => props.theme.background};
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
