# Using TypeORM in a Cordova project
This project demonstrates how [TypeORM](https://github.com/typeorm/typeorm) can be used within a Cordova or Phonegap app by using the [cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage) plugin.

To use TypeORM in your own cordova/phonegap project you have to
1. install the plugin `cordova plugin add cordova-sqlite-storage --save`
2. install typeorm `npm install typeorm --save`

TypeORM comes compiled for SystemJS but can also be used with other module loaders as a version compiled as a ES2015 module is also included.
This example uses SystemJS.

To run this example you have to
1. run `npm install`
2. compile via `tsc`
3. copy `Reflect.js` and `system.src.js` from the `node_modules` folder into the `lib` folder
4. copy `typeorm-browser.js` and `typeorm-browser.js.map` into `lib/typeorm`
5. run it via `cordova run android` or `cordova run ios`

This project is deliberately set up to use no automation tools like gulp so you can integrate and use your own workflow.
