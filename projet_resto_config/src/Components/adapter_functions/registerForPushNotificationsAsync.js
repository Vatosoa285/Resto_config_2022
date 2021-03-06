import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

// Fonction de création/registration du token de notification
export const  registerForPushNotificationsAsync = async function (device) {
	let token = "-1";
	if (Device.isDevice) {
		if (!Device.brand){//if(device != "1" && device != "2"){
			return token;
		}
		const { status: existingStatus } = await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}

		// Notification non autorisée
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return token;
		}

		token = (await Notifications.getExpoPushTokenAsync()).data;

	} else {
	  	alert('Must use physical device for Push Notifications');
	}
  
	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C',
		});
	}
  
	return token;
}