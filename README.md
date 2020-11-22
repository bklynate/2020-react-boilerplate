# **2020 React Project Boilerplate**

This is a server side rendered React application boilerplate. It was built with Preact X, React, Redux, Webpack, Prettier, Eslint, Babel, and Express mainly.


####  **BEFORE BUILDING A PRODUCTION BUILD LOCALLY**
Inside `config/webpack.server.js` you will need to uncomment the following lines:
``` 
// const Dotenv = require('dotenv-webpack');
... 
plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new Dotenv(),
]
```
Build a **production** version of the application by running `npm run prod`.

## **Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)
