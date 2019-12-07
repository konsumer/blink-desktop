# blink-desktop

This is a cross-platform app to view [blink cameras](https://blinkforhome.com/).

![screenshot](./screenshot.png)


## development

```
npm i           # install tools
npm start       # run hot-reloading development version
npm run make    # create distributable runtimes for release
npm run lint    # fix files according to code-standard
npm run publish # send to github releases
```

Press `Alt` to show menu (so you can use dev-tools, etc)


## TODO

* [ ] add router
* [ ] snapshot page
* [ ] live-video page
* [ ] cloud-files page
* [ ] new motion notification system
* [ ] add functionality to home buttons
* [ ] add settings page
* [ ] add program page
* [ ] handle onboarding?
* [ ] give local changes back to [blink-data](https://github.com/konsumer/blink-data)
* [ ] [sys-tray icon](https://github.com/kevinsawicki/tray-example) that notifies when there is motion and has options for arm/disarm & view media