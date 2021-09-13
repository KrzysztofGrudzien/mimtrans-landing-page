import arrowLeftIcon from '../assets/img/arrow-left-icon.svg';
import arrowRightIcon from '../assets/img/arrow-right-icon.svg';
import { useState } from 'react';
import { slides } from '../data/slides';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const [nextSlide, setNextSlide] = useState(100);

    const handleNextSlide = () => {
        if (nextSlide > 100) {
            setNextSlide(0);
        } else {
            setNextSlide(nextSlide + 100);
        }
    };

    const handlePrevSlide = () => {
        if (nextSlide < 100) {
            setNextSlide(0);
        } else {
            setNextSlide(nextSlide - 100);
        }
    };

    useEffect(() => {
        gsap.from('.testimonials', {
            duration: 0.4,
            y: '-100',
            opacity: 0,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 90%',
                end: 'bootom 20%',
                toggleActions: 'restart complete reverse reset',
            },
        });
    }, []);

    return (
        <section className='testimonials container' id='testimonials'>
            <span className='text-id'>rekomendacje</span>
            <div className='divider'>
                <span className='testimonials-subtitle'>Co mówią o nas?</span>
                <h2 className='contact-title'>Rekomendacje mówią same za siebie</h2>
            </div>
            <div className='slider'>
                <img
                    src={arrowLeftIcon}
                    className='slider-prev'
                    alt='Strzałka przewijająca poprzednie rekomendacje'
                    onClick={handlePrevSlide}
                />
                {slides.map((slide, i) => (
                    <article className='slider-content' style={{ transform: `translateX(${i * -100 + nextSlide}%)` }}>
                        <h3 className='slider-content-title'>{slide.title}</h3>
                        <p className='slider-content-description'>{slide.description}</p>
                        <footer className='slider-content-footer'>
                            <img src={slide.image} alt={slide.alt} />
                            <div className='divider'>
                                <div className='slider-content-footer-name'>{slide.name}</div>
                                <div className='slider-content-footer-place'>{slide.subtitle}</div>
                            </div>
                        </footer>
                    </article>
                ))}
                <img
                    src={arrowRightIcon}
                    className='slider-next'
                    alt='Strzałka przewijająca następne rekomendacje'
                    onClick={handleNextSlide}
                />
            </div>
        </section>
    );
};

export default Testimonials;
