import pdfIcon from '../assets/img/pdf@2x.png';
import closeIcon from '../assets/img/close-icon-dark.svg';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Timetable = () => {
    const { isOpenTimetable, toggleTimetableState } = useContext(AppContext);

    return (
        <div className={isOpenTimetable ? 'timetable flex' : 'timetable flex hide'}>
            <img
                src={closeIcon}
                className='btn news-btn'
                alt='ikonka zamykająca aktualności'
                onClick={toggleTimetableState}
            />
            <div className='timetable-buses'>
                <h3 className='timetable-title'>Rozkład jazdy linii autobusowych</h3>
                <div className='timetable-cards'>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-primary'>M</div>
                        <p className='timetable-description'>
                            Mszczonów Rynek - Radziejowice - Krze - Żabia Wola - Siestrzeń - Nadarzyn - Janki - Raszyn -
                            Warszawa P+R Al. Krakowska
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1PUDBSpbnv6LbJ30ezW0DGcrGGIwEflVT/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-secondary'>S</div>
                        <p className='timetable-description'>
                            Piotrkowice - Bartoszówka - Skuły - Ciepłe - Kaleń - Zaręby - Ojchrzanów - Żelechów -
                            Siestrzeń z przesiadką do/z Warszawy{' '}
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1z3aWLq3rwGvszMeWOw2ngVoFss6P0ziZ/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-tertiary'>A</div>
                        <p className='timetable-description'>
                            Adamów Parcel - Parcela - Krze - Radziejowice - Korytów - Żyrardów Dw. PKP{' '}
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1exRA4d5wDwNGQsqY5syUqbrVZxIPTKvi/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='timetable-tickets'>
                <h3 className='timetable-title'>Taryfa biletowa na liniach</h3>
                <div className='timetable-cards'>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-primary'>M</div>
                        <p className='timetable-description'>
                            Mszczonów Rynek - Radziejowice - Krze - Żabia Wola - Siestrzeń - Nadarzyn - Janki - Raszyn -
                            Warszawa P+R Al. Krakowska
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1TOqdoDDc_4aUysinO8Ra1N0y-L74Mrhk/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-secondary'>S</div>
                        <p className='timetable-description'>
                            Piotrkowice - Bartoszówka - Skuły - Ciepłe - Kaleń - Zaręby - Ojchrzanów - Żelechów -
                            Siestrzeń z przesiadką do/z Warszawy
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1c-8CQ_HW0usce5OdCZJ7sWlb8DWmwWgt/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-info'>info</div>
                        <p className='timetable-description'>
                            Informacja o sprzedaży biletów miesięcznych na komunikację autobusową na miesiąc czerwiec
                        </p>
                        <div className='timetable-img'>
                            <a
                                href='https://drive.google.com/file/d/1SXqIbtpnuS4HTnlxCaUBsHEO2E_aseJW/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={pdfIcon} alt='ikona pobierz pdf' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timetable;
