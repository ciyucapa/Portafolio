import './index.css';

const Header = (): JSX.Element => (
    <header className='header-container'>
        <div className='header-container-box'>
            <p>Cindy Caceres</p>
        </div>
        <div className='header-container-box, isNotVisible'>
            <ul className='header-container__list-container'>
                <li className='header-container__list-container-li'>Acerca de mi</li>
                <li className='header-container__list-container-li'>Contacto</li>
                <li className='header-container__list-container-li'>Proyectos</li>
            </ul>
        </div>
        <div className='isVisible'>
            MENU
        </div>
    </header>
);

export default Header;