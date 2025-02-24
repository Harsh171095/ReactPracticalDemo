import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const PhotoItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  title: {flex: 1, fontSize: 14},
});

export default PhotoItem;
