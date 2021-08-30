import pdfIcon from '../assets/img/pdf@2x.png';

const Timetable = () => {
    return (
        <div className='timetable flex'>
            <button className='btn timetable-btn'></button>
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
                            <img src={pdfIcon} alt='ikona pdf' />
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-secondary'>S</div>
                        <p className='timetable-description'>
                            Piotrkowice - Bartoszówka - Skuły - Ciepłe - Kaleń - Zaręby - Ojchrzanów - Żelechów -
                            Siestrzeń z przesiadką do/z Warszawy{' '}
                        </p>
                        <div className='timetable-img'>
                            <img src={pdfIcon} alt='ikona pdf' />
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-tertiary'>A</div>
                        <p className='timetable-description'>
                            Adamów Parcel - Parcela - Krze - Radziejowice - Korytów - Żyrardów Dw. PKP{' '}
                        </p>
                        <div className='timetable-img'>
                            <img src={pdfIcon} alt='ikona pdf' />
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
                            <img src={pdfIcon} alt='ikona pdf' />
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-gradient timetable-gradient-secondary'>S</div>
                        <p className='timetable-description'>
                            Piotrkowice - Bartoszówka - Skuły - Ciepłe - Kaleń - Zaręby - Ojchrzanów - Żelechów -
                            Siestrzeń z przesiadką do/z Warszawy
                        </p>
                        <div className='timetable-img'>
                            <img src={pdfIcon} alt='ikona pdf' />
                        </div>
                    </div>
                    <div className='timetable-card flex'>
                        <div className='timetable-info'>info</div>
                        <p className='timetable-description'>
                            Informacja o sprzedaży biletów miesięcznych na komunikację autobusową na miesiąc czerwiec
                        </p>
                        <div className='timetable-img'>
                            <img src={pdfIcon} alt='ikona pdf' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timetable;
