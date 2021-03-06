/**
 * @fileoverview A sample non-linear VPAID ad useful for testing a VPAID JS
 * enabled player. This ad will show a non-linear ad which can also enter linear
 * mode.
 */

/**
 * @constructor
 */
const VpaidNonLinear = function() {
  /**
   * The slot is the div element on the main page that the ad is supposed to
   * occupy.
   * @private {Object}
   */
  this.slot_ = null;

  /**
   * The video slot is the video element used by the ad to render video content.
   * @private {Object}
   */
  this.videoSlot_ = null;

  /**
   * An object containing all registered events. These events are all
   * callbacks for use by the VPAID ad.
   * @private {Object}
   */
  this.eventsCallbacks_ = {};

  /**
   * A list of getable and setable attributes.
   * @private {Object}
   */
  this.attributes_ = {
    'companions' : '',
    'desiredBitrate' : 256,
    'duration' : 10,
    'expanded' : false,
    'height' : 0,
    'icons' : '',
    'linear' : false,
    'skippableState' : false,
    'viewMode' : 'normal',
    'width' : 0,
    'volume' : 1.0
  };

  /**
   * When the ad was started.
   * @private {number}
   */
  this.startTime_ = 0;

  /**
   * A set of ad playback events to be reported.
   * @private {Object}
   */
  this.quartileEvents_ = [
    {event: 'AdImpression', value: 0},
    {event: 'AdVideoStart', value: 0},
    {event: 'AdVideoFirstQuartile', value: 25},
    {event: 'AdVideoMidpoint', value: 50},
    {event: 'AdVideoThirdQuartile', value: 75},
    {event: 'AdVideoComplete', value: 100}
  ];


  /**
   * @private {number} An index into what quartile was last reported.
   */
  this.nextQuartileIndex_ = 0;

  /**
   * Parameters passed in from the AdParameters section of the VAST.
   * Used for video URL and MIME type.
   *
   * @private {!Object}
   */
  this.parameters_ = {};
};


/**
 * Returns the supported VPAID verion.
 * @param {string} version
 * @return {string}
 */
VpaidNonLinear.prototype.handshakeVersion = function(version) {
  return ('2.0');
};


/**
 * Initializes all attributes in the ad. The ad will not start until startAd is
 * called.
 *
 * @param {number} width The ad width.
 * @param {number} height The ad height.
 * @param {string} viewMode The ad view mode.
 * @param {number} desiredBitrate The desired bitrate.
 * @param {Object} creativeData Data associated with the creative.
 * @param {Object} environmentVars Runtime variables associated with the
 *     creative like the slot and video slot.
 */
VpaidNonLinear.prototype.initAd = function(
    width,
    height,
    viewMode,
    desiredBitrate,
    creativeData,
    environmentVars) {
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.attributes_['desiredBitrate'] = desiredBitrate;

  // slot and videoSlot are passed as part of the environmentVars
  this.slot_ = environmentVars.slot;
  this.videoSlot_ = environmentVars.videoSlot;

  // Parse the incoming ad parameters.
  this.parameters_ = JSON.parse(creativeData['AdParameters']);

  this.log('initAd ' + width + 'x' + height +
      ' ' + viewMode + ' ' + desiredBitrate);
  this.callEvent_('AdLoaded');
};

/**
 * Helper function to update the size of the video player.
 * @private
 */
VpaidNonLinear.prototype.updateVideoPlayerSize_ = function() {
  this.videoSlot_.setAttribute('width', this.attributes_['width']);
  this.videoSlot_.setAttribute('height', this.attributes_['height']);
};

/**
 * Called by the wrapper to start the ad.
 */
