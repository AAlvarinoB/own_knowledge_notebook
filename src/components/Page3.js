import React from 'react';
import '../App.css';
import './Page1.css';
import Fight_Type from '../img/fight_type.png';
import mario_gaming from '../img/mario_gaming.gif';
const Page3 = () => {
    return (
        <div className="page3-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div style={{lineHeight: '1', marginTop: '20px'}}>Sobre mi...</div>
                    <div className="page3-top-name">
                        <div style={{fontSize: "15px",color: "white", marginLeft: "20px", lineHeight: '1', marginTop: "20px"}}><em>Ingeniero</em></div>
                    </div>
                </div>
                <div className="page-top-box" style={{border: "4px solid darkgray"}}>
                    <div className="top-box-image-background">
                        <div className="top-box-image">
                            <img src={mario_gaming} alt="za_gosling" style={{width: '100%', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "linear-gradient(to bottom, #8a00ff, #e74c3c)", border: "3px solid mediumpurple"}}>
                    <div style={{fontSize: '15px', color: "white"}}>Entre ser y no ser...</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Mis amigos me describen como un poco "Tryhard" en distintos aspectos de mi vida... Personalmente siento que solo me tomo enserio los videojuegos xD.
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Creo que soy bueno programando y me apasionan los videojuegos. Como ingeniero, espero contribuir en algo que realmente le facilite la vida a la gente. No todo trata de dinero, pero quisiera ser desarrollador de Software.
                    Una frase que me acompaña siempre es:
                </div>
                <span style={{color: "purple"}}>"It is what it is."</span>

            </div>
        </div>
    );
};

export default Page3;