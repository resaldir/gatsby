const config = {
  siteTitle: 'Saldi',
  siteTitleShort: 'Saldi',
  siteTitleAlt: 'Saldi',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.saldiwe.github.io',
  repo: 'https://github.com/saldiwe/taniarascia.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Saldi is a developer, designer, and writer who breaks down complex things to the simple one.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  disqusShortname: 'saldiwe',
  postDefaultCategoryID: 'Tech',
  userName: 'saldiwe',
  userEmail: 'resaldi97@outlook.com',
  userTwitter: 'saldiwe',
  userLocation: 'Jakarta Selatan, ID',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build website and mobile app.',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact me',
      link: '/newsletter/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
