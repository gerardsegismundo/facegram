import './home.css'
import { Topbar, Sidebar, Feed, Rightbar } from './../../components'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='home-container'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
