import React, {useState,useEffect} from 'react'
import Axios from "axios";

import { random , commerce} from "faker"
import {Container, Col, Row } from 'reactstrap'
import CardItem from './CardItem'


const apiKey ="Insert_your_key_here"

const url="https://api.pexels.com/v1/search?query=laptop&per_page6&page=1"
const localurl="https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"

const BuySection=({addInCart}) =>{

  const[product , setProduct] = useState([])

//   //const fetchPhotos= async()=> {
//       const response= await Axios.get(url, {
//           headers:{
//               Authorization:apiKey
//           }
    //   });

    const fetchPhotos= async()=> {
        const {data}= await Axios.get(localurl);
  

  const{photos}=data;

  const allProducts=photos.map(photo => ({
      smallImage:photo.src.medium,
      tinyImage: photo.src.tiny,
      productName:random.word(),
      productPrice:commerce.price(),
      id:random.uuid()
  }))

 setProduct(allProducts);

};

useEffect( ()=> {
          fetchPhotos() } , [])


   return(
     <Container fluid>
       <h1 className="text-success text-center">
         BuyPage
       </h1>
        <Row>  
        {product.map(product=>(
            <Col md={4} key={product.id}>
              <CardItem product={product}
                  addInCart={addInCart}/>

            </Col>

          ))}
        
        </Row> 
     </Container>

  )

}

export default BuySection;