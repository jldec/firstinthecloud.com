var opts = module.exports = {

  docTitle: 'firstinthecloud',              // site name
  appUrl: 'https://firstinthecloud.com/',   // site url
  noRobots: false,                          // crawl me
  throttleReload: '1s',
  linkNewWindow: true,

  pkgs: [
    'pub-theme-pubblog',
    'pub-pkg-font-open-sans',
    'pub-pkg-font-awesome',
    'pub-pkg-seo'
  ],

  github: 'https://github.com/jldec/firstinthecloud.com',

  sources: [
    {
      path:'markdown',
      writable:true
    }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    './README.md',
    './LICENSE.TXT',
    './CNAME',
    './.nojekyll'
  ],

  outputs: [
    {
      path:'./docs',
      relPaths:true
    }
  ],

};
