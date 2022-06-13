import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ ImageUri, onChangeImage }) {
  const handlePress = () => {
    if (!ImageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete the image', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No', onPress: () => console.log('no') },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {!!!ImageUri && (
          <MaterialCommunityIcons
            name={'camera'}
            size={40}
            color={colors.medium}
          />
        )}

        {!!ImageUri && (
          <Image source={{ uri: ImageUri }} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageInput;
