const withSass = require('@zeit/next-sass')
const withImage = require('next-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

module.exports = withFonts(withCSS(withSass(withImage({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })

        return config
    }
}))))