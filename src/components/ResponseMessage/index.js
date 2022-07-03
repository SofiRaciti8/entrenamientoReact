const ResponseMessage = ({status}) => 
  <h1>{ status === 200 ? "Registro Exitoso" : "Error"} </h1> 

export default ResponseMessage
