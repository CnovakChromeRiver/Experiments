/*jslint browser: true, sloppy: true, white: true, nomen: true, plusplus:true, maxerr: 50, indent: 2 */
/*global jQuery:false, iScroll:false */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true,
         undef:true, curly:true, browser:true, jquery:true, indent:2, maxerr:50,
         white:false, nomen:false */

//-------------------------------------------------------
// Pull-Up and Pull-Down callbacks for "Pull" page
//-------------------------------------------------------
(function pullPagePullImplementation($) {
  "use strict";
  var pullDownGeneratedCount = 1,
      pullUpGeneratedCount = 0,
      listSelector = "div.pull-demo-page ul.ui-listview",
      lastItemSelector = listSelector + " > li:last-child";
    
  /* For this example, I prepend three rows to the list with the pull-down, and append
   * 3 rows to the list with the pull-up. This is only to make a clear illustration that the
   * action has been performed. A pull-down or pull-up might prepend, append, replace or modify
   * the list in some other way, modify some other page content, or may not change the page 
   * at all. It just performs whatever action you'd like to perform when the gesture has been 
   * completed by the user.
   */
  function gotPullDownData(event, data) {
    var i,
        newContent = "";        
    for (i=0; i<1; i+=1) {  // Generate some fake new content
      newContent = "<li class='report'><h2>Report " + (++pullDownGeneratedCount) + "</h2><p>Vivamus urna orci, semper ac egestas sed, cursus sed urna. Sed varius porta dictum. Sed cursus, mauris volutpat placerat ultricies, metus est tristique turpis, congue tincidunt turpis lacus id mi. Nulla faucibus dui vitae odio rhoncus cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed sapien luctus ante cursus accumsan ac non est. Proin mollis ante id risus molestie accumsan. Praesent interdum eros vehicula turpis porttitor vehicula. Ut molestie facilisis sollicitudin. Fusce volutpat pulvinar tincidunt. Cras rutrum egestas justo, sit amet luctus leo ullamcorper eget. Aliquam porta nisl condimentum nunc blandit id faucibus odio consequat.</p><p>Fusce metus neque, fermentum sed placerat in, vehicula ac nisi. Donec in nibh dui. Nunc nec fringilla leo. In at lorem non odio molestie dignissim scelerisque facilisis turpis. Pellentesque ut dolor vitae lorem tristique imperdiet. Donec convallis mi ut erat cursus at dignissim mi egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nibh ligula, sagittis quis bibendum in, vehicula eget ligula. In euismod, lectus vel posuere accumsan, sem justo rhoncus diam, eget cursus quam turpis non purus. Etiam scelerisque eleifend nibh at dapibus. Fusce sit amet ligula non leo dignissim adipiscing. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vehicula ultrices sem, et tristique sapien pellentesque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut erat vitae eros porta tempus sit amet ac sapien. Vestibulum quis ligula et magna commodo volutpat.</p><p>Praesent sit amet mi turpis. Nam aliquam ullamcorper felis, sollicitudin bibendum tellus mattis sed. Donec ultrices pellentesque risus, vel consectetur eros faucibus nec. In dui mauris, vulputate sit amet porta nec, aliquam a quam. Curabitur vulputate nisl in nulla mollis fringilla. Mauris vehicula fringilla urna, et ornare nunc convallis eget. Sed euismod lobortis sapien ac cursus. Mauris malesuada nibh nec orci tempor sollicitudin quis ac elit.</p><p>Etiam non nisi a nisi tempor porta eu ac magna. Nullam mattis sagittis eros, at egestas lorem pretium sed. Morbi ligula augue, faucibus id facilisis a, tincidunt eu libero. Suspendisse eleifend iaculis justo at lacinia. Mauris sed risus mi. Fusce in arcu ut nisl vulputate facilisis at nec ipsum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></li>" + newContent;
      }
    $(listSelector).prepend(newContent).listview("refresh");  // Prepend new content and refresh listview
    data.iscrollview.refresh();    // Refresh the iscrollview
    }
  
  function gotPullUpData(event, data) {
    var i,
        iscrollview = data.iscrollview,
        newContent = "";
    for (i=0; i<3; i+=1) { 
      newContent += "<li>Pullup-generated row " + (++pullUpGeneratedCount) + "</li>";
      }
    $(listSelector).append(newContent).listview("refresh");
  
    // The refresh is a bit different for the pull-up, because I want to demonstrate the use
    // of refresh() callbacks. The refresh() function has optional pre and post-refresh callbacks.
    // Here, I use a post-refresh callback to do a timed scroll to the bottom of the list
    // after the new elements are added. The scroller will smoothly scroll to the bottom over
    // a 400mSec period. It's important to use the refresh() callback to insure that the scroll
    // isn't started until the scroller has first been refreshed.
    iscrollview.refresh(null, null,
      $.proxy(function afterRefreshCallback(iscrollview) { 
        this.scrollToElement(lastItemSelector, 400); 
        }, iscrollview) ); 
    }
  
  // This is the callback that is called when the user has completed the pull-down gesture.
  // Your code should initiate retrieving data from a server, local database, etc.
  // Typically, you will call some function like jQuery.ajax() that will make a callback
  // once data has been retrieved.
  //
  // For demo, we just use timeout to simulate the time required to complete the operation.
  function onPullDown (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() {
      gotPullDownData(event, data);
      }, 
      1500); 
    }    

  // Called when the user completes the pull-up gesture.
  function onPullUp (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() {
      gotPullUpData(event, data);
      }, 
      1500); 
    }    
  
  // Set-up jQuery event callbacks
  $(document).delegate("div.pull-demo-page", "pageinit", 
    function bindPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown,
      iscroll_onpullup   : onPullUp
      } );
    } );  

  }(jQuery));

//-------------------------------------------------------
// Pull-down and Pull-up callbacks for "Short Pull" page
//-------------------------------------------------------

(function shortPullPagePullImplementation($) { 
  "use strict";
  var pullDownGeneratedCount = 0,
    pullUpGeneratedCount = 0,
    listSelector = "div.short-pull-demo-page ul.ui-listview",
    lastItemSelector = listSelector + " > li:last-child";
      
  function gotPullDownData(event, data) {
    var i,
        newContent = "";
    for (i=0; i<3; i+=1) {
      newContent = "<li>Pulldown-generated row " + (++pullDownGeneratedCount) + "</li>" + newContent;
      }
    $(listSelector).prepend(newContent).listview("refresh");
    data.iscrollview.refresh();
    }

  function gotPullUpData(event, data) {
    var i,
        iscrollview = data.iscrollview,
        newContent = "";
    for (i=0; i<3; i+=1) {
      newContent += "<li>Pullup-generated row " + (++pullUpGeneratedCount) + "</li>";
      }
    $(listSelector).append(newContent).listview("refresh");  
    iscrollview.refresh(null, null,
      $.proxy(function afterRefreshCallback() { 
        this.scrollToElement(lastItemSelector, 400);
        }, iscrollview) );
    }
  
  function onPullDown (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() { 
      gotPullDownData(event, data); }, 
      1500); }  
  
  function onPullUp (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() { 
      gotPullUpData(event, data);   
      }, 1500); }   
  
  $(document).delegate("div.short-pull-demo-page", "pageinit", 
    function bindShortPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown,
      iscroll_onpullup   : onPullUp
      } );
    }); 
 
  }(jQuery));
