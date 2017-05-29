import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/engine.js',
  format: 'umd',
  sourceMap: true,
  moduleName: "sprintjs",
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'dist/sprintjs.js'
};
