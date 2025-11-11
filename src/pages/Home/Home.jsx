import React from 'react';
import LatestReview from '../../components/LatestReview/LatestReview';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
             <HeroSection></HeroSection>
            <LatestReview></LatestReview>
        </div>
    );
};

export default Home;