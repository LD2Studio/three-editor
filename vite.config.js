export default {
    root: 'src',
    base: './',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },

    server : {
        port: 3000,
        host: true
    }
}