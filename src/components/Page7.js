import React from 'react';
import '../App.css';
import './Page1.css';
import cat_hug from '../img/cat_hug.gif';
import le_hacker from '../img/le_hacker.gif';
const Page6 = () => {
    return (
        <div className="page7-background" style={{border: "4px solid fuchsia"}}>
            <div className="page-container">
                <div className="page-top-container">
                    <div className="page7-top-name">
                        Mensaje al mundo
                    </div>
                </div>

                <div className="page-top-box" style={{border: "4px solid fuchsia"}}>
                    <div className="top-box-image-background" style={{backgroundColor: "lightgreen"}}>
                        <div className="top-box-image">
                            <img src={le_hacker} alt="za_hax" style={{width: '100%', opacity: "1"}}/>
                        </div>
                    </div>
                </div>
                <div className="mid-text-box" style={{background: "fuchsia", border: "3px solid black"}}>
                    <div style={{fontSize: '15px'}}>De mi vocacion y de mi reflexion.</div>
                </div>
                <div className="bottom-text-box" style={{fontSize: '12px', marginBottom: '10px'}}>
                    Dos cosas: La programación es una herramienta simple y poderosa. Toda la presente presentacion fue hecha
                    desde cero con ella.
                    Tambien, este corto proceso me enseñó a entenderme un poco más a mi mismo. Inicialmente intenté hacer esta actividad
                    manualmente, pero mis habilidades para ese tipo de cosas son bastante pobres, por lo que lo llevé a un area que manejo.
                    De cierta manera, aprendi a implementar un enfoque creativo mediante algo que me gusta.
                </div>


            </div>
        </div>
    );
};

export default Page6;