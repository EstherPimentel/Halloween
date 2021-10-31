import './App.css';
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import React, {useState} from "react"
import imagem1 from "./components/img/gatoPreto.gif"
import imagem2 from "./components/img/vela.gif"
import Footer from "./components/Footer/Footer"


function App() {

  const duploGif = [imagem1, imagem2]
  const [gif, setGif] = useState(duploGif[0])
  const changeGif = ()=>{
    setGif(gif === duploGif[0] ? duploGif[1] : duploGif[0])  
  
}

  return (
    <>
    <Header/>
    <Banner
        button2={changeGif}
        id="imagem1"
        src={gif}>
      <p class="text1">A curiosidade...</p>
    </Banner>

    <Footer/>
    
    </>

    
  );
}

export default App;
