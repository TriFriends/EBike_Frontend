const withSass = require('@zeit/next-sass')
const withImage = require('next-images')
const withFonts = require('next-fonts')

module.exports = withSass(withImage(withFonts))