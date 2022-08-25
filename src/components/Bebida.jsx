import { Card,Col, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const Bebida = ({bebida}) => {

    const {handlerModalClick,handlerBebidaIdClick}= useBebidas()

  return (
    <Col md={6} lg={3}>

        <Card className="mb-4" border="light">
            <Card.Img
            variant="top"
            src={bebida.strDrinkThumb}
            alt={`imagen de ${bebida.strDrink}`}

            />
        <Card.Title className="text-center mt-2">{bebida.strDrink}</Card.Title>
        <Button
        className="text-uppercase w-100 mt-1"
        variant="warning"
        onClick={()=>{
            handlerModalClick(),
            handlerBebidaIdClick(bebida.idDrink)

        }}
        >Ver Receta</Button>
        </Card>

    </Col>
  )
}
export default Bebida