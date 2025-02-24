import FastImage from 'react-native-fast-image';
import {Alert} from 'react-native';

const FastImageCacheManager = {
  clearCache: () => {
    FastImage.clearDiskCache()
      .then(() => FastImage.clearMemoryCache())
      .then(() => {
        Alert.alert(
          'Cache Cleared',
          'Image cache has been successfully cleared.',
        );
      })
      .catch(error => console.error('Error clearing cache:', error));
  },

  autoClearCache: (expirationTime = 86400000) => {
    // Default: Clears cache every 24 hours
    setTimeout(() => {
      FastImage.clearDiskCache();
      FastImage.clearMemoryCache();
      console.log('Cache cleared automatically.');
    }, expirationTime);
  },
};

export default FastImageCacheManager;
