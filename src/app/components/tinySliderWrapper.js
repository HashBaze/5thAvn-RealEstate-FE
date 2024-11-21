'use client';
import React from 'react';
import TinySlider from 'tiny-slider-react';

const TinySliderWrapper = ({ children, settings }) => {
    return (
        <TinySlider {...settings}>
            {children}
        </TinySlider>
    );
};

export default TinySliderWrapper;
