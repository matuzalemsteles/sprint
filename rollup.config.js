import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const babelConfig = {
  'presets': [
    ['env', {
      'targets': {
        'browsers': ['last 2 versions']
      },
      'loose': true
    }]
  ]
};


export default {
  entry: 'src/engine.js',
  format: 'umd',
  sourceMap: true,
  moduleName: "sprintjs",
  plugins: [
    babel(babelrc({
      addExternalHelpersPlugin: false,
      config: babelConfig,
      exclude: 'node_modules/**'
    }))
  ],
  dest: 'dist/sprintjs.js'
};
