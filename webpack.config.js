let webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      './app/app.jsx'],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/main.scss',
      CityForm: 'app/components/CityForm.jsx',
      Examples: 'app/components/Examples.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      Main: 'app/components/Main.jsx',
      About: 'app/components/About.jsx',
      Navigation: 'app/components/Navigation-fix.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherText: 'app/components/WeatherText.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
