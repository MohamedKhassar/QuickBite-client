import Navbar from "./components/Navbar"
import Container from "./UI/Container"
import Layout from "./UI/Layout"
import NavSwiper from "./UI/NavSwiper"

const App = () => {
  return (
    <Layout>
        <NavSwiper />
      <Container>
        <Navbar />
        {/* Mobile Menu */}
      </Container>
    </Layout>
  )
}

export default App