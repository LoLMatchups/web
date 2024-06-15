import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function App() {
  const { isAuthenticated, getUser, login, register } = useKindeAuth();

  let user;
  if (isAuthenticated) {
    user = getUser();
  }

  return (
    <div>
      {
        isAuthenticated ?
          <h1>Welcome back {user.given_name} </h1> :
          <div>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
          </div>
      }
      <h1></h1>
    </div>
  )
}

export default App
