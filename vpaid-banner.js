/**
 * @fileoverview A sample non-linear VPAID ad useful for testing a VPAID JS
 * enabled player. This ad will show a non-linear ad which can also enter linear
 * mode.
 */
var script = {

    type: 'text/css', style: document.createElement('style'), 
    content: '.tingle-modal *{box-sizing:border-box}.tingle-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;display:-webkit-box;display:-ms-flexbox;display:flex;visibility:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-overflow-scrolling:touch;background:rgba(0,0,0,0);opacity:0;cursor:pointer;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.tingle-modal--noClose .tingle-modal__close,.tingle-modal__closeLabel{display:none}.tingle-modal--confirm .tingle-modal-box{text-align:center}.tingle-modal--noOverlayClose{cursor:default}.tingle-modal__close{position:fixed;top:10px;right:28px;z-index:1000;padding:0;width:5rem;height:5rem;border:none;background-color:transparent;color:#f0f0f0;font-size:6rem;font-family:monospace;line-height:1;cursor:pointer;-webkit-transition:color .3s ease;transition:color .3s ease}.tingle-modal__close:hover{color:#fff}.tingle-modal-box{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:auto;margin-bottom:auto;width:60%;border-radius:0px;background:#fff;opacity:1;cursor:auto;-webkit-transition:-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);transition:-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);transition:transform .3s cubic-bezier(.175,.885,.32,1.275);transition:transform .3s cubic-bezier(.175,.885,.32,1.275),-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.tingle-modal-box__content{padding:1rem}.tingle-modal-box__footer{width:auto;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#f5f5f5;cursor:auto}.tingle-modal-box__footer::after{display:table;clear:both;content:""}.tingle-modal-box__footer--sticky{position:fixed;bottom:-200px;z-index:10001;opacity:1;-webkit-transition:bottom .3s ease-in-out .3s;transition:bottom .3s ease-in-out .3s}.tingle-enabled{position:fixed;overflow:hidden;left:0;right:0}.tingle-modal--visible .tingle-modal-box__footer{bottom:0}.tingle-enabled .tingle-content-wrapper{-webkit-filter:blur(8px);filter:blur(8px)}.tingle-modal--visible{visibility:visible;opacity:1}.tingle-modal--visible .tingle-modal-box{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.tingle-modal--overflow{overflow-y:scroll;padding-top:8vh}.tingle-btn{display:inline-block;margin:0 .5rem;padding:1rem 2rem;border:none;background-color:grey;box-shadow:none;color:#fff;vertical-align:middle;text-decoration:none;font-size:inherit;font-family:inherit;line-height:normal;cursor:pointer;-webkit-transition:background-color .4s ease;transition:background-color .4s ease}.tingle-btn--primary{background-color:#3498db}.tingle-btn--danger{background-color:#e74c3c}.tingle-btn--default{background-color:#34495e;padding: 0.5rem 1.2rem;font-family: verdana,sans-serif}.tingle-btn--pull-left{float:left}.tingle-btn--pull-right{float:right}@media (max-width :540px){.tingle-modal{top:0;display:block;padding-top:60px;width:100%}.tingle-modal-box{width:auto;border-radius:0}.tingle-modal-box__content{overflow-y:scroll}.tingle-modal--noClose{top:0}.tingle-modal--noOverlayClose{padding-top:0}.tingle-modal-box__footer .tingle-btn{display:block;float:none;margin-bottom:1rem;width:100%}.tingle-modal__close{top:0;right:0;left:0;display:block;width:100%;height:60px;border:none;background-color:#2c3e50;box-shadow:none;color:#fff;line-height:55px}.tingle-modal__closeLabel{display:inline-block;vertical-align:middle;font-size:1.5rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.tingle-modal__closeIcon{display:inline-block;margin-right:.5rem;vertical-align:middle;font-size:4rem}}@supports ((-webkit-backdrop-filter:blur(12px)) or (backdrop-filter:blur(12px))){.tingle-modal{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}@media (max-width :540px){.tingle-modal{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}}.tingle-enabled .tingle-content-wrapper{-webkit-filter:none;filter:none}}',
    append: function() {
  
      this.style.type = this.type;
      this.style.appendChild(document.createTextNode(this.content));
      document.head.appendChild(this.style);
  
  }}; script.append();
