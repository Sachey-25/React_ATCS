import { useNavigate } from 'react'
import useAuth from './auth'

export const Profile = () => {
    const auth=useAuth();
    const navigate=useNavigate()

    const handleLogout=()=>{
        auth.logout()
        navigate('http://localhost:3000')
    }
  return (
    <div className='profile'>
        <h2> Welcome {auth.user} </h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )}
export default Profile