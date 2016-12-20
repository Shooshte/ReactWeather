module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      CityForm: 'app/components/CityForm.jsx',
      Examples: 'app/components/Examples.jsx',
      Main: 'app/components/Main.jsx',
      About: 'app/components/About.jsx',
      Navigation: 'app/components/Navigation.jsx',
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
