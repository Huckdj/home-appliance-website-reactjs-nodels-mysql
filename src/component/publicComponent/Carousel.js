import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import imgBanner from './img/imgBanner1.jpg';
// import imgBanner1 from './img/imgBanner2.jpg';

import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";


function SlideWeb() {
    const slideImages = [
        {
            url: banner1,
        },

        {
            url: banner2,
        },
        {
            url: banner3,
        },
    ];

    return (
        <div>
            <Slide>
                
            </Slide>
        </div>
    );
}

export default SlideWeb;