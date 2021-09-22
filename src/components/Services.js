import mapaImageSmall from '../assets/img/mapa-radziejowic.jpg';
import mapaImageBig from '../assets/img/mapa-radziejowic@2x.jpg';
import envelopIconWhite from '../assets/img/envelop-icon-white.svg';
import turnIcon from '../assets/img/turn-icon.svg';
import snowIcon from '../assets/img/snow-icon.svg';
import toiletIcon from '../assets/img/toilet-icon.svg';
import busGreenImage from '../assets/img/bus-zielony.jpg';
import busBlueImage from '../assets/img/bus-niebieski2.jpg';
import busGreenWideImage from '../assets/img/bus-zielony-szeroki.jpg';
import busOrangeWideImage from '../assets/img/bus-pomaranczowy-szeroki.jpg';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const [isFlippedCardOne, setIsFlippedCardOne] = useState(true);
    const [isFlippedCardTwo, setIsFlippedCardTwo] = useState(false);
    const [isFlippedCardThree, setIsFlippedCardThree] = useState(false);

    const handleIsCardFlippedCardOne = () => {
        setIsFlippedCardOne(!isFlippedCardOne);
    };
    const handleIsCardFlippedCardTwo = () => {
        setIsFlippedCardTwo(!isFlippedCardTwo);
    };
    const handleIsCardFlippedCardThree = () => {
        setIsFlippedCardThree(!isFlippedCardThree);
    };

    useEffect(() => {
        gsap.from('.services', {
            duration: 0.4,
            y: '-100',
            opacity: 0,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: '.services',
                start: 'top 90%',
                end: 'bootom 50%',
                toggleActions: 'restart complete reverse reset',
            },
        });
    }, []);

    return (
        <section className='services container flex' id='services'>
            <span className='text-id'>usługi</span>
            <div className='divider'>
                <span className='services-subtitle'>Krótko i na temat</span>
                <h2 className='services-title'>Informacje ogólne</h2>
                <p className='services-text'>
                    Nasza firma oferuje wynajem różnej wielkości pojazdów (busów, autokarów). Przedstawiamy je Państwu w
                    galerii zdjęć. Prowadzimy wycieczki w dowolne miejsce w Polsce i w Europie (wycieczki szkolne,
                    pielgrzymki, wyjazdy integracyjne, przewóz gości weselnych, przewóz pracowników itp.). Posiadamy
                    wysokiej klasy samochody, które czynią podróż bezpieczną i komfortową. W ofercie wynajmu mamy także
                    9 osobowe samochody. Prosimy o przesłanie do nas zapytania ofertowego lub kontakt telefoniczny -{' '}
                    <strong>602 128 068</strong>
                    <a href='#contact' className='btn btn-secondary services-link'>
                        <img src={envelopIconWhite} alt='ikonka koperty' className='services-link-img' /> Wyślij
                        formularz kontaktowy
                    </a>
                </p>
                <div className='divider-inner'>
                    <span className='services-subtitle'>Lista poszczególnych usług</span>
                    <h2 className='services-title'>Zakres usług obejmuje</h2>
                    <ul className='services-list'>
                        <li className='services-list-item'>usługi transportowe</li>
                        <li className='services-list-item'>wynajem autobusów</li>
                        <li className='services-list-item'>obsługa linii autobusowych</li>
                        <li className='services-list-item'>wycieczki krajowe i zagraniczne</li>
                        <li className='services-list-item'>przewozy pracownicze</li>
                        <li className='services-list-item'>dowóz dzieci z i do szkół</li>
                        <li className='services-list-item'>transport na lotnisko</li>
                    </ul>
                </div>
            </div>
            <div className='divider'>
                <span className='services-subtitle'>Elastyczne usługi</span>
                <h2 className='services-title'>Transport lokalny</h2>
                <p className='services-text'>
                    Oprócz wynajmu autobusów na wycieczki i przejazdy okazjonalne obsługujemy regularne linie
                    autobusowe.Codziennie dokonujemy wszelkich starań aby pasażerom zapewnić bezpieczeństwo i jak
                    najlepszy komfort podróżowania naszymi autobusami. Nasza firma dysponuje nowoczesnymi, bezpiecznymi
                    i wygodnymi autobusami różnego typu. Od małych dziewięcio i dwudziesto kilku osobowych busów do
                    dużych ponad pięćdziesięcio osobowych autokarów turystycznych. Organizujemy m.in. przewozy dzieci i
                    młodzieży na wycieczki, przewozy pracownicze, przewozy okazjonalne (na bankiety, konferencje, wesela
                    i pogrzeby), wycieczki krajowe. Do każdego Klienta i do każdego zlecenia podchodzimy indywidualnie.
                    Wszelkie zapytania i uwagi prosimy przekazywać formą elektroniczną (e-mailem lub wiadomością na
                    Facebook'u) lub telefonicznie.
                </p>
                <p className='services-text-big'>
                    Zapewniamy regularny sprawny transport mieszkańcom Mszczonowa, Radziejowic, Żabiej Woli, Żyrardowa,
                    Nadarzyna i Raszyna.
                </p>
                <img
                    src={mapaImageSmall}
                    srcSet={`${mapaImageSmall} 300w, ${mapaImageBig} 768w, ${mapaImageBig} 1280w`}
                    alt='zdjęcie mapy Radziejowic'
                    className='services-img'
                />
            </div>
            <div className='services-vehicles'>
                <span className='services-subtitle'>Dostępne samochody</span>
                <h2 className='services-title'>Nasza flota samochodowa</h2>
                <div className='services-cards flex'>
                    <div className='services-card' onClick={handleIsCardFlippedCardOne}>
                        <div
                            className={isFlippedCardOne ? 'services-card-wrapper' : 'services-card-wrapper is-flipped'}
                        >
                            <div className='services-card-face services-card-face-front'>
                                <h3 className='services-card-title'>Busy</h3>
                                <div className='services-card-description'>
                                    <ul className='services-list'>
                                        <li className='services-list-item'>Wynajem busów z kierowcą</li>
                                        <li className='services-list-item'>Wynajem busów bez kierowcy</li>
                                        <li className='services-list-item'>Przewozy pracownicze</li>
                                        <li className='services-list-item'>Obsługa linii autobusowych</li>
                                    </ul>
                                </div>
                                <div className='services-gallery'>
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busBlueImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                </div>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>
                                        Wyposażenie -{' '}
                                        <img
                                            src={snowIcon}
                                            alt='ikonka klimatyzacji'
                                            className='services-card-footer-img'
                                        />
                                    </p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                            <div className='services-card-face services-card-face-back'>
                                <h3 className='services-card-title'>Przewóz osób i wynajem</h3>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>
                                        Liczba miejsc - do 8 + (kierowca)
                                    </p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className='services-card' onClick={handleIsCardFlippedCardTwo}>
                        <div
                            className={isFlippedCardTwo ? 'services-card-wrapper' : 'services-card-wrapper is-flipped'}
                        >
                            <div className='services-card-face services-card-face-front'>
                                <h3 className='services-card-title'>Autokary i busy wycieczkowe</h3>
                                <div className='services-card-description'>
                                    <ul className='services-list'>
                                        <li className='services-list-item'>Przewóz osób</li>
                                        <li className='services-list-item'>Wynajem autokarów</li>
                                        <li className='services-list-item'>Wycieczki krajowe i zagraniczne</li>
                                    </ul>
                                </div>
                                <div className='services-gallery'>
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                </div>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>
                                        Wyposażenie -{' '}
                                        <img
                                            src={snowIcon}
                                            alt='ikonka klimatyzacji'
                                            className='services-card-footer-img'
                                        />
                                        <img
                                            src={toiletIcon}
                                            alt='ikonka toalety'
                                            className='services-card-footer-img'
                                        />
                                    </p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                            <div className='services-card-face services-card-face-back'>
                                <h3 className='services-card-title'>Wycieczki</h3>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>Liczba miejsc - 23-52 z kierowcą</p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className='services-card' onClick={handleIsCardFlippedCardThree}>
                        <div
                            className={
                                isFlippedCardThree ? 'services-card-wrapper' : 'services-card-wrapper is-flipped'
                            }
                        >
                            <div className='services-card-face services-card-face-front'>
                                <h3 className='services-card-title'>Transport publiczny</h3>
                                <div className='services-card-description'>
                                    <ul className='services-list'>
                                        <li className='services-list-item'>Obsługa linii komunikacyjnych</li>
                                    </ul>
                                </div>
                                <div className='services-gallery'>
                                    <img
                                        src={busGreenImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busGreenWideImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                    <img
                                        src={busOrangeWideImage}
                                        alt='miniaturka zielonego busa mimtrans'
                                        className='services-gallery-img'
                                    />
                                </div>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>
                                        Wyposażenie -{' '}
                                        <img
                                            src={snowIcon}
                                            alt='ikonka klimatyzacji'
                                            className='services-card-footer-img'
                                        />
                                        <img
                                            src={toiletIcon}
                                            alt='ikonka toalety'
                                            className='services-card-footer-img'
                                        />
                                    </p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                            <div className='services-card-face services-card-face-back'>
                                <h3 className='services-card-title'>Transport publiczny</h3>
                                <footer className='services-card-footer'>
                                    <p className='services-card-footer-description'>
                                        Liczba miejsc - 23-52 bez kierowcy + miejsca stojące
                                    </p>
                                    <img
                                        src={turnIcon}
                                        alt='ikonka odwróć karte'
                                        className='services-card-footer-img'
                                    />
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
