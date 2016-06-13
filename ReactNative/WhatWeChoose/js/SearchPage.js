/**
 * Created by yangdongling on 16/6/13.
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image
} from 'react-native';

class SearchPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
                </Text>
                <Text style={styles.description}>
                    Search by place-name, postcode or search near your location.
                </Text>

                <View style={styles.flowRight}>
                    <TextInput style={styles.searchInput} placeholder='Search via name or postcode'/>
                    <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>

                <Image source={require('image!house')} style={styles.image}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container  : {
        padding   : 30,
        marginTop : 65,
        alignItems: 'center'
    },
    description: {
        marginBottom: 20,
        fontSize    : 18,
        textAlign   : 'center',
        color       : '#656565'
    },
    flowRight  : {
        flexDirection: 'row',
        alignItems   : 'center',
        alignSelf    : 'stretch'
    },
    buttonText : {
        fontSize : 18,
        color    : 'white',
        alignSelf: 'center'
    },
    button     : {
        height         : 36,
        flex           : 1,
        flexDirection  : 'row',
        backgroundColor: '#48BBEC',
        borderColor    : '#48BBEC',
        borderWidth    : 1,
        borderRadius   : 8,
        marginBottom   : 10,
        alignSelf      : 'stretch',
        justifyContent : 'center'
    },
    searchInput: {
        height      : 36,
        padding     : 4,
        marginRight : 5,
        flex        : 4,
        fontSize    : 18,
        borderWidth : 1,
        borderColor : '#48BBEC',
        borderRadius: 8,
        color       : '#48BBEC'
    },
    image: {
  width: 217,
  height: 138
}
});

module.exports = SearchPage;