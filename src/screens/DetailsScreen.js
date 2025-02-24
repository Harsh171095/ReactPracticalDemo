import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchPhotoDetails} from '../services/api';
import FastImageCacheManager from '../utils/cacheManager';

const {width} = Dimensions.get('window');

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const [dataObject, setDataObject] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loadPhoto = async () => {
      try {
        const data = await fetchPhotoDetails(id);
        setDataObject(data);
        setLoading(false);

        // Fade-in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    loadPhoto();
  }, [id, fadeAnim]);

  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Custom Back Button */}
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity> */}

      {/* Image Slider with FastImage */}
      <View style={styles.imageContainer}>
        {imageLoading && (
          <ActivityIndicator
            size="large"
            color="#E91E63"
            style={styles.imageLoader}
          />
        )}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageSlider}>
          {dataObject.images.map((image, index) => (
            <Animated.View
              key={index}
              style={[styles.imageWrapper, {opacity: fadeAnim}]}>
              <FastImage
                source={{
                  uri: image,
                  priority: FastImage.priority.high, // Load images faster
                  cache: FastImage.cacheControl.immutable, // Cache forever (until cleared)
                }}
                style={styles.productImage}
                resizeMode={FastImage.resizeMode.contain}
                onLoadStart={() => setImageLoading(true)}
                onLoadEnd={() => setImageLoading(false)}
              />
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      {/* Product Details */}
      <Text style={styles.title}>{dataObject.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${dataObject.price}</Text>
        <Text style={styles.discount}>
          {dataObject.discountPercentage}% OFF
        </Text>
      </View>
      <Text style={styles.description}>{dataObject.description}</Text>

      {/* Reviews */}
      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      {dataObject.reviews.length > 0 ? (
        dataObject.reviews.map((review, index) => (
          <View key={index} style={styles.reviewItem}>
            <Text style={styles.reviewer}>{review.reviewerName}</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={16}
              startingValue={review.rating}
              readonly
            />
            <Text style={styles.reviewText}>{review.comment}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noReviews}>No reviews available</Text>
      )}

      {/* Clear Cache Button */}
      <TouchableOpacity
        style={styles.clearCacheButton}
        onPress={FastImageCacheManager.clearCache}>
        <Text style={styles.clearCacheText}>Clear Image Cache</Text>
      </TouchableOpacity>

      <View style={{height: 40}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  content: {padding: 15},
  loader: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },
  imageSlider: {marginTop: 20},
  imageWrapper: {width, alignItems: 'center', justifyContent: 'center'},
  productImage: {
    width: width * 0.9,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {fontSize: 22, fontWeight: 'bold', color: '#333', marginTop: 20},
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {fontSize: 20, fontWeight: 'bold', color: '#E91E63'},
  discount: {fontSize: 14, color: '#4CAF50', marginLeft: 10},
  description: {fontSize: 14, color: '#444', marginVertical: 10},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  reviewItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  reviewer: {fontWeight: 'bold', fontSize: 14, marginBottom: 2},
  reviewText: {fontSize: 14, color: '#666'},
  noReviews: {fontSize: 14, color: '#888', fontStyle: 'italic', marginTop: 10},
  clearCacheButton: {
    backgroundColor: '#E91E63',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  clearCacheText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  imageLoader: {position: 'absolute', zIndex: 10},
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

export default DetailsScreen;
