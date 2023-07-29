import React from 'react'

import Kerala from '../assets/Kerala.jpg';
import Kashmir from '../assets/kashmir.jpg';
import Kashmir2 from '../assets/Kashmir2.jpg';
// import Kashmir3 from '../assets/kashmir-hd-wallpape.jpg';
import SouthGoa from '../assets/india-agonda-agonda-beach-tropical.jpg';
import Karnataka from '../assets/photo.jpg';
import WestBengal from '../assets/images.jpg';
import Odisha from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4' id='Travel'>

    <SelectsCard bg={Kerala} text='Kerala' />
    <SelectsCard bg={SouthGoa} text='South-Goa' />
    <SelectsCard bg={Kashmir} text='Kashmir' />
    <SelectsCard bg={Karnataka} text='Karnataka' />
    <SelectsCard bg={WestBengal} text='WestBengal' />
    <SelectsCard bg={Odisha} text='Odisha' />
    
        
    </div>
  )
}

export default Selects