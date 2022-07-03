import React, {useContext} from "react"

import {Formik, Form, Field, useField} from "formik"

import * as Yup from "yup"

import {AppContext} from "../../contexts/AppStore"

import {submitMembers} from "../../api/funciones"
import {StyledLabel, StyledField, StyledSelect, StyledError} from "./styles"
import {ButtonS} from "../../Styles/styles"

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),

  lastname: Yup.string().required("Required"),

  role: Yup.string().required("Required"),
})

export const MemberForm = ({setStatus}) => {
  const {state} = useContext(AppContext)
  const submitHandlers = async (values) => {
    let data = {
      firstname: values.firstname,
      lastname: values.lastname,
      role_id: parseInt(values.role, 10),
    }
    let result = await submitMembers(data)
    console.log(result)
    setStatus(result)
  }

  const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
      <div>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect {...field} {...props} error={meta.touched && meta.error} />
        {meta.touched && meta.error ? (
          <StyledError className="error">{meta.error}</StyledError>
        ) : null}
      </div>
    )
  }

  const rolesList = () => {
    return state.roles.map((rol, index) => (
      <option value={parseInt(rol.id)} key={index}>
        {rol.label}
      </option>
    ))
  }

  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",

          lastname: "",

          role: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => submitHandlers(values)}>
        {({errors, touched}) => (
          <Form>
            <label>Nombre</label>
            <StyledField name="firstname" />

            {errors.firstname && touched.firstname ? (
              <p>{errors.firstname}</p>
            ) : null}

            <StyledLabel>Apellido</StyledLabel>
            <StyledField name="lastname" />

            {errors.lastname && touched.lastname ? <p>{errors.lastname}</p> : null}

            <MySelect label="Rol" name="role">
              <option value="">Seleccionar un rol</option>
              {rolesList()}
            </MySelect>

            {errors.role && touched.role ? <p>{errors.role}</p> : null}
            <ButtonS type="submit">Guardar</ButtonS>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default MemberForm
