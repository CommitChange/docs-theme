module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'autoprefixer'
  , 'postcss-font-magician'
  ]
, 'local-plugins': true
, 'autoprefixer': {browsers: 'last 2 versions'}
, input: 'lib/index.css'
, dir: 'build'
}