!function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function e(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function n(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function l(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!d(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}var h=function(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}();return t.prototype.init=function(){this.modal||(e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){var t=this;"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),h?this.modal.addEventListener(h,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(h,o,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),this.checkOverflow()},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){if(!this.opts.beforeClose.call(this))return}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var t=this;h?this.modal.addEventListener(h,function o(){t.modal.removeEventListener(h,o,!1),t.modal.style.display="none","function"==typeof t.opts.onClose&&t.opts.onClose.call(this)},!1):(t.modal.style.display="none","function"==typeof t.opts.onClose&&t.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow()},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){s.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});
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

  // Create
  const g = document.createElement('div');
  g.style.zIndex = '36';
  g.style.position = 'absolute';
  g.style.margin = '15px';
  g.style.bottom = '1px';
  g.style.right = 0;
  g.style.left = 0;
  this.slot_.appendChild(g);
  const box = document.createElement('div');
  box.style.display = 'table';
  box.style.margin = '0 auto';
  g.appendChild(box);
  const container = document.createElement('div');
  container.style.display = 'block';
  container.style.pointerEvents = 'auto';
  container.style.position = 'relative';
  container.style.margin = '0 auto';
  box.appendChild(container);
  a = document.createElement('a');
  a.setAttribute('href', this.parameters_.gourl || []);
  container.appendChild(a);
  //position: absolute; right: 0; top: 0;
  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.right = 0;
  overlay.style.top = 0;
  container.appendChild(overlay);
    var modalButtonOnly = new tingle.modal({
        closeMethods: [],
        footer: true,
        onClose: function() {document.getElementById('slot').style.display = 'block';
        },
        stickyFooter: true
    });
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
  const linearButton2 = document.createElement('div');
  linearButton2.style.cursor = 'pointer';
  linearButton2.style.float  = 'right';
  linearButton2.style.margin = 0;
  linearButton2.style.paddingLeft = 0;
  linearButton2.style.position = 'relative';
  linearButton2.style.width = '15px';
  linearButton2.style.height = '15px';
  linearButton2.style.paddingTop = '6px';
  linearButton2.style.paddingRight = '1px';
  linearButton2.style.color = '#fff';
  linearButton2.style.right = '10%';
  linearButton2.style.top = 0;
  linearButton2.style.zIndex = '1001';
  overlay.appendChild(linearButton);
  overlay.appendChild(linearButton2);
  const xSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
xSvg.setAttribute('style', 'background: #fff; fill: #757575; fill-opacity: .8; float: right; height: 15px; width: 15px; opacity: .9; pointer-events: all!important;');
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

  const xSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  xSvg2.setAttribute('style', 'background: #fff; fill: #757575; fill-opacity: .8; float: right; height: 15px; width: 15px; opacity: .9; pointer-events: all!important;');
  xSvg2.setAttribute('width', '48px');
  xSvg2.setAttribute('height', '48px');
  xSvg2.setAttribute('viewBox', '0 0 48 48');
  xSvg2.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  xSvg2.addEventListener('click', function(){
    document.getElementById('slot').style.display = 'none';
    modalButtonOnly.open();
});
    modalButtonOnly.setContent('<h1 style=" font-family: sans-serif; font-size: 19px; ">Kenapa Saya Melihat Ini ??</h1> <p style=" font-family: verdana,sans-serif; ">Aplikasi atau situs web yang Anda kunjungi menggunakan Jaringan Pemirsa Vlay untuk menampilkan iklan yang paling relevan. </p>');
    modalButtonOnly.addFooterBtn('Tutup', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function(){
        modalButtonOnly.close();
    });
  linearButton2.appendChild(xSvg2);
            const path11 = document.createElementNS ('http://www.w3.org/2000/svg', "path");
            path11.setAttributeNS (null, 'd', 'M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z');
            xSvg2.appendChild (path11);
            const path22 = document.createElementNS ('http://www.w3.org/2000/svg', "path");
            path22.setAttributeNS (null, 'd', 'M0 0h48v48H0z');
            path22.setAttributeNS (null, 'fill', "none");
            xSvg2.appendChild (path22);
  // Create an img tag and populate it with the image passed in to the ad
  // parameters.
  const adImg = document.createElement('img');
  adImg.setAttribute('id', 'banner-fais');
  adImg.src = overlays[0] || '';
  adImg.style.margin = 'auto';
  adImg.style.display = 'block';
  adImg.style.maxWidth = '100%';
  adImg.style.height = 'auto';
  // adImg.addEventListener('click', this.adClick_.bind(this), false);
  a.appendChild(adImg);
  /////////////////////////////////////////
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
