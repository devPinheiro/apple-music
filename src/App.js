import logo from '../src/assets/images/Saly-22.svg';
import './App.css';
// import fs from 'fs'
// import sign from 'jwt-encode';
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { useEffect } from 'react';
import Main from './Main';

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    // hard coded token jwt-encode does not support ES256 alg
    const devToken =
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJGNzZUOE1RVjcifQ.eyJpYXQiOjE2Mzc1MzUxNjMsImV4cCI6MTY1MzA4NzE2MywiaXNzIjoiNFhRQlJaNVg2ViJ9.KBytG611Bd8ZMHlCXemL2omNWrzK2FnaWmlqHFyb_dTQV45sRH8qTY_3pJ6Dn0OV99yMLXiTywsOwLomS6tEIw';
    // const privateKeyPath = './AuthKey_RF76T8MQV7.p8';
    // const privateKey =
    //   'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgESK5xYDoeI9xQ5/K17IPW/srMebZUu/GD1nWGMcfdf+gCgYIKoZIzj0DAQehRANCAAR7Hhe8M7aqTwsQu+8Mxiag/Rh1DJtKT5HaQy/PLkxOBRROsYXb90ixO13yjIfO8kWcPqFFyllDUigmm4PQlf0j';
    // const teamId = '4XQBRZ5X6V';
    // const keyId = 'RF76T8MQV7';
    // const token = sign({}, privateKey, {
    //   // does not support ES256 alg
    //   algorithm: 'ES256',
    //   expiresIn: '180d',
    //   issuer: teamId,
    //   header: {
    //     alg: 'ES256',
    //     kid: keyId,
    //   },
    // });

    // MusicKit global is now defined
    window.MusicKit.configure({
      // harcoded jwt token
      developerToken: devToken,
      app: {
        name: 'Mydly',
        build: 'v1.03',
      },
    });

    let music = window.MusicKit.getInstance();

    document.getElementById('login-btn').addEventListener('click', () => {
      music
        .authorize()
        .then(function (token) {
          // set to localStorage
          localStorage.setItem('musicUserToken', token);
          // do something with token here
          navigate('music')
        })
        .catch((e) => {
          console.log('Error:' + e);
        });
    });
  }, [navigate]);

  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1>Apple Music on the Web</h1>
      <button id='login-btn'>Sign In to Apple music</button>
    </header>
  );
}
function App() { 

  return (
    <div className='App'>

     
        <Routes>
          <Route  path={'/music'} element={<Main />} />

          <Route
                            exact={true}
                            path={'/'}
                            element={<Home />}
                        />
        </Routes>
  
    </div>
  );
}

export default App;
