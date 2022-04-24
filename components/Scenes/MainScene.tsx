import React, {useState} from 'react';
import {
  ViroARScene,
  ViroText,
  ViroTrackingReason,
  ViroTrackingState,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';
import {StyleSheet} from 'react-native';

const MainScene = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state: ViroTrackingState, reason: ViroTrackingReason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        style={styles.boldFont}
        position={[0, 0, -1]}
        scale={[0.5, 0.5, 0.5]}
        width={20}
        height={5}
        extrusionDepth={8}
        text={text}
      />
    </ViroARScene>
  );
};

var styles = StyleSheet.create({
  boldFont: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MainScene;
