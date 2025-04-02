import './App.css';
import { useState } from 'react';
import { GithubUser, GithubUserRepos, UserForm } from './components';
import { GithubApi } from './services';

// https://api.github.com/users

function App() {

  const [ user, setUser ] = useState(null);
  const [ repos, setRepos ] = useState([]);

  function getData(userName){
    Promise.all([
        GithubApi.fetchUser(userName), 
        GithubApi.fetchUserRepos(userName)
      ])
        .then(([user, repos]) => {
          setUser(user);
          setRepos(repos);
        }).catch(error => alert(error));

    //  GithubApi.fetchUser(userName).then(responseData => {
    //   setUser(responseData);
    // });

  };

  function handleResetUser(){
    setUser(null);
  }

  const renderContent = !user 
  ? (<>
    <UserForm setUser={getData}/>
  </>)
  : (<>
    <GithubUser user={user} />
    <GithubUserRepos repos={repos} />
    <div style={styles.buttonContainer}>
      <button onClick={handleResetUser} style={styles.button}>Reset</button>
    </div>
  </>);

  return (
    <div className="App">
      {renderContent}    
    </div>
  );
}

export default App;

const styles = {
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    width: "100%",
  }
}