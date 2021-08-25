const News = () => {
    return (
        <article className='news'>
            <button className='btn news-btn'></button>
            <h2 className='news-title'>Aktualności dotyczące kursowania połączeń autobusowych</h2>
            <ul className='news-list'>
                <li className='news-list-item'>
                    <span className='news-date'>7.04.2021</span>
                    <p className='news-description'>
                        Linie autobusowe, pomimo epidemii kursują bez zmian, zgodnie z rozkładem jazdy dostępnym poniżej
                        na naszej stronie internetowej.
                    </p>
                </li>
                <li className='news-list-item'>
                    <span className='news-date'>28.03.2021</span>
                    <p className='news-description'>
                        W związku ze zwiększoną liczbą zachorowań na Covid-19 od 29 marca 2021 r. do odwołania nie
                        funkcjonuje stacjonarny punkt sprzedaży biletów miesięcznych w Żabiej Woli przy ul.
                        Spółdzielczej. Bilety miesięczne można nabyć kontaktując się pod numer telefonu: 602 128 068.
                    </p>
                </li>

                <li className='news-list-item'>
                    <span className='news-date'>15.02.2021</span>
                    <p className='news-description'>
                        Od 1 marca 2021 r. obowiązuje nowy rozkład jazdy i trasa linii Adamów - Radziejowice - Żyrardów.
                        Rozkład jazdy dostępny jest do pobrania poniżej. Zachęcamy do korzystania z obsługiwanych przez
                        nas połączeń autobusowych.
                    </p>
                </li>
            </ul>
        </article>
    );
};

export default News;
