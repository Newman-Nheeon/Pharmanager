import React from 'react'
import drugimage from './image.svg'

const Dispensary: React.FC = () => {
    return (
        <div className='drug-item-container'>
            <div className='drug-dispensary'>
                <img src={drugimage} alt="drug" width="10px"/>
                <div className='description'>
                    <h3>Penicillin ointment</h3>
                    <span>RX Pharmacy, Oshodi</span>
                    <h3>200mg l 1 Tube l 2 drops per use</h3>

                    <p>View dispensary details</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Dispensary
