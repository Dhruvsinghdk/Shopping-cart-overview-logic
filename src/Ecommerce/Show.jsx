import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { clearcart, recDelete } from "./Slice";
import { Row } from "react-bootstrap";



const Show = ()=>{

    const work = useSelector((state)=>state.cart.item)

   console.log("Card items = ",work)

   const dispatch = useDispatch();

   const deltsk = (id)=>{
    dispatch(recDelete(id))
   }

   const ans = work.map((key)=>{
    return(
        <>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={key.img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {key.id}
        </Card.Text>
       <Button variant="warning" onClick={()=>{deltsk(key.id)}} >Delete</Button>
      </Card.Body>
    </Card>
    
    
        </>
    );
   })

    return(
        <>
        <Row>
        {ans}
        </Row>
      
        <Button variant="danger" onClick={()=>{dispatch(clearcart())}}>clearcart</Button>
        </>
    );
}
export default Show;