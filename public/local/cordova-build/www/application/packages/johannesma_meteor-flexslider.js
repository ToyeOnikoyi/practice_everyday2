//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var focused;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/johannesma_meteor-flexslider/packages/johannesma_meteor- //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/johannesma:meteor-flexslider/jquery.flexslider.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * jQuery FlexSlider v2.2.2                                                                                            // 2
 * Copyright 2012 WooThemes                                                                                            // 3
 * Contributing Author: Tyler Smith                                                                                    // 4
 */                                                                                                                    // 5
;                                                                                                                      // 6
(function ($) {                                                                                                        // 7
                                                                                                                       // 8
  //FlexSlider: Object Instance                                                                                        // 9
  $.flexslider = function(el, options) {                                                                               // 10
    var slider = $(el);                                                                                                // 11
                                                                                                                       // 12
    // making variables public                                                                                         // 13
    slider.vars = $.extend({}, $.flexslider.defaults, options);                                                        // 14
                                                                                                                       // 15
    var namespace = slider.vars.namespace,                                                                             // 16
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,                         // 17
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events                              // 19
        //eventType = (touch) ? "touchend" : "click",                                                                  // 20
        eventType = "click touchend MSPointerUp keyup",                                                                // 21
        watchedEvent = "",                                                                                             // 22
        watchedEventClearTimer,                                                                                        // 23
        vertical = slider.vars.direction === "vertical",                                                               // 24
        reverse = slider.vars.reverse,                                                                                 // 25
        carousel = (slider.vars.itemWidth > 0),                                                                        // 26
        fade = slider.vars.animation === "fade",                                                                       // 27
        asNav = slider.vars.asNavFor !== "",                                                                           // 28
        methods = {},                                                                                                  // 29
        focused = true;                                                                                                // 30
                                                                                                                       // 31
    // Store a reference to the slider object                                                                          // 32
    $.data(el, "flexslider", slider);                                                                                  // 33
                                                                                                                       // 34
    // Private slider methods                                                                                          // 35
    methods = {                                                                                                        // 36
      init: function() {                                                                                               // 37
        slider.animating = false;                                                                                      // 38
        // Get current slide and make sure it is a number                                                              // 39
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );                        // 40
        if ( isNaN( slider.currentSlide ) ) slider.currentSlide = 0;                                                   // 41
        slider.animatingTo = slider.currentSlide;                                                                      // 42
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);                             // 43
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));                    // 44
        slider.slides = $(slider.vars.selector, slider);                                                               // 45
        slider.container = $(slider.containerSelector, slider);                                                        // 46
        slider.count = slider.slides.length;                                                                           // 47
        // SYNC:                                                                                                       // 48
        slider.syncExists = $(slider.vars.sync).length > 0;                                                            // 49
        // SLIDE:                                                                                                      // 50
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";                                        // 51
        slider.prop = (vertical) ? "top" : "marginLeft";                                                               // 52
        slider.args = {};                                                                                              // 53
        // SLIDESHOW:                                                                                                  // 54
        slider.manualPause = false;                                                                                    // 55
        slider.stopped = false;                                                                                        // 56
        //PAUSE WHEN INVISIBLE                                                                                         // 57
        slider.started = false;                                                                                        // 58
        slider.startTimeout = null;                                                                                    // 59
        // TOUCH/USECSS:                                                                                               // 60
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {                        // 61
          var obj = document.createElement('div'),                                                                     // 62
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']; // 63
          for (var i in props) {                                                                                       // 64
            if ( obj.style[ props[i] ] !== undefined ) {                                                               // 65
              slider.pfx = props[i].replace('Perspective','').toLowerCase();                                           // 66
              slider.prop = "-" + slider.pfx + "-transform";                                                           // 67
              return true;                                                                                             // 68
            }                                                                                                          // 69
          }                                                                                                            // 70
          return false;                                                                                                // 71
        }());                                                                                                          // 72
        slider.ensureAnimationEnd = '';                                                                                // 73
        // CONTROLSCONTAINER:                                                                                          // 74
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:                                                                                                     // 76
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
                                                                                                                       // 78
        // RANDOMIZE:                                                                                                  // 79
        if (slider.vars.randomize) {                                                                                   // 80
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });                                  // 81
          slider.container.empty().append(slider.slides);                                                              // 82
        }                                                                                                              // 83
                                                                                                                       // 84
        slider.doMath();                                                                                               // 85
                                                                                                                       // 86
        // INIT                                                                                                        // 87
        slider.setup("init");                                                                                          // 88
                                                                                                                       // 89
        // CONTROLNAV:                                                                                                 // 90
        if (slider.vars.controlNav) methods.controlNav.setup();                                                        // 91
                                                                                                                       // 92
        // DIRECTIONNAV:                                                                                               // 93
        if (slider.vars.directionNav) methods.directionNav.setup();                                                    // 94
                                                                                                                       // 95
        // KEYBOARD:                                                                                                   // 96
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {      // 97
          $(document).bind('keyup', function(event) {                                                                  // 98
            var keycode = event.keyCode;                                                                               // 99
            if (!slider.animating && (keycode === 39 || keycode === 37)) {                                             // 100
              var target = (keycode === 39) ? slider.getTarget('next') :                                               // 101
                           (keycode === 37) ? slider.getTarget('prev') : false;                                        // 102
              slider.flexAnimate(target, slider.vars.pauseOnAction);                                                   // 103
            }                                                                                                          // 104
          });                                                                                                          // 105
        }                                                                                                              // 106
        // MOUSEWHEEL:                                                                                                 // 107
        if (slider.vars.mousewheel) {                                                                                  // 108
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {                                           // 109
            event.preventDefault();                                                                                    // 110
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');                            // 111
            slider.flexAnimate(target, slider.vars.pauseOnAction);                                                     // 112
          });                                                                                                          // 113
        }                                                                                                              // 114
                                                                                                                       // 115
        // PAUSEPLAY                                                                                                   // 116
        if (slider.vars.pausePlay) methods.pausePlay.setup();                                                          // 117
                                                                                                                       // 118
        //PAUSE WHEN INVISIBLE                                                                                         // 119
        if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();                        // 120
                                                                                                                       // 121
        // SLIDSESHOW                                                                                                  // 122
        if (slider.vars.slideshow) {                                                                                   // 123
          if (slider.vars.pauseOnHover) {                                                                              // 124
            slider.hover(function() {                                                                                  // 125
              if (!slider.manualPlay && !slider.manualPause) slider.pause();                                           // 126
            }, function() {                                                                                            // 127
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();                         // 128
            });                                                                                                        // 129
          }                                                                                                            // 130
          // initialize animation                                                                                      // 131
          //If we're visible, or we don't use PageVisibility API                                                       // 132
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {                                      // 133
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }                                                                                                            // 135
        }                                                                                                              // 136
                                                                                                                       // 137
        // ASNAV:                                                                                                      // 138
        if (asNav) methods.asNav.setup();                                                                              // 139
                                                                                                                       // 140
        // TOUCH                                                                                                       // 141
        if (touch && slider.vars.touch) methods.touch();                                                               // 142
                                                                                                                       // 143
        // FADE&&SMOOTHHEIGHT || SLIDE:                                                                                // 144
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);
                                                                                                                       // 146
        slider.find("img").attr("draggable", "false");                                                                 // 147
                                                                                                                       // 148
        // API: start() Callback                                                                                       // 149
        setTimeout(function(){                                                                                         // 150
          slider.vars.start(slider);                                                                                   // 151
        }, 200);                                                                                                       // 152
      },                                                                                                               // 153
      asNav: {                                                                                                         // 154
        setup: function() {                                                                                            // 155
          slider.asNav = true;                                                                                         // 156
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);                                            // 157
          slider.currentItem = slider.currentSlide;                                                                    // 158
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){                                                                                              // 160
              slider.slides.on(eventType, function(e){                                                                 // 161
                e.preventDefault();                                                                                    // 162
                var $slide = $(this),                                                                                  // 163
                    target = $slide.index();                                                                           // 164
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {                              // 166
                  slider.flexAnimate(slider.getTarget("prev"), true);                                                  // 167
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";                                  // 169
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);                            // 170
                }                                                                                                      // 171
              });                                                                                                      // 172
          }else{                                                                                                       // 173
              el._slider = slider;                                                                                     // 174
              slider.slides.each(function (){                                                                          // 175
                  var that = this;                                                                                     // 176
                  that._gesture = new MSGesture();                                                                     // 177
                  that._gesture.target = that;                                                                         // 178
                  that.addEventListener("MSPointerDown", function (e){                                                 // 179
                      e.preventDefault();                                                                              // 180
                      if(e.currentTarget._gesture)                                                                     // 181
                          e.currentTarget._gesture.addPointer(e.pointerId);                                            // 182
                  }, false);                                                                                           // 183
                  that.addEventListener("MSGestureTap", function (e){                                                  // 184
                      e.preventDefault();                                                                              // 185
                      var $slide = $(this),                                                                            // 186
                          target = $slide.index();                                                                     // 187
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {       // 188
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";                          // 189
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);                    // 190
                      }                                                                                                // 191
                  });                                                                                                  // 192
              });                                                                                                      // 193
          }                                                                                                            // 194
        }                                                                                                              // 195
      },                                                                                                               // 196
      controlNav: {                                                                                                    // 197
        setup: function() {                                                                                            // 198
          if (!slider.manualControls) {                                                                                // 199
            methods.controlNav.setupPaging();                                                                          // 200
          } else { // MANUALCONTROLS:                                                                                  // 201
            methods.controlNav.setupManual();                                                                          // 202
          }                                                                                                            // 203
        },                                                                                                             // 204
        setupPaging: function() {                                                                                      // 205
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',                  // 206
              j = 1,                                                                                                   // 207
              item,                                                                                                    // 208
              slide;                                                                                                   // 209
                                                                                                                       // 210
          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');     // 211
                                                                                                                       // 212
          if (slider.pagingCount > 1) {                                                                                // 213
            for (var i = 0; i < slider.pagingCount; i++) {                                                             // 214
              slide = slider.slides.eq(i);                                                                             // 215
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {                   // 217
                var captn = slide.attr( 'data-thumbcaption' );                                                         // 218
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }                                                                                                        // 220
              slider.controlNavScaffold.append('<li>' + item + '</li>');                                               // 221
              j++;                                                                                                     // 222
            }                                                                                                          // 223
          }                                                                                                            // 224
                                                                                                                       // 225
          // CONTROLSCONTAINER:                                                                                        // 226
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();                                                                                    // 228
                                                                                                                       // 229
          methods.controlNav.active();                                                                                 // 230
                                                                                                                       // 231
          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {                                    // 232
            event.preventDefault();                                                                                    // 233
                                                                                                                       // 234
            if (watchedEvent === "" || watchedEvent === event.type) {                                                  // 235
              var $this = $(this),                                                                                     // 236
                  target = slider.controlNav.index($this);                                                             // 237
                                                                                                                       // 238
              if (!$this.hasClass(namespace + 'active')) {                                                             // 239
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";                                   // 240
                slider.flexAnimate(target, slider.vars.pauseOnAction);                                                 // 241
              }                                                                                                        // 242
            }                                                                                                          // 243
                                                                                                                       // 244
            // setup flags to prevent event duplication                                                                // 245
            if (watchedEvent === "") {                                                                                 // 246
              watchedEvent = event.type;                                                                               // 247
            }                                                                                                          // 248
            methods.setToClearWatchedEvent();                                                                          // 249
                                                                                                                       // 250
          });                                                                                                          // 251
        },                                                                                                             // 252
        setupManual: function() {                                                                                      // 253
          slider.controlNav = slider.manualControls;                                                                   // 254
          methods.controlNav.active();                                                                                 // 255
                                                                                                                       // 256
          slider.controlNav.bind(eventType, function(event) {                                                          // 257
            event.preventDefault();                                                                                    // 258
                                                                                                                       // 259
            if (watchedEvent === "" || watchedEvent === event.type) {                                                  // 260
              var $this = $(this),                                                                                     // 261
                  target = slider.controlNav.index($this);                                                             // 262
                                                                                                                       // 263
              if (!$this.hasClass(namespace + 'active')) {                                                             // 264
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";                // 265
                slider.flexAnimate(target, slider.vars.pauseOnAction);                                                 // 266
              }                                                                                                        // 267
            }                                                                                                          // 268
                                                                                                                       // 269
            // setup flags to prevent event duplication                                                                // 270
            if (watchedEvent === "") {                                                                                 // 271
              watchedEvent = event.type;                                                                               // 272
            }                                                                                                          // 273
            methods.setToClearWatchedEvent();                                                                          // 274
          });                                                                                                          // 275
        },                                                                                                             // 276
        set: function() {                                                                                              // 277
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';                                      // 278
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },                                                                                                             // 280
        active: function() {                                                                                           // 281
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");   // 282
        },                                                                                                             // 283
        update: function(action, pos) {                                                                                // 284
          if (slider.pagingCount > 1 && action === "add") {                                                            // 285
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));                               // 286
          } else if (slider.pagingCount === 1) {                                                                       // 287
            slider.controlNavScaffold.find('li').remove();                                                             // 288
          } else {                                                                                                     // 289
            slider.controlNav.eq(pos).closest('li').remove();                                                          // 290
          }                                                                                                            // 291
          methods.controlNav.set();                                                                                    // 292
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }                                                                                                              // 294
      },                                                                                                               // 295
      directionNav: {                                                                                                  // 296
        setup: function() {                                                                                            // 297
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');
                                                                                                                       // 299
          // CONTROLSCONTAINER:                                                                                        // 300
          if (slider.controlsContainer) {                                                                              // 301
            $(slider.controlsContainer).append(directionNavScaffold);                                                  // 302
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);                 // 303
          } else {                                                                                                     // 304
            slider.append(directionNavScaffold);                                                                       // 305
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);                                   // 306
          }                                                                                                            // 307
                                                                                                                       // 308
          methods.directionNav.update();                                                                               // 309
                                                                                                                       // 310
          slider.directionNav.bind(eventType, function(event) {                                                        // 311
            event.preventDefault();                                                                                    // 312
            var target;                                                                                                // 313
                                                                                                                       // 314
            if (watchedEvent === "" || watchedEvent === event.type) {                                                  // 315
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');   // 316
              slider.flexAnimate(target, slider.vars.pauseOnAction);                                                   // 317
            }                                                                                                          // 318
                                                                                                                       // 319
            // setup flags to prevent event duplication                                                                // 320
            if (watchedEvent === "") {                                                                                 // 321
              watchedEvent = event.type;                                                                               // 322
            }                                                                                                          // 323
            methods.setToClearWatchedEvent();                                                                          // 324
          });                                                                                                          // 325
        },                                                                                                             // 326
        update: function() {                                                                                           // 327
          var disabledClass = namespace + 'disabled';                                                                  // 328
          if (slider.pagingCount === 1) {                                                                              // 329
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');                                        // 330
          } else if (!slider.vars.animationLoop) {                                                                     // 331
            if (slider.animatingTo === 0) {                                                                            // 332
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {                                                           // 334
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {                                                                                                   // 336
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');                                   // 337
            }                                                                                                          // 338
          } else {                                                                                                     // 339
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');                                     // 340
          }                                                                                                            // 341
        }                                                                                                              // 342
      },                                                                                                               // 343
      pausePlay: {                                                                                                     // 344
        setup: function() {                                                                                            // 345
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');                          // 346
                                                                                                                       // 347
          // CONTROLSCONTAINER:                                                                                        // 348
          if (slider.controlsContainer) {                                                                              // 349
            slider.controlsContainer.append(pausePlayScaffold);                                                        // 350
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);                           // 351
          } else {                                                                                                     // 352
            slider.append(pausePlayScaffold);                                                                          // 353
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);                                             // 354
          }                                                                                                            // 355
                                                                                                                       // 356
          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');                // 357
                                                                                                                       // 358
          slider.pausePlay.bind(eventType, function(event) {                                                           // 359
            event.preventDefault();                                                                                    // 360
                                                                                                                       // 361
            if (watchedEvent === "" || watchedEvent === event.type) {                                                  // 362
              if ($(this).hasClass(namespace + 'pause')) {                                                             // 363
                slider.manualPause = true;                                                                             // 364
                slider.manualPlay = false;                                                                             // 365
                slider.pause();                                                                                        // 366
              } else {                                                                                                 // 367
                slider.manualPause = false;                                                                            // 368
                slider.manualPlay = true;                                                                              // 369
                slider.play();                                                                                         // 370
              }                                                                                                        // 371
            }                                                                                                          // 372
                                                                                                                       // 373
            // setup flags to prevent event duplication                                                                // 374
            if (watchedEvent === "") {                                                                                 // 375
              watchedEvent = event.type;                                                                               // 376
            }                                                                                                          // 377
            methods.setToClearWatchedEvent();                                                                          // 378
          });                                                                                                          // 379
        },                                                                                                             // 380
        update: function(state) {                                                                                      // 381
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }                                                                                                              // 383
      },                                                                                                               // 384
      touch: function() {                                                                                              // 385
        var startX,                                                                                                    // 386
          startY,                                                                                                      // 387
          offset,                                                                                                      // 388
          cwidth,                                                                                                      // 389
          dx,                                                                                                          // 390
          startT,                                                                                                      // 391
          scrolling = false,                                                                                           // 392
          localX = 0,                                                                                                  // 393
          localY = 0,                                                                                                  // 394
          accDx = 0;                                                                                                   // 395
                                                                                                                       // 396
        if(!msGesture){                                                                                                // 397
            el.addEventListener('touchstart', onTouchStart, false);                                                    // 398
                                                                                                                       // 399
            function onTouchStart(e) {                                                                                 // 400
              if (slider.animating) {                                                                                  // 401
                e.preventDefault();                                                                                    // 402
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {                          // 403
                slider.pause();                                                                                        // 404
                // CAROUSEL:                                                                                           // 405
                cwidth = (vertical) ? slider.h : slider. w;                                                            // 406
                startT = Number(new Date());                                                                           // 407
                // CAROUSEL:                                                                                           // 408
                                                                                                                       // 409
                // Local vars for X and Y points.                                                                      // 410
                localX = e.touches[0].pageX;                                                                           // 411
                localY = e.touches[0].pageY;                                                                           // 412
                                                                                                                       // 413
                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :                             // 414
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :                            // 416
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :  // 417
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;                                                                 // 419
                startY = (vertical) ? localX : localY;                                                                 // 420
                                                                                                                       // 421
                el.addEventListener('touchmove', onTouchMove, false);                                                  // 422
                el.addEventListener('touchend', onTouchEnd, false);                                                    // 423
              }                                                                                                        // 424
            }                                                                                                          // 425
                                                                                                                       // 426
            function onTouchMove(e) {                                                                                  // 427
              // Local vars for X and Y points.                                                                        // 428
                                                                                                                       // 429
              localX = e.touches[0].pageX;                                                                             // 430
              localY = e.touches[0].pageY;                                                                             // 431
                                                                                                                       // 432
              dx = (vertical) ? startX - localY : startX - localX;                                                     // 433
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                                                                                                                       // 435
              var fxms = 500;                                                                                          // 436
                                                                                                                       // 437
              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {                                             // 438
                e.preventDefault();                                                                                    // 439
                if (!fade && slider.transitions) {                                                                     // 440
                  if (!slider.vars.animationLoop) {                                                                    // 441
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }                                                                                                    // 443
                  slider.setProps(offset + dx, "setTouch");                                                            // 444
                }                                                                                                      // 445
              }                                                                                                        // 446
            }                                                                                                          // 447
                                                                                                                       // 448
            function onTouchEnd(e) {                                                                                   // 449
              // finish the touch by undoing the touch session                                                         // 450
              el.removeEventListener('touchmove', onTouchMove, false);                                                 // 451
                                                                                                                       // 452
              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {                        // 453
                var updateDx = (reverse) ? -dx : dx,                                                                   // 454
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');                     // 455
                                                                                                                       // 456
                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);                                               // 458
                } else {                                                                                               // 459
                  if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);                 // 460
                }                                                                                                      // 461
              }                                                                                                        // 462
              el.removeEventListener('touchend', onTouchEnd, false);                                                   // 463
                                                                                                                       // 464
              startX = null;                                                                                           // 465
              startY = null;                                                                                           // 466
              dx = null;                                                                                               // 467
              offset = null;                                                                                           // 468
            }                                                                                                          // 469
        }else{                                                                                                         // 470
            el.style.msTouchAction = "none";                                                                           // 471
            el._gesture = new MSGesture();                                                                             // 472
            el._gesture.target = el;                                                                                   // 473
            el.addEventListener("MSPointerDown", onMSPointerDown, false);                                              // 474
            el._slider = slider;                                                                                       // 475
            el.addEventListener("MSGestureChange", onMSGestureChange, false);                                          // 476
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);                                                // 477
                                                                                                                       // 478
            function onMSPointerDown(e){                                                                               // 479
                e.stopPropagation();                                                                                   // 480
                if (slider.animating) {                                                                                // 481
                    e.preventDefault();                                                                                // 482
                }else{                                                                                                 // 483
                    slider.pause();                                                                                    // 484
                    el._gesture.addPointer(e.pointerId);                                                               // 485
                    accDx = 0;                                                                                         // 486
                    cwidth = (vertical) ? slider.h : slider. w;                                                        // 487
                    startT = Number(new Date());                                                                       // 488
                    // CAROUSEL:                                                                                       // 489
                                                                                                                       // 490
                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :                         // 491
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :                         // 493
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }                                                                                                      // 496
            }                                                                                                          // 497
                                                                                                                       // 498
            function onMSGestureChange(e) {                                                                            // 499
                e.stopPropagation();                                                                                   // 500
                var slider = e.target._slider;                                                                         // 501
                if(!slider){                                                                                           // 502
                    return;                                                                                            // 503
                }                                                                                                      // 504
                var transX = -e.translationX,                                                                          // 505
                    transY = -e.translationY;                                                                          // 506
                                                                                                                       // 507
                //Accumulate translations.                                                                             // 508
                accDx = accDx + ((vertical) ? transY : transX);                                                        // 509
                dx = accDx;                                                                                            // 510
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));
                                                                                                                       // 512
                if(e.detail === e.MSGESTURE_FLAG_INERTIA){                                                             // 513
                    setImmediate(function (){                                                                          // 514
                        el._gesture.stop();                                                                            // 515
                    });                                                                                                // 516
                                                                                                                       // 517
                    return;                                                                                            // 518
                }                                                                                                      // 519
                                                                                                                       // 520
                if (!scrolling || Number(new Date()) - startT > 500) {                                                 // 521
                    e.preventDefault();                                                                                // 522
                    if (!fade && slider.transitions) {                                                                 // 523
                        if (!slider.vars.animationLoop) {                                                              // 524
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }                                                                                              // 526
                        slider.setProps(offset + dx, "setTouch");                                                      // 527
                    }                                                                                                  // 528
                }                                                                                                      // 529
            }                                                                                                          // 530
                                                                                                                       // 531
            function onMSGestureEnd(e) {                                                                               // 532
                e.stopPropagation();                                                                                   // 533
                var slider = e.target._slider;                                                                         // 534
                if(!slider){                                                                                           // 535
                    return;                                                                                            // 536
                }                                                                                                      // 537
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {                      // 538
                    var updateDx = (reverse) ? -dx : dx,                                                               // 539
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');                 // 540
                                                                                                                       // 541
                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);                                         // 543
                    } else {                                                                                           // 544
                        if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);           // 545
                    }                                                                                                  // 546
                }                                                                                                      // 547
                                                                                                                       // 548
                startX = null;                                                                                         // 549
                startY = null;                                                                                         // 550
                dx = null;                                                                                             // 551
                offset = null;                                                                                         // 552
                accDx = 0;                                                                                             // 553
            }                                                                                                          // 554
        }                                                                                                              // 555
      },                                                                                                               // 556
      resize: function() {                                                                                             // 557
        if (!slider.animating && slider.is(':visible')) {                                                              // 558
          if (!carousel) slider.doMath();                                                                              // 559
                                                                                                                       // 560
          if (fade) {                                                                                                  // 561
            // SMOOTH HEIGHT:                                                                                          // 562
            methods.smoothHeight();                                                                                    // 563
          } else if (carousel) { //CAROUSEL:                                                                           // 564
            slider.slides.width(slider.computedW);                                                                     // 565
            slider.update(slider.pagingCount);                                                                         // 566
            slider.setProps();                                                                                         // 567
          }                                                                                                            // 568
          else if (vertical) { //VERTICAL:                                                                             // 569
            slider.viewport.height(slider.h);                                                                          // 570
            slider.setProps(slider.h, "setTotal");                                                                     // 571
          } else {                                                                                                     // 572
            // SMOOTH HEIGHT:                                                                                          // 573
            if (slider.vars.smoothHeight) methods.smoothHeight();                                                      // 574
            slider.newSlides.width(slider.computedW);                                                                  // 575
            slider.setProps(slider.computedW, "setTotal");                                                             // 576
          }                                                                                                            // 577
        }                                                                                                              // 578
      },                                                                                                               // 579
      smoothHeight: function(dur) {                                                                                    // 580
        if (!vertical || fade) {                                                                                       // 581
          var $obj = (fade) ? slider : slider.viewport;                                                                // 582
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }                                                                                                              // 584
      },                                                                                                               // 585
      sync: function(action) {                                                                                         // 586
        var $obj = $(slider.vars.sync).data("flexslider"),                                                             // 587
            target = slider.animatingTo;                                                                               // 588
                                                                                                                       // 589
        switch (action) {                                                                                              // 590
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;                     // 591
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;                                       // 592
          case "pause": $obj.pause(); break;                                                                           // 593
        }                                                                                                              // 594
      },                                                                                                               // 595
      uniqueID: function($clone) {                                                                                     // 596
        // Append _clone to current level and children elements with id attributes                                     // 597
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {                                           // 598
          var $this = $(this);                                                                                         // 599
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );                                                           // 600
        });                                                                                                            // 601
        return $clone;                                                                                                 // 602
      },                                                                                                               // 603
      pauseInvisible: {                                                                                                // 604
        visProp: null,                                                                                                 // 605
        init: function() {                                                                                             // 606
          var prefixes = ['webkit','moz','ms','o'];                                                                    // 607
                                                                                                                       // 608
          if ('hidden' in document) return 'hidden';                                                                   // 609
          for (var i = 0; i < prefixes.length; i++) {                                                                  // 610
            if ((prefixes[i] + 'Hidden') in document)                                                                  // 611
            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';                                                   // 612
          }                                                                                                            // 613
          if (methods.pauseInvisible.visProp) {                                                                        // 614
            var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/,'') + 'visibilitychange';                // 615
            document.addEventListener(evtname, function() {                                                            // 616
              if (methods.pauseInvisible.isHidden()) {                                                                 // 617
                if(slider.startTimeout) clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                else slider.pause(); //Or just pause                                                                   // 619
              }                                                                                                        // 620
              else {                                                                                                   // 621
                if(slider.started) slider.play(); //Initiated before, just play                                        // 622
                else (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play(); //Didn't init before: simply init or wait for it
              }                                                                                                        // 624
            });                                                                                                        // 625
          }                                                                                                            // 626
        },                                                                                                             // 627
        isHidden: function() {                                                                                         // 628
          return document[methods.pauseInvisible.visProp] || false;                                                    // 629
        }                                                                                                              // 630
      },                                                                                                               // 631
      setToClearWatchedEvent: function() {                                                                             // 632
        clearTimeout(watchedEventClearTimer);                                                                          // 633
        watchedEventClearTimer = setTimeout(function() {                                                               // 634
          watchedEvent = "";                                                                                           // 635
        }, 3000);                                                                                                      // 636
      }                                                                                                                // 637
    };                                                                                                                 // 638
                                                                                                                       // 639
    // public methods                                                                                                  // 640
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {                                        // 641
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {                                              // 642
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";                                           // 643
      }                                                                                                                // 644
                                                                                                                       // 645
      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";       // 646
                                                                                                                       // 647
      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {            // 648
        if (asNav && withSync) {                                                                                       // 649
          var master = $(slider.vars.asNavFor).data('flexslider');                                                     // 650
          slider.atEnd = target === 0 || target === slider.count - 1;                                                  // 651
          master.flexAnimate(target, true, false, true, fromNav);                                                      // 652
          slider.direction = (slider.currentItem < target) ? "next" : "prev";                                          // 653
          master.direction = slider.direction;                                                                         // 654
                                                                                                                       // 655
          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {                    // 656
            slider.currentItem = target;                                                                               // 657
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");     // 658
            target = Math.floor(target/slider.visible);                                                                // 659
          } else {                                                                                                     // 660
            slider.currentItem = target;                                                                               // 661
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");     // 662
            return false;                                                                                              // 663
          }                                                                                                            // 664
        }                                                                                                              // 665
                                                                                                                       // 666
        slider.animating = true;                                                                                       // 667
        slider.animatingTo = target;                                                                                   // 668
                                                                                                                       // 669
        // SLIDESHOW:                                                                                                  // 670
        if (pause) slider.pause();                                                                                     // 671
                                                                                                                       // 672
        // API: before() animation Callback                                                                            // 673
        slider.vars.before(slider);                                                                                    // 674
                                                                                                                       // 675
        // SYNC:                                                                                                       // 676
        if (slider.syncExists && !fromNav) methods.sync("animate");                                                    // 677
                                                                                                                       // 678
        // CONTROLNAV                                                                                                  // 679
        if (slider.vars.controlNav) methods.controlNav.active();                                                       // 680
                                                                                                                       // 681
        // !CAROUSEL:                                                                                                  // 682
        // CANDIDATE: slide active class (for add/remove slide)                                                        // 683
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                                                                                                                       // 685
        // INFINITE LOOP:                                                                                              // 686
        // CANDIDATE: atEnd                                                                                            // 687
        slider.atEnd = target === 0 || target === slider.last;                                                         // 688
                                                                                                                       // 689
        // DIRECTIONNAV:                                                                                               // 690
        if (slider.vars.directionNav) methods.directionNav.update();                                                   // 691
                                                                                                                       // 692
        if (target === slider.last) {                                                                                  // 693
          // API: end() of cycle Callback                                                                              // 694
          slider.vars.end(slider);                                                                                     // 695
          // SLIDESHOW && !INFINITE LOOP:                                                                              // 696
          if (!slider.vars.animationLoop) slider.pause();                                                              // 697
        }                                                                                                              // 698
                                                                                                                       // 699
        // SLIDE:                                                                                                      // 700
        if (!fade) {                                                                                                   // 701
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,                     // 702
              margin, slideString, calcNext;                                                                           // 703
                                                                                                                       // 704
          // INFINITE LOOP / REVERSE:                                                                                  // 705
          if (carousel) {                                                                                              // 706
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;       // 707
            margin = slider.vars.itemMargin;                                                                           // 708
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;                                   // 709
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;                 // 710
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;                             // 712
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;                                              // 714
          } else {                                                                                                     // 715
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }                                                                                                            // 717
          slider.setProps(slideString, "", slider.vars.animationSpeed);                                                // 718
          if (slider.transitions) {                                                                                    // 719
            if (!slider.vars.animationLoop || !slider.atEnd) {                                                         // 720
              slider.animating = false;                                                                                // 721
              slider.currentSlide = slider.animatingTo;                                                                // 722
            }                                                                                                          // 723
                                                                                                                       // 724
            // Unbind previous transitionEnd events and re-bind new transitionEnd event                                // 725
            slider.container.unbind("webkitTransitionEnd transitionend");                                              // 726
            slider.container.bind("webkitTransitionEnd transitionend", function() {                                    // 727
              clearTimeout(slider.ensureAnimationEnd);                                                                 // 728
              slider.wrapup(dimension);                                                                                // 729
            });                                                                                                        // 730
                                                                                                                       // 731
            // Insurance for the ever-so-fickle transitionEnd event                                                    // 732
            clearTimeout(slider.ensureAnimationEnd);                                                                   // 733
            slider.ensureAnimationEnd = setTimeout(function() {                                                        // 734
              slider.wrapup(dimension);                                                                                // 735
            }, slider.vars.animationSpeed + 100);                                                                      // 736
                                                                                                                       // 737
          } else {                                                                                                     // 738
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){          // 739
              slider.wrapup(dimension);                                                                                // 740
            });                                                                                                        // 741
          }                                                                                                            // 742
        } else { // FADE:                                                                                              // 743
          if (!touch) {                                                                                                // 744
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);           // 745
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);          // 746
                                                                                                                       // 747
            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                                                                                                                       // 750
          } else {                                                                                                     // 751
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });                                  // 752
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });                                               // 753
            slider.wrapup(dimension);                                                                                  // 754
          }                                                                                                            // 755
        }                                                                                                              // 756
        // SMOOTH HEIGHT:                                                                                              // 757
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);                                // 758
      }                                                                                                                // 759
    };                                                                                                                 // 760
    slider.wrapup = function(dimension) {                                                                              // 761
      // SLIDE:                                                                                                        // 762
      if (!fade && !carousel) {                                                                                        // 763
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {            // 764
          slider.setProps(dimension, "jumpEnd");                                                                       // 765
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {     // 766
          slider.setProps(dimension, "jumpStart");                                                                     // 767
        }                                                                                                              // 768
      }                                                                                                                // 769
      slider.animating = false;                                                                                        // 770
      slider.currentSlide = slider.animatingTo;                                                                        // 771
      // API: after() animation Callback                                                                               // 772
      slider.vars.after(slider);                                                                                       // 773
    };                                                                                                                 // 774
                                                                                                                       // 775
    // SLIDESHOW:                                                                                                      // 776
    slider.animateSlides = function() {                                                                                // 777
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));                                 // 778
    };                                                                                                                 // 779
    // SLIDESHOW:                                                                                                      // 780
    slider.pause = function() {                                                                                        // 781
      clearInterval(slider.animatedSlides);                                                                            // 782
      slider.animatedSlides = null;                                                                                    // 783
      slider.playing = false;                                                                                          // 784
      // PAUSEPLAY:                                                                                                    // 785
      if (slider.vars.pausePlay) methods.pausePlay.update("play");                                                     // 786
      // SYNC:                                                                                                         // 787
      if (slider.syncExists) methods.sync("pause");                                                                    // 788
    };                                                                                                                 // 789
    // SLIDESHOW:                                                                                                      // 790
    slider.play = function() {                                                                                         // 791
      if (slider.playing) clearInterval(slider.animatedSlides);                                                        // 792
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);  // 793
      slider.started = slider.playing = true;                                                                          // 794
      // PAUSEPLAY:                                                                                                    // 795
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");                                                    // 796
      // SYNC:                                                                                                         // 797
      if (slider.syncExists) methods.sync("play");                                                                     // 798
    };                                                                                                                 // 799
    // STOP:                                                                                                           // 800
    slider.stop = function () {                                                                                        // 801
      slider.pause();                                                                                                  // 802
      slider.stopped = true;                                                                                           // 803
    };                                                                                                                 // 804
    slider.canAdvance = function(target, fromNav) {                                                                    // 805
      // ASNAV:                                                                                                        // 806
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;                                                       // 807
      return (fromNav) ? true :                                                                                        // 808
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :                                                      // 811
             (slider.vars.animationLoop) ? true :                                                                      // 812
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :   // 813
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :   // 814
             true;                                                                                                     // 815
    };                                                                                                                 // 816
    slider.getTarget = function(dir) {                                                                                 // 817
      slider.direction = dir;                                                                                          // 818
      if (dir === "next") {                                                                                            // 819
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;                                    // 820
      } else {                                                                                                         // 821
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;                                    // 822
      }                                                                                                                // 823
    };                                                                                                                 // 824
                                                                                                                       // 825
    // SLIDE:                                                                                                          // 826
    slider.setProps = function(pos, special, dur) {                                                                    // 827
      var target = (function() {                                                                                       // 828
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,     // 829
            posCalc = (function() {                                                                                    // 830
              if (carousel) {                                                                                          // 831
                return (special === "setTouch") ? pos :                                                                // 832
                       (reverse && slider.animatingTo === slider.last) ? 0 :                                           // 833
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;                                 // 835
              } else {                                                                                                 // 836
                switch (special) {                                                                                     // 837
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;                                                       // 839
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;                                         // 840
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;                                       // 841
                  default: return pos;                                                                                 // 842
                }                                                                                                      // 843
              }                                                                                                        // 844
            }());                                                                                                      // 845
                                                                                                                       // 846
            return (posCalc * -1) + "px";                                                                              // 847
          }());                                                                                                        // 848
                                                                                                                       // 849
      if (slider.transitions) {                                                                                        // 850
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";                   // 851
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";                                                           // 852
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);                                          // 853
         slider.container.css("transition-duration", dur);                                                             // 854
      }                                                                                                                // 855
                                                                                                                       // 856
      slider.args[slider.prop] = target;                                                                               // 857
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);                                  // 858
                                                                                                                       // 859
      slider.container.css('transform',target);                                                                        // 860
    };                                                                                                                 // 861
                                                                                                                       // 862
    slider.setup = function(type) {                                                                                    // 863
      // SLIDE:                                                                                                        // 864
      if (!fade) {                                                                                                     // 865
        var sliderOffset, arr;                                                                                         // 866
                                                                                                                       // 867
        if (type === "init") {                                                                                         // 868
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:                                                                                            // 870
          slider.cloneCount = 0;                                                                                       // 871
          slider.cloneOffset = 0;                                                                                      // 872
          // REVERSE:                                                                                                  // 873
          if (reverse) {                                                                                               // 874
            arr = $.makeArray(slider.slides).reverse();                                                                // 875
            slider.slides = $(arr);                                                                                    // 876
            slider.container.empty().append(slider.slides);                                                            // 877
          }                                                                                                            // 878
        }                                                                                                              // 879
        // INFINITE LOOP && !CAROUSEL:                                                                                 // 880
        if (slider.vars.animationLoop && !carousel) {                                                                  // 881
          slider.cloneCount = 2;                                                                                       // 882
          slider.cloneOffset = 1;                                                                                      // 883
          // clear out old clones                                                                                      // 884
          if (type !== "init") slider.container.find('.clone').remove();                                               // 885
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }                                                                                                              // 888
        slider.newSlides = $(slider.vars.selector, slider);                                                            // 889
                                                                                                                       // 890
        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:                                                                                                   // 892
        if (vertical && !carousel) {                                                                                   // 893
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){                                                                                       // 895
            slider.newSlides.css({"display": "block"});                                                                // 896
            slider.doMath();                                                                                           // 897
            slider.viewport.height(slider.h);                                                                          // 898
            slider.setProps(sliderOffset * slider.h, "init");                                                          // 899
          }, (type === "init") ? 100 : 0);                                                                             // 900
        } else {                                                                                                       // 901
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");                                      // 902
          slider.setProps(sliderOffset * slider.computedW, "init");                                                    // 903
          setTimeout(function(){                                                                                       // 904
            slider.doMath();                                                                                           // 905
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});                    // 906
            // SMOOTH HEIGHT:                                                                                          // 907
            if (slider.vars.smoothHeight) methods.smoothHeight();                                                      // 908
          }, (type === "init") ? 100 : 0);                                                                             // 909
        }                                                                                                              // 910
      } else { // FADE:                                                                                                // 911
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});         // 912
        if (type === "init") {                                                                                         // 913
          if (!touch) {                                                                                                // 914
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);            // 915
            if (slider.vars.fadeFirstSlide == false) {                                                                 // 916
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {                                                                                                   // 918
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }                                                                                                          // 920
          } else {                                                                                                     // 921
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }                                                                                                            // 923
        }                                                                                                              // 924
        // SMOOTH HEIGHT:                                                                                              // 925
        if (slider.vars.smoothHeight) methods.smoothHeight();                                                          // 926
      }                                                                                                                // 927
      // !CAROUSEL:                                                                                                    // 928
      // CANDIDATE: active slide                                                                                       // 929
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
                                                                                                                       // 931
      //FlexSlider: init() Callback                                                                                    // 932
      slider.vars.init(slider);                                                                                        // 933
    };                                                                                                                 // 934
                                                                                                                       // 935
    slider.doMath = function() {                                                                                       // 936
      var slide = slider.slides.first(),                                                                               // 937
          slideMargin = slider.vars.itemMargin,                                                                        // 938
          minItems = slider.vars.minItems,                                                                             // 939
          maxItems = slider.vars.maxItems;                                                                             // 940
                                                                                                                       // 941
      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();                             // 942
      slider.h = slide.height();                                                                                       // 943
      slider.boxPadding = slide.outerWidth() - slide.width();                                                          // 944
                                                                                                                       // 945
      // CAROUSEL:                                                                                                     // 946
      if (carousel) {                                                                                                  // 947
        slider.itemT = slider.vars.itemWidth + slideMargin;                                                            // 948
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;                                                 // 949
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;                                 // 950
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :               // 951
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :               // 952
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;                          // 953
                                                                                                                       // 954
        slider.visible = Math.floor(slider.w/(slider.itemW));                                                          // 955
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);                             // 957
        slider.last =  slider.pagingCount - 1;                                                                         // 958
        slider.limit = (slider.pagingCount === 1) ? 0 :                                                                // 959
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {                                                                                                         // 961
        slider.itemW = slider.w;                                                                                       // 962
        slider.pagingCount = slider.count;                                                                             // 963
        slider.last = slider.count - 1;                                                                                // 964
      }                                                                                                                // 965
      slider.computedW = slider.itemW - slider.boxPadding;                                                             // 966
    };                                                                                                                 // 967
                                                                                                                       // 968
    slider.update = function(pos, action) {                                                                            // 969
      slider.doMath();                                                                                                 // 970
                                                                                                                       // 971
      // update currentSlide and slider.animatingTo if necessary                                                       // 972
      if (!carousel) {                                                                                                 // 973
        if (pos < slider.currentSlide) {                                                                               // 974
          slider.currentSlide += 1;                                                                                    // 975
        } else if (pos <= slider.currentSlide && pos !== 0) {                                                          // 976
          slider.currentSlide -= 1;                                                                                    // 977
        }                                                                                                              // 978
        slider.animatingTo = slider.currentSlide;                                                                      // 979
      }                                                                                                                // 980
                                                                                                                       // 981
      // update controlNav                                                                                             // 982
      if (slider.vars.controlNav && !slider.manualControls) {                                                          // 983
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {                        // 984
          methods.controlNav.update("add");                                                                            // 985
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {              // 986
          if (carousel && slider.currentSlide > slider.last) {                                                         // 987
            slider.currentSlide -= 1;                                                                                  // 988
            slider.animatingTo -= 1;                                                                                   // 989
          }                                                                                                            // 990
          methods.controlNav.update("remove", slider.last);                                                            // 991
        }                                                                                                              // 992
      }                                                                                                                // 993
      // update directionNav                                                                                           // 994
      if (slider.vars.directionNav) methods.directionNav.update();                                                     // 995
                                                                                                                       // 996
    };                                                                                                                 // 997
                                                                                                                       // 998
    slider.addSlide = function(obj, pos) {                                                                             // 999
      var $obj = $(obj);                                                                                               // 1000
                                                                                                                       // 1001
      slider.count += 1;                                                                                               // 1002
      slider.last = slider.count - 1;                                                                                  // 1003
                                                                                                                       // 1004
      // append new slide                                                                                              // 1005
      if (vertical && reverse) {                                                                                       // 1006
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);       // 1007
      } else {                                                                                                         // 1008
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);                      // 1009
      }                                                                                                                // 1010
                                                                                                                       // 1011
      // update currentSlide, animatingTo, controlNav, and directionNav                                                // 1012
      slider.update(pos, "add");                                                                                       // 1013
                                                                                                                       // 1014
      // update slider.slides                                                                                          // 1015
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);                                                // 1016
      // re-setup the slider to accomdate new slide                                                                    // 1017
      slider.setup();                                                                                                  // 1018
                                                                                                                       // 1019
      //FlexSlider: added() Callback                                                                                   // 1020
      slider.vars.added(slider);                                                                                       // 1021
    };                                                                                                                 // 1022
    slider.removeSlide = function(obj) {                                                                               // 1023
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;                                                      // 1024
                                                                                                                       // 1025
      // update count                                                                                                  // 1026
      slider.count -= 1;                                                                                               // 1027
      slider.last = slider.count - 1;                                                                                  // 1028
                                                                                                                       // 1029
      // remove slide                                                                                                  // 1030
      if (isNaN(obj)) {                                                                                                // 1031
        $(obj, slider.slides).remove();                                                                                // 1032
      } else {                                                                                                         // 1033
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();               // 1034
      }                                                                                                                // 1035
                                                                                                                       // 1036
      // update currentSlide, animatingTo, controlNav, and directionNav                                                // 1037
      slider.doMath();                                                                                                 // 1038
      slider.update(pos, "remove");                                                                                    // 1039
                                                                                                                       // 1040
      // update slider.slides                                                                                          // 1041
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);                                                // 1042
      // re-setup the slider to accomdate new slide                                                                    // 1043
      slider.setup();                                                                                                  // 1044
                                                                                                                       // 1045
      // FlexSlider: removed() Callback                                                                                // 1046
      slider.vars.removed(slider);                                                                                     // 1047
    };                                                                                                                 // 1048
                                                                                                                       // 1049
    //FlexSlider: Initialize                                                                                           // 1050
    methods.init();                                                                                                    // 1051
  };                                                                                                                   // 1052
                                                                                                                       // 1053
  // Ensure the slider isn't focussed if the window loses focus.                                                       // 1054
  $( window ).blur( function ( e ) {                                                                                   // 1055
    focused = false;                                                                                                   // 1056
  }).focus( function ( e ) {                                                                                           // 1057
    focused = true;                                                                                                    // 1058
  });                                                                                                                  // 1059
                                                                                                                       // 1060
  //FlexSlider: Default Settings                                                                                       // 1061
  $.flexslider.defaults = {                                                                                            // 1062
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"                            // 1065
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"                 // 1067
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction                                   // 1068
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode // 1070
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically                                            // 1072
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds                 // 1073
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds                            // 1074
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds                      // 1075
    randomize: false,               //Boolean: Randomize slide order                                                   // 1076
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"                   // 1077
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.
                                                                                                                       // 1079
    // Usability features                                                                                              // 1080
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available                     // 1084
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
                                                                                                                       // 1087
    // Primary Controls                                                                                                // 1088
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)            // 1090
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item                        // 1091
    nextText: "Next",               //String: Set the text for the "next" directionNav item                            // 1092
                                                                                                                       // 1093
    // Secondary Navigation                                                                                            // 1094
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys                    // 1095
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element                                       // 1098
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item                              // 1099
    playText: "Play",               //String: Set the text for the "play" pausePlay item                               // 1100
                                                                                                                       // 1101
    // Special properties                                                                                              // 1102
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
                                                                                                                       // 1107
    // Carousel Options                                                                                                // 1108
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.                                    // 1110
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide       // 1114
                                                                                                                       // 1115
    // Callback API                                                                                                    // 1116
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide         // 1117
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation     // 1118
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes         // 1119
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added                  // 1121
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed               // 1122
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup     // 1123
  };                                                                                                                   // 1124
                                                                                                                       // 1125
  //FlexSlider: Plugin Function                                                                                        // 1126
  $.fn.flexslider = function(options) {                                                                                // 1127
    if (options === undefined) options = {};                                                                           // 1128
                                                                                                                       // 1129
    if (typeof options === "object") {                                                                                 // 1130
      return this.each(function() {                                                                                    // 1131
        var $this = $(this),                                                                                           // 1132
            selector = (options.selector) ? options.selector : ".slides > li",                                         // 1133
            $slides = $this.find(selector);                                                                            // 1134
                                                                                                                       // 1135
      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {                      // 1136
          $slides.fadeIn(400);                                                                                         // 1137
          if (options.start) options.start($this);                                                                     // 1138
        } else if ($this.data('flexslider') === undefined) {                                                           // 1139
          new $.flexslider(this, options);                                                                             // 1140
        }                                                                                                              // 1141
      });                                                                                                              // 1142
    } else {                                                                                                           // 1143
      // Helper strings to quickly perform functions on the slider                                                     // 1144
      var $slider = $(this).data('flexslider');                                                                        // 1145
      switch (options) {                                                                                               // 1146
        case "play": $slider.play(); break;                                                                            // 1147
        case "pause": $slider.pause(); break;                                                                          // 1148
        case "stop": $slider.stop(); break;                                                                            // 1149
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;                                      // 1150
        case "prev":                                                                                                   // 1151
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;                                  // 1152
        default: if (typeof options === "number") $slider.flexAnimate(options, true);                                  // 1153
      }                                                                                                                // 1154
    }                                                                                                                  // 1155
  };                                                                                                                   // 1156
})(jQuery);                                                                                                            // 1157
                                                                                                                       // 1158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 1168
}).call(this);                                                       // 1169
                                                                     // 1170
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['johannesma:meteor-flexslider'] = {};

})();
