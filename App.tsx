import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

import MainScene from './components/Scenes/MainScene';

export default () => {
  return (
    <View style={styles.f1}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: MainScene,
        }}
        style={styles.f1}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
});
