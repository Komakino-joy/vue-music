module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: '(en)',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
    pwa: {
      name: 'Vue-Music',
      themeColor: '#ff5e3a',
      manifestOptions: {
        short_name: 'Music',
      },
    },
  },
};
