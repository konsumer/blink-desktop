import fetch from 'node-fetch'

export const api = {}

api.client = {
  get: (url, options) => fetch(url, options).then(r => r.json()),
  post: (url, input, options) => fetch(url, Object.assign({}, options, { method: 'POST', body: JSON.stringify(input) })).then(r => r.json())
}

// api.accountOptions = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/account/options`, options)
// api.acknowledgeNotification = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v2/notification`, input, options)
// api.activateSiren = (tier, network, siren, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/${siren}/activate/`, input, options)
// api.activateSirens = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/activate/`, input, options)
// api.addCamera = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/add`, input, options)
// api.addChime = (tier, account, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${account}/networks/${network}/chimes/add/`, input, options)
// api.addSiren = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/add/`, input, options)
// api.appUpdateStatus = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/version`, options)
// api.armDisarmNetwork = (tier, network, type, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/${type}`, input, options)
api.batteryUsage = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/camera/usage`, options)
// api.blinkStabilityStatus = (tier, options) => api.client.get(`https://blinkstatus.net/api/v1/${tier}`, options)
api.cameraCommandStatus = (tier, network, camera, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}`, options)
// api.cameraMotion = (tier, network, camera, type, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/${type}`, input, options)
// api.changePassword = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/account/change_password/`, input, options)
// api.commandPolling = (tier, network, command, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}/command/${command}`, options)
// api.contactBlink = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v2/support/ob_phone/`, options)
// api.createProgram = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs/create`, input, options)
// api.createSystem = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/add`, input, options)
// api.deactivateSirens = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/deactivate/`, input, options)
// api.deleteAccount = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/account/delete/`, input, options)
// api.deleteCamera = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/delete/`, input, options)
// api.deleteMedia = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/{accountId}/media/delete`, input, options)
// api.deleteMediaCall = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/{accountId}/media/delete`, input, options)
// api.deleteProgram = (tier, network, program, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs/${program}/delete`, input, options)
// api.deleteSirens = (tier, network, siren, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/${siren}/delete`, input, options)
// api.deleteSyncModule = (tier, network, syncmodule, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/syncmodule/${syncmodule}/delete/`, input, options)
// api.deleteSystem = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/delete`, input, options)
// api.disableProgram = (tier, network, program, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs/${program}/disable`, input, options)
// api.downloadFirmwareUpdate = (tier, serial, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/sync_modules/${serial}/fw_update`, options)
// api.enableProgram = (tier, network, program, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs/${program}/enable`, input, options)
// api.getAccount = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/account`, options)
// api.getCameraConfig = (tier, network, camera, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/config`, options)
// api.getChangedMedia = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/{accountId}/media/changed`, options)
// api.getChangedVideos = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v2/videos/changed`, options)
// api.getClientOptions = (tier, account, client, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${account}/clients/${client}/options`, options)
// api.getMotionRegions = (tier, account, network, camera, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${account}/networks/${network}/cameras/${camera}/motion_regions`, options)
// api.getPrograms = (tier, network, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs`, options)
// api.getRegions = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/regions`, options)
// api.getSirens = (tier, network, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/`, options)
// api.getSirensForAllNetworks = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/sirens/`, options)
api.getUser = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/user`, options)
api.homescreenV3 = (tier, account, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v3/accounts/${account}/homescreen`, options)
// api.liveView = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v3/networks/${network}/cameras/${camera}/liveview`, input, options)
api.liveViewV5 = (tier, account, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v5/accounts/${account}/networks/${network}/cameras/${camera}/liveview`, input, options)
// api.loadCameraSettings = (tier, network, camera, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/config`, options)
// api.loadCameraStatus = (tier, network, camera, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/signals`, options)
api.login = (input, options) => api.client.post('https://rest.prod.immedia-semi.com/login', input, options)
// api.logout = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/logout/`, input, options)
api.network = (tier, network, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/network/${network}`, options)
// api.refreshCameraStatus = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/status`, input, options)
// api.regions = (options) => api.client.get('https://rest-prod.immedia-semi.com/regions', options)
// api.register = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v2/account/register`, input, options)
// api.resetPassword = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/account/reset_password/`, input, options)
// api.saveCalibrateTemperature = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/network/${network}/camera/${camera}/calibrate`, input, options)
// api.saveCameraSettings = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/update`, input, options)
// api.sendClientOptions = (tier, account, client, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${account}/clients/${client}/options`, input, options)
// api.sendLogs = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/app/logs/upload/`, input, options)
// api.sendLogsCall = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/app/logs/upload/`, input, options)
// api.sendSystemOfflineHelpEmail = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/account/system_offline/${network}`, input, options)
// api.setMotionRegions = (tier, account, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${account}/networks/${network}/cameras/${camera}/motion_regions`, input, options)
// api.startOnboarding = (tier, network, type, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v2/network/${network}/sync_module/${type}`, input, options)
api.takeSnapshot = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/camera/${camera}/thumbnail`, input, options)
// api.tempAlertDisable = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/network/${network}/camera/${camera}/temp_alert_disable`, input, options)
// api.tempAlertEnable = (tier, network, camera, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/network/${network}/camera/${camera}/temp_alert_enable`, input, options)
// api.terminateCommand = (tier, network, command, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/command/${command}/done/`, input, options)
// api.terminateOnboardingCommand = (tier, network, command, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/command/${command}/update/`, input, options)
// api.updateAccount = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/account/update`, input, options)
// api.updateCheck = (tier, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/fw/app/update_check`, options)
// api.updateCommand = (tier, network, command, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/command/${command}/update/`, input, options)
// api.updateCommandSync = (tier, network, command, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/command/${command}/update/`, input, options)
// api.updateNetworkSaveAllLiveViews = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/update`, input, options)
// api.updateProgram = (tier, network, program, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/programs/${program}/update`, input, options)
// api.updateSiren = (tier, network, siren, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/${siren}/update`, input, options)
// api.updateSirens = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/networks/${network}/sirens/update`, input, options)
// api.updateSystem = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/update`, input, options)
// api.updateTimezone = (tier, network, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/network/${network}/update`, input, options)
// api.verificationEmail = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/account/resend_verification/`, input, options)
// api.videoOptionsSetter = (tier, input, options) => api.client.post(`https://rest-${tier}.immedia-semi.com/api/v1/account/video_options`, input, options)
api.videos = (tier, accountID, since, page = 0, options) => api.client.get(`https://rest-${tier}.immedia-semi.com/api/v1/accounts/${accountID}/media/changed?since=${since.toISOString()}&page=${page}`, options)

