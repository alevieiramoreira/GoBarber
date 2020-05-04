import React from 'react';

import GlobalStyle from './styles/global';
import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
        <ToastContainer />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
