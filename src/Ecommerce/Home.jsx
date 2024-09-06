import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from './Data';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from './Slice';
import { Col, Row } from 'react-bootstrap';

const Home = ()=>{

   const work = useSelector((state)=>state.cart)
   console.log(work)

   const dispatch = useDispatch();

const ans = Data.map((key)=>{
    
       return(
        <> 
        
        <Card style={{ width: '18rem' }}>
      <img src={key.img}/>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>{key.id}</Card.Text>
        <Button variant="success" onClick={()=> dispatch(addtocart(key))} >Add to cart</Button>
      </Card.Body>
    </Card>
   
        </>
    );
})

    return(
        <>
        <h1 className='text-center mt-3'>All items</h1>
       <Row>
        
        {ans}
        
       </Row>
      
       
       
      
        </>
    );
}
export default Home;