# Using TypeORM in a Cordova project
This project demonstrates how [TypeORM](https://github.com/typeorm/typeorm) can be used within a Cordova or Phonegap app by using the [cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage) plugin.

To use TypeORM in your own cordova/phonegap project you have to
1. install the plugin `cordova plugin add cordova-sqlite-storage --save`
2. install typeorm `npm install typeorm --save`

TypeORM comes compiled for SystemJS but can also be used with other module loaders as a version compiled as a ES2015 module is also included.
This example uses SystemJS.

To run this example you have to
1. Make sure you have `cordova` installed, check out the [cordova website](https://cordova.apache.org/#getstarted) if you haven't
2. run `npm install`
3. compile via `tsc`
4. copy `Reflect.js` (`node_modules/reflect-metadata`) and `system.src.js` (`node_modules/systemjs/dist`) into the `www/lib` folder
5. copy `typeorm-browser.js` and `typeorm-browser.js.map` (`node_modules/typeorm`) into `www/lib/typeorm`
6. add your desired platform by running `cordova platform add <platform>`, where platform can be android or ios
7. run the app it via `cordova run <platform>`

This project is deliberately set up to use no automation tools like gulp so you can integrate and use your own workflow.
