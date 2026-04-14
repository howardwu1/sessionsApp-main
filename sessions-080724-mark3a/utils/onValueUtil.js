import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const onValueChange = {
    
    onChange: async (item, selectedValue) => {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
    }

  }
  export default onValueChange;