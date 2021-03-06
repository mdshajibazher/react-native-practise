import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          key={uri}
          ImageUri={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}

      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ImageInputList;
