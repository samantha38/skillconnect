
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



/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Profile.css";
import myImage from "./logo192.png";

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
            <div className="profbox">

                <div className="Upperprof">
                <img src="/logo192.png"></img>
                    
                    <p>Email: {profile.email}</p>
                    <p>Name: {profile.name}</p>
                </div>
                
                <div className="profDetails">

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

                </div>
                
                <button className="profButton" onClick={updateProfile}>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;
*/

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
        axios.get('http://localhost:5000/profile')
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
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Profile Page</h2>
                <div className="mb-3">
                    <strong>Email:</strong> {profile.email}
                </div>
                <div className="mb-3">
                    <strong>Name:</strong> {profile.name}
                </div>
                <div className="mb-3">
                    <label className="form-label"><strong>Qualification:</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        name="qualification"
                        value={profile.qualification || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"><strong>Job:</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        name="job"
                        value={profile.job || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary w-100" onClick={updateProfile}>
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'; // Import updated CSS file

const Profile = () => {
    const [profile, setProfile] = useState({
        id: '',
        email: '',
        name: '',
        qualification: '',
        job: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5000/profile')
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
        <div className="profile-container">
            <div className="profile-card">
                <img src="/logo192.png" alt="Profile" className="profile-img" />
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-role">{profile.email}</p>
              
                <div className="profile-input">
                    <label>Qualification</label>
                    <input
                        type="text"
                        className="form-control"
                        name="qualification"
                        value={profile.qualification || ''}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="profile-input">
                    <label>Job</label>
                    <input
                        type="text"
                        className="form-control"
                        name="job"
                        value={profile.job || ''}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="btn btn-primary update-btn" onClick={updateProfile}>
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;

