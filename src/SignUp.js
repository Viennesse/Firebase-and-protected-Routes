import { useState } from "react"
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const {signUp} = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
      e.preventDefault();
      try {
        const zrob = await signUp(email, password);
        console.log(zrob)
        console.log(zrob.user.email);
        navigate("/home");
          }
      catch (err) {
        setError(err.message);
        console.log(err.code);
        if(err.code === "auth/admin-restricted-operation") {
          alert("Bla bla bla bla")
        }
        
      }
    }


  return (
    <div>
        <center>
            <p>SignUp : CREATE ACCOUNT </p>
            {error && <p className="err">{error}</p>}
            <form  onSubmit={handleSubmit} style={{marginTop: "30px"}}>
                <input type="text"
                placeholder="email"
                className='input_text'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                />
                <input type="password"
                placeholder="Password"
                className="input_password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />
                <div style={{marginTop: "20px"}}>
                <button className="confirm_btn">Create account</button>
                </div>
            </form>

            <p>
                <Link to="/" className="link_to_login"> Login if you have an account</Link>
            </p>
        </center>
    </div>
  )
}

export default SignUp