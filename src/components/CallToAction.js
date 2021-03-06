import infoPersonImageSmall from '../assets/img/info-person.png';
import infoPersonImageBig from '../assets/img/info-person@2x.png';
import greenBusImageSmall from '../assets/img/bus-green.png';
import greenBusImageBig from '../assets/img/bus-green@2x.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    useEffect(() => {
        gsap.from('.call-action', {
            duration: 0.4,
            y: '-100',
            opacity: 0,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: '.call-action',
                start: 'top 90%',
                end: 'bootom 20%',
                toggleActions: 'restart complete reverse reset',
            },
        });
    }, []);

    return (
        <section className='call-action'>
            <div className='container flex-column'>
                <img
                    src={infoPersonImageSmall}
                    srcSet={`${infoPersonImageSmall} 300w, ${infoPersonImageBig} 768w, ${infoPersonImageBig} 1280w`}
                    alt='zdjęcie kobiety pokazujące usługi serwisowe'
                    className='call-action-img'
                />
                <ul className='call-action-list'>
                    <li className='call-action-list-item'> - usługi transportowe</li>
                    <li className='call-action-list-item'> - przewozy pracownicze</li>
                    <li className='call-action-list-item'> - obsługa linii autobusowych</li>
                    <li className='call-action-list-item'> - dowozy pracownicze</li>
                    <li className='call-action-list-item'> - wycieczki krajowe i zagraniczne</li>
                </ul>
                <span className='call-action-question'>Masz pytania? Dzwoń na nasz numer:</span>
                <span className='call-action-number'>+48 602 516 919</span>
                <img
                    src={greenBusImageSmall}
                    srcSet={`${greenBusImageSmall} 300w, ${greenBusImageBig} 768w, ${greenBusImageBig} 1280w`}
                    alt='zielony autobus'
                    className='call-action-img-bus'
                />
            </div>
        </section>
    );
};

export default CallToAction;
