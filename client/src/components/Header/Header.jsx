import './header.css'
import {
  Search as SearchIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material'

export default function Header() {
  return (
    <header className='header-container'>
      <section className='header-left'>
        <i className='logo'>Facegram</i>
      </section>
      <section className='header-center'>
        <div className='search-bar'>
          <SearchIcon />
          <input type='text' placeholder='Search...' className='search-input' />
        </div>
      </section>
      <nav className='navigation'>
        <ul className='nav-links'>
          <li className='link'>Homepage</li>
          <li className='link'>Timeline</li>
        </ul>
        <section className='nav-icons'>
          <div className='icon'>
            <PersonIcon />
            <i className='icon-badge'>1</i>
          </div>
          <div className='icon'>
            <ChatIcon />
            <i className='icon-badge'>1</i>
          </div>
          <div className='icon'>
            <NotificationsIcon />
            <i className='icon-badge'>1</i>
          </div>
        </section>
        <img src='/assets/person/1.jpeg' alt='profile' className='profile-img' />
      </nav>
    </header>
  )
}
