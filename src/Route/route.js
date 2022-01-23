import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Login from '../Screens/Login'
import {
    Platform,
    StatusBar,
    //AsyncStorage
} from 'react-native';
const useInitialRender = () => {
    const [isInitialRender, setIsInitialRender] = React.useState(false);
    if (!isInitialRender) {
        setTimeout(() => setIsInitialRender(true), 10);
        return true;
    }
    return false;
};

const MainStackCreator = createStackNavigator();
function MainSectionStack({ navigation }) {
    const isInitialRender = useInitialRender();
    return (
        <MainStackCreator.Navigator
            initialRouteName="Login"
            screenOptions={(props) => ({
                header: () => null
            })} >
            <MainStackCreator.Screen name="Login" component={Login}
                options={(props) => ({
                    header: () => null,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                })} />
            
         
        </MainStackCreator.Navigator>
    )
}




const config = {
    animation: 'spring',
    config: {
        stiffness: 100000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};




function MainNavigation() {
    return (
        <>
            <MainSectionStack />
            {Platform.OS === 'android' && <StatusBar style="light" backgroundColor={'grey'} animated={true} />}
        </>
    )
}

export default function route() {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}