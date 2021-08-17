import mapaImageSmall from '../assets/img/mapa.jpg';
import mapaImageBig from '../assets/img/mapa@2x.jpg';

const Contact = () => {
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
                <img
                    src={mapaImageSmall}
                    srcSet={`${mapaImageSmall} 300w, ${mapaImageBig} 768w, ${mapaImageBig} 1280w`}
                    alt='zdjęcie mapy dojazdu do firmy'
                    className='contact-img'
                />
            </div>
            <div className='form-wrapper'>
                <form action='' className='form flex'>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Twoje imię' className='form-input' />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Adres E-mail' className='form-input' />
                        </div>
                        <div>
                            <label htmlFor=''></label>
                            <input type='text' placeholder='Temat' className='form-input' />
                        </div>
                    </div>
                    <div className='divider'>
                        <div>
                            <label htmlFor=''></label>
                            <textarea type='text' placeholder='Treść wiadomości' className='form-textarea' />
                        </div>
                        <button className='btn btn-secondary form-btn'>wyślij formularz</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
