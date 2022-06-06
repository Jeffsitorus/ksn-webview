import React from 'react';
import {SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WebView
          onContentProcessDidTerminate={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn('Content process terminated, reloading', nativeEvent);
            this.refs.webview.reload();
          }}
          startInLoadingState={true}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          originWhitelist={['*']}
          source={{uri: 'https://new.ksn165.com/'}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
