import { Buffer } from 'buffer'; // Import Buffer module
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HelperText,
  Surface,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Logo from '../../components/Logo';
import RoundedButton from '../../components/RoundedButton';
import { useAuth } from '../../hooks/AuthProvider';
import { login } from '../../services/api';

const initialValues = {
  username: '112',
  password: '@Ab123456',
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').required('Required'),
  password: Yup.string().min(5, 'Too Short!').required('Required'),
});

export default function SignIn() {
  const {colors} = useTheme();
  const {signin} = useAuth();

  const handleLogin = (values, {setErrors}) => {
    // Add grant_type value to obj
    // let reqObj = Object.assign({}, values, {grant_type: 'password'});
    let reqObj = {
      userId: values.username,
      password: values.password,
    };
    // Service request
    login(reqObj)
      .then((res) => {
        if (res.data?.payload?.token) {
          // const {token}= res.data.payload;
          // const {id, name, email, access_token, refresh_token} = res.data.user;
          const {token} = res.data.payload;
          const [_, encodedPayload, __] = token.split('.');
          const decodedBuffer = Buffer.from(encodedPayload, 'base64');
          const decodedString = decodedBuffer.toString('utf-8');
          const decodedObject = JSON.parse(decodedString);
          // const {id, name, email, access_token, refresh_token} = res.data.user;
          const {_id, name, email} = decodedObject.data;

          // signin({
          //   id,
          //   name,
          //   email,
          //   access_token,
          //   refresh_token,
          // });

          signin({
            id: _id,
            name: name,
            email: email,
            access_token: token,
            refresh_token: token,
          });
        }
      })
      .catch((e) => {
        if (e.response?.data?.errors) {
          // let result = transformToFormikErrors(e.response.data.errors);
          // setErrors(result);
          console.log(e);
        }
      });
  };
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.surface}]}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.accent}
      />
      <Surface style={styles.surface}>
        <Logo />
        <Title style={styles.title}>SR Login</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Username"
                placeholder="Username/Email"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                keyboardType="email-address"
                style={styles.input}
                error={Boolean(errors.username && touched.username)}
              />
              <HelperText
                type="error"
                visible={Boolean(errors.username && touched.username)}>
                {errors.username}
              </HelperText>
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                secureTextEntry
                error={Boolean(errors.password && touched.password)}
              />
              <HelperText
                type="error"
                visible={Boolean(errors.password && touched.password)}>
                {errors.password}
              </HelperText>
              <RoundedButton
                buttonColor="red"
                mode="contained"
                onPress={handleSubmit}>
                Sign In
              </RoundedButton>
            </View>
          )}
        </Formik>
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  title: {
    marginBottom: 24,
  },
  input: {
    width: 250,
    height: 60,
    marginBottom: 10,
  },
});
