import './AboutUs.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus__heading'>~ About us ~</div>
      <div className='aboutus__content'>
        <div className='aboutus__content_left'>
          <div className='aboutus__content_left_headingtop'>
            We believe in working with accredited farmers
          </div>
          <div className='aboutus__content_left_middletext_box'>
            <div className='aboutus__content_left_middletext'>
              Organic Foods and Café is a family runcompany
            </div>
            <div className='aboutus__content_left_middletext'>
              Founded in 2004 that runs organic supermarkets
            </div>
          </div>
          <div className='aboutus__content_left_downtext'>
            Organic means growing our food, which is to nourish us, without
            chemical aids during the growing process such as fertilisers,
            pesticides, fungcides, herbacides, larbicides etc
          </div>
        </div>
      </div>
      <Button text='Read More'></Button>
    </div>
  )
}

export default AboutUs
