import {StatusBar, View} from 'react-native';
import {Calculator} from './presentation/components/hooks/screens/Calculator';
import {styles} from './config/theme/app.theme';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <Calculator />
    </View>
  );
}

export default App;
