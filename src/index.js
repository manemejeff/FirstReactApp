import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = () => {
    return <h2>Hello World!!!</h2>
}

const Field = () => {
    return <input type="text" placeholder="Type here"></input>
}

const Btn = () => {
    const text = "Log in";
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
    