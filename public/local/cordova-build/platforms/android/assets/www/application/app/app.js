var require = meteorInstall({"client":{"templates":{"home":{"html":{"template.connfirm.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.connfirm.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("confirm");                                                                                      // 2
Template["confirm"] = new Template("Template.confirm", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return [ HTML.HEAD("\n      ", HTML.Raw('<meta charset="utf-8">'), "\n      ", HTML.Raw('<meta name="viewport" content="width=device-width, initial-scale=1">'), "\n      ", HTML.TITLE("Confirm"), "\n      ", HTML.Raw('<link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">'), "\n      ", HTML.Raw('<link rel="stylesheet" href="/resources/demos/style.css">'), "\n      ", HTML.SCRIPT({
    src: "https://code.jquery.com/jquery-1.12.4.js"                                                                   // 6
  }), "\n      ", HTML.SCRIPT({                                                                                       // 7
    src: "https://code.jquery.com/ui/1.12.0/jquery-ui.js"                                                             // 8
  }), "\n      ", HTML.SCRIPT("\n\n      "), "\n    "), HTML.Raw('\n\n<body>\n<div class="container-fluid">\n\n<div class="row row-centered">\n  <div class="col-centered">\n        <h2>GOOD FOR YOU</h2>\n    </div>\n  </div>\n  <div class="row row-centered">\n    <div class=" col-centered">\n      <img src="Green-Thumbs.jpg" class="img-responsive thumbsup">\n    </div>\n  </div>\n  <div class="row row-centered">\n    <h3>How Long</h3>\n    <div class="col-centered">\n      <label class="radio-inline"><input type="radio" name="optradio">Started</label>\n      <label class="radio-inline"><input type="radio" name="optradio">Enough</label>\n      <label class="radio-inline"><input type="radio" name="optradio">Extra</label>\n    </div>\n  </div>\n\n<div class="row row-centered">\n<div class="row row-centered">\n    <button type="button" class="btn btn-block btn-positive btn-positive confirm">CONFIRM</button>\n    <button type="button" class="btn btn-block btn-positive btn-positive confirmAgain">CONFIRM &amp; AGAIN LATER!</button>\n  </div>\n</div>\n</div>\n\n    </body>') ];
}));                                                                                                                  // 10
                                                                                                                      // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.dayOffTaken.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.dayOffTaken.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("dayOffTaken");                                                                                  // 2
Template["dayOffTaken"] = new Template("Template.dayOffTaken", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<div class="container-fluid">\n    <div class="row row-centered">\n      <div class="col-centered">\n        <h3><strong>DAY OFF TAKEN</strong></h3>\n      </div>\n    <div class="row row-centered">\n      <div class="quote2">"WHAT IS NOT STARTED TODAY IS NEVER FINISHED TOMORROW."\n        </div>\n        </div>\n      <div class="row row-centered">\n      <div class="quoteBy2">-JOHANN WOLFGANG VON GOETHE\n      </div>\n      <div class="bottomPage">\n        <div class="row row-centered">\n          <div class="col-4-xs col-sm-4 col-md-4">\n            <h3><strong>79%</strong></h3>\n            <h3>OF GOAL ATTAINED</h3>\n          </div>\n          <div class="col-xs-4 col-sm-4 col-md-4">\n            <h3><strong>79</strong></h3>\n            <h3>DAYS IN A ROW</h3>\n          </div>\n          <div class="col-xs-4 col-sm-4 col-md-4">\n            <h3><strong>SHARE <br>QOUTE &amp; PROGRESS</strong></h3>\n          </div>\n        </div>\n      </div>\n     </div>\n   </div>\n </div>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.index.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("homeIndex");                                                                                    // 2
Template["homeIndex"] = new Template("Template.homeIndex", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                // 6
  }, function() {                                                                                                     // 7
    return [ "\n\n", HTML.DIV({                                                                                       // 8
      "class": "container-fluid"                                                                                      // 9
    }, "\n\n  ", HTML.DIV({                                                                                           // 10
      "class": "row row-centered"                                                                                     // 11
    }, "\n    	", HTML.DIV({                                                                                          // 12
      "class": "col-centered"                                                                                         // 13
    }, "\n  ", HTML.H3("HEY ", Blaze.View("lookup:currentUser.services.facebook.name", function() {                   // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "services", "facebook", "name"));           // 15
    })), "\n  ", HTML.H3("WHEN CAN YOU PRACTICE TODAY?"), "\n	   "), "\n"), "\n     ", HTML.DIV({                     // 16
      "class": "row row-centered"                                                                                     // 17
    }, "\n    	", HTML.DIV({                                                                                          // 18
      "class": " col-centered"                                                                                        // 19
    }, "\n    	", HTML.DIV({                                                                                          // 20
      "class": "imageClock"                                                                                           // 21
    }, "\n      		", HTML.IMG({                                                                                       // 22
      src: "clock_200.JPG",                                                                                           // 23
      "class": "img-responsive clock"                                                                                 // 24
    }), "\n      		", HTML.DIV({                                                                                      // 25
      "class": "counter"                                                                                              // 26
    }, HTML.STRONG(Blaze.View("lookup:counter", function() {                                                          // 27
      return Spacebars.mustache(view.lookup("counter"));                                                              // 28
    }))), "\n    	"), "\n      "), "\n    "), "\n        ", HTML.DIV({                                                // 29
      "class": "row row-centered"                                                                                     // 30
    }, "\n          ", HTML.DIV({                                                                                     // 31
      "class": "col col-centered"                                                                                     // 32
    }, "\n\n  ", HTML.BUTTON({                                                                                        // 33
      "class": "btn btn-outlined oneAM",                                                                              // 34
      name: "button"                                                                                                  // 35
    }, "1am"), "\n  ", HTML.BUTTON({                                                                                  // 36
      "class": "btn btn-outlined twoAM",                                                                              // 37
      name: "button"                                                                                                  // 38
    }, "2am"), "\n  ", HTML.BUTTON({                                                                                  // 39
      "class": "btn btn-outlined threeAM",                                                                            // 40
      name: "button"                                                                                                  // 41
    }, "3am"), "\n  ", HTML.BUTTON({                                                                                  // 42
      "class": "btn btn-outlined fourAM",                                                                             // 43
      name: "button"                                                                                                  // 44
    }, "4am"), "\n  ", HTML.BUTTON({                                                                                  // 45
      "class": "btn btn-outlined fiveAM",                                                                             // 46
      name: "button"                                                                                                  // 47
    }, "5am"), "\n  ", HTML.BUTTON({                                                                                  // 48
      "class": "btn btn-outlined sixAM",                                                                              // 49
      name: "button"                                                                                                  // 50
    }, "6am"), "\n  ", HTML.BUTTON({                                                                                  // 51
      "class": "btn btn-outlined sevenAM",                                                                            // 52
      name: "button"                                                                                                  // 53
    }, "7am"), "\n  ", HTML.BUTTON({                                                                                  // 54
      "class": "btn btn-outlined eightAM",                                                                            // 55
      name: "button"                                                                                                  // 56
    }, "8am"), "\n  ", HTML.BUTTON({                                                                                  // 57
      "class": "btn btn-outlined nineAM",                                                                             // 58
      name: "button"                                                                                                  // 59
    }, "9am"), "\n  ", HTML.BUTTON({                                                                                  // 60
      "class": "btn btn-outlined tenAM",                                                                              // 61
      name: "button"                                                                                                  // 62
    }, "10am"), "\n  ", HTML.BUTTON({                                                                                 // 63
      "class": "btn btn-outlined elevenAM",                                                                           // 64
      name: "button"                                                                                                  // 65
    }, "11am"), "\n  ", HTML.BUTTON({                                                                                 // 66
      "class": "btn btn-outlined tweleveAM",                                                                          // 67
      name: "button"                                                                                                  // 68
    }, "12am"), "\n      "), "\n    "), "\n\n      ", HTML.DIV({                                                      // 69
      "class": "rowConfirm"                                                                                           // 70
    }, "\n          ", HTML.A({                                                                                       // 71
      href: "/connfirm"                                                                                               // 72
    }, HTML.BUTTON({                                                                                                  // 73
      type: "button",                                                                                                 // 74
      "class": "btn btn-block btn-success confirmPracticeTime"                                                        // 75
    }, "CONFIRM")), "\n          ", HTML.A({                                                                          // 76
      href: "/noconfirm"                                                                                              // 77
    }, HTML.BUTTON({                                                                                                  // 78
      "class": "btn btn-danger btn-block "                                                                            // 79
    }, "NOT SURE")), "\n\n        "), "\n      ", HTML.BUTTON({                                                       // 80
      "class": "logout"                                                                                               // 81
    }, "Logout"), "\n      ", Blaze.View("lookup:currentUser.services.facebook.gender", function() {                  // 82
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "services", "facebook", "gender"));         // 83
    }), "\n\n"), "\n  " ];                                                                                            // 84
  }, function() {                                                                                                     // 85
    return [ "\n  ", HTML.DIV({                                                                                       // 86
      "class": "row"                                                                                                  // 87
    }, "\n\n\n\n      ", HTML.H1("PRACTICE"), "\n      ", HTML.H1("EVERY DAY"), "\n\n  "), "\n  ", HTML.DIV({         // 88
      "class": "rowBtn"                                                                                               // 89
    }, "\n        ", HTML.BUTTON({                                                                                    // 90
      "class": "btn btn-primary btn-block   btn-facebook"                                                             // 91
    }, "Login with Facebook"), "\n      "), "\n        ", HTML.BUTTON({                                               // 92
      "class": "btn btn-primary btn-block  btn-twitter"                                                               // 93
    }, "Login with Twitter"), "\n  " ];                                                                               // 94
  });                                                                                                                 // 95
}));                                                                                                                  // 96
                                                                                                                      // 97
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.noConfirm.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.noConfirm.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("noConfirm");                                                                                    // 2
Template["noConfirm"] = new Template("Template.noConfirm", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "content backgroundNoConfirm"                                                                            // 6
  }, HTML.Raw('\n    <div class="container-fluid">\n      <div class="row row-centered">\n        <div class="col-centered">\n          <h1><strong>NOOOOOOOOO?!!!!!!</strong></h1>\n          <img src="https://www.senioradvisor.com/blog/wp-content/uploads/2014/05/Red-Thumbs-Down-Button.jpg" class="thumbsDown">\n          <div class="later">PERHARPS LATER?</div>\n        </div>\n      </div>\n    </div>\n\n\n    '), HTML.DIV({
    "class": "row row-centered"                                                                                       // 8
  }, "\n     ", HTML.DIV({                                                                                            // 9
    "class": "col-centered"                                                                                           // 10
  }, "\n     ", HTML.DIV({                                                                                            // 11
    "class": "imageClock"                                                                                             // 12
  }, "\n         ", HTML.Raw('<img src="clock_200.JPG" class="img-responsive clock">'), "\n         ", HTML.DIV({     // 13
    "class": "counter"                                                                                                // 14
  }, HTML.STRONG(Blaze.View("lookup:counter", function() {                                                            // 15
    return Spacebars.mustache(view.lookup("counter"));                                                                // 16
  }))), "\n     "), "\n     "), "\n   "), HTML.Raw('\n\n    <div class="row row-centered">\n      <div class="col-centered">\n       <button type="button" class="btn btn-block btn-positive btn-positive noConfirmGreenButton">CONFIRM</button>\n       <button type="button" class="btn btn-block btn-positive btn-negative noConfirmRedButton">USE DAY OFF!</button>\n      </div>\n    </div>\n  '));
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oops.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.oops.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oops");                                                                                         // 2
Template["oops"] = new Template("Template.oops", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container-fluid"                                                                                        // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    "class": "row row-centered"                                                                                       // 8
  }, "\n      ", HTML.Raw('<div class="col-centered">\n        <h3><strong>OOPS</strong></h3>\n      </div>'), "\n    ", HTML.Raw('<div class="row row-centered">\n      <div class="quote2">"WHAT IS NOT STARTED TODAY IS NEVER FINISHED TOMORROW."\n        </div>\n        </div>'), "\n      ", HTML.DIV({
    "class": "row row-centered"                                                                                       // 10
  }, "\n      ", HTML.Raw('<div class="quoteBy2">-JOHANN WOLFGANG VON GOETHE\n      </div>'), "\n      ", HTML.DIV({  // 11
    "class": "row row-centered"                                                                                       // 12
  }, "\n     	", HTML.DIV({                                                                                           // 13
    "class": " col-centered"                                                                                          // 14
  }, "\n     	", HTML.DIV({                                                                                           // 15
    "class": "imageClock"                                                                                             // 16
  }, "\n       		", HTML.Raw('<img src="clock_200.JPG" class="img-responsive clock">'), "\n       		", HTML.DIV({     // 17
    "class": "counter"                                                                                                // 18
  }, HTML.STRONG(Blaze.View("lookup:counter", function() {                                                            // 19
    return Spacebars.mustache(view.lookup("counter"));                                                                // 20
  }))), "\n     	"), "\n       "), "\n     "), "\n\n      ", HTML.Raw('<div class="row row-centered">\n        <div class="col-centered">\n            <button type="button" class="btn btn-block btn-positive btn-positive recommit">RECOMMIT</button>\n        </div>\n      </div>'), "\n      ", HTML.Raw('<div class="rowConfirm">\n        <div class="row row-centered">\n          <div class="col-4-xs col-sm-4 col-md-4">\n            <h3><strong>79%</strong></h3>\n            <h3>OF GOAL ATTAINED</h3>\n          </div>\n          <div class="col-xs-4 col-sm-4 col-md-4">\n            <h3><strong>79</strong></h3>\n            <h3>DAYS IN A ROW</h3>\n          </div>\n          <div class="col-xs-4 col-sm-4 col-md-4">\n            <h3><strong>SHARE <br>QOUTE &amp; PROGRESS</strong></h3>\n          </div>\n        </div>\n      </div>'), "\n     "), "\n    "), "\n  ");
}));                                                                                                                  // 22
                                                                                                                      // 23
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.practiceToday.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.practiceToday.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("practiceToday");                                                                                // 2
Template["practiceToday"] = new Template("Template.practiceToday", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container-fluid"                                                                                        // 6
  }, HTML.Raw('\n\n    <div class="row row-centered">\n      <div class="col-centered">\n        <h3>HAVE YOU PRACTICED TODAY?</h3>\n      </div>\n    </div>\n\n	  '), HTML.DIV({
    "class": "row row-centered"                                                                                       // 8
  }, "\n     ", HTML.Raw('<div class="col-centered">\n      <a href="/noConfirm"><img src="https://www.senioradvisor.com/blog/wp-content/uploads/2014/05/Red-Thumbs-Down-Button.jpg" class="img-responsive thumbsDown2"></a>\n      <a href="/confirm"><img src="Green-Thumbs.jpg" class="img-responsive thumbsUp2"></a>\n\n    </div>'), "\n\n     ", HTML.Raw('<div class="row row-centered">\n       <div class="col-centered">\n       </div>\n  </div>'), "\n\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("streak"));                                                                     // 10
  }, function() {                                                                                                     // 11
    return [ "\n    ", HTML.H1("CURRENT STREAK:", HTML.BR(), " ", Blaze.View("lookup:streaks", function() {           // 12
      return Spacebars.mustache(view.lookup("streaks"));                                                              // 13
    }), " DAYS "), "\n    ", HTML.H1("CURRENT GOAL:", HTML.BR(), " DAYS "), "\n\n    " ];                             // 14
  }), "\n\n    "), "\n  ");                                                                                           // 15
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.settings.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("settings");                                                                                     // 2
Template["settings"] = new Template("Template.settings", (function() {                                                // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw("<head>\n\n</head>\n\n  "), HTML.BODY("\n        ", Blaze._TemplateWith(function() {              // 5
    return {                                                                                                          // 6
      collection: Spacebars.call("Collection"),                                                                       // 7
      type: Spacebars.call(view.lookup("action")),                                                                    // 8
      doc: Spacebars.call(view.lookup("editDoc")),                                                                    // 9
      id: Spacebars.call("collectionId"),                                                                             // 10
      autosave: Spacebars.call(true)                                                                                  // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                            // 14
      return [ "\n          ", HTML.FIELDSET("\n            ", Blaze._TemplateWith(function() {                       // 15
        return {                                                                                                      // 16
          name: Spacebars.call("slider")                                                                              // 17
        };                                                                                                            // 18
      }, function() {                                                                                                 // 19
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                // 20
      }), "\n          "), "\n          ", HTML.BUTTON({                                                              // 21
        type: "submit",                                                                                               // 22
        "class": "btn btn-primary"                                                                                    // 23
      }, Blaze.View("lookup:action", function() {                                                                     // 24
        return Spacebars.mustache(view.lookup("action"));                                                             // 25
      })), "\n        " ];                                                                                            // 26
    });                                                                                                               // 27
  }), "\n  "), "\n\n  ", HTML.SCRIPT("\n  \n  ") ];                                                                   // 28
}));                                                                                                                  // 29
                                                                                                                      // 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.success.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/home/html/template.success.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("success");                                                                                      // 2
