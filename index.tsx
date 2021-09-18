/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Chess from './src/Chess';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Chess);
