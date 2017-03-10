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
    var oMyCheckbox = {
        cMsg: "Care to see?",
        bInitialValue: true,
        bAfterValue: true
    };

    app.alert({
        cMsg: "abcMsg",
        cTitle: "abcTitle",
        oCheckbox: oMyCheckbox
    });
};

var testBeep = function() {
    function sound() {
        app.beep(1);
    }
    timeout = app.setTimeOut("sound()", 1000);

    try {
        app.clearTimeOut(timeout);
    } catch (e) {

    }
};

var testBrowseForDoc = function() {

};

var testClearInterval = function() {
    testBeep();
};

var testClearTimeOut = function() {
    testBeep();
};

var testExecDialog = function() {
    var dialog1 = {
        initialize: function(dialog) {
            // Create a static text containing the current date.
            var todayDate = dialog.store()["date"];
            todayDate = "Date: " + util.printd("mmmm dd, yyyy", new Date());
            dialog.load({
                "date": todayDate
            });
        },
        commit: function(dialog) { // called when OK pressed
            var results = dialog.store();
            // Now do something with the data collected, for example,
            console.println("Your name is " + results["fnam"] +
                " " + results["lnam"]);
        },
        description: {
            name: "Personal Data", // Dialog box title
            align_children: "align_left",
            width: 350,
            height: 200,
            elements: [{
                    type: "cluster",
                    name: "Your Name",
                    align_children: "align_left",
                    elements: [{
                            type: "view",
                            align_children: "align_row",
                            elements: [{
                                    type: "static_text",
                                    name: "First Name: "
                                },
                                {
                                    item_id: "fnam",
                                    type: "edit_text",
                                    alignment: "align_fill",
                                    width: 300,
                                    height: 20
                                }
                            ]
                        },
                        {
                            type: "view",
                            align_children: "align_row",
                            elements: [{
                                    type: "static_text",
                                    name: "Last Name: "
                                },
                                {
                                    item_id: "lnam",
                                    type: "edit_text",
                                    alignment: "align_fill",
                                    width: 300,
                                    height: 20
                                }
                            ]
                        },
                        {
                            type: "static_text",
                            name: "Date: ",
                            char_width: 25,
                            item_id: "date"
                        },
                    ]
                },
                {
                    alignment: "align_right",
                    type: "ok_cancel",
                    ok_name: "Ok",
                    cancel_name: "Cancel"
                }
            ]
        }
    };

    app.execDialog(dialog1);
};

var testExecMenuItem = function() {
    app.execMenuItem("Open");
};

var testFindComponent = function() {
    app.alert("undocumented: how to test it?");
};

var testGoBack = function() {
    app.goBack();
};

var testGoForward = function() {
    app.goForward();
};

var testLaunchURL = function() {
    app.launchURL("http://www.google.com", true);
};

var testMailMsg = function() {
    app.mailMsg(false, "hong_zhang@foxitsoftware.com", "", "", "This is the subject", "This is the body");
};

var testNewDoc = function() {
    var myDoc = app.newDoc();
    myDoc.closeDoc(true);
};

var testNewFDF = function() {
    var fdf = app.newFDF();
    var oEntity = {
        firstName: "Fred",
        lastName: "Smith",
        fullName: "Fred Smith"
    };
    fdf.addContact(oEntity);
    fdf.save("C:\\Users\\Hong\\Downloads\\myFile.fdf");
};

var testOpenDoc = function() {
    var myDoc0 = app.openDoc("C:\\test\ doc\\formcont.txt");
    var myDoc1 = app.openDoc("C:\\test\ doc\\FoxitForm.pdf");
    var myDoc2 = app.openDoc("C:\\Users\\Hong\\Pictures\\workspace.PNG");
};

var testOpenFDF = function() {
    app.openFDF("C:\\Users\\Hong\\Downloads\\FoxitForm.fdf");
};

var testPopUpMenu = function() {
    var cChoice = app.popUpMenu("Introduction", "-", "Chapter 1", ["Chapter 2", "Chapter 2 Start", "Chapter 2 Middle", ["Chapter 2 End", "The End"]]);
};

