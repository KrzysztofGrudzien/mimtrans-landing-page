import houseImageSmall from '../assets/img/dom-pracy-tworczej.jpg';
import houseImageBig from '../assets/img/dom-pracy-tworczej@2x.jpg';
import hotelPanoramaImageSmall from '../assets/img/hotel-panorama.jpg';
import hotelPanoramaImageBig from '../assets/img/hotel-panorama@2x.jpg';
import hotelArtisImageSmall from '../assets/img/hotel-artis.jpg';
import hotelArtisImageBig from '../assets/img/hotel-artis@2x.jpg';

const Partners = () => {
    return (
        <section className='partners container' id='partners'>
            <span className='text-id'>partnerzy</span>
            <div className='divider'>
                <span className='partners-subtitle'>Kto z nami współpracuje?</span>
                <h2 className='partners-title'>Nasi partnerzy</h2>
            </div>
            <div className='partners-cards flex'>
                <div className='partners-card'>
                    <div className='partners-card-image-wrapper'>
                        <div className='partners-card-gradient'></div>
                        <img
                            src={houseImageSmall}
                            srcSet={`${houseImageSmall} 300w, ${houseImageBig} 768w, ${houseImageBig} 1280w`}
                            alt='zdjęcie domu pracy twórczej w Radziejowicach'
                            className='partners-img'
                        />
                    </div>
                    <a href='http://palacradziejowice.pl/' target='_blank' className='partners-link'>
                        Dom Pracy Twórczej w Radziejowicach
                    </a>
                </div>
                <div className='partners-card'>
                    <div className='partners-card-image-wrapper'>
                        <div className='partners-card-gradient'></div>
                        <img
                            src={hotelArtisImageSmall}
                            srcSet={`${hotelArtisImageSmall} 300w, ${hotelArtisImageBig} 768w, ${hotelArtisImageBig} 1280w`}
                            alt='zdjęcie hotelu Artis w Radziejowicach'
                            className='partners-img'
                        />
                    </div>
                    <a href='http://www.artis-loft.pl/' target='_blank' className='partners-link'>
                        Hotel Artis-Loft w Radziejowicach
                    </a>
                </div>
                <div className='partners-card'>
                    <div className='partners-card-image-wrapper'>
                        <div className='partners-card-gradient'></div>
                        <img
                            src={hotelPanoramaImageSmall}
                            srcSet={`${hotelPanoramaImageSmall} 300w, ${hotelPanoramaImageBig} 768w, ${hotelPanoramaImageBig} 1280w`}
                            alt='zdjęcie hotelu Panorama w Mszczonowie'
                            className='partners-img'
                        />
                    </div>
                    <a href='http://www.hotelpanorama.pl/' target='_blank' className='partners-link'>
                        Hotel Panorama w Mszczonowie
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
