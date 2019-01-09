import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

const configProd = [
  {
    input: 'src/index.ts',
    external: ['react', 'styled-components'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx', '.css', '.ts', '.tsx'],
        jsnext: true,
        main: true
      }),
      commonjs({
        namedExports: {
          react: ['Component', 'createElement'],
          'node_modules/react-tippy/dist/react-tippy.js': ['Tooltip']
        }
      }),
      filesize(),
      cleanup(),
      visualizer(),
      postcss({
        extract: true
      }),
      typescript({
        typescript: require('typescript')
      })
    ]
  }
];

const configDev = [
  {
    input: 'src/index.ts',
    external: ['react', 'styled-components'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx', '.css', '.ts', '.tsx'],
        jsnext: true,
        main: true
      }),
      commonjs({
        namedExports: {
          react: ['Component', 'createElement'],
          'node_modules/react-tippy/dist/react-tippy.js': ['Tooltip']
        }
      }),
      postcss({
        extract: true
      }),
      typescript({
        typescript: require('typescript')
      })
    ]
  }
];

export default (isProduction ? configProd : configDev);
