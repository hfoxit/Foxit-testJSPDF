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
		for(var i in app.media)
		{
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
	app.alert("runtimeHighlight is "+ app.runtimeHighlight);
};

var testRuntimeHighlightColor = function() {
	app.alert("runtimeHighlightColor is " + app.runtimeHighlightColor);
};

var testViewerType = function() {
	app.alert("viewer type is "+app.viewerType);
};

var testViewerVariation = function() {
	app.alert("viewer variation is: " + app.viwerVariation);
};

var testViewerVersion = function() {
	app.alert("viewer version is: " + app.viewerVersion);
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
    viewerVersion: testViewerVersion
};
