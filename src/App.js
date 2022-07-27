import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Animals from './pages/Animals';

function App() {
  const [saveLocalStorage, setSaveLocalStorage] = useState(() => {
    if (localStorage.getItem('jwt_token')) {
      return false;
    }
    return true;
  });
  const handleChangeToken = (value) => {
    setSaveLocalStorage(value);
  };

  return (
    <div className="App">
      <div className='grid'>
        {(saveLocalStorage) ? <Login functionChangeToken={handleChangeToken} />
          : <Animals functionChangeToken={handleChangeToken} />}
      </div>
    </div>
  );
}

export default App;
