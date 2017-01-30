'use strict';
require(__dirname + '/../sass/home/base-home.scss');

var component = require('./component');


var app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(component());
