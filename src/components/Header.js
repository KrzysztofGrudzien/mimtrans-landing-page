import envelopIcon from '../assets/img/envelop-icon.svg';
import bellIcon from '../assets/img/bell-icon.svg';
import mobilePhoneIcon from '../assets/img/mobile-phone-icon.svg';
import calendarIcon from '../assets/img/calendar-icon.svg';
import closeIcon from '../assets/img/close-icon-dark.svg';
import menuIcon from '../assets/img/menu-open-icon.svg';
import logo from '../assets/img/logo.svg';
import Timetable from './Timetable';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { Link } from 'react-scroll';

const Header = () => {
    const { isOpenMenu, toggleTimetableState, toggleNewsState, toggleMenuState } = useContext(AppContext);

    return (
        <header className='header'>
            <Timetable />
            <div className='header-info container'>
                <ul className='header-list'>
                    <li className='header-list-item' onClick={toggleNewsState}>
                        <img src={bellIcon} alt='ikona dzwonka' className='header-list-item-img' />
                        Aktualności
                    </li>
                    <li className='header-list-item'>
                        <img src={mobilePhoneIcon} alt='ikona telefonu komórkowego' className='header-list-item-img' />
                        602 516 919
                    </li>
                    <li className='header-list-item'>
                        <img src={envelopIcon} alt='ikona koperty' className='header-list-item-img' />
                        <a href='mailto:mimtrans@o2.pl' className='header-list-item-link'>
                            mimtrans@o2.pl
                        </a>
                    </li>
                    <button
                        className='btn btn-secondary nav-bar-time-table-toggle nav-bar-time-table-toggle-header'
                        onClick={toggleTimetableState}
                    >
                        <img src={calendarIcon} alt='ikona kalendarza' className='nav-bar-time-table-toggle-img' />{' '}
                        Rozkład jazdy i taryfa biletowa
                    </button>
                </ul>
            </div>
            <div className='header-main-content-wrapper'>
                <div className='header-main-content container flex'>
                    <h1 className='header-logo'>
                        <img src={logo} className='header-logo-img' alt='logo firmy mimtrans' />
                    </h1>
                    <div className='nav-box'>
                        <img src={menuIcon} className='nav-box-img' alt='ikonka navigacji' onClick={toggleMenuState} />
                    </div>
                    <nav className='nav-bar'>
                        <ul className='nav-bar-list'>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='start'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    Start
                                </Link>
                            </li>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    O nas
                                </Link>
                            </li>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='services'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    Usługi
                                </Link>
                            </li>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='partners'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    {' '}
                                    Partnerzy
                                </Link>
                            </li>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='testimonials'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    Rekomendacje
                                </Link>
                            </li>
                            <li className='nav-bar-list-item'>
                                <Link
                                    activeClass='active'
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-list-item-link'
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                        <button className='btn btn-secondary nav-bar-time-table-toggle' onClick={toggleTimetableState}>
                            <img src={calendarIcon} alt='ikona kalendarza' className='nav-bar-time-table-toggle-img' />{' '}
                            Rozkład jazdy i taryfa biletowa
                        </button>
                    </nav>
                    <nav className={isOpenMenu ? 'nav-bar-mobile' : 'nav-bar-mobile hide-mobile'}>
                        <img
                            src={closeIcon}
                            alt='ikonka zamknięcia navigacji'
                            className='nav-bar-mobile-img'
                            onClick={toggleMenuState}
                        ></img>
                        <ul className='nav-bar-mobile-list'>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='start'
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    Start
                                </Link>
                            </li>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    O nas
                                </Link>
                            </li>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='services'
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    Usługi
                                </Link>
                            </li>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='partners'
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    Partnerzy
                                </Link>
                            </li>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='testimonials'
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    Rekomendacje
                                </Link>
                            </li>
                            <li className='nav-bar-mobile-list-item'>
                                <Link
                                    activeClass='active'
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={500}
                                    className='nav-bar-mobile-list-item-link'
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
