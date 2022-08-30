import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'

import pkg from './package.json'

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */'
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    onwarn(warning, warn) {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        if (/node_modules\//.test(warning.importer)) return
      }
      if (/(THIS_IS_UNDEFINED|EVAL)/.test(warning.code)) {
        if (/node_modules\//.test(warning.id)) return
      }
      warn(warning)
    },
    plugins: [
      del({ targets: ['dist/*', 'playground/src/component-lib'] }),
      commonjs(),
      copy({
        targets: [{ src: 'src/styles/antd.css', dest: 'dist/styles' }]
      }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      resolve({
        module: false,
        browser: true
      })
    ],
    external: Object.keys(pkg.peerDependencies || {})
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]

export default config
