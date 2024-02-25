import './Location.css'
import map from '../assets/images/map.jpg'

const Contact = () => {
  return (
    <div className='location-wrapper'>
      <a href="https://www.google.com/maps/@28.7231377,77.1205278,14z?entry=ttu" target='_blank'>Look for nearby doctors</a>
      <img src={map}/>
    </div>
  )
}

export default Contact
