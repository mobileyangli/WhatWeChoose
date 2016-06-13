/**
 * Copyright YangDongLing (Link Yang)
 *
 * @flow
 *
 */

'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import WhatWeChoose from 'WhatWeChoose';

function setup():React.Component {
    // TODO:做一些项目初始化需要的工作,比如网络连接,数据库初始化等

    class Root extends Component {
        render() {
            return (
                <Text style={styles.text}>Hello world!</Text>
                // <WhatWeChoose />
            );
        }
    }

    return Root;
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

module.exports = setup;