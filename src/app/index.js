import React from 'react';
import { View } from 'react-native';

import { Header } from '../components/common';
import AlbumList from '../components/album-list';

const App = () => {
    return (
        <View>
            <Header headerText={ 'Albums' }/>
            <AlbumList />
        </View>
    );
};

export default App ;
