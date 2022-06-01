import Post from '../Post/Post'
import Share from '../Share/Share'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
