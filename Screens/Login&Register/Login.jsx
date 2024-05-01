const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} = require('react-native');
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({props}) {
  const navigation = useNavigation();
  const [dbId, setDbId] = useState('');
  const [password, setPassword] = useState('');
  const [errorData, setErrorData]= useState('');
 

  const handleSubmit= async () => {
    try {
      const userData = {
        userId: dbId,
        password: password,
      };
         
      axios
        .post('http://192.168.0.135:3010/api/v1/auth/dbLogin', userData)
        .then((response) => {          
          console.log('Response:', response.data.payload.token);
          if(response.data.success){
            AsyncStorage.setItem('token', response.data.payload.token);
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigation.navigate('Home');
                       
          }
          // Handle success, such as storing authentication token
        })
        .catch((error) => {
          setErrorData(error)
          // Handle error, such as displaying error message
        });
    } catch (error) {
      setErrorData(error)
    }
  
    //  console.log(dbId, password);
  }
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    
    console.log(data, 'at app.jsx');
  
  }
  useEffect(()=>{
    getData();
    console.log("Hii");
  },[])
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/htlogo.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login !!!</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#f4f13e"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Enter DB ID"
              onChange={(e) => setDbId(e.nativeEvent.text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#f4f13e" style={styles.smallIcon} />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              onChange={(e) => setPassword(e.nativeEvent.text)}
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 8,
              marginRight: 10,
            }}></View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
            <View>
              <Text style={styles.textSign}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default LoginPage;
