/**
 * Copyright YangDongLing (Link Yang)
 *
 * @flow
 *
 */

'use strict';

import React, {Component} from 'react';
import WhatWeChoose from 'WhatWeChoose';

function setup():React.Component {
    // TODO:做一些项目初始化需要的工作,比如网络连接,数据库初始化等

    // class Root extends Component {
    //     render() {
    //         return (
    //             <WhatWeChoose />
    //         );
    //     }
    // }

    return () => WhatWeChoose;
}

module.exports = setup;