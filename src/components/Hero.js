import busGreyImage from '../assets/img/bus-grey@2x.png';
import arrowLeftWhiteIcon from '../assets/img/arrow-left-white-icon.svg';
import arrowRightWhiteIcon from '../assets/img/arrow-right-white-icon.svg';
import News from './News';

const Hero = () => {
    return (
        <div className='hero'>
            <News />
            <img src={arrowLeftWhiteIcon} alt='' className='hero-slide-left' />
            <div className='hero-slider'>
                <div className='hero-slider-image-box'>
                    <h2 className='hero-slider-title reset-skew'>
                        mim<b>trans</b>
                    </h2>
                    <h3 className='hero-slider-subtitle reset-skew'>przewóz osób</h3>
                    <p className='hero-slider-description reset-skew'>
                        Zapewniamy regularny sprawny transport mieszkańcom Mszczonowa, Radziejowic, Żabiej Woli,
                        Żyrardowa, Nadarzyna i Raszyna.
                    </p>
                </div>
                <img src={busGreyImage} alt='bus' className='hero-slider-image' />
                <div className='hero-slider-image-box'></div>
            </div>
            <img src={arrowRightWhiteIcon} alt='' className='hero-slide-right' />
        </div>
    );
};

export default Hero;
