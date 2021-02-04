import React from 'react'
import StackNavigation from '@Navigations/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  return <Provider store={store}>
    <StackNavigation />
  </Provider>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
