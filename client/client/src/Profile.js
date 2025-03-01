
/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({
        id: '',
        email: '',
        name: '',
        qualification: '',
        job: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5000/profile') // Fetch the first user
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.error('Error fetching profile:', error);
                alert('Failed to fetch profile. Please check the backend server.');
            });
    }, []);
    
    const updateProfile = () => {
        axios.put(`http://localhost:5000/profile/${profile.id}`, {
            qualification: profile.qualification,
            job: profile.job
        })
            .then((response) => {
                alert(response.data.message);
                // Fetch updated profile data
                axios.get(`http://localhost:5000/profile/${profile.id}`)
                    .then((response) => {
                        setProfile(response.data);
                    })
                    .catch((error) => {
                        console.error('Error fetching updated profile:', error);
                    });
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                alert('Failed to update profile. Please check the backend server.');
            });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <p>Email: {profile.email}</p>
                <p>Name: {profile.name}</p>
                <p>
                    Qualification:
                    <input
                        type="text"
                        name="qualification"
                        value={profile.qualification || ''}
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    Job:
                    <input
                        type="text"
                        name="job"
                        value={profile.job || ''}
                        onChange={handleInputChange}
                    />
                </p>
                <button onClick={updateProfile}>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;
*/