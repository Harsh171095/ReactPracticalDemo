import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {fetchPhotos} from '../services/api';
import PhotoItem from '../components/PhotoItem';

const ListScreen = ({navigation}) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchPhotos();
      setPhotos(data.slice(0, 20)); // Load first 20 for performance
      setLoading(false);
    };
    loadPhotos();
  }, []);

  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PhotoItem
            item={item}
            onPress={() => navigation.navigate('Details', {id: item.id})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  loader: {flex: 1, justifyContent: 'center'},
});

export default ListScreen;
