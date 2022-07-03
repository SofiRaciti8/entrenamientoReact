import styled from "styled-components"
import {Field} from "formik"

export const StyledLabel = styled.label`
  display: block;
  margin: 0.5em 0 0 0;
`

export const StyledField = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
export const StyledError = styled.p`
  background:red;
`