VpaidNonLinear.prototype.startAd = function() {
  this.log('Starting ad');

  const date = new Date();
  this.startTime_ = date.getTime();

  // Create a div to contain our ad elements.
  const overlays = this.parameters_.overlays || [];
  const g = document.createElement('div');
  g.setAttribute('style', 'opacity: 1;bottom: 0;text-align: center;position: absolute;width: 100%;z-index: 1000;');
  this.slot_.appendChild(g);
  const box = document.createElement('div');
  box.setAttribute('style', 'display: block; position: relative;');
  g.appendChild(box);
  const scontainer = document.createElement('div');
  scontainer.setAttribute('style', 'margin: auto; display: block; min-width: 320px; max-width: 450px; position: relative;');
  box.appendChild(scontainer);
  const textcon = document.createElement('div');
  textcon.setAttribute('style', 'height: 63px;margin-bottom: 3px;pointer-events: auto;position: relative;');
  scontainer.appendChild(textcon);

  const container = document.createElement('div');
  container.setAttribute('style', 'background-color: rgba(0,0,0,0.6); background-image: none; border: 1px solid rgba(0,0,0,0.6); border-radius: 0; box-shadow: none; padding-left: 10px; position: absolute; text-align: left; top: 0; bottom: 0; left: 0; right: 0; ');
  textcon.appendChild(container);
  const a = document.createElement('a');
  const t = document.createTextNode(overlays[0].title || '');
  a.appendChild(t);
  a.setAttribute('style', ' margin-top: 7px; text-shadow: #000 0 -1px 0; color: #fff; display: block; font: bold 14px arial,sans-serif; margin: 7px 16px 0 0; overflow: hidden; padding-bottom: 4px; text-overflow: ellipsis; white-space: nowrap; text-decoration: none;');
  a.setAttribute('href', this.parameters_.gourl || []);
  container.appendChild(a);
  const atext = document.createElement('div');
  atext.setAttribute('style', 'margin-bottom: 2px; text-align: left; text-shadow: none; color: #fff; font: 12px arial,sans-serif; margin-top: -3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; ');
  const textads = document.createTextNode(overlays[0].description || '');
  atext.appendChild(textads);
  container.appendChild(atext);
  const ab = document.createElement('a');
  const ta = document.createTextNode((new URL(this.parameters_.gourl)).hostname);
  ab.appendChild(ta);
  ab.setAttribute('style', 'bottom: 9px; color: #eade90; font-weight: normal; position: static; left: auto; text-shadow: #000 0 -1px 0; font: bold 11px arial,sans-serif; text-decoration: none;');
  ab.setAttribute('href', this.parameters_.gourl || []);
  container.appendChild(ab);
  //position: absolute; right: 0; top: 0;
  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.right = 0;
  overlay.style.top = 0;
  scontainer.appendChild(overlay);
  // cursor: pointer;float: right;margin: 0;padding-left: 0;position: relative;width: 15px;height: 15px;padding-top: 6px;padding-right: 6px;color: #fff;right: 0;top: 0;z-index: 1001;
  const linearButton = document.createElement('div');
  linearButton.style.cursor = 'pointer';
  linearButton.style.float  = 'right';
  linearButton.style.margin = 0;
  linearButton.style.paddingLeft = 0;
  linearButton.style.position = 'relative';
  linearButton.style.width = '15px';
  linearButton.style.height = '15px';
  linearButton.style.paddingTop = '6px';
  linearButton.style.paddingRight = '6px';
  linearButton.style.color = '#fff';
  linearButton.style.right = '10%';
  linearButton.style.top = 0;
  linearButton.style.zIndex = '1001';
  overlay.appendChild(linearButton);
  const xSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
xSvg.setAttribute('style', 'background: #000; fill: #fff; fill-opacity: .8; float: right; height: 15px; width: 15px; opacity: .9; pointer-events: all!important;');
xSvg.setAttribute('width', '48px');
xSvg.setAttribute('height', '48px');
xSvg.setAttribute('viewBox', '0 0 48 48');
xSvg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
xSvg.addEventListener('click',
    this.linearButtonClick_.bind(this), false);
linearButton.appendChild(xSvg);
            const path1 = document.createElementNS ('http://www.w3.org/2000/svg', "path");
            path1.setAttributeNS (null, 'd', 'M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z');
            xSvg.appendChild (path1);
            const path2 = document.createElementNS ('http://www.w3.org/2000/svg', "path");
            path2.setAttributeNS (null, 'd', 'M0 0h48v48H0z');
            path2.setAttributeNS (null, 'fill', "none");
            xSvg.appendChild (path2);
  this.callEvent_('AdStarted');
  this.callEvent_('AdImpression');
};