Template["success"] = new Template("Template.success", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<body>\n  <div class="container-fluid">\n  <div class="row row-centered">\n    <div class="col-centered">\n  <h2><strong>SUCCESS!</strong></h2>\n    <br>\n    <br>\n  </div>\n</div>\n  <div class="row row-centered">\n    <div class="col-centered">\n      <p class="text-center successP">\n        Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.\n        If I were obliged to marry all the girls with whom I have jested I should have at least 200 wives</p>\n        <br>\n      </div>\n    </div>\n    <div class="row row-centered">\n      <div class="col-centered">\n        <h3 class="author">-WOLFGANG AMADEUS MOZART</h3>\n      </div>\n      </div>\n    <footer class="bottomPage">\n      <div class="row row-centered">\n        <div class="col-4-xs col-sm-4 col-md-4">\n          <h3><strong>79%</strong></h3>\n          <h3>OF GOAL ATTAINED</h3>\n        </div>\n        <div class="col-xs-4 col-sm-4 col-md-4">\n          <h3><strong>79</strong></h3>\n          <h3>DAYS IN A ROW</h3>\n        </div>\n        <div class="col-xs-4 col-sm-4 col-md-4">\n          <h3><strong>SHARE <br>QOUTE &amp; PROGRESS</strong></h3>\n          </div>\n        </div>\n     </footer>\n   </div>\n </body>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"app":{"template.layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/app/template.layout.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("layout");                                                                                       // 2
Template["layout"] = new Template("Template.layout", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return [ Spacebars.include(view.lookupTemplate("nav")), "\n\n    ", HTML.DIV({                                      // 5
    "class": "container"                                                                                              // 6
  }, "\n\n      ", Spacebars.include(view.lookupTemplate("yield")), "\n\n    "), HTML.Raw("<!-- /.container -->") ];  // 7
}));                                                                                                                  // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.nav.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/templates/partials/template.nav.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("nav");                                                                                          // 2
Template["nav"] = new Template("Template.nav", (function() {                                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.NAV({                                                                                                   // 5
    "class": "bar bar-tab"                                                                                            // 6
  }, "\n    ", HTML.A({                                                                                               // 7
    "class": "tab-item active",                                                                                       // 8
    href: function() {                                                                                                // 9
      return Spacebars.mustache(view.lookup("pathFor"), "homeIndex");                                                 // 10
    }                                                                                                                 // 11
  }, "\n      ", HTML.Raw('<span class="icon icon-home"></span>'), "\n      ", HTML.Raw('<span class="tab-label">Home</span>'), "\n    "), HTML.Raw('\n    <a class="tab-item" href="#">\n      <span class="icon icon-person"></span>\n      <span class="tab-label">Profile</span>\n    </a>\n    '), HTML.A({
    "class": "tab-item",                                                                                              // 13
    href: function() {                                                                                                // 14
      return Spacebars.mustache(view.lookup("pathFor"), "practiceToday");                                             // 15
    }                                                                                                                 // 16
  }, "\n      ", HTML.Raw('<span class="icon icon-star-filled"></span>'), "\n      ", HTML.Raw('<span class="tab-label">Streak</span>'), "\n    "), HTML.Raw('\n    <a class="tab-item" href="#">\n      <span class="icon icon-check"></span>\n      <span class="tab-label">Goals</span>\n    </a>\n    <a class="tab-item" href="#">\n      <span class="icon icon-gear"></span>\n      <span class="tab-label">Settings</span>\n    </a>\n  '));
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"app":{"confirm.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/app/confirm.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.confirm.onCreated(function () {                                                                              // 1
                                                                                                                      //
  Meteor.subscribe('myStreaks');                                                                                      // 3
  var countdown = new ReactiveCountdown(24, {                                                                         // 4
    // Value substracted every tick from the current countdown value                                                  //
    steps: 1,                                                                                                         // 6
                                                                                                                      //
    // Specify the countdown's interval in milliseconds                                                               //
    interval: 3600,                                                                                                   // 9
                                                                                                                      //
    // Callback: Tick, called on every interval                                                                       //
    tick: function tick() {},                                                                                         // 12
                                                                                                                      //
    // Callback: Complete, called when the countdown has reached 0                                                    //
    completed: function completed() {}                                                                                // 15
                                                                                                                      //
  });                                                                                                                 // 4
  countdown.start(function () {                                                                                       // 19
                                                                                                                      //
    // do something when this is completed                                                                            //
                                                                                                                      //
  });                                                                                                                 // 23
});                                                                                                                   // 25
                                                                                                                      //
Template.confirm.helpers({                                                                                            // 28
  getCountdown: function getCountdown() {                                                                             // 30
                                                                                                                      //
    return countdown.get();                                                                                           // 32
  }                                                                                                                   // 33
});                                                                                                                   // 28
                                                                                                                      //
Template.confirm.events({                                                                                             // 37
  'click .confirm': function clickConfirm(event) {                                                                    // 38
    event.preventDefault();                                                                                           // 39
    var noStreaks = Streaks.find().count();                                                                           // 40
    if (noStreaks == 0) {                                                                                             // 41
      Meteor.call('addStreaks', true);                                                                                // 42
    }                                                                                                                 // 44
    /*countdown.start(function(){                                                                                     //
                                                                                                                      //
    //Meteor.call('updateToZero');                                                                                    //
    console.log('hello');                                                                                             //
    });*/                                                                                                             //
    //if(countdown.start()){                                                                                          //
    Bert.alert('You cant do that twice in one day', 'success', 'growl-top-right');                                    // 51
    //}                                                                                                               //
                                                                                                                      //
    if (Streaks.checkStreakToday = false) {                                                                           // 54
      Meteor.call('addStreaks', true);                                                                                // 55
    }                                                                                                                 // 56
                                                                                                                      //
    console.log('streaks increassed');                                                                                // 58
    Router.go('/success');                                                                                            // 59
  },                                                                                                                  // 60
                                                                                                                      //
  'click .confirmAgain': function clickConfirmAgain(event) {                                                          // 62
    event.preventDefault();                                                                                           // 63
    var noStreaks = Streaks.find().count();                                                                           // 64
                                                                                                                      //
    Meteor.call('addStreaks');                                                                                        // 66
    console.log('streaks increassed');                                                                                // 67
    Router.go('/');                                                                                                   // 68
  }                                                                                                                   // 69
                                                                                                                      //
});                                                                                                                   // 37
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/app/index.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.homeIndex.onCreated(function helloOnCreated() {                                                              // 1
                                                                                                                      //
  this.counter = new ReactiveVar(0);                                                                                  // 4
});                                                                                                                   // 6
                                                                                                                      //
Template.homeIndex.helpers({                                                                                          // 8
  counter: function counter() {                                                                                       // 10
    return Template.instance().counter.get();                                                                         // 11
  }                                                                                                                   // 13
});                                                                                                                   // 8
                                                                                                                      //
Template.homeIndex.events({                                                                                           // 18
                                                                                                                      //
  'click .btn-facebook': function clickBtnFacebook(event) {                                                           // 20
    event.preventDefault();                                                                                           // 21
    Meteor.loginWithFacebook(function (err) {                                                                         // 22
      if (!err) {                                                                                                     // 23
        Router.go('/');                                                                                               // 24
      }                                                                                                               // 25
    });                                                                                                               // 26
  },                                                                                                                  // 27
                                                                                                                      //
  'click .logout': function clickLogout(event) {                                                                      // 29
    event.preventDefault();                                                                                           // 30
    Meteor.logout();                                                                                                  // 31
  },                                                                                                                  // 32
  //buttons for clock to set time of practice                                                                         //
  'click .oneAM': function clickOneAM(event, instance) {                                                              // 34
    event.preventDefault();                                                                                           // 35
    instance.counter.set(moment("1:00", "h:mm").format("hh:mm "));                                                    // 36
  },                                                                                                                  // 37
  'click .twoAM': function clickTwoAM(event, instance) {                                                              // 38
    event.preventDefault();                                                                                           // 39
    instance.counter.set(moment("2:00", "h:mm").format("hh:mm "));                                                    // 40
  },                                                                                                                  // 41
  'click .threeAM': function clickThreeAM(event, instance) {                                                          // 42
    event.preventDefault();                                                                                           // 43
    instance.counter.set(moment("3:00", "h:mm").format("hh:mm "));                                                    // 44
  },                                                                                                                  // 45
  'click .fourAM': function clickFourAM(event, instance) {                                                            // 46
    event.preventDefault();                                                                                           // 47
    instance.counter.set(moment("4:00", "h:mm").format("hh:mm "));                                                    // 48
  },                                                                                                                  // 49
  'click .fiveAM': function clickFiveAM(event, instance) {                                                            // 50
    event.preventDefault();                                                                                           // 51
    instance.counter.set(moment("5:00", "h:mm").format("hh:mm "));                                                    // 52
  },                                                                                                                  // 53
  'click .sixAM': function clickSixAM(event, instance) {                                                              // 54
    event.preventDefault();                                                                                           // 55
    instance.counter.set(moment("6:00", "h:mm").format("hh:mm "));                                                    // 56
  },                                                                                                                  // 57
  'click .sevenAM': function clickSevenAM(event, instance) {                                                          // 58
    event.preventDefault();                                                                                           // 59
    instance.counter.set(moment("7:00", "h:mm").format("hh:mm "));                                                    // 60
  },                                                                                                                  // 61
  'click .eightAM': function clickEightAM(event, instance) {                                                          // 62
    event.preventDefault();                                                                                           // 63
    instance.counter.set(moment("8:00", "h:mm").format("hh:mm "));                                                    // 64
  },                                                                                                                  // 65
                                                                                                                      //
  'click .confirmPracticeTime': function clickConfirmPracticeTime(event, instance) {                                  // 67
    event.preventDefault();                                                                                           // 68
    console.log("you have confirmed your practice time at " + instance.counter.get() + "set push notification here");
    Bert.alert('you have confirmed your practice time at ' + instance.counter.get(), 'success', 'growl-top-right');   // 71
  }                                                                                                                   // 73
                                                                                                                      //
});                                                                                                                   // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"practiceToday.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/app/practiceToday.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.practiceToday.onCreated(function () {                                                                        // 1
                                                                                                                      //
  Meteor.subscribe('myStreaks');                                                                                      // 3
});                                                                                                                   // 4
                                                                                                                      //
