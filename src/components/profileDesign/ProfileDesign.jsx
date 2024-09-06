import { NavLink } from 'react-router-dom';
import './ProfileDes.scss';
import { useEffect, useState } from 'react';
import axios from '../../api/axios'
const Profile = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        axios('/users/2')
            .then(response => setUser(response.data))
    }, []);
    return (
        <div className='profile'>
            <div className='profile-container'>
                <NavLink to='/' className='home-button'>Home</NavLink>
                {user && (
                    <>
                        <h1 className='profile-title'>Profile</h1>
                        <div className="profile-wrapper">
                            <img className='profile-img' src='https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' alt="Profile" />
                            <div className='profile-info'>
                                <h2 className='profile-name'>Name: {user.name.firstname} {user.name.lastname}</h2>
                                <p className='profile-id'>Your id: {user.username}</p>
                                <p className='profile-email'>Email: {user.email}</p>
                                <p className='profile-password'>Your phone: {user.phone}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
