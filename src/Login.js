import { useState } from "react"
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import GoogleButton from 'react-google-button'


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const {login, googleSignIn} = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
      e.preventDefault();
      try {
        await login(email, password);
        navigate("/home")
      }
      catch (err) {
        setError(err.message);
      }
    }

    const handleGoogleLogin = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/home");
      }catch (err){
        setError(err.message);
      }
    }

  return (
    <div>
        <center>
        <p>SignIn to your account </p>
            {error && <p className="err">{error}</p>}
        <form style={{marginTop: "50px", marginBottom: "50px"}}>
            <input type="text"
            placeholder="email"
            className='input_text'
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"
            placeholder="Password"
            className="input_password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{marginTop: "20px"}}>
            <button className="confirm_btn" onClick={handleSubmit}>Login</button>
            </div>
        </form>
      
        <GoogleButton 
        label="Zaloguj sie z google"
        onClick={handleGoogleLogin} />
        <p>
            <Link to="/signup" className="link_to_login">Signup if no account</Link>
        </p>
        </center>
    </div>
  )
}

export default Login

