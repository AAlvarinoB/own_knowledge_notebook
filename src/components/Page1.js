import React from 'react';
import '../App.css';
import './Page1.css';
import Water_Energy from '../img/water_energy.png';
import Fire_Energy from '../img/fire_energy.png';
import cat_bath from '../img/cat-bath.gif';
const Page1 = () => {
    return (
        <div className="page-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div>¡Bienvenida!</div>
                    <div className="page-top-name">
                        <div style={{color: "red", marginLeft: "20px"}}>20 HP</div>
                        <img src={Water_Energy} alt="water" style={{width: "30px", marginLeft: "20px"}}/>
                    </div>
                </div>
                <div className="page-top-box">
                    <div className="top-box-image-background">
                        <div className="top-box-image">
                            <img src={cat_bath} alt="catbath" style={{width: '133px', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box">
                    <div style={{fontSize: '15px'}}>Sí, esto es una carta, como en Pokemón!</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Bienvenido a mi libro de autoconocimiento! Soy Alberto José Alvarino Berrio. Aquí tú y yo descubrirémos de lo que soy capáz.
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Antes que nada,
                    <span style={{color: "red", marginLeft: "4px"}}>¡ME ENCANTAN LOS GATOS!</span>
                </div>
                Habrán algunos por alli.
                <hr style={{marginTop: '-10px'}}/>
                <div className="stats-text-box">
                    <div>
                        <span>Debilidades</span>
                        <img src={Fire_Energy} alt="fire_energy" style={{width: "40px", marginTop: "-2px"}}/>
                    </div>
                    <div>
                        Estadisticas <br/>
                        <div style={{color: "green", fontSize: "12px"}}>+2 Carisma, </div>
                        <div style={{color: "red", fontSize: "12px"}}>-1 Energia</div>
                    </div>
                    <div>
                        Costo
                        <div style={{fontSize: "30px", marginTop: "10px", marginBottom: "-10px"}}>0</div>
                    </div>
                </div>
                <hr style={{marginTop: '5px'}}/>
                <div style={{fontsize: "12px"}}>
                    La siguiente carta mostrará a tu guía aquí, mi avatar.
                </div>

            </div>
        </div>
    );
};

export default Page1;