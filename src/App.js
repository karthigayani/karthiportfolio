import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App(){
  return(
 <div className="App">
<NavigationBar/>
<Banner/>
<About/>

<Skills/>
<Projects/>

<Contact/>
<Footer/>
 </div>
  )


}
export default App;
