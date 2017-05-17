$(document).ready(function() {
  var MyAudioIsPlaying, BGaudio, AudioONOFF, countdownTimer, countdown, timeup, ObjectsNames, Objects, startingData, hidden, nutReady, swipe, crash, sigh, error, points;
  /**
   * Describe this function...
   */
  function start() {}
  /**
   * Describe this function...
   */
  function initData() {
    // Block#: 69
    timeup = 0;
    // Block#: 71
    error = 0;
    // Block#: 73
    sigh = 0;
    // Block#: 75
    crash = 0;
    // Block#: 77
    swipe = 0;
    // Block#: 79
    BGaudio = 0;
    // Block#: 81
    countdownTimer = 0;
    // Block#: 85
    countdown = 60;
    // Block#: 87
    nutReady = true;
    // Block#: 89
    if(hidden == null) {
      // Block#: 93
      $('[obj-name="GameOverLbl"]').hide(); // Block#: 94
      startingData = {
        'startingMouthY': com.fc.JavaScriptDistLib.Image.getProperty["y"]("mouth"),
        'startingNutX': com.fc.JavaScriptDistLib.Image.getProperty["x"]("nut"),
        'tooth1Y': com.fc.JavaScriptDistLib.Image.getProperty["y"]("tooth1"),
        'tooth2Y': com.fc.JavaScriptDistLib.Image.getProperty["y"]("tooth2"),
      };
      // Block#: 104
      MyAudioIsPlaying = false;
    }
    // Block#: 106
    Objects = {
      'nut': ('https://local.snapp.click/api/v2/raws/projects/resources/8788af8a-aee0-4065-b13e-05e553ac36e1'),
      'goldennut': ('https://local.snapp.click/api/v2/raws/projects/resources/f5e15fe1-653c-46a9-8d82-9b774a26f60a'),
      'diamond': ('https://local.snapp.click/api/v2/raws/projects/resources/0406163e-01ff-4c65-85eb-9e94f1c7b6d1'),
      'dime': ('https://local.snapp.click/api/v2/raws/projects/resources/edeceb68-2ff6-4eea-9de1-175b2bd2da5a'),
      'stone': ('https://local.snapp.click/api/v2/raws/projects/resources/a7ad8fea-f342-445f-8506-ce9a89161180'),
      'bolt': ('https://local.snapp.click/api/v2/raws/projects/resources/84ec0057-aaa6-4c0c-846b-d556c82f53d7'),
    };
    // Block#: 120
    ObjectsNames = ['nut', 'nut', 'diamond', 'diamond', 'bolt', 'bolt', 'dime', 'dime', 'stone', 'stone', 'goldennut'];
    // Block#: 133
    if(AudioONOFF == true) {
      // Block#: 137
      play_my_audio();
    }
    // Block#: 138
    $('[obj-name="infoBox"]').hide();
  }
  /**
   * Describe this function...
   */
  function restart() {
    // Block#: 140
    MyAudioIsPlaying = false;
  }
  /**
   * Describe this function...
   */
  function game_over() {}
  /**
   * Describe this function...
   */
  function closeMouth() {
    // Block#: 224
    if(AudioONOFF == true) {}
    // Block#: 230
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("BGimage", ('https://local.snapp.click/api/v2/raws/projects/resources/1d2b783c-99fc-448a-9db7-bde0439ff62e')); // Block#: 232
    com.fc.JavaScriptDistLib.Image.animationStart('mouth', com.fc.JavaScriptDistLib.Animation.animationMove('233', 0, -100, 0.2), function() {
      // Block#: 237
      openMouth();
    });
  }
  /**
   * Describe this function...
   */
  function openMouth() {
    // Block#: 262
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("BGimage", ('https://local.snapp.click/api/v2/raws/projects/resources/fe1cf3f4-7633-4c58-b95b-9c5ac5100aff')); // Block#: 264
    com.fc.JavaScriptDistLib.Image.animationStart('mouth', com.fc.JavaScriptDistLib.Animation.animationMove('265', 0, 100, 0.2), function() {
      // Block#: 269
      if(com.fc.JavaScriptDistLib.Image.getProperty["Image"]("nut") == (com.fc.JavaScriptDistLib.Dictionary.getDictValue(Objects, 'nut'))) {
        // Block#: 275
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PointsLbl", (com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("PointsLbl"))) + 1))); // Block#: 281
        com.fc.JavaScriptDistLib.Image.setProperty["x"]("nut", (0 - com.fc.JavaScriptDistLib.Image.getProperty["width"]("nut"))); // Block#: 285
        enterNut();
      } else if(com.fc.JavaScriptDistLib.Image.getProperty["Image"]("nut") == (com.fc.JavaScriptDistLib.Dictionary.getDictValue(Objects, 'goldennut'))) {
        // Block#: 291
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PointsLbl", (com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("PointsLbl"))) + 5))); // Block#: 297
        countdown = countdown + 5;
        // Block#: 301
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("countdownLbl", (com.fc.JavaScriptDistLib.TextLib.convertToText(countdown))); // Block#: 304
        com.fc.JavaScriptDistLib.Image.setProperty["x"]("nut", (0 - com.fc.JavaScriptDistLib.Image.getProperty["width"]("nut"))); // Block#: 308
        enterNut();
      } else {
        // Block#: 309
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("BGimage", ('https://local.snapp.click/api/v2/raws/projects/resources/dcd113a3-245d-4f0d-a63a-81d070ebd587')); // Block#: 311
        if(AudioONOFF == true) {}
        // Block#: 323
        com.fc.JavaScriptDistLib.Image.animationStart('tooth1', com.fc.JavaScriptDistLib.Animation.animationMove('324', 0, 350, 0.5), function() {
          // Block#: 328
          com.fc.JavaScriptDistLib.Image.animationStart('tooth2', com.fc.JavaScriptDistLib.Animation.animationMove('329', 0, 350, 0.5), function() {
            // Block#: 333
            game_over();
          });
        });
      }
    });
  }

  function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if(remove) {
      return list.splice(x, 1)[0];
    } else {
      return list[x];
    }
  }
  /**
   * Describe this function...
   */
  function enterNut() {
    // Block#: 335
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("nut", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(Objects, listsGetRandomItem(ObjectsNames, false)))); // Block#: 340
    com.fc.JavaScriptDistLib.Image.animationStart('nut', com.fc.JavaScriptDistLib.Animation.animationMove('341', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(startingData, 'startingNutX')) + com.fc.JavaScriptDistLib.Image.getProperty["width"]("nut"), 0, 0.2), function() {
      // Block#: 349
      nutReady = true;
    });
  }
  /**
   * Describe this function...
   */
  function exitNut() {
    // Block#: 352
    com.fc.JavaScriptDistLib.Image.animationStart('nut', com.fc.JavaScriptDistLib.Animation.animationMove('353', com.fc.JavaScriptDistLib.Screen.getProperty["width"]("mainScreen"), 0, 0.2), function() {
      // Block#: 357
      com.fc.JavaScriptDistLib.Image.setProperty["x"]("nut", (0 - com.fc.JavaScriptDistLib.Image.getProperty["width"]("nut"))); // Block#: 361
      enterNut();
    });
  }
  /**
   * Describe this function...
   */
  function play_my_audio() {
    // Block#: 363
    if(!MyAudioIsPlaying) {
      // Block#: 366
      MyAudioIsPlaying = true;
    }
  }
  // Block#: 1
  function on_start_click(e) {
    try {
      // Block#: 2
      $('[obj-name="startPage"]').hide(); // Block#: 3
      start();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="start"]').on('click', on_start_click);
  // Block#: 7
  function on_AudioOnOff_click(e) {
    try {
      // Block#: 8
      if(AudioONOFF == true) {} else {
        // Block#: 20
        AudioONOFF = true;
        // Block#: 22
        com.fc.JavaScriptDistLib.Button.setProperty["Image"]("AudioOnOff", ('https://local.snapp.click/api/v2/raws/projects/resources/00fb78d8-d70d-4ae2-b415-b8e949a4f43a'));
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="AudioOnOff"]').on('click', on_AudioOnOff_click);
  // Block#: 32
  function on_screen_showmainScreen() {
    try {
      // Block#: 33
      initData();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="mainScreen"]').on('show', on_screen_showmainScreen);
  // Block#: 34
  let on_screen_createmainScreen = function() {
    try {
      // Block#: 35
      AudioONOFF = true;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: 37
  function on_restart_click(e) {
    try {
      // Block#: 38
      $('[obj-name="restart"]').hide(); // Block#: 39
      restart();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="restart"]').on('click', on_restart_click);
  // Block#: 193
  function on_screen_hidemainScreen() {
    try {
      // Block#: 194
      MyAudioIsPlaying = false;
      // Block#: 196
      hidden = true;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="mainScreen"]').on('hide', on_screen_hidemainScreen);
  // Block#: 216
  function on_Image_nut_TOUCHMOVE(e) {
    $('[obj-name= "nut"]').bind('touchstart mousedown', function(event) {
      $(document.body).bind('touchmove mousemove', function(touchmove) {
        var ose = $(document.body).offset();
        var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
          x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
          y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
        // Block#: 217
        com.fc.JavaScriptDistLib.Image.setProperty["x"]("nut", (x - com.fc.JavaScriptDistLib.Image.getProperty["width"]("nut") / 2));;
        touchmove.stopPropagation();
      });
      event.stopPropagation();
    });
    $(document.body).bind('mouseup touchend', function(release) {
      $(document.body).off('mousemove touchmove');
      $(document.body).off('mousedown touchstart');
      release.stopPropagation();
    });
  };
  //Call
  on_Image_nut_TOUCHMOVE();
  // Block#: 238
  function on_Image_nut_TOUCHEND(e) {
    try {
      // Block#: 239
      if(nutReady) {
        // Block#: 241
        nutReady = false;
        // Block#: 243
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Image.getProperty["x"]("nut"), "GT", com.fc.JavaScriptDistLib.Screen.getProperty["width"]("mainScreen") / 2)) {
          // Block#: 249
          if(AudioONOFF == true) {}
          // Block#: 255
          exitNut();
        } else {
          // Block#: 256
          com.fc.JavaScriptDistLib.Image.setProperty["x"]("nut", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(startingData, 'startingNutX'))); // Block#: 260
          closeMouth();
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "nut"]').on('touchend mouseup', on_Image_nut_TOUCHEND);
  // Block#: 373
  function on_info_click(e) {
    try {
      // Block#: 374
      $('[obj-name="infoBox"]').show();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="info"]').on('click', on_info_click);
  // Block#: 375
  function on_closeinfo_click(e) {
    try {
      // Block#: 376
      $('[obj-name="infoBox"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="closeinfo"]').on('click', on_closeinfo_click);
  $('[obj-name="mainScreen"]').show();
});
// Generated by snapp
// 378281-972056-322429-462906
