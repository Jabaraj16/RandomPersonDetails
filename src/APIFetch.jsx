import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';


function APIFetch() {
  const [data, setData] = useState([]);
  const [randomId,setRandomId]=useState()
  const [color,setColor]=useState("")

  useEffect(()=>{
    axios.get("https://dummyjson.com/users").then((res)=>{
       setData(res.data.users)
    })
    setRandomId(Math.floor(Math.random()*(1-30)+30))
    myDiv.style.backgroundColor ="#"+color


},[color])

console.log(color);
  console.log(data);


  return (
    <div id='myDiv' style={{width:'530px',height:'600px',backgroundColor:'blue'}} className=' shadow border rounded-5 mt-5 p-5 '>
    {
      data.filter((items)=>items.id==randomId).map(detail=>(
        <div className='d-flex text-white'>
        <div className='w-50 text-center'>
          <img width={200} height={200} style={{borderRadius:'100px',border:'1px solid black'}} className='' src={detail.image} alt="no"  />
          <div className='w-100 text-white'><h4>{`${detail.firstName} ${detail.lastName}`}</h4></div>
          <p>{detail.gender}</p>
          <Row>
            <Col lg={6}>
              <h6 >BirthDate:  <br />
              <span >{detail.birthDate}</span>
              </h6>
              <h6 className='mt-5'>Weight:  <br />
              <span >{detail.weight}</span>
              </h6>
            </Col>
            <Col lg={6}>
              <h6>Age: <br /><span className='mt-2'>{detail.age}</span></h6>
  
              <h6 className='mt-5'>Height:  <br />
              <span >{detail.height}</span>
              </h6>
            </Col>
          </Row>
          <button onClick={()=>{setRandomId(Math.floor(Math.random()*(1-30)+30)),setColor( Math.floor(Math.random()*16777215).toString(16))}} className='btn btn-success mt-4 fw-bolder'>REFRESH</button>
        </div>
  
  
        <div style={{height:'100%',marginLeft:'60px'}} className='w-50  '>
        <h6>Address:  <br />
              </h6>
              <span className='fw-semi-bold' >{detail.address.address}</span>
              <h6 className='mt-5'>MobilePhone:  <br />
              </h6>
              <span className='fw-semi-bold' >{detail.phone}</span>
              <h6 className='mt-5'>Company:  <br />
              </h6>
              <span className='fw-semi-bold' >{detail.company.name}</span>
              <h6 className='mt-5'>Job Title:  <br />
              </h6>
              <span className='fw-semi-bold' >{detail.company.title}</span>
              <h6 className='mt-5'>Email:  <br />
              </h6>
              <span >{detail.email}</span>
             
         
      
        </div>
      </div>
      ))
      }
 
    </div>
  )
}

export default APIFetch
