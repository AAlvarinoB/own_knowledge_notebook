import React from 'react';
import '../App.css';
import './Page1.css';
import dancing_bee from '../img/dancing-bee.gif';
import Insect_Energy from '../img/insect_energy.png';
const Page2 = () => {
    return (
        <div className="page4-background">
            <div className="page-container">
                <div className="page-top-name">
                    <div style={{lineHeight: '1', padding: "10px"}}>Abeja infernal!</div>
                    <div className="page-top-name">
                        <div style={{fontSize: "20px",color: "green", marginLeft: "20px", lineHeight: '1', padding: "10px"}}>15 HP</div>
                        <img src={Insect_Energy} alt="water" style={{width: "50px", marginLeft: "20px"}}/>
                    </div>
                </div>
                <div className="page-top-box" style={{border: "4px solid darkgoldenrod"}}>
                    <div className="top-box-image-background" style={{backgroundColor: "#efd59f"}}>
                        <div className="top-box-image">
                            <img src={dancing_bee} alt="za_bee" style={{width: '133px', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "linear-gradient(45deg, #ffd700, #ffd200)", border: "3px solid darkgoldenrod"}}>
                    <div style={{fontSize: '15px'}}>Estas criaturas me aterrorizan...</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px'}}>
                    Les he perdido el pavor, pero verlas me trae un mal recuerdo...
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px', justifyContent: 'normal'}}>
                    Un <span style={{color: "red", marginLeft: '4px', marginRight: '4px'}}> piquete </span> me dejó mal cuando yo era pequeño.
                </div>
                <div style={{lineHeight: "1.5", marginBottom: "10px"}}>
                    <span style={{fontSize: '15px', color: "red", marginTop: "10px"}}>¡Que no te engañen! La alergía que me dejaron no fue nada bonita.</span>
                </div>

                <hr style={{marginTop: '-10px'}}/>
                <div className="stats-text-box">
                    <div>
                        <span>Ataque<br/></span>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>Aguijon!</span>
                    </div>
                    <div>
                        Estadisticas <br/>
                        <div style={{fontSize: "12px"}}>10 daño, 1 envenenamiento, perdida de aguijon</div>
                    </div>
                    <div>
                        Costo
                        <div style={{fontSize: "30px", marginTop: "10px", marginBottom: "-10px"}}>15</div>
                    </div>
                </div>
                <hr style={{marginTop: '5px'}}/>
                <div style={{fontsize: "12px", lineHeight: "1.5", marginBottom: "10px"}}>
                    La abeja utiliza <span style={{fontWeight: "bold"}}>aguijón</span>...
                    Provoca <span style={{color: "red"}}>daño critico</span>!
                </div>

            </div>
        </div>
    );
};

export default Page2;