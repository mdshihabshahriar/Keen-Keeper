import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { createContext, useContext, useState } from 'react';

export const InteractionContext = createContext();
export const useInteractions = () => useContext(InteractionContext);

const RootLayout = () => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (type, friendName) => {
        setInteractions(prev => [{
            id: Date.now(),
            type,
            friendName,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long', day: 'numeric', year: 'numeric'
            })
        }, ...prev]);
    };
    return (
        <div>
            <InteractionContext.Provider value={{ interactions, addInteraction }}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </InteractionContext.Provider>
        </div>
    );
};

export default RootLayout;