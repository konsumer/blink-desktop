// run notifications in parent-thread (for native)
const notifier = window.electron.remote.require('node-notifier')

export const notify = args => notifier.notify(args)
