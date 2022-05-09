import React from 'react';
import { View, Text } from 'react-native';

import { Copyrigth } from '../Copyrigth';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

export function Options() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Deixe seu feedback 
            </Text>

            <View style={styles.options}>
                {
                    Object
                    .entries(feedbackTypes)
                    .map(([key, Value]) => (
                        <Option 
                        key={key}
                        title={Value.title}
                        image={Value.image}
                        />
                    ))

                }
            </View>



            <Copyrigth />
        </View>
    );
}
