import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import product_data from '../product_data.json';
import ProductCard from './components/ProductCard';
import filter from 'lodash.filter';
const API_ENDPOINT = 'https://randomuser.me/api/?results=30';
function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [fullData, setFullData] = React.useState([]);

  const [text, onChangeText] = React.useState('');

  const keyExtractor = (product, index) => product.u_id?.toString();
  const renderProducts = ({item}) => <ProductCard product={item} />;

  React.useEffect(() => {
    setIsLoading(true);
    try {
      setData(product_data);
      setFullData(product_data);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }, []);

  const handleSearch = query => {
    onChangeText(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, item => {
      return contains(item, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({title}, query) => {
    const titleToLow = title.toLowerCase();
    if (titleToLow.includes(query)) {
      return true;
    } else {
      return false;
    }
  };
  if (isLoading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size={'large'} color={'#5500dc'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingView}>
        <Text>Error in fetching data... Plase check your internet connect</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>CEMSTORE</Text>

      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        value={text}
        onChangeText={query => handleSearch(query)}
      />

      <FlatList
        horizontal={false}
        data={product_data}
        keyExtractor={(item) => item.title + item.timestamp}
        renderItem={renderProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'left',
    marginLeft: 20,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'gray',
  },
});
export default App;
