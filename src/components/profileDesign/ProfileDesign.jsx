import { NavLink } from 'react-router-dom';
import './ProfileDes.scss';
import { useSelector } from'react-redux'; 

const Profile = () => {
    const user = useSelector((state) => state.user);
    
    return (
        <div className='profile'>
            <div className='profile-container'>
                <NavLink to='/' className='home-button'>Home</NavLink>
                {user && (
                    <>
                        <h1 className='profile-title'>Profile</h1>
                        <div className="profile-wrapper">
                            <img className='profile-img' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Favatar&psig=AOvVaw3rGjtJ7qOejcCJSeWuvEws&ust=1725688011131000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi4vfnOrYgDFQAAAAAdAAAAABAE' alt="Profile" />
                            <div className='profile-info'>
                                <h2 className='profile-name'>Name: {user.name[0]} {user.name[1]}</h2>
                                <p className='profile-id'>Your id: {user.username}</p>
                                <p className='profile-email'>Email: {user.email}</p>
                                <p className='profile-password'>Your password: {user.phone}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
