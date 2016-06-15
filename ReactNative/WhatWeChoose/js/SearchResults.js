/**
 * Created by yangdongling on 16/6/14.
 *
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    ListView
} from 'react-native';
import PropertyView from './PropertyView'

class SearchResults extends Component {
    constructor(props) {
        super(props)
        // 比较数据是否同一条数据,API中已经没有了guid，使用title来做比较依据
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1.title !== r2.title});
        // props不可改变，state中clone了一份数据
        this.state = {dataSource: dataSource.cloneWithRows(this.props.listings)};
    }

    // 详细定义每个单元格
    renderRow(rowData, sectionID, rowID) {
        var price = rowData.price_formatted.split(' ')[0];

        return (
            <TouchableHighlight onPress={()=>this.rowPressed(rowData.title)}
                                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={{ uri: rowData.img_url }}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.price}>£{price}</Text>
                            <Text style={styles.title}
                                  numberOfLines={1}>{rowData.title}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
        );
    }

    rowPressed(propertyTitle){
        console.log('guid ' + propertyTitle);
        var property = this.props.listings.filter(prop => prop.title === propertyTitle)[0];
        console.log(property);
        this.props.navigator.push({
            title:'Property',
            component:PropertyView,
            passProps:{property}
        });
    }
}

var styles = StyleSheet.create({
    thumb        : {
        width      : 80,
        height     : 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator    : {
        height         : 1,
        backgroundColor: '#dddddd'
    },
    price        : {
        fontSize  : 25,
        fontWeight: 'bold',
        color     : '#48BBEC'
    },
    title        : {
        fontSize: 15,
        color   : '#656565'
    },
    rowContainer : {
        flexDirection: 'row',
        padding      : 10
    }
});

module.exports = SearchResults;
