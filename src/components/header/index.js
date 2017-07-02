import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
    const { text } = props;
    return (
        <Text>{ text }</Text>
    );
};

export { Header };
