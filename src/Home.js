import * as React from 'react';
import { useUserAuth } from './context/UserAuthContext';


function Home() {

const {user, logOut} = useUserAuth();

const handleLogout = async()=> {
  try {
    await logOut();
  } catch (err) {
    console.log(err.message);
  }
}



return (
  <div>
    <center>
    
      <p>Welcome!</p>
      {user && <p>{user.email}</p>}
      <button onClick={handleLogout}>Log out</button>
    </center>
  </div>
)



  
}
export default Home;