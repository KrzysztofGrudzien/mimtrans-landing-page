import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useEffect(() => {
        gsap.from('.contact', {
            duration: 0.4,
            y: '-100',
            opacity: 0,
            ease: 'ease-in-out',
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 90%',
                end: 'bootom 20%',
                toggleActions: 'restart complete reverse reset',
            },
        });
    }, []);

    const handleSendEmail = e => {
        e.preventDefault();
    };

    return (
        <section className='contact container flex' id='contact'>
            <span className='text-id'>kontakt</span>
            <div className='divider'>
                <span className='contact-subtitle'>kontakt z nami</span>
                <h2 className='contact-title'>
                    Nie wahaj skontaktować <br />
                    się z nami.
                </h2>
                <p className='contact-text'>
                    Jeśli chcesz się z nami skontaktować, zadać nam pytanie w sprawie wynajmu pojazdu lub zgłosić jakieś
                    zastrzeżenia czy uwagi do realizowanych przewozów, skorzystaj z poniższego formularza i wyślij
                    wiadomość. Odpowiemy jak najszybciej.
                </p>
            </div>
            <div className='divider'>
                <div className='mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            width='100%'
                            height='400'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=Nowa%20Buk%C3%B3wka,%20ul.%20Rumiankowa%2041%2096-321%20%C5%BBabia%20Wola&t=&z=13&ie=UTF8&iwloc=&output=embed'
                            frameBorder='0'
                            scrolling='no'
                            marginHeight='0'
                            marginWidth='0'
                            title='google map'
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='form-wrapper'>
                <form action='' className='form flex'>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Twoje imię' className='form-input' name='name' />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Adres E-mail' className='form-input' name='email' />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Temat' className='form-input' name='subject' />
                        </div>
                    </div>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <textarea
                                type='text'
                                placeholder='Treść wiadomości'
                                className='form-textarea'
                                name='message'
                            />
                        </div>
                        <button className='btn btn-secondary form-btn' type='submit' onClick={handleSendEmail}>
                            wyślij formularz
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
