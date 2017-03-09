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
    app.alert("execDialog");
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

var testAuthor = function() {

};

var testBookmarkRoot = function() {

};

var testCalculate = function() {

};

var testCreationDate = function() {

};

var testCreator = function() {

};

var testDataObjects = function() {

};

var testDelay = function() {

};

var testDirty = function() {

};

var testDocumentFileName = function() {

};

var testDynamicXFAForm = function() {

};

var testExternal = function() {

};

var testFilesize = function() {

};

var testIcons = function() {

};

var testInfo = function() {

};

var testKeywords = function() {

};

var testLayout = function() {

};

var testDocMedia = function() {

};

var testModDate = function() {

};

var testMouseX = function() {

};

var testMouseY = function() {

};

var testNumFields = function() {

};

var testNumPages = function() {

};

var testPageNum = function() {

};

var testPath = function() {

};

var testProducer = function() {

};

var testSecurityHandler = function() {

};

var testSubject = function() {

};

var testTemplates = function() {

};

var testTitle = function() {

};

var testURL = function() {

};

var testZoom = function() {

};

var testZoomType = function() {

};

var testAddAnnot = function() {

};

var testAddField = function() {

};

var testAddIcon = function() {

};

var testAddLink = function() {

};

var testCalculateNow = function() {

};

var testCloseDoc = function() {

};

var testCreateDataObject = function() {

};

var testCreateTemplate = function() {

};

var testDeletePages = function() {

};

var testExportAsFDF = function() {

};

var testExportAsText = function() {

};

var testExportAsXFDF = function() {

};

var testExportDataObject = function() {

};

var testExtractPages = function() {

};

var testGetAnnot = function() {

};

var testGetAnnot3D = function() {

};

var testGetAnnots = function() {

};

var testGetAnnots3D = function() {

};

var testGetDataObject = function() {

};

var testGetField = function() {

};

var testGetIcon = function() {

};

var testGetLinks = function() {

};

var testGetNthFieldName = function() {

};

var testGetOCGs = function() {

};

var testGetPageBox = function() {

};

var testGetPageNthWord = function() {

};

var testGetPageNthWordQuads = function() {

};

var testGetPageNumWords = function() {

};

var testGetPageRotation = function() {

};

var testGetPageTransition = function() {

};

var testGetPrintParams = function() {

};

var testGetTemplate = function() {

};

var testGetURL = function() {

};

var testGotoNamedDest = function() {

};

var testImportAnFDF = function() {

};

var testImportAnXFDF = function() {

};

var testImportDataObject = function() {

};

var testImportTextData = function() {

};

var testInsertPages = function() {

};

var testMailDoc = function() {

};

var testMailForm = function() {

};

var testPrint = function() {

};

var testRemoveDataObject = function() {

};

var testRemoveField = function() {

};

var testRemoveIcon = function() {

};

var testReplacePages = function() {

};

var testResetForm = function() {

};

var testSaveAs = function() {

};

var testScroll = function() {

};

var testSpawnPageFromTemplate = function() {

};

var testSubmitForm = function() {

};

var testAlignment = function() {

};

var testBorderStyle = function() {

};

var testButtonAlignX = function() {

};

var testButtonAlignY = function() {

};

var testButtonFitBounds = function() {

};

var testButtonPosition = function() {

};

var testButtonScaleHow = function() {

};

var testButtonScaleWhen = function() {

};

var testCalcOrderIndex = function() {

};

var testCharLimit = function() {

};

var testComb = function() {

};

var testCommitOnSelChange = function() {

};

var testCurrentValueIndices = function() {

};

var testDefaultStyle = function() {

};

var testDefaultValue = function() {

};

var testFieldDelay = function() {

};

var testDisplay = function() {

};

var testDoc = function() {

};

var testDoNotScroll = function() {

};

var testDoNotSpellCheck = function() {

};

var testEditable = function() {

};

var testExportValues = function() {

};

var testFileSelect = function() {

};

var testFillColor = function() {

};

