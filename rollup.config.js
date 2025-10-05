import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import terser from '@rollup/plugin-terser';

const buildLogger = () => ({
    name: 'build-logger',
    buildStart() {
        console.log('[rollup] Bundling BadMovieCytube/BillTube2.js...');
    },
    writeBundle(options, bundle) {
        const { file } = options;
        const outputs = Object.keys(bundle).join(', ');
        console.log(`[rollup] Bundle written to ${file} with chunks: ${outputs}`);
    },
});

export default {
    input: 'BillTube2.js',
    output: {
        file: 'BillTube2.min.js',
        format: 'iife',
        name: 'BillTube',
        sourcemap: false,
    },
    plugins: [buildLogger(), resolve(), commonjs(), terser()],
};