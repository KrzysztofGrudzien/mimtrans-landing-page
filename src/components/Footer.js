import mobileAppImageSmall from '../assets/img/mobile-app-image.jpg';
import mobileAppImageBig from '../assets/img/mobile-app-image@2x.jpg';
import fbIcon from '../assets/img/fb-icon.svg';
import arrowRightIcon from '../assets/img/arrow-right.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <section className='footer flex'>
                    <article className='footer-article'>
                        <div className='footer-divider'>
                            <h3 className='footer-title'>MiMTrans - usługi transportowe </h3>
                            <p className='footer-text'>
                                Nasza firma dysponuje nowoczesnymi, bezpiecznymi i wygodnymi autobusami różnego typu. Od
                                małych dziewięcio i dwudziesto kilku osobowych busów do dużych ponad pięćdziesięcio
                                osobowych autokarów turystycznych. Organizujemy m.in. przewozy dzieci i młodzieży na
                                wycieczki, przewozy pracownicze, przewozy okazjonalne (na bankiety, konferencje, wesela
                                i pogrzeby), wycieczki krajowe. Do każdego Klienta i do każdego zlecenia podchodzimy
                                indywidualnie.
                            </p>
                        </div>
                        <div className='footer-divider'>
                            <h3 className='footer-title'>Gdzie nas znajdziesz? </h3>
                            <p className='footer-social-media'>
                                <img src={fbIcon} className='footer-social-media-img' alt='ikonka facebook'></img>
                                <a href='#start' className='footer-social-media-link'>
                                    MiMTrans - usługi transportowe
                                </a>
                            </p>
                        </div>
                        <div className='footer-divider'>
                            <h3 className='footer-title'>Mapa strony</h3>
                            <nav className='footer-nav-bar'>
                                <ul className='footer-list'>
                                    <li className='footer-list-item'>
                                        <a href='#start' className='footer-list-item-link'>
                                            start
                                        </a>
                                    </li>
                                    <li className='footer-list-item'>
                                        <a href='#about' className='footer-list-item-link'>
                                            o nas
                                        </a>
                                    </li>
                                    <li className='footer-list-item'>
                                        <a href='#services' className='footer-list-item-link'>
                                            usługi
                                        </a>
                                    </li>
                                    <li className='footer-list-item'>
                                        <a href='#testimonials' className='footer-list-item-link'>
                                            rekomendacje
                                        </a>
                                    </li>
                                    <li className='footer-list-item'>
                                        <a href='#partners' className='footer-list-item-link'>
                                            partnerzy
                                        </a>
                                    </li>
                                    <li className='footer-list-item'>
                                        <a href='#contact' className='footer-list-item-link'>
                                            kontakt
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    <article className='footer-article'>
                        <div className='divider'>
                            <div className='footer-divider'>
                                <h3 className='footer-title'>Wyszukiwarka połączeń na telefon</h3>
                                <p className='footer-text'>
                                    Pobierz wyszukiwarkę połączeń e-podróżnik.pl na telefon. Ponad 900 przewoźników,
                                    m.in. my - MIM TRANS, a także ZTM Warszawa. Szybko znajdź najdogodniejsze
                                    połączenie.
                                </p>
                            </div>
                            <div className='footer-divider'>
                                <h3 className='footer-title'>Kontakt z nami</h3>
                                <address className='footer-address'>
                                    <span className='footer-address-line'>USŁUGI TRANSPORTOWE Jerzy Wiśniewski</span>
                                    <span className='footer-address-line'>Nowa Bukówka, ul. Rumiankowa 41</span>
                                    <span className='footer-address-line'>96-321 Żabia Wola</span>
                                    <span className='footer-address-line'>Dane kontaktowe</span>
                                    <span className='footer-address-line'>Jerzy Wiśniewski: 602 516 919</span>
                                    <span className='footer-address-line'>Tadeusz Pałka: 602 128 068</span>
                                    <span className='footer-address-line'>E-mail: mimtrans@o2.pl</span>
                                </address>
                            </div>
                        </div>
                        <div className='divider'>
                            <img
                                src={mobileAppImageSmall}
                                srcSet={`${mobileAppImageSmall} 300w, ${mobileAppImageBig} 768w, ${mobileAppImageBig} 1280w`}
                                alt='zdjęcie zrzutu aplikacji mobilnej'
                                className='footer-img responsive'
                            />
                            <a
                                href='https://play.google.com/store/apps/details?id=com.inno.epodroznik.android'
                                target='_blank'
                                title='aplikacja mobilna e-podróżnik'
                                className='btn btn-secondary btn-app'
                                rel='noreferrer'
                            >
                                pobierz aplikacje z googleplay
                            </a>
                        </div>
                    </article>
                </section>
            </div>
            <div className='container flex'>
                <p className='copyright'>
                    &copy;2021. Wszelkie prawa zastrzeżone przez MiMTrans - usługi transportowe.
                </p>
                <p className='copyright'>
                    Projekt i wdrożenie{' '}
                    <a href='http://criscode.eu' className='copyright-link' rel='noreferrer'>
                        Krzysztof Grudzień
                    </a>
                </p>
            </div>
            <button className='btn btn-up'>
                <img src={arrowRightIcon} alt='strzałka do góry'></img>
            </button>
        </footer>
    );
};

export default Footer;
