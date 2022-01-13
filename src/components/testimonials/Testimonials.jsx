import './testimonials.scss'

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        <div className='card'>
          <div className='top'>
            <img src='assets/featured_webapp.png' alt='' />
          </div>
          <div className='center'>
            This is my personal website using ReactJS framework and SaSS for css
            styling.
          </div>
          <div className='bottom'>
            <h3>https://dranyl.com</h3>
            <h4>This website</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
