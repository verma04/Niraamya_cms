const path = require('path');
const withFonts = require('next-fonts');
const dev = process.env.NODE_ENV !== 'production';
const withCSS = require('@zeit/next-css')
module.exports = withFonts({

  cssModules: true ,
  webpack: config => {

    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
   
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },



 
 
})