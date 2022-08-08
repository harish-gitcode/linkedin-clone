import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [btn, setBtn] = useState(true);

    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        };

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    })
            }).catch(error => alert(error));
    };
    const handleClick = (e) => {
        e.preventDefault();
        btn ? loginToApp(e) : register(e)
    }

    const signup = () => {
        setBtn(false);
    }
    const signin = () => {
        setBtn(true);
    }

    return (
        <div className="login">
            <img
                src="https://pbs.twimg.com/media/FTcr6cRWAAcpuEi?format=png&name=4096x4096"
                alt="linkin logo"
            />

            <form>

                <input
                    type="text"
                    value={name}
                    style={{ "display": btn ? "none" : "" }}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                />
                {/* <input
                    type="text"
                    value={profilePic}
                    style={{ "display": btn ? "none" : "" }}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile picture URL (optional)"
                /> */}


                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit" onClick={handleClick}
                >{btn ? "SignIn" : "SignUp"}</button>
            </form>
            {btn === true ? (
                <p>
                    Not a member? {" "}
                    <span className="login_register" onClick={signup}>Register Now</span>
                </p>) : (
                <p>
                    Already have a  Account? {" "}
                    <span className="login_register" onClick={signin}>SignIn</span>
                </p>

            )}

        </div>
    );
}

export default Login