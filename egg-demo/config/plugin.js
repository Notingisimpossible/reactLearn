'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors:{
    enable: true,
    package: 'egg-cors',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  }
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};