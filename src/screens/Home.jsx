import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  List,
  useTheme
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyComponent from '../components/EmptyComponent';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

import { getUsers } from '../services/api';

const ListIcon = (props) => (
  <List.Icon {...props} icon="account-circle" />
);

//  Screen component: Default export
const Home = () => {
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
    <SafeAreaView style={[styles.container, {backgroundColor: colors.surface}]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000" />
      <Appbar.Header>
        <Appbar.Content title="Users" />
      </Appbar.Header>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data?.data || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={EmptyComponent}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

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
});
