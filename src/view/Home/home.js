
import './home.css';
import BeigeBkg from '../../images/Beige Simple One Line Butterfly Events Logo.png'; 
import DiamondBrac from '../../images/DIAMOND-BRACELET.jpg'; 
import RoseGolden from '../../images/ROSEGOLDEARINGS.jpg'; 


function Home() {
    return (
        <div className="main-container">
            <div className="top-container">
                <div className="text-container">
                    <h3>Great Quality</h3>
                    <p>
                        Enjoy some our best selling products Never over pay for great
                        products
                    </p>
                </div>
                <div className="img-container">
                    <img
                        src={BeigeBkg}
                        alt=""
                    />
                </div>
            </div>
            <div className="products-container">
                <div className="fir-product-wrapper">
                    <div className="product-container">
                        <div className="img-container">
                            <a href="/#" className="">
                                <img src={DiamondBrac} alt="" />
                            </a>
                        </div>
                        <div className="content-wrapper">
                            <div className="prdt_title-container">White Gold Princess</div>
                            <div className="price-container">$9.99</div>
                            <a href="/#" className=""
                            ><span className="material-symbols-outlined"> favorite </span></a
                            >
                        </div>
                    </div>
                    <div className="product-container">
                        <div className="img-container">
                            <a href="/#" className="">
                                <img src={RoseGolden} alt="" />
                            </a>
                        </div>
                        <div className="content-wrapper">
                            <div className="prdt-title-container">Rose Gold Earrings</div>
                            <div className="price-container">$16.80</div>
                            <a href="/#" className=""
                            ><span className="material-symbols-outlined"> favorite </span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
