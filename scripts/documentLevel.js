function Init() {}

var testAppVersion = function() {
    app.alert("appVersion is: " + app.appVersion);
};

var testActiveDocs = function() {
    var d = app.activeDocs;
    var str = "";
    for (var i = 0; i < d.length; i++) {
        str += "activeDoc title: ";
        str += d[i].title;
        str += "\n";
    }
    app.alert(str);
};

var testAddressBookAvailable = function() {
    if (app.adddressBookAvailable)
        app.alert("address book is available");
    else
        app.alert("address book is not available");
};

var testFormsVersion = function() {
    app.alert("forms version is: " + app.formsVersion);
};

var testFs = function() {
    if (app.fs.isFullScreen)
        app.alert("is full screen");
    else
        app.alert("is not fullscreen");
};

var testFullscreen = function() {
    app.alert("if fullscreen is: " + app.fullscreen);
};

var testLanguage = function() {
    app.alert("language is: " + app.language);
};

var testMedia = function() {
    var mediaReport = "";
    for (var i in app.media) {
        mediaReport += i;
        mediaReport += " : ";
        mediaReport += app.media[i];
        mediaReport += "\n";
    }
    app.alert("media is:\n" + mediaReport);
};

var testPlatform = function() {
    app.alert("platform is: " + app.platform);
};

var testPlugins = function() {
    var plugins = app.plugIns;
    app.alert("has " + plugins.length + " plugins");
};

var testPrinterNames = function() {
    app.alert("has " + app.printerNames.length + " printers");
};

var testRuntimeHighlight = function() {
    app.alert("runtimeHighlight is " + app.runtimeHighlight);
};

var testRuntimeHighlightColor = function() {
    app.alert("runtimeHighlightColor is " + app.runtimeHighlightColor);
};

var testViewerType = function() {
    app.alert("viewer type is " + app.viewerType);
};

var testViewerVariation = function() {
    app.alert("viewer variation is: " + app.viwerVariation);
};

var testViewerVersion = function() {
    app.alert("viewer version is: " + app.viewerVersion);
};

var testAlert = function() {

};

var testBeep = function() {

};

var testBrowseForDoc = function() {

};

var testClearInterval = function() {

};

var testClearTimeOut = function() {

};

var testExecDialog = function() {

};

var testExecMenuItem = function() {

};

var testFindComponent = function() {

};

var testGoBack = function() {

};

var testGoForward = function() {

};

var testLaunchURL = function() {

};

var testMailMsg = function() {

};

var testNewDoc = function() {

};

var testNewFDF = function() {

};

var testOpenDoc = function() {

};

var testOpenFDF = function() {

};

var testPopUpMenu = function() {

};

var testPopUpMenuEx = function() {

};

var testResponse = function() {

};

var testSetInterval = function() {

};

var testSetTimeOut = function() {

};

var functions = {
    appVersion: testAppVersion,
    activeDocs: testActiveDocs,
    addressBookAvailable: testAddressBookAvailable,
    formsVersion: testFormsVersion,
    fs: testFs,
    fullscreen: testFullscreen,
    language: testLanguage,
    media: testMedia,
    platform: testPlatform,
    plugins: testPlugins,
    printerNames: testPrinterNames,
    runtimeHighlight: testRuntimeHighlight,
    runtimeHighlightColor: testRuntimeHighlightColor,
    viewerType: testViewerType,
    viewerVariation: testViewerVariation,
    viewerVersion: testViewerVersion,
    alert: testAlert,
    beep: testBeep,
    browseForDoc: testBrowseForDoc,
    clearInterval: testClearInterval,
    clearTimeOut: testClearTimeOut,
    execDialog: testExecDialog,
    execMenuItem: testExecMenuItem,
    findComponent: testFindComponent,
    goBack: testGoBack,
    goForward: testGoForward,
    launchURL: testLaunchURL,
    mailMsg: testMailMsg,
    newDoc: testNewDoc,
    newFDF: testNewFDF,
    openDoc: testOpenDoc,
    openFDF: testOpenFDF,
    popUpMenu: testPopUpMenu,
    popUpMenuEx: testPopUpMenuEx,
    response: testResponse,
    setInterval: testSetInterval,
    setTimeOut: testSetTimeOut
};
