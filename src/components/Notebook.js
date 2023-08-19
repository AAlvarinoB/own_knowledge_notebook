import React, { useState , useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import './Notebook.css';
import NextButtom from '../img/right_arrow2.gif';
import background1 from '../wallpaper/1.gif';
import background2 from '../wallpaper/2.gif';
import background3 from '../wallpaper/3.jpeg';
import background4 from '../wallpaper/4.gif';
import background5 from '../wallpaper/5.png';
import background6 from '../wallpaper/6.gif';
import background7 from '../wallpaper/7.gif';
const Notebook = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(''); // Estado para la imagen de fondo
    const [backgroundColor, setBackgroundColor] = useState('#007bff'); // Color de fondo predeterminado

    const pages = [
        <Page1 />,
        <Page2 />,
        <Page3 />,
        <Page4 />,
        <Page5 />,
        <Page6 />,
        <Page7 />
        // Agrega más componentes de página aquí
    ];

    const showPage = (index) => {
        setIsTransitioning(true); // Comienza la transición
        setBackgroundImage(getBackgroundImage(index)); //cambia el background segun la pagina
        setBackgroundColor(getBackgroundColor(index)); // Cambia el color de fondo según la página
        setTimeout(() => {
            setCurrentPageIndex(index);
            setIsTransitioning(false); // Finaliza la transición
        }, 300); // Tiempo de duración de la transición (en milisegundos)
    }
    /*
    const showPage = (index) => {
        setCurrentPageIndex(index);
    };*/

    const getBackgroundColor = (pageIndex) => {
        switch (pageIndex) {
            case 0:
                return '#007bff'; // Color para la página 1
            case 1:
                return '#727171'; // Color para la página 2
            case 2:
                return '#C3B1E1'; // Color para la pagina 3
            case 3:
                return '#ffd700';
            case 4:
                return '#800080';
            case 5:
                return '#378805';
            case 6:
                return '#FFC0CB';
            default:
                return '#007bff'; // Color predeterminado
        }
    };

    const getBackgroundImage = (pageIndex) => {
        switch (pageIndex) {
            case 0:
                return `url(${background1})`; // Imagen de fondo para la página 1
            case 1:
                return `url(${background2})`; // Imagen de fondo para la página 2
            case 2:
                return `url(${background3})`;
            case 3:
                return `url(${background4})`;
            case 4:
                return `url(${background5})`;
            case 5:
                return `url(${background6})`;
            case 6:
                return `url(${background7})`
            default:
                return ''; // Sin imagen de fondo predeterminada
        }
    }

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            showPage(currentPageIndex + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            showPage(currentPageIndex - 1);
        }
    };

    useEffect(() => {
        setIsTransitioning(false); // Asegúrate de que no quede atrapado en un estado de transición
    }, [currentPageIndex]);

    return ( /* style={{ backgroundImage }} className={`whole-page ${isTransitioning ? 'hidden': ''}`}*/
        <div className="whole-page">
            <div style={{ backgroundImage }} className={`image-layer ${isTransitioning ? 'hidden': ''}`}>
                <div style={{ backgroundColor }} className={`notebook ${isTransitioning ? 'hidden' : ''}`}>
                    <div className={`page-content ${isTransitioning ? 'hidden' : ''}`}>
                        <div className="page">
                            {pages[currentPageIndex]}
                        </div>
                    </div>
                </div>

                <div className="page-navigation">
                    <button onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
                        <img src={NextButtom} alt='previous' style={{transform: 'rotateY(180deg)', width: '100%'}}/>
                    </button>
                    <button onClick={goToNextPage} disabled={currentPageIndex === pages.length - 1}>
                        <img src={NextButtom} alt='right' style={{width: '100%'}}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notebook;