var testHidden = function() {

};

var testHighlight = function() {

};

var testLineWidth = function() {

};

var testMultiline = function() {

};

var testMultipleSelection = function() {

};

var testName = function() {

};

var testNumItems = function() {

};

var testPage = function() {

};

var testPassword = function() {

};

var testPrint = function() {

};

var testRadiosInUnixon = function() {

};

var testReadonly = function() {

};

var testRect = function() {

};

var testRequired = function() {

};

var testRichText = function() {

};

var testRichValue = function() {

};

var testRotation = function() {

};

var testStrokeColor = function() {

};

var testStyle = function() {

};

var testSubmitName = function() {

};

var testTextColor = function() {

};

var testTextFont = function() {

};

var testTextSize = function() {

};

var testType = function() {

};

var testUserName = function() {

};

var testValue = function() {

};

var testValueAsString = function() {

};

var testBrowseForFileToSubmit = function() {

};

var testButtonGetCaption = function() {

};

var testButtonGetIcon = function() {

};

var testButtonImportIcon = function() {

};

var testButtonSetCaption = function() {

};

var testButtonSetIcon = function() {

};

var testCheckThisBox = function() {

};

var testClearItems = function() {

};

var testDefaultIsChecked = function() {

};

var testDeleteItemAt = function() {

};

var testGetArray = function() {

};

var testGetItemAt = function() {

};

var testGetLock = function() {

};

var testInsertItemAt = function() {

};

var testIsBoxChecked = function() {

};

var testIsDefaultChecked = function() {

};

var testSetAction = function() {

};

var testSetFocus = function() {

};

var testSetItems = function() {

};

var testSetLock = function() {

};

var testSignatureGetModifications = function() {

};

var testSignatureSetSeedValue = function() {

};

var testSignatureInfo = function() {

};

var testSignatureSetSeedValue = function() {

};

var testSignatureSign = function() {

};

var testSignatureValidate = function() {

};

var testCoporation = function() {

};

var testEmail = function() {

};

var testLoginName = function() {

};

var testIdentityName = function() {

};

var testSetPersistent = function() {

};

var testTemplateHidden = function() {

};

var testTemplateName = function() {

};

var testSpawn = function() {

};

var testPrintf = function() {

};

var testPrintx = function() {

};

var testScand = function() {

};

var testPrintd = function() {

};

var testAFDate_Format = function() {

};

var testAFDate_FormatEx = function() {

};

var testAFDate_Keystroke = function() {

};

var testAFDate_KeystrokeEx = function() {

};

var testAFExtractNums = function() {

};

var testAFMakeNumber = function() {

};

var testAFMergeChange = function() {

};

var testAFNumber_Format = function() {

};

var testAFNumber_Keystroke = function() {

};

var testAFParseDateEx = function() {

};

var testAFPercent_Format = function() {

};

var testAFPercent_Keystroke = function() {

};

var testAFRange_Validate = function() {

};

var testAFSimple = function() {

};

var testAFSimple_Calculate = function() {

};

var testAFSpecial_Keystroke = function() {

};

var testAFSpecial_KeystrokeEx = function() {

};

var testAFTime_Format = function() {

};

var testAFTime_FormatEx = function() {

};

var testAFTime_Keystroke = function() {

};

var testClear = function() {

};

var testHide = function() {

};

var testPrintln = function() {

};

var testShow = function() {

};

var testTransparent = function() {

};

var testBlack = function() {

};

var testWhite = function() {

};

var testRed = function() {

};

var testGreen = function() {

};

var testBlue = function() {

};

var testCyan = function() {

};

var testMagenta = function() {

};

var testYellow = function() {

};

var testDkGray = function() {

};

var testGray = function() {

};

var testLtGray = function() {

};

var testEqual = function(){

};

