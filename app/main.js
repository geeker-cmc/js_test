import React from "react";
import {render} from "react-dom";
let Hello=require('./components/productBox.js');
let $=require('jquery');
require('../src/less/index.less');

render(<Hello />,document.getElementById('content'));



