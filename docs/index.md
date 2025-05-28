---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IBM DevOps Deploy"
  text: "Plugins Documentation"
  image:
    light: "/deploy-black.png"
    dark: "/deploy-white.png"
    alt: "DevOps Deploy"
  actions:
    - theme: brand
      text: Get started with IBM DevOps Deploy
      link: https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=getting-started

    - theme: alt
      text: Learn more about Plug-ins
      link: https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=function-plug-ins

    - theme: alt
      text: Build Your Own Plugin
      link: https://community.ibm.com/community/user/blogs/shabaz-kowthalam/2024/11/25/creating-an-automation-plugin-for-devops-deploy

    - theme: alt
      text: Get help
      link: https://www.ibm.com/mysupport/s/?language=en_US


features:
  - title: AccuRev SCM 🌐
    icon:
      light: "/configure-dark.png"
      dark: "/configure-white.png"
    details: AccuRev is a client/server based source configuration management tool developed by AccuRev Inc. and maintained by MicroFocus
    link: AccuRevSourceConfig/

  - title: Ansible
    icon:
      light: "/runProcess-dark.png"
      dark: "/runProcess-white.png"
    details: The Ansible plugin enables seamless integration of Ansible environment into the DevOps Deploy deployment process, allowing you to execute various commands.
    link: ansible/

  - title: z/OS Dataset Writer
    icon:
      light: "/runProcess-dark.png"
      dark: "/runProcess-white.png"
    details: Copies text, dataset, or USS file to a mainframe dataset
    link: zos-dataset-writer/

  - title: z/OS REXX
    icon:
      light: "/runProcess-dark.png"
      dark: "/runProcess-white.png"
    details: Executes REXX program from a Dataset or from a specified inline text in the plugin
    link: zos-rexx/
---

