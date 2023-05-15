const path = require('path');

module.exports = {
  entry: './src/main.js', // Path to your main entry file
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'app.js', // Output file name
  },
};
