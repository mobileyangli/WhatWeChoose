/**
 * Copyright YangDongLing (Link Yang)
 *
 * @flow
 *
 */

'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';


/**
 * 1、添加HelloWorld Label
 */
// class WhatWeChoose extends Component {
//     render() {
//         return (
//             <Text style={styles.text}>Hello world!</Text>
//         );
//     }
// }

/**
 * 2、添加原生控件NavigationBar
 */

class HelloWorld extends Component {
    render() {
        return (
            <Text style={styles.text}>Hello world!</Text>
        );
    }
}

class WhatWeChoose extends Component {
    render() {
        return (
            // <Text style={styles.text}>Hello world!</Text>
             <WhatWeChooseNavigator />
        );
    }
}

class WhatWeChooseNavigator extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.container} initialRoute={{title:'WhatWeChoose', component:HelloWorld}}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text     : {
        color          : 'black',
        backgroundColor: 'white',
        fontSize       : 30,
        margin         : 80
    }
});

module.exports = WhatWeChoose;