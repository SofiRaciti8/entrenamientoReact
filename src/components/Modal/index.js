import {useState} from "react"
import Forms from "../../components/Forms"
import ResponseMessage from "../ResponseMessage"
import {StyledModal} from "./styles"

const Modal = ({close}) => {
  const [status, setStatus] = useState(undefined)

  return (
    <StyledModal>
      <button onClick={() => close()}>Cerrar</button>
      {status ? (
        <ResponseMessage status={status} />
      ) : (
        <>
          <h1>Agregar Integrante</h1>
          <Forms setStatus={(status) => setStatus(status)} />
        </>
      )}
    </StyledModal>
  )
}

export default Modal
