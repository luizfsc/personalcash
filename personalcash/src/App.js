 import React from 'react';

    import { NavigationContainer } from '@react-navigation/native';

    import Route from './navigations/Route';

    import UserProvider from './contexts/UserContext';

    import { PerfilProvider } from './contexts/PerfilContext';



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



    export default App;
