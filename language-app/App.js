import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>Open up Ap.js to start working on your app!</Card>
      <Button 
        title="Fuck Me!"
      ></Button>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
