import "./Banner.css"

const Banner = ({children, button2, gif, src}) => {
    return (
        <div id="banner">
            <img id= "imagem1" src={gif || src} alt=""/>
           
            <button className="btn-button" onClick={button2}>
                {children}
                
            </button>

        </div>
    )

}


export default Banner;