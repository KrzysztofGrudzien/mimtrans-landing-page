import { createContext } from 'react';

export const defaultOptions = {
    isOpenTimetable: false,
    isOpenNews: true,
    isOpenMenu: false,
    toggleTimetableState: () => {},
    toggleNewsState: () => {},
    toggleMenuState: () => {},
};

export const AppContext = createContext(defaultOptions);
