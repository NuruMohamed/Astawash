import noteImage from './note.png'
import facebook from './facebook.svg'
import './home.css';

const Home = () => {

    return (
        <div id="unauth-home-container">
            <div id="container-1">
                <div id="title">Astawash</div>
                <img src={noteImage} />
                <div id="description">Your Notes partner</div>
            </div>
            <div id="container-2">
                <div id="login-button">
                    <div id="login-title">Login</div>
                    <img src={facebook} />
                </div>
                <div id="signup">
                    or <label> signup </label>
                </div>
            </div>
        </div>
    );
}

export default Home;