import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMaps'
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen 
                name="OrphanagesMap" 
                component={OrphanagesMap} />

                <Screen 
                name="OrphanageDetails" 
                component={OrphanageDetails}
                options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} tittle="Orfanato" />
                }}
                />

                <Screen 
                name="SelectMapPosition"
                component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header: () => <Header tittle="Selecione o local no mapa" />
                }}  
                />

                <Screen 
                name="OrphanageData" 
                component={OrphanageData}
                options={{
                    headerShown: true,
                    header: () => <Header tittle="Informe os dados" />
                }} 
                />


            </Navigator>
        </NavigationContainer>
    )
}