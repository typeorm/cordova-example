# Using TypeORM in a Cordova project
This project demonstrates how [TypeORM](https://github.com/typeorm/typeorm) can be used within a Cordova or Phonegap app by using the [cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage) plugin.

### How to run this example
1. Install the cordova cli: `npm install -g cordova`
2. Install all dependencies: `npm install`
3. Copy `Reflect.js` (`node_modules/reflect-metadata`) and `system.src.js` (`node_modules/systemjs/dist`) into the `www/lib` folder
4. Copy `typeorm-browser.js` and `typeorm-browser.js.map` (`node_modules/typeorm`) into `www/lib/typeorm`
5. Compile: `tsc`
6. Add your desired platform: `cordova platform add <ios | android>`
7. Run the app: `cordova run <ios | android>`

This project is deliberately set up to use no automation tools like gulp so you can integrate and use your own workflow.

### Using TypeORM in your own app
1. Install the plugin: `cordova plugin add cordova-sqlite-storage --save`
2. Install typeorm: `npm install typeorm --save`

TypeORM comes compiled for SystemJS but can also be used with other module loaders as a version compiled as a ES2015 module is also included.
This example uses SystemJS.