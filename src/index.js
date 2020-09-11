import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = () => {
    const scr = "Hello World!"
    return <h2>{scr}</h2>
}

const Field = () => {
    const holder = "Type here"
    const styledField = {
        width: '300px'
    }

    return <input type="text"
        style={styledField} 
        placeholder={holder}
        autoComplete=""
        className="first"
        htmlFor=""></input>
}

const Btn = () => {
    const text = "Log in";
    const logged = true;

    return <button>{text}</button>
}

const App_2 = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
        )
    }
    
    ReactDOM.render(<App_2/>, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
    