import Contact from './Contact';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Partners from './Partners';
import About from './About';
import Hero from './Hero';
import Services from './Services';

const Main = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Partners />
            <Testimonials />
            <CallToAction />
            <Contact />
        </main>
    );
};

export default Main;