var testPopUpMenuEx = function() {
    var cChoice = app.popUpMenuEx({
        cName: "Item 1",
        bMarked: true,
        bEnabled: false
    }, {
        cName: "-"
    }, {
        cName: "Item 2",
        oSubMenu: [{
                cName: "Item 2, Submenu 1"
            },
            {
                cName: "Item 2, Submenu 2",
                oSubMenu: {
                    cName: "Item 2, Submenu 2, Subsubmenu 1",
                    cReturn: "0"
                }
            }
        ]
    }, {
        cName: "Item 3"
    }, {
        cName: "Item 4",
        bMarked: true,
        cReturn: "1"
    })
};

var testResponse = function() {
    var cResponse = app.response({
        cQuestion: "How are you today?",
        cTitle: "Your Health Status",
        cDefault: "Fine",
        bPassword: true,
        cLabel: "Response:"
    });
};

var testSetInterval = function() {
    testBeep();
};

var testSetTimeOut = function() {
    testBeep();
};

function executeTest(object, property) //allowing incorrect syntax
{
    var message = object + property + " test starts\r\n";
    message += object[property] + "\r\n";
    object[property] = "FoxitTest";
    message += object[property] + "\r\n";
    message += object + property + "test ends\r\n";
    app.alert(message);
}

var testAuthor = function() {
    executeTest(this, "author");
};

var testBookmarkRoot = function() {
    executeTest(this, "bookmarkRoot");
};

var testCalculate = function() {

};

var testCreationDate = function() {
    executeTest(this, "creationDate");
};

var testCreator = function() {
    executeTest(this, "creator");
};

var testDataObjects = function() {
    executeTest(this, "dataObjects");
};