/**
 * Called when the non-linear ad is clicked.
 * @private
 */
VpaidNonLinear.prototype.adClick_ = function() {
  if ('AdClickThru' in this.eventsCallbacks_) {
    this.eventsCallbacks_['AdClickThru']('','0', true);
  }
};


/**
 * Called when the linear overlay is clicked.  Plays the video passed in the
 * parameters.
 * @private
 */
VpaidNonLinear.prototype.linearButtonClick_ = function() {
  const callback = this.callEvent_.bind(this);
  setTimeout(callback, 1, ['AdStopped']);
};


/**
 * Called by the video element when the video reaches specific points during
 * playback.
 * @private
 */
VpaidNonLinear.prototype.timeUpdateHandler_ = function() {
  if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
    return;
  }
  const percentPlayed =
      this.videoSlot_.currentTime * 100.0 / this.videoSlot_.duration;
  let nextQuartile = this.quartileEvents_[this.nextQuartileIndex_];
  if (percentPlayed >= nextQuartile.value) {
    this.eventsCallbacks_[nextQuartile.event]();
    this.nextQuartileIndex_ += 1;
  }
  if (this.videoSlot_.duration > 0) {
    this.attributes_['remainingTime'] =
      this.videoSlot_.duration - this.videoSlot_.currentTime;
  }
};


/**
 * Called by the video element when video metadata is loaded.
 * @private
 */
VpaidNonLinear.prototype.loadedMetadata_ = function() {
  // The ad duration is not known until the media metadata is loaded.
  // Then, update the player with the duration change.
  this.attributes_['duration'] = this.videoSlot_.duration;
  this.callEvent_('AdDurationChange');
};


/**
 * Called by the wrapper to stop the ad.
 */
VpaidNonLinear.prototype.stopAd = function() {
  this.log('Stopping ad');
  // Calling AdStopped immediately terminates the ad. Setting a timeout allows
  // events to go through.
  const callback = this.callEvent_.bind(this);
  setTimeout(callback, 75, ['AdStopped']);
};


/**
 * Called when the video player changes the width/height of the container.
 *
 * @param {number} width The new width.
 * @param {number} height A new height.
 * @param {string} viewMode A new view mode.
 */
VpaidNonLinear.prototype.resizeAd = function(width, height, viewMode) {
  this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.updateVideoPlayerSize_();
  this.callEvent_('AdSizeChange');
};


/**
 * Pauses the ad.
 */
VpaidNonLinear.prototype.pauseAd = function() {
  this.log('pauseAd');
  this.videoSlot_.pause();
  this.callEvent_('AdPaused');
};


/**
 * Resumes the ad.
 */
VpaidNonLinear.prototype.resumeAd = function() {
  this.log('resumeAd');
  this.videoSlot_.play();
  this.callEvent_('AdPlaying');
};


/**
 * Expands the ad.
 */
VpaidNonLinear.prototype.expandAd = function() {
  this.log('expandAd');
  this.attributes_['expanded'] = true;
  this.callEvent_('AdExpanded');
};


/**
 * Collapses the ad.
 */
VpaidNonLinear.prototype.collapseAd = function() {
  this.log('collapseAd');
  this.attributes_['expanded'] = false;
};


/**
 * Skips the ad.
 */
VpaidNonLinear.prototype.skipAd = function() {
  this.log('skipAd');
  if (this.attributes_['skippableState']) {
    this.callEvent_('AdSkipped');
  }
};


