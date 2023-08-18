import React, { useState , useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import './Notebook.css';
import NextButtom from '../img/right_arrow2.gif'
const Notebook = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(''); // Estado para la imagen de fondo
    const [backgroundColor, setBackgroundColor] = useState('#007bff'); // Color de fondo predeterminado

    const pages = [
        <Page1 />,
        <Page2 />,
        <Page3 />

        // Agrega más componentes de página aquí
    ];

    const showPage = (index) => {
        setIsTransitioning(true); // Comienza la transición
        setBackgroundColor(getBackgroundColor(index)); // Cambia el color de fondo según la página
        setBackgroundImage(`'url('../wallpaper/${index + 1}.${index === 0 ? 'gif' : 'jpg'}')'`);
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
            default:
                return '#007bff'; // Color predeterminado
        }
    };

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

    return (
        <div style={{
            backgroundImage: backgroundImage, // Agrega la propiedad backgroundImage aquí
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
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
    );
};

export default Notebook;