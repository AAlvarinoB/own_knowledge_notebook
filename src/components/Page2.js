import React from 'react';
import '../App.css';
import './Page1.css';
import Fight_Type from '../img/fight_type.png';
import Flying_Energy from '../img/flying_energy.png';
import gosling_goose from '../img/gosling_the_goose.gif';
const Page2 = () => {
    return (
        <div className="page2-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div style={{lineHeight: '1', padding: "10px"}}>Gosling the Goose</div>
                    <div className="page-top-name">
                        <div style={{fontSize: "15px",color: "red", marginLeft: "20px", lineHeight: '1', padding: "10px"}}>400 HP</div>
                        <img src={Flying_Energy} alt="water" style={{width: "40px", marginLeft: "20px"}}/>
                    </div>
                </div>
                <div className="page-top-box" style={{border: "4px solid darkgray"}}>
                    <div className="top-box-image-background">
                        <div className="top-box-image">
                            <img src={gosling_goose} alt="za_gosling" style={{width: '133px', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "linear-gradient(to bottom, #d9d9d9, #f0f0f0", border: "3px solid lightslategray"}}>
                    <div style={{fontSize: '15px'}}>¡Baila! Y lo hace mejor que yo...</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Su nombre es Gosling the Goose, es un experto en cualquier tipo de baile.
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Intenta comunicarse, pero por razones obvias no puede hablar. Igual te acompañará.
                </div>
                <span style={{color: "purple"}}>"¡El buen ritmo siempre nos acompaña!"</span>
                <hr style={{marginTop: '-10px'}}/>
                <div className="stats-text-box">
                    <div>
                        <span>Debilidades</span>
                        <img src={Fight_Type} alt="fire_energy" style={{width: "40px", marginTop: "-2px"}}/>
                    </div>
                    <div>
                        Estadisticas <br/>
                        <div style={{color: "green", fontSize: "12px"}}>+10 Baile, +5 Ritmo, Energia infinita</div>
                    </div>
                    <div>
                        Costo
                        <div style={{fontSize: "30px", marginTop: "10px", marginBottom: "-10px"}}>0</div>
                    </div>
                </div>
                <hr style={{marginTop: '5px'}}/>
                <div style={{fontsize: "12px"}}>
                    Gosling utiliza <span style={{fontWeight: "bold"}}>danza aleteo</span>...
                    Es super efectivo!
                </div>

            </div>
        </div>
    );
};

export default Page2;