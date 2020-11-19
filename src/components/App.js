import React, { useState } from 'react';
import Credentials from './Credentials';

const App = () => {
    const [username, setUsername] = useState("");
    // const [confirmedUsername, setConfirmedUsername] = useState("");
    const [poesessid, setPoesessid] = useState("");
    // const [confirmedPoesessid, setConfirmedPoesessid] = useState("");
    const [ign, setIgn] = useState("");
    
    
    return (
        <div className="ui container">
            <Credentials username={username} poesessid={poesessid} ign={ign} setUsername={setUsername} setPoesessid={setPoesessid} setIgn={setIgn} />
        </div>
        
    );
};

export default App;