/**
 * Registers a callback for an event.
 *
 * @param {Function} callback The callback function.
 * @param {string} eventName The callback type.
 * @param {Object} context The context for the callback.
 */
VpaidNonLinear.prototype.subscribe = function(
    callback,
    eventName,
    context) {
  this.log('Subscribe ' + eventName);
  this.eventsCallbacks_[eventName] = callback.bind(context);
};


/**
 * Removes a callback based on the eventName.
 *
 * @param {string} eventName The callback type.
 */
VpaidNonLinear.prototype.unsubscribe = function(eventName) {
  this.log('unsubscribe ' + eventName);
  this.eventsCallbacks_[eventName] = null;
};


/**
 * Returns whether the ad is linear.
 *
 * @return {boolean} True if the ad is a linear, false for non linear.
 */
VpaidNonLinear.prototype.getAdLinear = function() {
  return this.attributes_['linear'];
};

/**
 * Returns ad width.
 *
 * @return {number} The ad width.
 */
VpaidNonLinear.prototype.getAdWidth = function() {
  return this.attributes_['width'];
};


/**
 * Returns ad height.
 *
 * @return {number} The ad height.
 */
VpaidNonLinear.prototype.getAdHeight = function() {
  return this.attributes_['height'];
};


/**
 * Returns true if the ad is expanded.
 *
 * @return {boolean}
 */
VpaidNonLinear.prototype.getAdExpanded = function() {
  this.log('getAdExpanded');
  return this.attributes_['expanded'];
};


/**
 * Returns the skippable state of the ad.
 *
 * @return {boolean}
 */
VpaidNonLinear.prototype.getAdSkippableState = function() {
  this.log('getAdSkippableState');
  return this.attributes_['skippableState'];
};


/**
 * Returns the remaining ad time, in seconds.
 *
 * @return {number} The time remaining in the ad.
 */
VpaidNonLinear.prototype.getAdRemainingTime = function() {
  const date = new Date();
  const currentTime = date.getTime();
  const remainingTime =
      this.attributes_.duration - (currentTime - this.startTime_) / 1000.0;
  return remainingTime;
};


/**
 * Returns the duration of the ad, in seconds.
 *
 * @return {number} The duration of the ad.
 */
VpaidNonLinear.prototype.getAdDuration = function() {
  return this.attributes_['duration'];
};


/**
 * Returns the ad volume.
 *
 * @return {number} The volume of the ad.
 */
VpaidNonLinear.prototype.getAdVolume = function() {
  this.log('getAdVolume');
  return this.attributes_['volume'];
};


/**
 * Sets the ad volume.
 *
 * @param {number} value The volume in percentage.
 */
VpaidNonLinear.prototype.setAdVolume = function(value) {
  this.attributes_['volume'] = value;
  this.log('setAdVolume ' + value);
  this.callEvent_('AdVolumeChange');
};


/**
 * Returns a list of companion ads for the ad.
 *
 * @return {string} List of companions in VAST XML.
 */
VpaidNonLinear.prototype.getAdCompanions = function() {
  return this.attributes_['companions'];
};


/**
 * Returns a list of icons.
 *
 * @return {string} A list of icons.
 */
VpaidNonLinear.prototype.getAdIcons = function() {
  return this.attributes_['icons'];
};


/**
 * Logs events and messages.
 *
 * @param {string} message
 */
VpaidNonLinear.prototype.log = function(message) {
  console.log(message);
};


/**
 * Calls an event if there is a callback.
 *
 * @param {string} eventType
 * @private
 */
VpaidNonLinear.prototype.callEvent_ = function(eventType) {
  if (eventType in this.eventsCallbacks_) {
    this.eventsCallbacks_[eventType]();
  }
};


/**
 * Main function called by wrapper to get the VPAID ad.
 *
 * @return {Object} The VPAID compliant ad.
 */
var getVPAIDAd = function() {
  return new VpaidNonLinear();
};
