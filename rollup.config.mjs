// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import path from "node:path";
// import css from "rollup-plugin-css-only";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import postcss from "rollup-plugin-postcss";
// import dts from "rollup-plugin-dts";
// import { createRequire } from 'node:module';
// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');
// import tailwindcss from "tailwindcss";
// import tailwindConfig from "./tailwind.config.js";


// export default [{
//   input: "src/index.ts",
//   output: [
//     {
//       file: packageJson.main,
//       format: "cjs",
//       sourcemap: true
//     },
//     {
//       file: packageJson.module,
//       format: "esm",
//       sourcemap: true
//     }
//   ],
//   plugins: [
//     peerDepsExternal(),
//     // nodeResolve({ extensions: [".css"] }),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: "./tsconfig.json" }),
//     postcss({
//       extract: true,
//       plugins: [tailwindcss(tailwindConfig)],
//       extract: path.resolve('./button.css'),
//     }),
//     css({ output: "tailwind.css" }),
//   ],
//   external: ["react", "react-dom", "tailwind.css", /\.css$/],
// }, {
//   input: "dist/esm/types/index.d.ts",
//   output: [{ file: 'lib/index.d.ts', format: 'esm' }],
//   plugins: [dts()],
// }];

//! con css prueba dos no funciona taildwind

// import external from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import postcss from "rollup-plugin-postcss";
// import postcssModules from 'postcss-modules';
// import { createRequire } from 'node:module';
// import css from "rollup-plugin-css-only";
// const requireFile = createRequire(import.meta.url);
// import dts from "rollup-plugin-dts";
// const packageJson = requireFile('./package.json');
// import tailwindcss from "tailwindcss";
// import tailwindConfig from "./tailwind.config.js";
// import { nodeResolve } from "@rollup/plugin-node-resolve";


// export default [{
//   input: 'src/index.ts',
//   output: [
//     {
//       file: packageJson.main,
//       format: 'cjs',
//       sourcemap: true,
//     },
//     {
//       file: packageJson.module,
//       format: 'esm',
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     external(),
//     postcss({
    
//       plugins: [
        
//         tailwindcss(tailwindConfig)
//       ],
//     }),
//     // postcss({
//     //   // extract: 'types/components/\*.css',
//     //   modules: true,
//     //   autoModules: true,
//     //   extensions: ['.css'],

//     //   plugins: [
//     //     postcssModules(),
//     //     tailwindcss(tailwindConfig)
//     //   ],
//     // }),
//     css({ output: "main.css" }),
//     resolve(),
//     commonjs(),
//     typescript({
//       tsconfig: './tsconfig.json',
//     }),
//     nodeResolve({ extensions: [".css"] }),
    
//   ],
//   external: ['react', 'react-dom', "main.css"],
// },
// {
//   input: "dist/esm/types/index.d.ts",
//   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//   plugins: [dts()],
//   // external: [/\.css$/],
// }]

// import resolve from "@rollup/plugin-node-resolve";
// import external from "rollup-plugin-peer-deps-external";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import postcss from "rollup-plugin-postcss";
// import dts from "rollup-plugin-dts";
// import css from "rollup-plugin-css-only";
// import tailwindcss from "tailwindcss";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import tailwindConfig from "./tailwind.config.js";
// import packageJson from "./package.json" assert { type: "json" };
// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       external(),
//       // postcss({ plugins: [tailwindcss(tailwindConfig)] }),
//       postcss({
//         config: {
//           path: "./postcss.config.js",
//         },
//         extensions: [".css"],
//         minimize: true,
//         inject: {
//           insertAt: "top",
//         },
//       }),
//       css({ output: "main.css" }),
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       // nodeResolve({ extensions: [".css"] }),
//     ],
//     external: ["react", "react-dom", "main.css"],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
// ];


//!! Betsa config
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-css-only";
import tailwindcss from "tailwindcss";
// import tailwindcss from './src/taildwind.css'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import tailwindConfig from "./tailwind.config.js";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      external(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        plugins: [tailwindcss(tailwindConfig)]
      }),
      css({ output: "tailwind.css" }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      nodeResolve({ extensions: [".css"] }),
    ],
    external: ["react", "react-dom", "tailwind.css"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

