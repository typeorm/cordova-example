# Using TypeORM in a Cordova project
This project demonstrates how [TypeORM](https://github.com/typeorm/typeorm) can be used within a Cordova or Phonegap app by using the [cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage) plugin.

### How to run this example
1. Install the cordova cli: `npm install -g cordova`
2. Install all dependencies: `npm install`
3. Compile: `tsc`
4. Pack js files `webpack`
5. Add your desired platform: `cordova platform add <ios | android>`
6. Run the app: `cordova run <ios | android>`

This project is deliberately set up to use no automation tools like gulp so you can integrate and use your own workflow.

### Using TypeORM in your own app
1. Install the plugin: `cordova plugin add cordova-sqlite-storage --save`
2. Install typeorm: `npm install typeorm --save`
3. Add `webpack.config.js` or merge it with existing one
