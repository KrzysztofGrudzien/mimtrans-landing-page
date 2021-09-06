import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { AppContext, defaultOptions } from './context/appContext';

const App = () => {
    const [isOpenTimetable, setIsOpenTimetable] = useState(defaultOptions.isOpenTimetable);
    const [isOpenNews, setIsOpenNews] = useState(defaultOptions.isOpenNews);
    const [isOpenMenu, setIsOpenMenu] = useState(defaultOptions.isOpenMenu);

    const handleIsOpenTimetable = () => {
        setIsOpenTimetable(!isOpenTimetable);
    };

    const handleIsOpenNews = () => {
        setIsOpenNews(!isOpenNews);
    };

    const handleIsOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <>
            <AppContext.Provider
                value={{
                    isOpenTimetable,
                    isOpenNews,
                    isOpenMenu,
                    toggleTimetableState: handleIsOpenTimetable,
                    toggleNewsState: handleIsOpenNews,
                    toggleMenuState: handleIsOpenMenu,
                }}
            >
                <Header />
                <Main />
                <Footer />
            </AppContext.Provider>
        </>
    );
};

export default App;
