import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.Style';
const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
      </View>
      <View style= {styles.descContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && (
          <Text style={styles.outOfStockText}>Stokta Yok</Text>
        )}
      </View>
    </View>
  );
};
export default ProductCard;
