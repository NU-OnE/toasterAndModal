import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Toast from "react-native-root-toast";
import Modal, {ModalContent} from "react-native-modals";


const App = () => {

    const [modalVisibility, setModalVisibility] = useState(false);

    const showToast = () => {
        return (
            Toast.show("I am Toaster", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                containerStyle: {width: '70%',}
            })
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>

            <Button onPress={() => {
                showToast({message: 'All good'});
            }} title={"Open Toaster"}/>

            <Text> Separation </Text>

            <Button onPress={() => {
                setModalVisibility(true);
            }} title={"Open Modal"}/>


            <Modal
                visible={modalVisibility}
                onTouchOutside={() => {
                    setModalVisibility(false);
                }}
            >
                <ModalContent>
                    <Text> I'm the model </Text>
                </ModalContent>
            </Modal>
        </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App;
