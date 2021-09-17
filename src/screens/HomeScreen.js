import React from 'react';
import type { Node } from 'react';

const HomeScreen: () => Node = () => {
    return (

        <View style={styles.sectionContainer}>
            <Text>Welcome </Text>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>

            );

}