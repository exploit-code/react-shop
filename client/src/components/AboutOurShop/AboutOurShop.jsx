import './AboutOurShop.scss'
import Button from '../Button/Button'

const AboutOurShop = () => {
  return (
    <div className='aboutourshop'>
      <div className='aboutourshop__heading'>~ Why Choose us? ~</div>
      <div className='aboutourshop__content'>
        <div className='aboutourshop__content_left'>
          <div className='aboutourshop__content_left_headingtop'>
            We do not buy <br />from the open market<br /> &amp; traders.
          </div>

          <div className='aboutourshop__content_left_downtext'>
            Purchasing from select family farmers who farm organically because
            they believe in it and so we do. We are conscious of air miles and
            our carbon footprint so a lot of our produce comes from Egypt.
          </div>
        </div>
      </div>
      <Button text='Read More'></Button>
    </div>
  )
}

export default AboutOurShop