Template.practiceToday.helpers({                                                                                      // 6
  streak: function streak() {                                                                                         // 7
                                                                                                                      //
    return Streaks.find({});                                                                                          // 9
  }                                                                                                                   // 10
});                                                                                                                   // 6
                                                                                                                      //
Template.practiceToday.events({                                                                                       // 14
  'click .thumbUp': function clickThumbUp(event) {                                                                    // 15
    event.preventDefault();                                                                                           // 16
                                                                                                                      //
    Router.go('/confirm');                                                                                            // 18
  },                                                                                                                  // 19
  'click .notToday': function clickNotToday(event) {                                                                  // 20
    event.preventDefault();                                                                                           // 21
    Router.go('/noConfirm');                                                                                          // 22
  }                                                                                                                   // 23
                                                                                                                      //
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"router.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/router.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Router.configure({                                                                                                    // 1
  layoutTemplate: 'layout'                                                                                            // 2
                                                                                                                      //
});                                                                                                                   // 1
                                                                                                                      //
Router.route('/', {                                                                                                   // 6
  name: 'homeIndex'                                                                                                   // 7
                                                                                                                      //
});                                                                                                                   // 6
                                                                                                                      //
Router.route('/confirm', {                                                                                            // 12
  name: 'confirm'                                                                                                     // 13
                                                                                                                      //
});                                                                                                                   // 12
                                                                                                                      //