var testConvert = function(){

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
    setTimeOut: testSetTimeOut,
    author: testAuthor,
    bookmarkRoot: testBookmarkRoot,
    calculate: testCalculate,
    creationDate: testCreationDate,
    creator: testCreator,
    dataObjects: testDataObjects,
    delay: testDelay,
    dirty: testDirty,
    documentFileName: testDocumentFileName,
    dynamicXFAForm: testDynamicXFAForm,
    external: testExternal,
    filesize: testFilesize,
    icons: testIcons,
    info: testInfo,
    keywords: testKeywords,
    layout: testLayout,
    docMedia: testDocMedia,
    modDate: testModDate,
    mouseX: testMouseX,
    mouseY: testMouseY,
    numFields: testNumFields,
    numPages: testNumPages,
    pageNum: testPageNum,
    path: testPath,
    producer: testProducer,
    securityHandler: testSecurityHandler,
    subject: testSubject,
    templates: testTemplates,
    title: testTitle,
    URL: testURL,
    zoom: testZoom,
    zoomType: testZoomType,
    addAnnot: testAddAnnot,
    addField: testAddField,
    addIcon: testAddIcon,
    addLink: testAddLink,
    calculateNow: testCalculateNow,
    closeDoc: testCloseDoc,
    createDataObject: testCreateDataObject,
    createTemplate: testCreateTemplate,
    deletePages: testDeletePages,
    exportAsFDF: testExportAsFDF,
    exportAsText: testExportAsText,
    exportAsXFDF: testExportAsXFDF,
    exportDataObject: testExportDataObject,
    extractPages: testExtractPages,
    getAnnot: testGetAnnot,
    getAnnot3D: testGetAnnot3D,
    getAnnots: testGetAnnots,
    getAnnots3D: testGetAnnots3D,
    getDataObject: testGetDataObject,
    getField: testGetField,
    getIcon: testGetIcon,
    getLinks: testGetLinks,
    getNthFieldName: testGetNthFieldName,
    getOCGs: testGetOCGs,
    getPageBox: testGetPageBox,
    getPageNthWord: testGetPageNthWord,
    getPageNthWordQuads: testGetPageNthWordQuads,
    getPageNumWords: testGetPageNumWords,
    getPageRotation: testGetPageRotation,
    getPageTransition: testGetPageTransition,
    getPrintParams: testGetPrintParams,
    getTemplate: testGetTemplate,
    getURL: testGetURL,
    gotoNamedDest: testGotoNamedDest,
    importAnFDF: testImportAnFDF,
    importAnXFDF: testImportAnXFDF,
    importDataObject: testImportDataObject,
    importTextData: testImportTextData,
    insertPages: testInsertPages,
    mailDoc: testMailDoc,
    mailForm: testMailForm,
    print: testPrint,
    removeDataObject: testRemoveDataObject,
    removeField: testRemoveField,
    removeIcon: testRemoveIcon,
    replacePages: testReplacePages,
    resetForm: testResetForm,
    saveAs: testSaveAs,
    scroll: testScroll,
    spawnPageFromTemplate: testSpawnPageFromTemplate,
    submitForm: testSubmitForm,
    alignment: testAlignment,
    borderStyle: testBorderStyle,
    buttonAlignX: testButtonAlignX,
    buttonAlignY: testButtonAlignY,
    buttonFitBounds: testButtonFitBounds,
    buttonPosition: testButtonPosition,
    buttonScaleHow: testButtonScaleHow,
    buttonScaleWhen: testButtonScaleWhen,
    calcOrderIndex: testCalcOrderIndex,
    charLimit: testCharLimit,
    comb: testComb,
    commitOnSelChange: testCommitOnSelChange,
    currentValueIndices: testCurrentValueIndices,
    defaultStyle: testDefaultStyle,
    defaultValue: testDefaultValue,
    fieldDelay: testFieldDelay,
    display: testDisplay,
    doc: testDoc,
    doNotScroll: testDoNotScroll,
    doNotSpellCheck: testDoNotSpellCheck,
    editable: testEditable,
    exportValues: testExportValues,
    fileSelect: testFileSelect,
    fillColor: testFillColor,
    hidden: testHidden,
    highlight: testHighlight,
    lineWidth: testLineWidth,
    multiline: testMultiline,
    multipleSelection: testMultipleSelection,
    name: testName,
    numItems: testNumItems,
    page: testPage,
    password: testPassword,
    print: testPrint,
    radiosInUnixon: testRadiosInUnixon,
    readonly: testReadonly,
    rect: testRect,
    required: testRequired,
    richText: testRichText,
    richValue: testRichValue,
    rotation: testRotation,
    strokeColor: testStrokeColor,
    style: testStyle,
    submitName: testSubmitName,
    textColor: testTextColor,
    textFont: testTextFont,
    textSize: testTextSize,
    type: testType,
    userName: testUserName,
    value: testValue,
    valueAsString: testValueAsString,
    browseForFileToSubmit: testBrowseForFileToSubmit,
    buttonGetCaption: testButtonGetCaption,
    buttonGetIcon: testButtonGetIcon,
    buttonImportIcon: testButtonImportIcon,
    buttonSetCaption: testButtonSetCaption,
    buttonSetIcon: testButtonSetIcon,
    checkThisBox: testCheckThisBox,
    clearItems: testClearItems,
    defaultIsChecked: testDefaultIsChecked,
    deleteItemAt: testDeleteItemAt,
    getArray: testGetArray,
    getItemAt: testGetItemAt,
    getLock: testGetLock,
    insertItemAt: testInsertItemAt,
    isBoxChecked: testIsBoxChecked,
    isDefaultChecked: testIsDefaultChecked,
    setAction: testSetAction,
    setFocus: testSetFocus,
    setItems: testSetItems,
    setLock: testSetLock,
    signatureGetModifications: testSignatureGetModifications,
    signatureSetSeedValue: testSignatureSetSeedValue,
    signatureInfo: testSignatureInfo,
    signatureSetSeedValue: testSignatureSetSeedValue,
    signatureSign: testSignatureSign,
    signatureValidate: testSignatureValidate,
    coporation: testCoporation,
    email: testEmail,
    loginName: testLoginName,
    identityName: testIdentityName,
    setPersistent: testSetPersistent,
    templateHidden: testTemplateHidden,
    templateName: testTemplateName,
    spawn: testSpawn,
    printf: testPrintf,
    printx: testPrintx,
    scand: testScand,
    printd: testPrintd,
    AFDate_Format: testAFDate_Format,
    AFDate_FormatEx: testAFDate_FormatEx,
    AFDate_Keystroke: testAFDate_Keystroke,
    AFDate_KeystrokeEx: testAFDate_KeystrokeEx,
    AFExtractNums: testAFExtractNums,
    AFMakeNumber: testAFMakeNumber,
    AFMergeChange: testAFMergeChange,
    AFNumber_Format: testAFNumber_Format,
    AFNumber_Keystroke: testAFNumber_Keystroke,
    AFParseDateEx: testAFParseDateEx,
    AFPercent_Format: testAFPercent_Format,
    AFPercent_Keystroke: testAFPercent_Keystroke,
    AFRange_Validate: testAFRange_Validate,
    AFSimple: testAFSimple,
    AFSimple_Calculate: testAFSimple_Calculate,
    AFSpecial_Keystroke: testAFSpecial_Keystroke,
    AFSpecial_KeystrokeEx: testAFSpecial_KeystrokeEx,
    AFTime_Format: testAFTime_Format,
    AFTime_FormatEx: testAFTime_FormatEx,
    AFTime_Keystroke: testAFTime_Keystroke,
    clear: testClear,
    hide: testHide,
    println: testPrintln,
    show: testShow,
    transparent: testTransparent,
    black: testBlack,
    white: testWhite,
    red: testRed,
    green: testGreen,
    blue: testBlue,
    cyan: testCyan,
    magenta: testMagenta,
    yellow: testYellow,
    dkGray: testDkGray,
    gray: testGray,
    ltGray: testLtGray,
    equal: testEqual,
    convert: testConvert
};
