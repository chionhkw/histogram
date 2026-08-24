import { build } from 'esbuild';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

build({
    entryPoints: ['entry.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'browser', // Tell esbuild this runs in a web browser!
    target: ['es2022'],
    outfile: 'dist/bundle.js',
    plugins: [
        NodeModulesPolyfillPlugin() // Polyfills Node's crypto, stream, buffers etc., for teleproto
    ],
    define: {
        'process.env.NODE_ENV': '"production"',
        'global': 'window', // Maps Node's global object to the browser window
    }
}).catch(() => process.exit(1));