/*onBeforeAction: function(){                                                                                         //
  var currentUser = Meteor.userId();                                                                                  //
  if(countdown.start())                                                                                               //
    {                                                                                                                 //
    //    this.render('practiceToday');                                                                               //
                                                                                                                      //
    }else{                                                                                                            //
      this.next();                                                                                                    //
         }                                                                                                            //
}*/                                                                                                                   //
Router.route('/noConfirm', {                                                                                          // 27
  name: 'noConfirm'                                                                                                   // 28
                                                                                                                      //
});                                                                                                                   // 27
                                                                                                                      //
Router.route('/oops', {                                                                                               // 33
  name: 'oops'                                                                                                        // 34
                                                                                                                      //
});                                                                                                                   // 33
                                                                                                                      //
Router.route('/dayOffTaken', {                                                                                        // 39
  name: 'dayOffTaken'                                                                                                 // 40
                                                                                                                      //
});                                                                                                                   // 39
                                                                                                                      //
Router.route('/practiceToday', {                                                                                      // 46
  name: 'practiceToday'                                                                                               // 47
                                                                                                                      //
});                                                                                                                   // 46
                                                                                                                      //
Router.route('/success', {                                                                                            // 52
  name: 'success'                                                                                                     // 53
                                                                                                                      //
});                                                                                                                   // 52
                                                                                                                      //
