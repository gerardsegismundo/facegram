import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <h3>Birthdays</h3>
      <div className='birthday-container'>
        <img className='birthday-icon' src='assets/icons/birthday.png' alt='birthday' />
        <div className='birthday-text'>
          &nbsp;<b>Gerard Segismundo</b> and <b>7 others friends</b> have birthdays today.
        </div>
      </div>
      <hr />
      <h3>Contacts</h3>
      <ul className='rightbar-friendlist'>
        <li className='rightbar-friend'>
          <img src='/assets/person/3.jpeg' alt='friend' className='rightbar-profile-img' />
          <span className='rightbar-online'></span>
        </li>
      </ul>
    </div>
  )
}
