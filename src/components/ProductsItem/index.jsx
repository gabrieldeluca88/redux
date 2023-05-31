import { View, Text , TouchableOpacity , Image} from 'react-native'
import React from 'react'
import styles from './styles';

const ProductsItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => onSelected(item)}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price}</Text>
          </View>
        </TouchableOpacity>
      );
}

export default ProductsItem