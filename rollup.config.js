import commonjs from "@rollup/plugin-commonjs"

export default [
    {
        input: "src/js/main.js",
        output: {
            file: "app/js/main.js",
            format: "cjs",
        },
        plugins: [
            commonjs(),
        ]
    },
    {
        input: "src/js/preload.js",
        output: {
            file: "app/js/preload.js",
            format: "cjs",
        },
        plugins: [
            commonjs(),
        ]
    }
]
