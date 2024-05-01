import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  List,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { getUsers } from '../services/api';
const ListIcon = (props) => <List.Icon {...props} icon="account-circle" />;

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

//  Screen component: Default export
const Dashboard = ({ navigation }) => {
  const {colors} = useTheme();
  const {data, isLoading} = useQuery({queryKey: ['users'], queryFn: getUsers});

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
          Sun, April 28, 2024{' '}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Card>
          <Card.Title
            title="Sales"
            // subtitle="Card Subtitle"
            // left={LeftContent}
          />
          <Card.Content>
            {/* <Text variant="titleLarge">Card title</Text> */}
            <Button
              icon="map-search"
              mode="contained"
              buttonColor="#198754"
              onPress={() => navigation.navigate('TraceRoute')}>
              Trace Route
            </Button>
          </Card.Content>
          {/*
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
        </Card>
      </View>
      <Surface style={styles.surface} elevation={2}>
        <Text variant="headlineSmall">Dashboard</Text>
        <View style={styles.cards}>
          <Card style={{width: 140, marginRight: 2}}>
            <Card.Title title="Monthly" />
            <Card.Content>
              <Text style={styles.inText}>Target (TP)</Text>
              <Text style={styles.inText}>Tk 2,563,779 </Text>
              <Text style={styles.inText}>Sales (TP)</Text>
              <Text style={styles.inText}>Tk 2,039,739</Text>
              <Text style={styles.inText}>Achi 79.56 %</Text>
            </Card.Content>
          </Card>

          <Card style={{width: 140, marginLeft: 2}}>
            <Card.Title title="Today" />
            <Card.Content>
              <Text style={styles.inText}>Target (TP)</Text>
              <Text style={styles.inText}>Tk 2,563,779 </Text>
              <Text style={styles.inText}>Sales (TP)</Text>
              <Text style={styles.inText}>Tk 2,039,739</Text>
              <Text style={styles.inText}>Achi 79.56 %</Text>
            </Card.Content>
          </Card>
        </View>
      </Surface>

      <Surface style={styles.surface3} elevation={2}>
        <Text variant="headlineSmall">Today SO KPI</Text>
        <View style={styles.cards}>
          <Card style={{width: 140, marginRight: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Total Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>

          <Card style={{width: 140, marginLeft: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Visited Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>
        </View>

        <Card>
          <Card.Content>
            <Text style={styles.inText}>Visited Outlet (%)</Text>
            <Text style={styles.inText}>100% </Text>
          </Card.Content>
        </Card>

        <View style={styles.cards}>
          <Card style={{width: 140, marginRight: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Total Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>

          <Card style={{width: 140, marginLeft: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Visited Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>
        </View>

        <Card>
          <Card.Content>
            <Text style={styles.inText}>Visited Outlet (%)</Text>
            <Text style={styles.inText}>100% </Text>
          </Card.Content>
        </Card>

        <View style={styles.cards}>
          <Card style={{width: 140, marginRight: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Total Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>

          <Card style={{width: 140, marginLeft: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Visited Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>
        </View>

        <Card>
          <Card.Content>
            <Text style={styles.inText}>Visited Outlet (%)</Text>
            <Text style={styles.inText}>100% </Text>
          </Card.Content>
        </Card>

        <View style={styles.cards}>
          <Card style={{width: 140, marginRight: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Total Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>

          <Card style={{width: 140, marginLeft: 2}}>
            <Card.Content>
              <Text style={styles.inText}>Visited Outlet</Text>
              <Text style={styles.inText}>102 </Text>
            </Card.Content>
          </Card>
        </View>

        <Card>
          <Card.Content>
            <Text style={styles.inText}>Visited Outlet (%)</Text>
            <Text style={styles.inText}>100% </Text>
          </Card.Content>
        </Card>
      </Surface>

      <View>
        <Text style={{textAlign: "center"}} variant="headlineSmall">Reports</Text>

        <Card style={{margin: 10, padding: 10}}>
          <Button
            icon="trending-up"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Monthly KPI
          </Button>

          <Button
            icon="speedometer"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Category Wise - Timepass
          </Button>

        

          <Button
            icon="receipt"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Order Summary
          </Button>

          <Button
            icon="truck-delivery"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Delivery Summary
          </Button>

          <Button
            icon="alert"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Damage Summary
          </Button>

          <Button
            icon="web"
            mode="contained"
            style={{marginVertical: 5}}
            buttonColor="#198754"
            onPress={() => console.log('Pressed')}>
            Web Portal
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

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
    height: 250,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inText: {
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#0d6efd',
  },
});
