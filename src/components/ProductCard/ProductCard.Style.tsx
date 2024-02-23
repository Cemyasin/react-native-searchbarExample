import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    width: Dimensions.get('window').width / 2,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, 
    width: 'auto',
    marginBottom: 10,
  },
  image: {
    // width: '100%', // Kartın genişliğini kaplar
    // height: undefined, // Yükseklik otomatik ayarlanır
    // aspectRatio: 1, // Oranı 1:1 yapar, isteğe bağlı olarak değiştirebilirsin
    // resizeMode: 'cover', // Resmi orantılı olarak sığdırır
    width: '100%', // Konteynerin genişliğine göre esneklik
    height: '100%', // Konteynerin yüksekliğine göre esneklik
    resizeMode: 'contain', // veya 'cover', 'stretch'

  },
  descContainer:{
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#bebebe',
    textAlign: 'left',
  },
  outOfStockText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    left: 0, 
    right: 0, 
  },
});
