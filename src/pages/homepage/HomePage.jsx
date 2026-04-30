import { useEffect, useState } from 'react';
import Banner from '../../components/homepage/Banner';
import StatusCard from '../../components/homepage/StatusCard';
import YourFriends from '../../components/homepage/YourFriends';
import { HashLoader } from 'react-spinners';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);
        if (loading) {
            return (
                <div className="flex justify-center items-center min-h-[60vh]">
                    <HashLoader color="#244D3F" />
                </div>
            );
        }
    return (
        <>
            <Banner></Banner>
            <StatusCard></StatusCard>
            <YourFriends></YourFriends>
        </>
    );
};

export default HomePage;