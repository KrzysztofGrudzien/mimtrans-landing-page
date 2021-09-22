import busesImageSmall from '../assets/img/buses.jpg';
import busesImageBig from '../assets/img/buses@2x.jpg';
import buseGreenImageSmall from '../assets/img/bus-zielony-2.jpg';
import buseGreenImageBig from '../assets/img/bus-zielony-2@2x.jpg';
import touristIconWhite from '../assets/img/tourist-white-icon.svg';
import healthIconWhite from '../assets/img/health-white-icon.svg';
import transportIconWhite from '../assets/img/transport-white-icon.svg';
import experienceIconWhite from '../assets/img/experience-white-icon.svg';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        gsap.from('.about', {
            duration: 0.4,
            y: '-100',
            opacity: 0,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 90%',
                end: 'bootom 50%',
                toggleActions: 'restart complete reverse reset',
            },
        });
    }, []);

    return (
        <section className='about container flex' id='about'>
            <span className='text-id'>o nas</span>
            <div className='divider'>
                <span className='about-subtitle'>Kilka słów o nas</span>
                <h2 className='about-title'>Nasza krótka historia</h2>
                <p className='about-text'>
                    Jesteśmy firmą z doświadczeniem - działamy w branży od 1992 roku. Przez ten czas zdążyliśmy
                    przetrzeć szlaki, które pozwoliły nam na wyznaczenie wysokich standardów oferowanych usług.
                    Specjalizujemy się w przewozach pasażerskich i transporcie drogowym. <br />
                    <br />
                    Nasze doświadczenie procentuje - zaufały nam powszechnie szanowane firmy różnych branż. Nasza firma
                    jest gwarantem wysokiej jakości świadczonych usług. Posiadamy wszystkie wymagane licencje i
                    certyfikaty. Nie spoczywamy jednak na laurach. Ciągle staramy się czynić nasze usługi doskonalszymi
                    tak, aby zadowolić każdego naszego klienta.Nasza wieloletnia praca została doceniona przez
                    Samorządy. <br />
                    <br />W 2020 roku staliśmy się operatorem transportu publicznego organizowanego przez 3 różne
                    Jednostki: Powiat Grodziski, Powiat Żyrardowski i Gminę Żabia Wola. W 2021 roku kontynuujemy obsługę
                    linii autobusowych użyteczności publicznej dla dwóch Organizatorów. Pasażerowie mają zapewnioną
                    bardzo dobrą ofertę komunikacyjną i wysoki komfort podróży.
                </p>
            </div>
            <div className='divider'>
                <img
                    src={busesImageSmall}
                    srcSet={`${busesImageSmall} 300w, ${busesImageBig} 768w, ${busesImageBig} 1280w`}
                    alt='zdjęcie autobusów i autokarów wycieczkowych'
                    className='about-img'
                />
            </div>
            <div className='divider'>
                <span className='about-subtitle'>Stawiamy na rozwój!</span>
                <h2 className='about-title'>Plany na przyszłość</h2>
                <p className='about-text'>
                    Cały czas unowocześniamy naszą flotę pojazdów, tak aby spełniała oczekiwania coraz bardziej
                    wymagających Klientów. Zakupiliśmy nowe autobusy, które już jeżdżą na naszych liniach. Autobusy te
                    można także zamawiać do przewozów grup.
                    <br />
                    <br />
                    MiM Trans stawia na młodych ludzi. Dzięki współpracy z naszą firmą uczniowie szkół technicznych i
                    studenci nabywają cennego doświadczenia, które później umożliwia im osiągnięcie sukcesu zawodowego.
                </p>
            </div>
            <div className='divider'>
                <span className='about-subtitle'>Kto zarządza firmą?</span>
                <h2 className='about-title'>Właściciele firmy</h2>
                <p className='about-text'>
                    Właścicielami MiM Trans USŁUGI TRANSPORTOWE Jerzy Wiśniewski są P. Jerzy Wiśniewski i P. Tadeusz
                    Pałka
                    <br />
                </p>
            </div>
            <div className='divider'>
                <span className='about-subtitle'>Dlaczego my?</span>
                <h2 className='about-title'>Co nas wyróżnia?</h2>
                <p className='about-text'>
                    Sprawna komunikacja wymaga bardzo dobrych pracowników obsługi technicznej. Dzięki naszym mechanikom
                    pojazdy naszej firmy są zawsze sprawne, bezpieczne, w pełni gotowe do drogi. Zatrudnieni w naszej
                    firmie kierowcy są doskonale wyszkoleni i posiadają duże doświadczenie w prowadzeniu pojazdów.{' '}
                    <br />
                    <br /> Nasza firma dysponuje nowoczesnymi, bezpiecznymi i wygodnymi autobusami różnego typu. Od
                    małych dziewięcio i dwudziesto kilku osobowych busów do dużych ponad pięćdziesięcio osobowych
                    autokarów turystycznych. Organizujemy m.in. przewozy dzieci i młodzieży na wycieczki, przewozy
                    pracownicze, przewozy okazjonalne (na bankiety, konferencje, wesela i pogrzeby), wycieczki krajowe.
                    Do każdego Klienta i do każdego zlecenia podchodzimy indywidualnie.
                    <br />
                    <br />
                </p>
            </div>
            <div className='divider'>
                <img
                    src={buseGreenImageSmall}
                    srcSet={`${buseGreenImageSmall} 300w, ${buseGreenImageBig} 768w, ${buseGreenImageBig} 1280w`}
                    alt='zdjęcie zielonego busa na linii Warszawa Mszczonów'
                    className='about-img'
                />
            </div>
            <div className='about-cards flex'>
                <article className='about-card'>
                    <img src={healthIconWhite} alt='icon' className='about-card-icon' />
                    <h3 className='about-card-title'>Doświadczenie i bezpieczeństwo</h3>{' '}
                </article>
                <article className='about-card'>
                    <img src={transportIconWhite} alt='icon' className='about-card-icon' />
                    <h3 className='about-card-title'>Kompleksowe usługi przewozowe</h3>
                </article>
                <article className='about-card'>
                    <img src={experienceIconWhite} alt='icon' className='about-card-icon' />
                    <h3 className='about-card-title'>Wysoka jakość i konkurencyjne ceny</h3>
                </article>
                <article className='about-card'>
                    <img src={touristIconWhite} alt='icon' className='about-card-icon' />
                    <h3 className='about-card-title'>Indywidualne podejście do klienta i zlecenia</h3>
                </article>
            </div>
        </section>
    );
};

export default About;
