import './post.css'
import { MoreVert } from '@mui/icons-material/'

export default function Post() {
  return (
    <div className='post'>
      <div className='post-top'>
        <img src='/assets/person/1.jpeg' alt='profile' className='post-profile-img' />
        <span className='post-username'>Gerard Segismundo</span>
        <span className='post-date'>5 mins ago</span>

        <MoreVert className='more-icon' />
      </div>
      <div className='post-center'>
        <span className='post-text'>First post XD</span>
        <img className='post-img' src='assets/post/1.jpeg' alt='profile' />
      </div>
      <div className='post-bottom'>
        <div className='post-bottom-left'>
          <img className='like-icon' src='assets/icons/like.png' alt='like icon' />
          <img className='heart-icon' src='assets/icons/heart.png' alt='heart icon' />
          <span className='post-like-counter'>32 likes</span>
        </div>
        <span className='post-comment-text'>9 comments</span>
      </div>
    </div>
  )
}
