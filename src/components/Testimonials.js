import arrowLeftIcon from '../assets/img/arrow-left-icon.svg';
import arrowRightIcon from '../assets/img/arrow-right-icon.svg';
import testimonialOneImageSmall from '../assets/img/referencja-1.png';

const Testimonials = () => {
    return (
        <section className='testimonials container' id='testimonials'>
            <span className='text-id'>rekomendacje</span>
            <div className='divider'>
                <span className='testimonials-subtitle'>Co mówią o nas?</span>
                <h2 className='contact-title'>Rekomendacje mówią same za siebie</h2>
            </div>
            <div className='slider flex-center'>
                <img src={arrowLeftIcon} className='slider-prev' alt='Strzałka przewijająca poprzednie rekomendacje' />
                <article className='slider-content'>
                    <h3 className='slider-content-title'>Dom Pracy Twórczej w Radziejowice</h3>
                    <p className='slider-content-description'>
                        Proszę przyjąć moje serdeczne podziękowania za dotychczasową współpracę. Chciałbym pogratulować
                        Panu świadczenia usług transportowych na najwyższym poziomie. Pana oraz Pańscy Współpracownicy
                        dali się poznać jako zgrany i profesjonalny zespół. Pana zaangażowanie, życzliwość,
                        elastyczność, sprawiają, że zdobywamy uznanie w oczach naszych gości. To również dzięki Pana
                        firmie Pałac w Radziejowicach postrzegany jest jako miejsce z obsługą najwyższej jakości. Licząc
                        na kolejne lata tak owocnej współpracy, przesyłam wyrazy szacunku.
                    </p>
                    <footer className='slider-content-footer'>
                        <img
                            src={testimonialOneImageSmall}
                            alt='miniaturka zdjęcia referencji z domu pracy twórczejw w Radziejowicach'
                        />
                        <div className='divider'>
                            <div className='slider-content-footer-name'>Bogumił Mrówczyński - dyrektor</div>
                            <div className='slider-content-footer-place'>"Dom Pracy Twórczej w Radziejowice"</div>
                        </div>
                    </footer>
                </article>
                <img src={arrowRightIcon} className='slider-next' alt='Strzałka przewijająca następne rekomendacje' />
            </div>
        </section>
    );
};

export default Testimonials;
