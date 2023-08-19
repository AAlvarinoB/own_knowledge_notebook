import React from 'react';
import '../App.css';
import './Page1.css';
import cat_hug from '../img/cat_hug.gif';
const Page6 = () => {
    return (
        <div className="page6-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div style={{lineHeight: '1', padding: "10px"}}>Mis motivaciones</div>
                    <div className="page3-top-name">
                        <div style={{fontSize: "15px",color: "darkgreen", marginLeft: "80px", lineHeight: '1', marginTop: "20px"}}><em>Mi mamá</em></div>
                    </div>
                </div>
                <div className="page-top-box" style={{border: "4px solid darkgreen"}}>
                    <div className="top-box-image-background" style={{backgroundColor: "lightgreen"}}>
                        <div className="top-box-image">
                            <img src={cat_hug} alt="za_hug" style={{width: '133px', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "linear-gradient(45deg, #ffd700, #ffd200)", border: "3px solid darkgreen"}}>
                    <div style={{fontSize: '15px'}}>Mi mamá es la mayor de mis motivaciones.</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px', marginBottom: '10px'}}>
                    Ella ha sido quien me ha apoyado durante toda mi vida. Simplemente me esfuerzo por ella para enmendar todas las dificultades que ha pasado.
                </div>

                <hr style={{marginTop: '-10px'}}/>
                <div className="stats-text-box" style={{marginBottom: '40px'}}>
                    <div>
                        <span>Habilidad<br/></span>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>Motivar</span>
                    </div>
                    <div>
                        Estadisticas <br/>
                        <div style={{fontSize: "12px"}}>
                            <span style={{color: "green"}}>+10 ánimo, +10 energía, -10 estrés</span>
                        </div>
                    </div>
                    <div>
                        Costo
                        <div style={{fontSize: "30px", marginTop: "10px", marginBottom: "-10px"}}>0</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page6;