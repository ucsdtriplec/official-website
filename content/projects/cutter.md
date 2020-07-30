---
title: Cutter
description: A Qt and C++ GUI powered by radare2, created by reverse engineers for reverse engineers.
team:
  -
    name: Florian Märkl
    position: Tech Lead
    description: Full Heap Developer
    avatarUrl: https://avatars1.githubusercontent.com/u/1460997?s=460&u=b713d00a36fb060cd74f80716b5f18fb2407cc44&v=4
    links:
      - 
        icon: github
        url: https://github.com/thestr4ng3r
      -
        icon: link
        url: https://metallic.software
  -
    name: xarkes
    position: Developer
    description: Open source contributor
    avatarUrl: https://avatars2.githubusercontent.com/u/10772605?s=460&u=8858eeb7d62dfae2d4aa4f00b7b170a37a9bdcb7&v=4
    links:
      - 
        icon: github
        url: https://github.com/xarkes
      -
        icon: link
        url: https://xarkes.com/
  -
    name: Hugo Teso
    position: Developer
    description: Noting to say
    avatarUrl: https://avatars3.githubusercontent.com/u/4849824?s=460&u=d50acce4270f7457bf8aa1a227a970353592e06a&v=4
    links:
      - 
        icon: github
        url: https://github.com/hteso
      -
        icon: email
        url: mailto:hugo.teso@gmail.com
---

<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Cutter logo" src="https://raw.githubusercontent.com/radareorg/cutter/master/src/img/cutter.svg?sanitize=true">

Cutter is a free and open-source reverse engineering framework powered by [radare2](https://github.com/radareorg/radare2) . Its goal is making an advanced, customizable and FOSS reverse-engineering platform while keeping the user experience at mind. Cutter is created by reverse engineers for reverse engineers.  

[![Build Status](https://travis-ci.com/radareorg/cutter.svg?branch=master)](https://travis-ci.com/radareorg/cutter)
[![Build status](https://ci.appveyor.com/api/projects/status/s9rkx1dn3uy4bfdx/branch/master?svg=true)](https://ci.appveyor.com/project/radareorg/cutter/branch/master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/radareorg/cutter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/radareorg/cutter/alerts/)

## Learn more at [https://cutter.re](https://cutter.re).

![photo](https://cutter.re/assets/images/cutter-screenshot.png)

## Downloading a release

Cutter is available for all platforms (Linux, macOS, Windows).
You can download the latest release [here](https://github.com/radareorg/cutter/releases).
 * macOS: Download the latest `.dmg` file or use [Homebrew Cask](https://github.com/Homebrew/homebrew-cask) `brew cask install cutter`.
 * Windows: Download the latest Zip archive.
 * Linux: Download the latest AppImage file. Then just make it executable and run it:
   * `chmod +x <appimage_file>`
   * `./<appimage_file>`

## Building from sources

To build Cutter on your local machine, please follow this guide: [Building from source](https://cutter.re/docs/building.html)

## Docker

To deploy *cutter* using a pre-built `Dockerfile`, it's possible to use the [provided configuration](docker). The corresponding `README.md` file also contains instructions on how to get started using the docker image with minimal effort.

## Documentation

You can find our documentation in our [website](https://cutter.re/docs/).

## Plugins
Cutter supports both Python and Native C++ plugins. Want to extend Cutter with Plugins? Read the [Plugins](https://cutter.re/docs/plugins) section on our documentation.

### Official and Community Plugins
Our community built many plugins and useful scripts for Cutter such as the native integration of Ghidra decompiler or the plugin to visualize DynamoRIO code coverage. You can find more plugins in the [following list](https://github.com/radareorg/cutter-plugins). Don't hesitate to extend it with your own plugins and scripts for Cutter.

## Help

The best place to obtain help from *Cutter* developers and community is to contact us on:

- **Telegram:** https://t.me/r2cutter
- **IRC:** #cutter on irc.freenode.net
- **Twitter:** [@r2gui](https://twitter.com/r2gui)