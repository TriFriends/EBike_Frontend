const withSass = require('@zeit/next-sass')
const withImage = require('next-images')
const withFonts = require('next-fonts')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withSass(withImage(withFonts({
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        return config
    }
})))