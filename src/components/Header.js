import envelopIcon from '../assets/img/envelop-icon.svg';
import bellIcon from '../assets/img/bell-icon.svg';
import mobilePhoneIcon from '../assets/img/mobile-phone-icon.svg';
import calendarIcon from '../assets/img/calendar-icon.svg';
import logo from '../assets/img/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-info container'>
                <ul className='header-list'>
                    <li className='header-list-item'>
                        <img src={bellIcon} alt='ikona dzwonka' className='header-list-item-img' />
                        Aktualności
                    </li>
                    <li className='header-list-item'>
                        <img src={mobilePhoneIcon} alt='ikona telefonu komórkowego' className='header-list-item-img' />
                        602 516 919
                    </li>
                    <li className='header-list-item'>
                        <img src={envelopIcon} alt='ikona koperty' className='header-list-item-img' />
                        mimtrans@o2.pl
                    </li>
                </ul>
            </div>
            <div className='header-main-content-wrapper'>
                <div className='header-main-content container flex'>
                    <h1 className='header-logo'>
                        <img src={logo} className='header-logo-img' alt='logo firmy mimtrans' />
                    </h1>
                    <nav className='nav-bar'>
                        <ul className='nav-bar-list'>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    Start
                                </a>
                            </li>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    O nas
                                </a>
                            </li>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    Usługi
                                </a>
                            </li>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    Partnerzy
                                </a>
                            </li>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    Rekomendacje
                                </a>
                            </li>
                            <li className='nav-bar-list-item'>
                                <a href='#start' className='nav-bar-list-item-link'>
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                        <button className='btn btn-secondary nav-bar-time-table-toggle'>
                            <img src={calendarIcon} alt='ikona kalendarza' className='nav-bar-time-table-toggle-img' />{' '}
                            Rozkład jazdy i taryfa biletowa
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
