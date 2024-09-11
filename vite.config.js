// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'), // 入口文件路径
      name: '@arcblock/xbytes', // 库的全局变量名（用于 UMD 构建）
      fileName: (format) => `my-library.${format}.js`, // 输出文件名
    },
    rollupOptions: {
      plugins: [
        commonjs(),
      ],
      // 确保外部化处理那些你不想打包进库的依赖
      external: [], // 在这里列出外部依赖，比如 ['vue']
      output: [
        {
          format: 'cjs',
          exports: 'named',
          // 指定输出路径和文件名
          entryFileNames: 'index.js',
        },
        {
          format: 'es',
          exports: 'named',
          // 指定输出路径和文件名
          entryFileNames: 'index.mjs',
        },
      ],
    },
  },
});
