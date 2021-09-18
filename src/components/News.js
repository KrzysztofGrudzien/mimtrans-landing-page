import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import closeIcon from '../assets/img/close-icon.svg';

const News = () => {
    const { isOpenNews, toggleNewsState } = useContext(AppContext);

    return (
        <article className={isOpenNews ? 'news' : 'news hide'}>
            <img
                src={closeIcon}
                className='btn news-btn'
                alt='ikonka zamykająca aktualności'
                onClick={toggleNewsState}
            />
            <h2 className='news-title'>Aktualności dotyczące kursowania połączeń autobusowych</h2>
            <ul className='news-list'>
                <li className='news-list-item'>
                    <span className='news-date'>17.09.2021</span>
                    <p className='news-description'>Kontakt mailowy po przez stronę mimtrans.pl został uruchomiony.</p>
                </li>

                <li className='news-list-item'>
                    <span className='news-date'>14.09.2021</span>
                    <p className='news-description'>
                        W związku z pracami nad nową stroną mimtrans.pl przez pewien czas mogą wystepować pewne
                        utrudnienia związane z niektórymi funkcjonalnościami strony. np: problem z wysyłaniem maila po
                        przez strone mimtrans.pl, animacjami, brak możliwości powiększania zdjęć, nie działający slider
                        czy stylami na niektórych urządzeniach mobilnych. Wszystkie powyżej wymienione problemy będą
                        usuwane z dnia na dzień. Prosimy o wyrozumiałość i cierpliowość. Rozkłady jazdy i taryfy
                        biletowe są do pobrania po przez kliknięcie we właściwą ikonkę PDF. Na chwilę obecną kontakt
                        mailowy jest możliwy po przez kliknięcie na link w prawym górnym rogu lub skopiowaniu
                        (mimtrans@o2.pl) i użycie innego serwisu obsługującego pocztę e-mail typu: poczta.wp.pl,
                        poczta.tlen.pl, gmail itp. W razie pytań proszę dzwonić pod numer 602 516 919.
                    </p>
                </li>

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
