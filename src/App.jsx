
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import GlobalElementsProvider from './Components/utils/GlobalElements';


function App() {
  return (
    <>
      <GlobalElementsProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Favs' element={<Favs />} />
              <Route path='/Dentis/:id' element={<Detail />} />
              <Route path='*' element={<div>Not Found</div>} />
            </Routes>
          <Footer/>
      </GlobalElementsProvider>
    </>
  )
}

export default App
