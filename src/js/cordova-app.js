var cordovaApp = {
  f7: null,
  /*
  This method hides splashscreen after 2 seconds
  */
  handleSplashscreen: function() {
    var f7 = cordovaApp.f7;
    if (!window.navigator.splashscreen || f7.device.electron) return;
    setTimeout(() => {
      window.navigator.splashscreen.hide();
    }, 0);
  },
  /*
  This method prevents back button tap to exit from app on android.
  In case there is an opened modal it will close that modal instead.
  In case there is a current view with navigation history, it will go back instead.
  */
  handleAndroidBackButton: function () {
    var f7 = cordovaApp.f7;
    const $ = f7.$;
    if (f7.device.electron) return;

    document.addEventListener('backbutton', function (e) {
      if ($('.actions-modal.modal-in').length) {
        f7.actions.close('.actions-modal.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.dialog.modal-in').length) {
        f7.dialog.close('.dialog.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.sheet-modal.modal-in').length) {
        f7.sheet.close('.sheet-modal.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.popover.modal-in').length) {
        f7.popover.close('.popover.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.popup.modal-in').length) {
        if ($('.popup.modal-in>.view').length) {
          const currentView = f7.views.get('.popup.modal-in>.view');
          if (currentView && currentView.router && currentView.router.history.length > 1) {
            currentView.router.back();
            e.preventDefault();
            return false;
          }
        }
        f7.popup.close('.popup.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.login-screen.modal-in').length) {
        f7.loginScreen.close('.login-screen.modal-in');
        e.preventDefault();
        return false;
      }

      if ($('.page-current .searchbar-enabled').length) {
        f7.searchbar.disable('.page-current .searchbar-enabled');
        e.preventDefault();
        return false;
      }

      if ($('.page-current .card-expandable.card-opened').length) {
        f7.card.close('.page-current .card-expandable.card-opened');
        e.preventDefault();
        return false;
      }

      const currentView = f7.views.current;
      if (currentView && currentView.router && currentView.router.history.length > 1) {
        currentView.router.back();
        e.preventDefault();
        return false;
      }

      if ($('.panel.panel-in').length) {
        f7.panel.close('.panel.panel-in');
        e.preventDefault();
        return false;
      }
    }, false);
  },
  /*
  This method does the following:
    - provides cross-platform view "shrinking" on keyboard open/close
    - hides keyboard accessory bar for all inputs except where it required
  */

    receivedEvent: function() {
    //START ONESIGNAL CODE
    //Remove this method to stop OneSignal Debugging 
    //window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

    var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal.startInit("2b8f51fa-8098-49d8-a9a5-a36441f41907")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(
        window.plugins.OneSignal.OSInFocusDisplayOption.Notification
      )
      .endInit();

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
    //END ONESIGNAL CODE
    },
  handleKeyboard: function () {
    var f7 = cordovaApp.f7;
    if (!window.Keyboard || !window.Keyboard.shrinkView || f7.device.electron) return;
    var $ = f7.$;
    window.Keyboard.shrinkView(false);
    window.Keyboard.disableScrollingInShrinkView(true);
    window.Keyboard.hideFormAccessoryBar(true);
    window.addEventListener('keyboardWillShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidHide', () => {
      if (document.activeElement && $(document.activeElement).parents('.messagebar').length) {
        return;
      }
      window.Keyboard.hideFormAccessoryBar(false);
    });
    window.addEventListener('keyboardHeightWillChange', (event) => {
      var keyboardHeight = event.keyboardHeight;
      if (keyboardHeight > 0) {
        // Keyboard is going to be opened
        document.body.style.height = `calc(100% - ${keyboardHeight}px)`;
        $('html').addClass('device-with-keyboard');
      } else {
        // Keyboard is going to be closed
        document.body.style.height = '';
        $('html').removeClass('device-with-keyboard');
      }

    });
    $(document).on('touchstart', 'input, textarea, select', function (e) {
      var nodeName = e.target.nodeName.toLowerCase();
      var type = e.target.type;
      var showForTypes = ['datetime-local', 'time', 'date', 'datetime'];
      if (nodeName === 'select' || showForTypes.indexOf(type) >= 0) {
        window.Keyboard.hideFormAccessoryBar(false);
      } else {
        window.Keyboard.hideFormAccessoryBar(true);
      }
    }, true);
  },
  init: function (f7) {
    // Save f7 instance
    cordovaApp.f7 = f7;

    // Handle Android back button
    cordovaApp.handleAndroidBackButton();

    // Handle Splash Screen
    cordovaApp.handleSplashscreen();

    // Handle Keyboard
    cordovaApp.handleKeyboard();
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
    cordovaApp.receivedEvent("deviceready");
    window.plugins.OneSignal.getPermissionSubscriptionState(function(status) {
      if (status.permissionStatus.hasPrompted == false) {
        OneSignal.addTrigger("prompt_ios", "true");
      }
    });
  },
};

export default cordovaApp;