var testDelay = function() {
    var nButton = app.alert({
        cMsg: "delay = ? (result in page 6's checkbox)",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        var f = getField("CheckBox0");
        this.delay = true;
        f.borderStyle = border.d;
    }

    if (nButton = 7 || nButton == 3) {
        this.delay = false;
    }

    //phantom -- yes 6 no 7 cancel 2
    //expected -- yes4 no3 cancel2
};

var testDirty = function() {
    var f = this.getField("TextField0");
    f.value = "You have made too many mistakes, I’m resetting the form. " +
        "Start over, this time follow the directions!";
    this.resetForm();
    this.dirty = false;
};

var testDocumentFileName = function() {
    executeTest(this, "documentFileName");
};

var testDynamicXFAForm = function() {
    app.alert("dynamicXFAForm: " + dynamicXFAForm);
};

var testExternal = function() {
    app.alert("external: " + external);
};

var testFilesize = function() {
    executeTest(this, "fileSize");
};

var testIcons = function() {
    var msg = "";
    msg += "icons info: \r\n";
    msg += icons.length + "\r\n";
    for (var i = 0; i < icons.length; i++) {
        msg += "\r\n";
        for (var j in icons[i])
            msg += icons[i][j] + "\r\n";
    }

    app.alert(msg);
};

var testInfo = function() {
    app.alert("info: " + this.info.Title + " " + this.info.Author);
};

var testKeywords = function() {
    var msg = "";
    msg += "keyowords: \r\n";
    for (var i in this.keywords) {
        msg += i + ": " + this.keywords[i] + "\r\n";
    }
    app.alert(msg);
};

var testLayout = function() {
    app.alert(this.layout);
};

var testDocMedia = function() {
    var annots = this.media.getAnnots({
        nPage: 0
    });
    app.alert(annots.length);
};

var testModDate = function() {
    executeTest(this, "modDate");
};

var testMouseX = function() {
    executeTest(this, "mouseX");
};

var testMouseY = function() {
    executeTest(this, "mouseY");
};

var testNumFields = function() {
    executeTest(this, "numFields");
};

var testNumPages = function() {
    executeTest(this, "numPages");
};

var testPageNum = function() {
    executeTest(this, "pageNum");
};

var testPath = function() {
    executeTest(this, "path");
};

var testProducer = function() {
    executeTest(this, "producer");
};

var testSecurityHandler = function() {
    app.alert(this.securityHandler != null ?
        "This document is encrypted with " + this.securityHandler +
        " security." : "This document is unencrypted.");
};

var testSubject = function() {
    executeTest(this, "subject");
};

var testTemplates = function() {
    var t = this.templates;
    var msg = "";
    for (var i = 0; i < t.length; i++) {
        var state = (t[i].hidden) ? "visible" : "hidden"
        msg += ("Template: \"" + t[i].name +
            "\", current state: " + state) + "\r\n";
    }
    app.alert(msg);
};

var testTitle = function() {
    executeTest(this, "title");
};

var testURL = function() {
    executeTest(this, "URL");
};

var testZoom = function() {
    var nButton = app.alert({
        cMsg: "yes for zooming in no for zooming out",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        this.zoom *= 2;
    }

    if (nButton = 7 || nButton == 3) {
        this.zoom /= 2;
    }

};

var testZoomType = function() {
    executeTest(this, "zoomType");
};

var testAddAnnot = function() {
    var annot = this.addAnnot({
        page: 5,
        type: "Square",
        rect: [0, 0, 100, 100],
        name: "OnMarketShare",
        author: "A. C. Robat",
        contents: "This section needs revision."
    });
};

var testAddField = function() {
    var inch = 72;
    var aRect = this.getPageBox({
        nPage: 5
    });
    aRect[0] += .5 * inch; // from upper left hand corner of page.
    aRect[2] = aRect[0] + .5 * inch; // Make it .5 inch wide
    aRect[1] -= .5 * inch;
    aRect[3] = aRect[1] - 24;
    console.println(aRect[0] + ", " + aRect[1] + ", " + aRect[2] + ", " + aRect[3]);
    var f = this.addField("NextPage", "button", 5, aRect);
};

var testAddIcon = function() {
    var f = this.getField("pb1");
    this.addIcon("myButtonIcon", f.buttonGetIcon());

    var b = this.getField("pb2");
    var i = this.getIcon("myButtonIcon");
    b.buttonSetIcon(i);
};

var testAddLink = function() {
    var linkWidth = 36;
    var linkHeight = 18;
    var linkRect = [0, linkHeight, linkWidth, 0];
    var lk = this.addLink(5, linkRect);
    lk.setAction("this.getURL('http://www.google.com');");
};

var testCalculateNow = function() {

};

var testCloseDoc = function() {
    var myDoc = app.newDoc();
    myDoc.closeDoc(true);
};

var testCreateDataObject = function() {
    this.createDataObject("MyData", "This is some data.");
    var d = this.getDataObject("MyData");
    for (var i in d) app.alert("MyData." + i + "=" + d[i]);
};

var testCreateTemplate = function() {
    this.newPage();
    createTemplate({
        cName: "template" + (numPages - 1),
        nPage: numPages - 1
    });
    testTemplates();
};

var testDeletePages = function() {
    var nButton = app.alert({
        cMsg: "yes for adding pages no for deleting pages",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        newPage();
    }

    if (nButton = 7 || nButton == 3) {
        deletePages(numPages - 1);
    }

};

var testExportAsFDF = function() {
    this.exportAsFDF(true, true, null, true);
};

var testExportAsText = function() {
    var text = this.exportAsText();
    app.alert(text);
};

var testExportAsXFDF = function() {
    this.exportAsXFDF();
};

var testExportDataObject = function() {
    this.createDataObject("MyData", "This is some data.");
    this.exportDataObject("MyData");
};

var testExtractPages = function() {
    this.extractPages({
        nStart: 1,
        cPath: "C:\\test doc\\a.pdf"
    });
};

var testGetAnnot = function() {
    var annots = getAnnots({
        nPage: 5
    });
    if (annots == undefined || annots.length == 0)
        testAddAnnot();
    var ann = this.getAnnot(5, "OnMarketShare");
    app.alert("Found it! type: " + ann.type);
};

var testGetAnnot3D = function() {

};

var testGetAnnots = function() {
    var annots = this.getAnnots({
        nPage: 5
    });
    var msg = "";
    annots.forEach(function(element) {
        for (var property in element)
            msg += (element[property]) + "\r\n";
    });
    app.alert(msg);
};

var testGetAnnots3D = function() {
    //need to insert a 3d annot into the document
    var annots3d = this.getAnnots3D({
        nPage: 5
    });
    var msg = "";
    annots3d.forEach(function(element) {
        for (var property in element)
            msg += element[property] + "\r\n";
    });
    app.alert(msg);
};

var testGetDataObject = function() {
    this.createDataObject("MyData", "This is some data.");
    var d = this.getDataObject("MyData");
    var msg = "";
    for (var i in d) msg += "MyData." + i + "=" + d[i] + "\r\n";
    app.alert(msg);
};

var testGetField = function() {
    testAddIcon();
};

var testGetIcon = function() {
    testAddIcon();
};

var testGetLinks = function() {
    var numLinks = 0;
    for (var p = 0; p < this.numPages; p++) {
        var b = this.getPageBox("Crop", p);
        var l = this.getLinks(p, b);
        console.println("Number of Links on page " + p + " is " + l.length);
        numLinks += l.length;
    }
    if (numLinks == 0) {
        testAddLink();
        testGetLinks();
    } else
        app.alert("Number of Links in Document is " + numLinks);
};

var testGetNthFieldName = function() {
    var msg = "";
    for (var i = 0; i < this.numFields; i++)
        msg += ("Field[" + i + "] = " + this.getNthFieldName(i)) + "\r\n";
    app.alert(msg);
};

var testGetOCGs = function() {
    var ocgArray = getOCGs(0);
    app.alert(ocgArray.length);
};

var testGetPageBox = function() {
    testAddField();
};

var testGetPageNthWord = function() {
    var word = getPageNthWord({
        nPage: 5,
        nWord: 0
    });
    app.alert(word);
};

var testGetPageNthWordQuads = function() {
    var quads = getPageNthWordQuads({
        nPage: 5,
        nWord: 0
    });

    app.alert(quads);
};

var testGetPageNumWords = function() {
    var cnt = getPageNumWords(5);
    app.alert(cnt);
};

var testGetPageRotation = function() {
    var rotation = getPageRotation(5);
    app.alert(rotation);
};

var testGetPageTransition = function() {
    var transitionArray = this.getPageTransition();
    console.println(transitionArray[0]);
};

var testGetPrintParams = function() {
    var pp = this.getPrintParams();
    var msg = "";
    for (prop in pp)
        msg += (pp[prop]) + "\r\n";
    app.alert(msg);
};

var testGetTemplate = function() {
    this.newPage();
    createTemplate({
        cName: "template" + (numPages - 1),
        nPage: numPages - 1
    });
    var t = getTemplate("template" + (numPages - 1));

    app.alert("myTemplate exists and is " +
        eval('( t.hidden) ? "hidden" : "visible"') + ".");
};

var testGetURL = function() {
    this.getURL("http://www.adobe.com", true);
};

var testGotoNamedDest = function() {
    this.gotoNamedDest("foxit");
};

var testImportAnFDF = function() {
    this.importAnFDF("C:\\test\ doc\\foxitForm.FDF");
};

var testImportAnXFDF = function() {
    this.importAnXFDF("C:\\test\ doc\\foxitForm.FDF");
};

var testImportDataObject = function() {
    testGetDataObject();
};

var testImportTextData = function() {
    this.importTextData("C:\\test\ doc\\foxitForm.txt");
};

var testInsertPages = function() {
    this.insertPages({
        nPage: numPages - 1,
        cPath: "C:\\test\ doc\\foxitText.txt",
        nStart: 0
    });
};

var testMailDoc = function() {
    this.mailDoc(true);
};

var testMailForm = function() {
    this.mailForm(true);
};

var testPrint = function() {
    this.print(false, 1, 1);
};

var testRemoveDataObject = function() {
    testGetDataObject();
};

var testRemoveField = function() {

};

var testRemoveIcon = function() {
    testAddIcon();
};

var testReplacePages = function() {
    newPage();
    this.replacePages({
        nPage: numPages - 1,
        cPath: "C:\\test\ doc\\foxitForm.pdf",
        nStart: 0,
        nEnd: 0
    });
};

var testResetForm = function() {
    this.resetForm("TextField0");
};

var testSaveAs = function() {
    this.saveAs("C:\\test\ doc\\foxitText1.txt");
};

var testScroll = function() {
    this.scroll(0, 300);
};

var testSpawnPageFromTemplate = function() {
    spawnPageFromTemplate("foxit");
};

var testSubmitForm = function() {

};

var testAlignment = function() {
    var f = getField("TextField0");
    f.alignment = "right";
    app.alert("TextField0 now aligned to right");
};

var testBorderStyle = function() {
    var f = getField("TextField0");
    f.borderStyle = border.d;
    app.alert("TextField0 now border is dashed");
};

var testButtonAlignX = function() {
    var f = getField("pb1");
    f.buttonAlignX = 100;
    app.alert("pb1");
};

var testButtonAlignY = function() {
    var f = getField("pb1");
    f.buttonAlignY = 100;
    app.alert("pb1");
};

var testButtonFitBounds = function() {
    var f = getField("pb1");
    f.buttonFitBounds = true;
    app.alert("pb1");
};

var testButtonPosition = function() {
    var nButton = app.alert({
        cMsg: "yes for textOnly no for iconOnly",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        var f = getField("pb1");
        f.buttonPosition = position.textOnly;
    }

    if (nButton = 7 || nButton == 3) {
        var f = getField("pb1");
        f.buttonPosition = position.iconOnly;
    }

};

var testButtonScaleHow = function() {
    var f = getField("pb1");
    f.buttonScaleHow = scaleHow.anamorphic;
    app.alert("pb1");
};

var testButtonScaleWhen = function() {
    var f = getField("pb1");
    f.buttonScaleWhen = scaleWhen.Never;
    app.alert("pb1");
};

var testCalcOrderIndex = function() {
    app.alert(getField("TextField0").calcOrderIndex);
};

var testCharLimit = function() {
    app.alert(getField("TextField0").charLimit);
};

var testComb = function() {
    var nButton = app.alert({
        cMsg: "yes for comb no for no comb",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        getField("TextField0").comb = true;
    }

    if (nButton = 7 || nButton == 3) {
        getField("TextField0").comb = false;
    }
};

var testCommitOnSelChange = function() {
    var nButton = app.alert({
        cMsg: "yes for commit on sel for no commit on sel",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        getField("ComboBox0").commitOnSelChange = true;
    }

    if (nButton = 7 || nButton == 3) {
        getField("ComboBox0").commitOnSelChange = false;
    }
};

var testCurrentValueIndices = function() {
    app.alert(getField("ComboBox0").currentValueIndices);

};

var testDefaultStyle = function() {
    var style = getField("TextField0").defaultStyle;
    style.textColor = rolor.red;
    getField("TextField0").defaultStyle = style;
    app.alert("TextField0");
};

var testDefaultValue = function() {
    getField("TextField0").defaultValue = "34";
    app.alert("TextField0");
};

var testFieldDelay = function() {


};

var testDisplay = function() {

    var nButton = app.alert({
        cMsg: "yes for hidden no for no visible",
        nIcon: 3,
        nType: 3
    });

    if (nButton == 6 || nButton == 4) {
        //yes
        getField("TextField0").display = display.hidden;
    }

    if (nButton = 7 || nButton == 3) {
        getField("TextField0").display = display.visible;
    }
};

var testDoc = function() {
    app.alert("test doc:" + getField("TextField0").doc.filesize);
};

var testDoNotScroll = function() {
    getField("TextField0").doNotScroll = true;
};

var testDoNotSpellCheck = function() {
    getField("TextField0").doNotSpellCheck = false;
};

var testEditable = function() {

};

var testExportValues = function() {

};

var testFileSelect = function() {
    getField("TextField0").fileSelect = true;
};

var testFillColor = function() {
    getField("TextField0").fillColor = color.red;
};

var testHidden = function() {

};

var testHighlight = function() {
    getField("PushButton0").highlight = hightlight.i;
};

var testLineWidth = function() {
    getField("TextField0").lineWidth = 3;
};

var testMultiline = function() {
    getField("TextField0").multiline = true;
};

var testMultipleSelection = function() {
    getField("ListBox0").multipleSelection = true;
};

var testName = function() {
    app.alert(getField("TextField0").name);
};

var testNumItems = function() {
    app.alert(getField("ListBox0").numItems);
};

var testPage = function() {
    app.alert(getField("TextField0").page);
};

var testPassword = function() {
    getField("TextField0").password = true;
    app.alert("TextField0 has password format now");
};

var testPrint = function() {
    getField("TextField0").print = false;
};

var testRadiosInUnixon = function() {
    getField("RadioButton1").radiosInUnixon = false;
};

var testReadonly = function() {
    getField("TextField0").readonly = true;
};

var testRect = function() {
    var b = getField("TextField0");
    var aRect = b.rect;
    aRect[0] += 10;
    aRect[2] += 10;
    b.rect = aRect;
};

var testRequired = function() {
    getField("TextField0").required = true;
};

var testRichText = function() {
    getField("TextField0").richText = true;

    var spans = new Array();
    spans[0] = new Object();
    spans[0].text = "attention: \r";
    spans[0].textColor = color.blue;
    spans[0].textSize = 18;
    getField("TextField0").richValue = spans;
};

var testRichValue = function() {
  testRichText();
};

var testRotation = function() {
getField("TextField0").rotation = 180;
};

var testStrokeColor = function() {
getField("TextField0").strokeColor = color.blue;
};

var testStyle = function() {
getField("RadioButton1").style = style.st;
};

var testSubmitName = function() {
getField("TextField0").submitName = "TextField100";
};

var testTextColor = function() {
getField("TextField0").textColor = color.blue;
};

var testTextFont = function() {
getField("TextField0").textFont = font.TimesI;
};

var testTextSize = function() {
getField("TextField0").textSize = 28;
};

var testType = function() {
app.alert(getField("TextField0").type);
};

var testUserName = function() {
getField("TextField0").userName = "A TextField";
};

var testValue = function() {
getField("TextField0").value = "Two TextFields";
};

var testValueAsString = function() {
app.alert(getField("TextField0").valueAsString);
};

var testBrowseForFileToSubmit = function() {
  getField("TextField0").fileSelect = true;
  getField("TextField0").browseForFileToSubmit();
};

var testButtonGetCaption = function() {
app.alert(getField("PushButton0").buttonGetCaption());
};

var testButtonGetIcon = function() {
testAddIcon();
};

var testButtonImportIcon = function() {
getField("pb0").buttonImportIcon("C:\\test\ doc\\FoxitForm.pdf");
};

var testButtonSetCaption = function() {
getField("PushButton0").buttonSetCaption("HelloButton");
};

var testButtonSetIcon = function() {
testAddIcon();
};

var testCheckThisBox = function() {
getField("CheckBox0").checkThisBox(0, true);
};

var testClearItems = function() {
getField("ComboBox0").clearItems();
};

var testDefaultIsChecked = function() {
getField("CheckBox0").defaultIsChecked(0, true);
};

var testDeleteItemAt = function() {
getField("ComboBox0").deleteItemAt(1);
};

var testGetArray = function() {
  var f = this.getField("f");
  var a = f.getArray();
  app.alert(a[1].value);
};

var testGetItemAt = function() {
app.alert(getField("ComboBox0").getItemAt(1));
};

var testGetLock = function() {
  var lockObject = {
      action: "Include",
      fields: ["pb0", "TextField0"]
  };

  getField("Signature0").setLock(lockObject);
  var lo = getField("Signature0").getLock();
  app.alert(lo.fields[1]);

};

var testInsertItemAt = function() {
getField("ComboBox0").insertItemAt("sam", "s", -1);
app.alert("ComboBox0: sam, s, -1");
};

var testIsBoxChecked = function() {
app.alert("if CheckBox0 checked: "+getField("CheckBox0").isBoxChecked(0));
};

var testIsDefaultChecked = function() {
app.alert("if CheckBox0 default checked: "+getField("CheckBox0").isDefaultChecked(0));
};

var testSetAction = function() {
  var f = this.addField("actionField", "button", 5, [20, 100, 100, 20]);
  f.setAction("MouseUp", "app.beep(0);");
};

var testSetFocus = function() {
  getField("TextField0").setFocus();
};

var testSetItems = function() {
  getField("ComboBox0").setItems([
      ["item0", "export0"],
      ["item1", "export1"],
      ["item2", "export2"]
  ]);
  app.alert("ComboBox0");
};

var testSetLock = function() {
testGetLock();
};

var testSignatureGetModifications = function() {
  var sigMods = getField("Signature0").signatureGetModifications();
  var fields = sigMods.formFieldsCreated;
  var msg = "";
  for (var i = 0; i < fields.length; i++) {
      msg += fields[i].name + "\r\n";
  }
  app.alert(msg);
};

var testSignatureGetSeedValue = function() {
  var sigFie = this.getField("Signature0");
  sigFie.signatureSetSeedValue({
      mdp: "defaultAndComments",
      legalAttestations: ["Trust me and be at ease.",
          "You can surely trust the author."
      ],
      reasons: ["This is a reason", "This is a better reason"],
      flags: 8
  });

  var seedValue = getField("Signature0").signatureGetSeedValue();
  app.alert("Filter name:" + seedValue.filter + "\r\nFlags:" + seedValue.flags);
};

var testSignatureInfo = function() {
  var sig = getField("Signature0").signatureInfo();
  var msg = "";
  msg += ("Signature Attributes:\r\n");
  for (i in sig) msg == (i + " = " + s[i] + "\r\n");
};

var testSignatureSetSeedValue = function() {
  testSignatureGetSeedValue();
};

var testSignatureSign = function() {
testSignatureGetSeedValue();
};

var testSignatureValidate = function() {
  var sigFie = this.getField("Signature0");
  var status = sigFie.signatureValidate();
  sig = getField("Signature0").signatureInfo();
  var msg = "";
  if (status < 3)
      msg = "Signature not valid!" + sig.statusText;
  else
      msg = "Signature valid! " + sig.statusText;

  app.alert(msg);

};

var testCoporation = function() {
app.alert(identity.corporation);
};

var testEmail = function() {
app.alert(identity.email);
};

var testLoginName = function() {
app.alert(identity.loginName);
};

var testIdentityName = function() {
app.alert(identity.name);
};

var testSetPersistent = function() {

  var nButton = app.alert({
      cMsg: "yes set persistent no check persistent",
      nIcon: 3,
      nType: 3
  });

  if (nButton == 6 || nButton == 4) {
      //yes
      global.radius = 8;
      global.setPersistent("radius", true);
  }

  if (nButton = 7 || nButton == 3) {
      app.alert("global.radius = " + global.radius);
  }

};

var testTemplateHidden = function() {
  var t = getTemplate("foxit");
  if (t == undefined) {
      app.alert("template undefined");
  }
  else {
    t.hidden = true;
  }
};

var testTemplateName = function() {
  var t = getTemplate("foxit");
  if (t == undefined) {
      app.alert("template undefined");
  }
  else {
    app.alert(t.name);
  }
};

var testSpawn = function() {
  var t = getTemplate("foxit");
  if (t == undefined) {
      app.alert("template undefined");
  }
  else {
    t.spawn(numPages, false, false);
  }
};

var testPrintf = function() {
  app.alert(util.printf("hex: %x", 1209));
};

var testPrintx = function() {
  app.alert(util.printx("(XXX) XXX - XXXX", "abcdefghij"));
};

var testScand = function() {
  var dstring = util.printd("mmmm dd, yyyy", new Date());
  var dreal = util.scand("mmmm dd, yyyy", dstring);

  app.alert(dreal + "\r\n" + util.printd("mmmm dd, yyyy", dreal));
};

var testPrintd = function() {
  testScand();
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

var testEqual = function() {

};

var testConvert = function() {

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
    signatureGetSeedValue: testSignatureGetSeedValue,
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
