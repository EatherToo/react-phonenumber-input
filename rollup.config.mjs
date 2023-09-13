import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import rollupPluginDts from 'rollup-plugin-dts'

import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default [
  {
    input: Object.fromEntries(
      glob
        .sync('./src/**/*.{css,ts,tsx}')
        .map((file) => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
    ),
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
        name: 'react-phonenumber-input',
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
    ],
  },
  {
    input: ['src/index.ts'],
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [rollupPluginDts.default()],
  },
]
