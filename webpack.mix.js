const cssImport = require('postcss-import');
const cssNesting = require('postcss-nesting');
const mix = require('laravel-mix');
const path = require('path');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .react('resources/js/app.js', 'public/js')
    .sass('resources/css/app.scss', 'public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [
            cssImport(),
            tailwindcss('tailwind.config.js'),
            cssNesting(),
            ...(mix.inProduction()
                ? [
                    purgecss({
                        content: [
                            './resources/views/**/*.blade.php',
                            './resources/js/**/*.js'
                        ],
                        defaultExtractor: content =>
                            content.match(/[\w-/:.]+(?<!:)/g) || [],
                        whitelistPatternsChildren: [/nprogress/]
                    })
                ]
                : [])
        ]
    })
    .webpackConfig(webpack => {
        return {
            output: {chunkFilename: 'js/[name].js?id=[chunkhash]'},
            resolve: {
                alias: {
                    '@': path.resolve('resources/js')
                }
            }
        }
    })
    .version()
    .sourceMaps()
