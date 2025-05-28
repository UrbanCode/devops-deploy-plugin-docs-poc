import { defineConfig } from 'vitepress'

function createCommonSidebar(base) {
  return [
    {
      items: [
        { text: 'Introduction', link: `${base}/` },
        { text: 'Overview', link: `${base}/overview` },
        { text: 'Steps', link: `${base}/steps` },
        { text: 'Usage', link: `${base}/usage`},
        { text: 'Downloads', link: `${base}/downloads`}
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-deploy-plugin-docs/",
  title: "Home",
  description: "Documentation for IBM DevOps Deploy Plugins",
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-deploy-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      '/zos-dataset-writer/' : createCommonSidebar('/zos-dataset-writer'),
      '/zos-rexx/' : createCommonSidebar('/zos-rexx'),
      '/ansible/' : createCommonSidebar('/ansible'),
      '/AccuRevSourceConfig/' : createCommonSidebar('/AccuRevSourceConfig')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-deploy-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
