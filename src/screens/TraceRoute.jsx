import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  List,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { getUsers } from '../services/api';
const ListIcon = (props) => <List.Icon {...props} icon="account-circle" />;

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

//  Screen component: Default export
const TraceRoute = () => {
  const {colors} = useTheme();
  const {data, isLoading} = useQuery({queryKey: ['users'], queryFn: getUsers});

  const [text, setText] = useState('');

  const renderItem = ({item}) => (
    <List.Item
      key={'user' + item.id}
      title={item.name}
      description={item.email}
      left={ListIcon}
    />
  );

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.surface}]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.mysurface}>
        <Text style={styles.title} variant="headlineSmall">
          MD Asaduzzaman-1
        </Text>
        <Text style={styles.subtitle} variant="titleMedium">
          AMAL CHANDRA SAHA & BROTHERS{' '}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Button
          icon="map-search"
          mode="contained"
          buttonColor="#198754"
          onPress={() => console.log('Pressed')}>
          Trace Route
        </Button>
      </View>

      <View style={styles.cards}>
        <Text variant="headlineSmall">Mon, April 29, 2024</Text>
        <Card style={styles.card}>
          <Text style={{textAlign: 'center'}} variant="titleSmall">
            Sat Sun Mon Tue Wed Thu Fri{' '}
          </Text>
          <Button
            icon="map-marker-path"
            mode="outlined"
            textColor="#198754"
            style={{marginVertical: 10}}
            onPress={() => console.log('Pressed')}>
            Chowrasta Bazar
          </Button>
          <Card.Content>
            <Text style={styles.inText}>Total Route Target (Tk)</Text>
            <Text style={styles.inText}> 0 </Text>
            <Text style={styles.inText}>Total Route Sales (Tk)</Text>
            <Text style={styles.inText}> 170,617</Text>
            <Text style={styles.inText}>Total Pending Sales Order (Tk)</Text>
            <Text style={styles.inText}> 18,838</Text>
            <Text style={styles.inText}>Today Sales Order (Tk)</Text>
            <Text style={styles.inText}> 0</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Text style={{textAlign: 'center'}} variant="titleSmall">
            Sat Sun Mon Tue Wed Thu Fri{' '}
          </Text>
          <Button
            icon="map-marker-path"
            mode="outlined"
            textColor="#198754"
            style={{marginVertical: 10}}
            onPress={() => console.log('Pressed')}>
            Joydebpur Bazar
          </Button>
          <Card.Content>
            <Text style={styles.inText}>Total Route Target (Tk)</Text>
            <Text style={styles.inText}> 0 </Text>
            <Text style={styles.inText}>Total Route Sales (Tk)</Text>
            <Text style={styles.inText}> 170,617</Text>
            <Text style={styles.inText}>Total Pending Sales Order (Tk)</Text>
            <Text style={styles.inText}> 18,838</Text>
            <Text style={styles.inText}>Today Sales Order (Tk)</Text>
            <Text style={styles.inText}> 0</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Text style={{textAlign: 'center'}} variant="titleSmall">
            Sat Sun Mon Tue Wed Thu Fri{' '}
          </Text>
          <Button
            icon="map-marker-path"
            mode="outlined"
            textColor="#198754"
            style={{marginVertical: 10}}
            onPress={() => console.log('Pressed')}>
            Kumun Bazar
          </Button>
          <Card.Content>
            <Text style={styles.inText}>Total Route Target (Tk)</Text>
            <Text style={styles.inText}> 0 </Text>
            <Text style={styles.inText}>Total Route Sales (Tk)</Text>
            <Text style={styles.inText}> 170,617</Text>
            <Text style={styles.inText}>Total Pending Sales Order (Tk)</Text>
            <Text style={styles.inText}> 18,838</Text>
            <Text style={styles.inText}>Today Sales Order (Tk)</Text>
            <Text style={styles.inText}> 0</Text>
          </Card.Content>
        </Card>

        <Text style={{textAlign: 'center'}} variant="titleSmall">
          MANUAL MEMO QTY{' '}
        </Text>

        <TextInput
          value={text}
          mode="outlined "
          onChangeText={(text) => setText(text)}
          style={{width: '100%', marginVertical: 5}}
        />
        <Text style={{textAlign: 'center'}} variant="titleSmall">
          TOTAL ORDER AMOUNT{' '}
        </Text>

        <TextInput
          value={text}
          mode="outlined "
          onChangeText={(text) => setText(text)}
          style={{width: '100%', marginVertical: 5}}
        />
        <Text style={{textAlign: 'center'}} variant="titleSmall">
          REMARKS{' '}
        </Text>

        <TextInput
          value={text}
          mode="outlined "
          onChangeText={(text) => setText(text)}
          style={{width: '100%', marginVertical: 5}}
        />

        <Button
          // icon="map-search"
          mode="contained"
          buttonColor="#198754"
          style={{marginTop: 10}}
          onPress={() => console.log('Pressed')}>
          ORDER SUMMARY | MANUAL
        </Button>
      </View>
    </ScrollView>
  );
};

export default TraceRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  statusMsg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mysurface: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#dc3545',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#0d6efd',
    fontWeight: 'normal',
  },

  surface: {
    padding: 10,
    height: 700,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  surface3: {
    padding: 10,
    height: 900,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  surface2: {
    padding: 10,
    height: 350,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  cards: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },

  card: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%',
  },

  inText: {
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#0d6efd',
    textAlign: 'center',
  },
});
