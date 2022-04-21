

//import Apitest from './component/Apitest';
//import Insert from './component/Insert';
import Home from './component/Home';
import Search from './component/Search';
//import Search from './component/Search';

// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contact';
// import Navbar from './component/Navbar';
// import {Route,BrowserRouter} from "react-router-dom"
//import Form from './component/Form';

function App() {
  return (
    <div >
      <Home/>
     
      <Search/>
     {/* <BrowserRouter>
     <Navbar/>
     
     <Route exact path="/" component={<Home/>}></Route>
     <Route exact path="/about" component={<About/>}></Route>
     <Route exact path="/contact" component={<Contact/>}></Route>
    
 
     
     
    
     </BrowserRouter> */}

     {/* <Nav/> */}
     
      
    </div>

  );
}

export default App;
