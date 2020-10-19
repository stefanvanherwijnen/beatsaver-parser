import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      entryFileNames: 'index.common.js',
      format: 'cjs',
    },
    {
      name: 'jsonApiStore',
      dir: './dist',
      entryFileNames: 'index.umd.js',
      format: 'umd',
    },
    {
      dir: './dist',
      entryFileNames: 'index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js'],
      preferBuiltins: false,
      browser: true
    }),
    typescript(
      {
        declaration: true,
        declarationDir: 'dist/types/',
      }
    ),
    commonjs({ extensions: ['.js'] }),
    json(),
    // terser()
  ],
};