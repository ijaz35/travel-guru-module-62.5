import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import images from '../../image'
import './Slider.css'

const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])
    return (
        <motion.div ref={carousel} className='carousel overflow-hidden ' whileTap={{ cursor: 'grabbing' }}>

            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel align-items-center d-flex'>
                {
                    images.map(image => {
                        return (
                            <motion.div className='item'
                                key={image}
                            >
                                <img

                                    src={image} alt="" />

                            </motion.div>
                        );
                    })
                }
            </motion.div>

        </motion.div>
    );
};

export default Slider;