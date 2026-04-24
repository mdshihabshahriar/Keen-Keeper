import React from 'react';
import Banner from '../../components/homepage/Banner';
import StatusCard from '../../components/homepage/StatusCard';
import YourFriends from '../../components/homepage/YourFriends';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <StatusCard></StatusCard>
            <YourFriends></YourFriends>
        </>
    );
};

export default HomePage;