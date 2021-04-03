import noteImage from './note.png'
import facebook from './facebook.svg'
const Home = () => {

    return (
        <div id="unauth-home-container">
            <div id="title">Astawash</div>
            <img src={noteImage} />
            <div id="description">Note taking has become super easy</div>
            <div id="login-button">
                <div id="login-title">Login</div> 
                <img src={facebook}/>
            </div>
            <div id="signup">
                or <label> signup </label>
            </div>
        </div>
    );
}

export default Home;