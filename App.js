import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-native';
import Screen from './app/screens/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setimageUris] = useState([]);
  const handleAdd = (uri) => {
    setimageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setimageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
    </Screen>
  );
}
