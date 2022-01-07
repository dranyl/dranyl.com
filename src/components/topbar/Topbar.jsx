import './topbar.scss'
import { PhoneIphone, Email } from '@mui/icons-material'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            dranyl
          </a>
          <div className='itemContainer'>
            <PhoneIphone className='icon' />
            <span>027-300-3519</span>
          </div>
          <div className='itemContainer'>
            <Email className='icon' />
            <span>lynardsalingujay@outlook.com</span>
          </div>
        </div>

        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
