
import APIFetch from './APIFetch'
import './App.css'

function App() {
  
  return (
    <>
     <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100">
    <div className='d-flexjustify-content-center align-items-center'>
       <h2 className='text-center mt-5'>Random User on Refersh</h2>
       <APIFetch/>
    </div>
     </div>
    </>
  )
}

export default App
