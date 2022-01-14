import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
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
