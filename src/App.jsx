import './App.css';
import Navbar from './Componants/NavBar/Navbar';
import Header from './Componants/Header/Header';
import ABout from './Componants/About/ABout';
import Services from './Componants/Services/Services';
import MyWork from './Componants/MyWork/MyWork';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <ABout />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
