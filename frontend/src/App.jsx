import { Container } from "react-bootstrap"
import Header from "./component/Header"
import { Outlet } from "react-router-dom"
const App = () => {
  return (
    <>
    <Header/>
    <Container className='my-2'></Container>
    <Outlet />
      
    </>
  )
}

export default App
