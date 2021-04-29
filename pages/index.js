import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeaturedListings from "../src/components/FeaturedListings/FeaturedListings";

export default function Index() {
    return (
        <Box>
            <HeroSection/>
            <FeaturedListings/>
        </Box>
    );
}
