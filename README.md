<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/github_username/repo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">The Nuxt UCSD Triple C Official Website</h3>

  <p align="center">
    UCSD Triple C official website, now rewritten w/ vuejs, nuxtjs, and vuetify, coming with tons of new features!
    <br />
    <a href="https://github.com/github_username/repo">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Maintainence](#maintainence)
  - [Manage Member Information](#manage-member-information)
  - [Update Timeline](#update-timeline)
  - [Update Project Readmes](#update-project-readmes)
  - [Update Department Readmes](#update-department-readmes)
  - [Sync Newletters](#sync-newletters)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

The next generation of the UCSD Triple C official website. It is now under intense development!

### Built With
* Front-end
  * [Nuxt.js](https://nuxtjs.org)
  * [Vue.js](https://vuejs.org)
  * [Vuetify](https://vuetifyjs.com)
  * Misc
    * Vuex
    * Vue Router
    * Eslint
    * Babel
    * Axios
    * Prism
    * Typeit
* Back-end
  * Springboot
    * Mysql
    * Spring Security
  * AWS
    * Lambda
    * Cloud Front
  * Mailchip API



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* yarn
* ucsdtriplec official web management system [(installation guide)](https://gitlab.com/ucsd-triple-c/ucsdtriplec-official-web-management-sys)
```sh
# macOS
$ brew install yarn

# Windows
$ choco install yarn

# CentOS / Fedora / RHEL
$ curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```

### Installation

1. Clone the repo
```sh
$ git clone https://gitlab.com/ucsd-triple-c/ucsdtriplec-official-web-nuxt.git
```
2. Install NPM packages
```bash
# install dependencies
$ yarn install
```
2. Build and start the server

> Remember to setup the management system server before you start!

```bash
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Maintainence
### Manage Member Information
Please refer to ucsdtriplec official web management system documentation. Once you finished, regenerate the front end to update the contents.

### Update Timeline
Edit markdown files in `/content/timeline`. The markdown files should follow the template below.
```
---
title: e.g. "First Online Demo day"
date: e.g. 06/2020 (should follow DD/MM/YYYY format )
index: 10 (for sorting timeline, check on your own!)
---
A short description of the project (not required). e.g. "Demo day has been an established cultural in Triple C. We host this quarterly event to demonstrate our groups' latest achievement. Due to Covid-19, we shifted this event to streaming platform Bilibili yet still received a high volume of audience."
```

### Update Project Readmes
Edit markdown files in `/content/projects`. The markdown files should follow the template below.
```markdown
---
title: 'Title of the project'
description: 'description of the project'

// note: the parentheses and the position inside it are optional
team:
  - Steve Jobs (PM)
  - Jimmy Keesee (Frontend)
  - Linus Torvalds (Backend)
  - Elon Musk
---
Anything else about the project
...
```

### Update Department Readmes
Edit markdown files in `/content/departments`. The markdown files should follow the template below.
```markdown
---
title: 'Title of the department'
description: 'Short description or Chinese name of the department'
---
Anything else to introduce the department
...
```

### Sync Newletters
In mailchimp, drop the newsletters to be shown to folder "newsletters". Regenerated the front end and hopefully everything will be in sync.
<!-- ROADMAP -->
## Roadmap

See the [open issues](https://gitlab.com/ucsd-triple-c/ucsdtriplec-official-web-nuxt/issues) for a list of proposed features (and known issues).
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Xiyan Shao - x3shao AT ucsd.edu

Project Link: [https://gitlab.com/ucsd-triple-c/ucsdtriplec-official-web-nuxt](https://gitlab.com/ucsd-triple-c/ucsdtriplec-official-web-nuxt)
