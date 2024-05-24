import React from 'react';

import ReactDOM from 'react-dom';

import { NavigationContainer } from '@react-navigation/native';

import Route from './src/navigations/Route';

import UserProvider from './src/contexts/UserContext';

import { PerfilProvider } from './src/contexts/PerfilContext';



const App = () => {

  return (

    <UserProvider>

      <PerfilProvider>

        <NavigationContainer>

          <Route />

        </NavigationContainer>

      </PerfilProvider>

    </UserProvider>

  );

};



ReactDOM.render(<App />, document.getElementById('root'));



export default App;
