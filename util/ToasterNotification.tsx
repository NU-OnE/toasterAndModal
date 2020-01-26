import Toast from "react-native-root-toast";

const showToast = (params) => {

    const message       = params.message;
    const duration      = params.duration || Toast.durations.LONG;
    let backgroundColor = 'green';

    switch (params.status) {
        case 'warning':
            backgroundColor = 'orange';
            break;
        case 'error':
            backgroundColor = 'red';
            break;
    }

     Toast.show(message, {
        duration: duration,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: backgroundColor,
        containerStyle: {width: '70%',}
    });
};

export default showToast;
