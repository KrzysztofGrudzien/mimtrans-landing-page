import busGreyImage from '../assets/img/bus-zielony-2@2x.jpg';
import News from './News';

const Hero = () => {
    return (
        <div className='hero' id='start'>
            <News />
            <div className='hero-slider'>
                <div className='hero-slider-image-box'>
                    <h2 className='hero-slider-title reset-skew'>
                        mim<b>trans</b>
                    </h2>
                    <h3 className='hero-slider-subtitle reset-skew'>USŁUGI TRANSPORTOWE Jerzy Wiśniewski</h3>
                    <p className='hero-slider-description reset-skew'>
                        Nasza firma oferuje wynajem różnej wielkości pojazdów (busów, autokarów). Przedstawiamy je
                        Państwu w galerii zdjęć. Prowadzimy wycieczki w dowolne miejsce w Polsce i w Europie (wycieczki
                        szkolne, pielgrzymki, wyjazdy integracyjne, przewóz gości weselnych, przewóz pracowników itp.)
                    </p>
                    <p className='hero-slider-description reset-skew'>
                        Zapewniamy regularny sprawny transport mieszkańcom Mszczonowa, Radziejowic, Żabiej Woli,
                        Żyrardowa, Nadarzyna i Raszyna.
                    </p>
                </div>
                <img src={busGreyImage} alt='bus' className='hero-slider-image' />
                <div className='hero-slider-image-box'></div>
            </div>
        </div>
    );
};

export default Hero;
