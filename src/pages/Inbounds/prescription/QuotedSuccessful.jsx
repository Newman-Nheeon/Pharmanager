import React from 'react'
import LoadImage from '../../../components/LoadImage/Image'
import bigAvatar from '../../../assets/svg/bigAvatar.svg'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
// import './index.css'


function QuotedSuccessful () {

  return (
    <div className='confirmed'>
        <LoadImage callback={()=>{}} alt="quote created"
        imagePath={bigAvatar}
         className='order-image'
        />
        <h2>Quote Created</h2>

        <Link to={'/account/inbounds/prescriptions/prescriptions-manager'}>
        <Button sx={{
            width: '100%',
            backgroundColor: '#009fe3',
        }} variant="contained" >Back to Prescriptions</Button>
        </Link>
    </div>
  )
}

export default QuotedSuccessful
