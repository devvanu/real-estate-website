import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header'
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Container maxW='container.lg'>
        <Header />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='property-details' element={ <PropertyDetails /> } />
        </Routes>
        <Footer /> */}
      </Container>
    </>
  )
}

export default App