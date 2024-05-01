import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Drawer } from 'react-native-paper';

const MyDrawer = () => {
  const [active, setActive] = React.useState('');

  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <View style={{flex: 1}}>
      <Button onPress={openDrawer}>Open Drawer</Button>

      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>

      <Drawer visible={drawerVisible} onDismiss={closeDrawer}>
        <Drawer.Item label="Item 3" onPress={() => {}} />
        <Drawer.Item label="Item 4" onPress={() => {}} />
      </Drawer>
    </View>
  );
};

export default MyDrawer;
