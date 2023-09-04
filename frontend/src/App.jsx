import { Container } from "react-bootstrap"
import Header from "./component/Header"
import { Outlet } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <Header/>
    <ToastContainer />
    <Container className='my-2'></Container>
    <Outlet />
      
    </>
  )
}

export default App
