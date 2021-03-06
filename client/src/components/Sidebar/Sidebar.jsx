import './sidebar.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School
} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <RssFeed className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Feed</span>
        </li>

        <li className='sidebar-list-item'>
          <Chat className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Chats</span>
        </li>
        <li className='sidebar-list-item'>
          <PlayCircleFilledOutlined className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Videos</span>
        </li>
        <li className='sidebar-list-item'>
          <Group className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Groups</span>
        </li>
        <li className='sidebar-list-item'>
          <Bookmark className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Saved</span>
        </li>
        <li className='sidebar-list-item'>
          <HelpOutline className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Questions</span>
        </li>
        <li className='sidebar-list-item'>
          <WorkOutline className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Jobs</span>
        </li>
        <li className='sidebar-list-item'>
          <Event className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Events</span>
        </li>
        <li className='sidebar-list-item'>
          <School className='sidebar-icon' />
          <span className='sidebar-list-item-text'>Courses</span>
        </li>
      </ul>
      <button className='sidebar-button'>See more</button>
      <hr className='sidebar-hr' />
      <ul className='sidebar-friendlist'>
        <li className='sidebar-friend'>
          <img src='/assets/person/2.jpeg' alt='friend' className='sidebar-friend-img' />
          <span className='sidebar-friend-name'>Gerard Pogi</span>
        </li>
      </ul>
    </div>
  )
}