export class Blink {
  // login and store credentials & headers
  login (email, password) {
    return api.login({ email, password })
      .then(info => {
        if (info.message) {
          throw new Error(info.message)
        }
        this.hydrate(info.authtoken.authtoken, info.account.id, Object.keys(info.region)[0])
        return info
      })
  }

  // rehydrate with token, id & region, so you don't have to log back in
  hydrate (token, account, tier = 'u004') {
    this.headers = { TOKEN_AUTH: token, ACCOUNT_ID: account }
    this.tier = tier
  }

  // get current user-info
  user () {
    return api.getUser(this.tier, { headers: this.headers })
  }

  // get list of current user's networks & battery info
  networks () {
    return api.batteryUsage(this.tier, { headers: this.headers })
  }

  // get details about a network
  network (network) {
    return api.network(this.tier, network, { headers: this.headers }).then(r => r.network)
  }

  // get a list of videos
  videos (page = 0, since = new Date(0)) {
    return api.videos(this.tier, this.headers.ACCOUNT_ID, since, page, { headers: this.headers })
  }

  // get details about a camera
  camera (network, camera) {
    return api.cameraCommandStatus(this.tier, network, camera, { headers: this.headers })
      .then(r => r.camera_status)
  }

  // take a thumbnail for a camera
  // this just triggers and returns info
  // might also trigger { message: 'System is busy, please wait', code: 307 } if busy
  async thumbnail (network, camera) {
    const cmd = api.takeSnapshot(this.tier, network, camera, {}, { headers: this.headers })
    if (cmd.message) {
      throw new Error(cmd.message)
    }
    return cmd
  }

  // get liveview for a camera
  // might also trigger { message: 'System is busy, please wait', code: 307 } if busy
  liveview (network, camera) {
    // return api.liveView(this.tier, network, camera, {}, { headers: this.headers })
    return api.liveViewV5(this.tier, this.headers.ACCOUNT_ID, network, camera, {}, { headers: this.headers })
  }

  // geta nice summary for basic usage
  summary () {
    return api.homescreenV3(this.tier, this.headers.ACCOUNT_ID, { headers: this.headers })
  }

  // proxy GET with credentials for correct tier
  // TODO: this is for binaries, so should abstract binary body blob/buffer stuff for cross-platform (browser vs node)
  get (url) {
    return fetch(`https://rest-${this.tier}.immedia-semi.com${url}`, { headers: this.headers })
  }
}

export default Blink
