import React from 'react';
import './App.css';

function App() {
    const [light, setLight] = React.useState(false);
    console.log(light)
    return (
        <main className={light ? "on" : "off"}>
            <section>
                <div className="dot">{light}</div>
                <button type="button" onClick={ () => setLight(!light) }    >{light ? "Turn off" : "Turn on"}</button>
            </section>
        </main>
    );
}

export default App;
