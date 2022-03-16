import React, { useState } from 'react';
import {useEffect} from 'react'; 
import Greeter from './Greeter';

const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
            setTimeout(() => {
             updateLoaded(); 
            }, 3000); 
    }, [loaded]); 

    function updateUsername(e) {
        setUsername(e.target.value)
    };

    function updateLoaded () {
        setLoaded(true)
    }

    if (loaded == true) {

        return (
            <div>
                <Greeter phrase='Hello There' name='Borkis' />
                <Greeter phrase='Seeing too much of you lately' name='Arthur' />
                <Greeter phrase='Howdy' name='Slartibartfast' />
                <input value={username} onChange={updateUsername}></input>
                <p>You are logging in as: {username}</p>
            </div>
        )
    } else
        return (
            <div>
                <h1>The site is loading.</h1>
                <button onClick={updateLoaded}>Load Page</button>
            </div>

        );

};

export default App; 