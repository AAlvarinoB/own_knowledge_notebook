import React from 'react';
import '../App.css';
import './Page1.css';
import cat_jump from '../img/cat_jump.gif';
const Page5 = () => {
    return (
        <div className="page5-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div style={{lineHeight: '1', marginTop: '20px', marginBottom: '10px', color: "white"}}>Inseguridad.</div>
                    <div className="page3-top-name">
                        <div style={{fontSize: "15px",color: "white", marginLeft: "80px", lineHeight: '1', marginTop: "20px"}}><em>Debilidad</em></div>
                    </div>
                </div>
                <div className="page-top-box" style={{border: "4px solid darkgray"}}>
                    <div className="top-box-image-background">
                        <div className="top-box-image">
                            <img src={cat_jump} alt="za_gosling" style={{width: '100%', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "linear-gradient(135deg, #800080, #000080)", border: "3px solid mediumpurple"}}>
                    <div style={{fontSize: '15px', color: "white"}}>Miedo al fracaso.</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px', color: "white"}}>
                    El miedo al fracaso ha sido una de mis inseguridades constantes, afortunadamente controladas, a lo largo de mi vida.
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px', color: "white"}}>
                    A pesar de que trato de hacer lo mejor que pueda, tengo la gran incertidumbre de que algo saldrá mal, creo que eso eso tambien me ha vuelto meticuloso,
                    podria decirse "Tryhard" en cosas que hago en mi dia a dia. A pesar de esta inseguridad, no me evita intentar hacer algo nuevo aunque fracase
                    en el intento, pues sé que con una derrota, aprendo para alcanzar una victoria.
                </div>

            </div>
        </div>
    );
};

export default Page5;