import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./UI/Container"
import Layout from "./UI/Layout"
import NavSwiper from "./UI/NavSwiper"
import CartSwiper from "./UI/CartSwiper"

const App = () => {
  return (
    <Layout>
      <NavSwiper />
      <CartSwiper />
      <Container>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<h1>sign up</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
        </Routes>
      </Container>
    </Layout>
  )
}

export default App