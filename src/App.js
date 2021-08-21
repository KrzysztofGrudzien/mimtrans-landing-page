import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import About from './components/About';

const App = () => {
    return (
        <>
            <Header />
            <About />
            <Partners />
            <Testimonials />
            <CallToAction />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
