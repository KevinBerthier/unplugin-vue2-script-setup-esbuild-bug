const vuePlugin = require('esbuild-vue');
const scriptSetup = require('unplugin-vue2-script-setup/esbuild');
require('esbuild').build({
    entryPoints: ['main.js'],
    bundle: true,
    outfile: 'out.js',
    plugins: [vuePlugin(), scriptSetup.default()],
    define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
    },
});
