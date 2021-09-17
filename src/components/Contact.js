import email from 'emailjs-com';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputSubjectValue, setInputSubjectValue] = useState('');
    const [inputTextValue, setInputTextValue] = useState('');
    const [isValidNameValue, setIsValidNameValue] = useState(true);

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
        email
            .sendForm('service_mndbp4a', 'template_004wjgy', e.target, 'user_BEZTTlF9BF4sl45ECgQfd')
            .then(res => {
                console.log(res);
                setIsValidNameValue(!isValidNameValue);
                setInputEmailValue('');
                setInputSubjectValue('');
                setInputNameValue('');
                setInputTextValue('');

                setTimeout(() => {
                    setIsValidNameValue(isValidNameValue);
                }, 5000);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleInputName = e => {
        const inputNameValue = e.target.value;
        setInputNameValue(inputNameValue);
    };

    const handleInputEmail = e => {
        const inputEmailValue = e.target.value;
        setInputEmailValue(inputEmailValue);
    };

    const handleInputSubject = e => {
        const inputSubjectValue = e.target.value;
        setInputSubjectValue(inputSubjectValue);
    };

    const handleInputText = e => {
        const inputTextValue = e.target.value;
        setInputTextValue(inputTextValue);
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
                <form action='' className='form flex' onSubmit={handleSendEmail}>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <input
                                type='text'
                                placeholder='Twoje imię'
                                className='form-input'
                                name='name'
                                onChange={handleInputName}
                                value={inputNameValue}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input
                                type='email'
                                placeholder='Adres E-mail'
                                className='form-input'
                                name='email'
                                onChange={handleInputEmail}
                                value={inputEmailValue}
                                required
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                            />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input
                                type='text'
                                placeholder='Temat'
                                className='form-input'
                                name='subject'
                                onChange={handleInputSubject}
                                value={inputSubjectValue}
                                required
                            />
                        </div>
                    </div>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <textarea
                                placeholder='Treść wiadomości'
                                className='form-textarea'
                                onChange={handleInputText}
                                value={inputTextValue}
                                required
                                name='message'
                            ></textarea>
                        </div>
                        <input
                            className={isValidNameValue ? 'btn btn-secondary form-btn' : 'btn btn-primary form-btn'}
                            type='submit'
                            value={isValidNameValue ? 'wyślij wiadomość' : 'wiadomość wysłano'}
                            disabled={!isValidNameValue}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