Router.route('/settings', {                                                                                           // 60
  name: 'settings'                                                                                                    // 61
                                                                                                                      //
});                                                                                                                   // 60
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"collections":{"slider.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// api/collections/slider.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Collection = new Mongo.Collection('collection');                                                                      // 1
                                                                                                                      //
Collection.attachSchema(new SimpleSchema({                                                                            // 3
  slider: {                                                                                                           // 4
    type: Number,                                                                                                     // 5
    max: 150,                                                                                                         // 6
    min: 30,                                                                                                          // 7
    autoform: {                                                                                                       // 8
      type: "noUiSlider",                                                                                             // 9
      step: 10,                                                                                                       // 10
      noUiSlider_pipsOptions: {                                                                                       // 11
        mode: 'steps',                                                                                                // 12
        density: 5                                                                                                    // 13
      }                                                                                                               // 11
    }                                                                                                                 // 8
  }                                                                                                                   // 4
}));                                                                                                                  // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"streaks.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// api/collections/streaks.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Streaks = new Mongo.Collection('streaks');                                                                            // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"success.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// api/collections/success.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/templates/home/html/template.connfirm.js");
require("./client/templates/home/html/template.dayOffTaken.js");
require("./client/templates/home/html/template.index.js");
require("./client/templates/home/html/template.noConfirm.js");
require("./client/templates/home/html/template.oops.js");
require("./client/templates/home/html/template.practiceToday.js");
require("./client/templates/home/html/template.settings.js");
require("./client/templates/home/html/template.success.js");
require("./client/templates/app/template.layout.js");
require("./client/templates/partials/template.nav.js");
require("./lib/router.js");
require("./api/collections/slider.js");
require("./api/collections/streaks.js");
require("./api/collections/success.js");
require("./client/app/confirm.js");
require("./client/app/index.js");
require("./client/app/practiceToday.js");