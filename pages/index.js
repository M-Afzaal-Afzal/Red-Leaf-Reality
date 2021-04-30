import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/HeroSection/HeroSection";
import FeaturedListings from "../src/components/FeaturedListings/FeaturedListings";
import TopProducer from "../src/components/TopProducer/TopProducer";
import Testimonials from "../src/components/Testimonials/Testimonials";
import ImageGallery from "../src/components/ImageGallery/ImageGallery";
import Blogs from "../src/components/Blogs/Blogs";

export default function Index() {
    return (
        <Box>
            <HeroSection/>
            <FeaturedListings/>
            <TopProducer/>
            <Testimonials/>
            <ImageGallery/>
            <Blogs/>
        </Box>
    );
}
