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
    app.alert("if CheckBox0 checked: " + getField("CheckBox0").isBoxChecked(0));
};

var testIsDefaultChecked = function() {
    app.alert("if CheckBox0 default checked: " + getField("CheckBox0").isDefaultChecked(0));
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
    } else {
        t.hidden = true;
    }
};

var testTemplateName = function() {
    var t = getTemplate("foxit");
    if (t == undefined) {
        app.alert("template undefined");
    } else {
        app.alert(t.name);
    }
};

var testSpawn = function() {
    var t = getTemplate("foxit");
    if (t == undefined) {
        app.alert("template undefined");
    } else {
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
    console.clear();
};

var testHide = function() {
    console.hide();
};

var testPrintln = function() {
    console.println("console println");
};

var testShow = function() {
    console.show();
};

var testTransparent = function() {
    getField("TextField0").fillColor = color.transparent;
    app.alert("TextField0");
};

var testBlack = function() {
    getField("TextField0").fillColor = color.black;
    app.alert("TextField0");
};

var testWhite = function() {
    getField("TextField0").fillColor = color.white;
    app.alert("TextField0");
};

var testRed = function() {
    getField("TextField0").fillColor = color.red;
    app.alert("TextField0");
};

var testGreen = function() {
    getField("TextField0").fillColor = color.green;
    app.alert("TextField0");
};

var testBlue = function() {
    getField("TextField0").fillColor = color.blue;
    app.alert("TextField0");
};

var testCyan = function() {
    getField("TextField0").fillColor = color.cyan;
    app.alert("TextField0");
};

var testMagenta = function() {
    getField("TextField0").fillColor = color.magenta;
    app.alert("TextField0");
};

var testYellow = function() {
    getField("TextField0").fillColor = color.yellow;
    app.alert("TextField0");
};

var testDkGray = function() {
    getField("TextField0").fillColor = color.dkGray;
    app.alert("TextField0");
};

var testGray = function() {
    getField("TextField0").fillColor = color.gray;
    app.alert("TextField0");
};

var testLtGray = function() {
    getField("TextField0").fillColor = color.ltGray;
    app.alert("TextField0");
};

var testEqual = function() {
    app.alert(color.equal(color.yellow, color.yellow));
};

var testConvert = function() {
    var cmyk = color.convert(["RGB", 1, 0, 0], "CMYK");
    app.alert(cmyk);
};

var testMissingList = function() {
    var msg = "existing list:\r\n";
    for (var i in missingList) {
        var arr = missingList[i];
        for (var j = 0; j < arr.length; j++) {
            if (eval(i + "." + arr[j]) != undefined) {
                msg += i + "." + arr[j];
                msg += "\r\n";
            }
        }
    }

    app.alert(msg);
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

var missingList = {
    appProperties: ["capabilities", "constant", "constants", "focusRect",
        "formPDFConverters", "fsClick", "fsColor", "fsCursor", "fsEscape",
        "fsLoop", "fsTimeDelay", "fsTransition", "fsUsePageTiming", "fsUseTimer",
        "monitor", "numPlugIns", "openInPlace", "printColorProfiles", "thermometer",
        "toolbar", "toolbarHorizontal", "toolbarVertical", "user"
    ],
    appMethods: ["addMenuItem", "addSubMenu", "addToolButton", "beginPriv", "browseForMultipleDocs",
        "compareDocuments", "endPriv", "exportFiles", "getNthPlugInName", "getPath",
        "getString", "hideMenuItem", "hideToolbarButton", "isValidSaveLocation", "listMenuItems",
        "listToolbarButtons", "loadPolicyFile", "mailGetAddrs", "mailMsgWithAttachment", "newCollection",
        "removeToolButton", "setProfile", "trustedFunction", "trustPropagatorFunction"
    ],
    docProperties: ["baseURL", "certified", "closed", "collection", "disclosed",
        "docID", "hidden", "isInCollection", "isInProtectedView", "isModal",
        "metadata", "numIcons", "numTemplates", "pane", "requiresFullSave",
        "rightsManagement", "selectedAnnots", "sounds", "spellDictionaryOrder", "spellLanguageOrder",
        "templates", "view", "viewState", "wireframe", "XFAForeground"
    ],
    docMethods: ["addNewField", "addRecipientListCryptFilter", "addRequirement", "addScript", "addThumbnails",
        "addWatermarkFromFile", "addWatermarkFromText", "addWeblinks", "applyRedactions", "bringToFront",
        "certifyInvisibleSign", "colorConvertPage", "createTemplate", "deleteIcon", "deleteSound",
        "eMailValidate", "embedDocAsDataObject", "embedOutputIntent", "encryptForRecipients", "encryptUsingPolicy",

        "exportAsFDFStr", "exportAsTextStr", "exportAsXFAStr", "exportAsXFDFStr", "exportXFAData",
        "flattenPages", "getAnnotRichMedia", "getAnnotsRichMedia", "getColorConvertAction", "getDataObjectContents",
        "getLegalWarnings", "getNthIconName", "getNthTemplate", "getOCGOrder", "getPageLabel",
        "getPreflightAuditTrail", "getSound", "getTemplate", "importIcon", "importSound",
        "importXFAData", "Matrix2D", "movePage", "newPage", "openDataObject",

        "preflight", "removeLinks", "removePreflightAuditTrail", "removeRequirement", "removeScript",
        "removeTemplate", "removeThumbnails", "removeWeblinks", "selectPageNthWord", "setAction",
        "setDataObjectContents", "setOCGOrder", "setPageAction", "setPageBoxes", "setPageLabels",
        "setPageRotations", "setPageTabOrder", "setPageTransitions", "syncAnnotScan", "timestampSign",
        "validatePreflightAuditTrail"
    ],
    fieldProperties: ["bgColor", "borderColor", "borderWidth", "fgColor"],
    fieldMethods: ["clear", "setExportValues", "signatureAddLTV"],
    identityProperties: ["corporation", "email"],
    globalMethods: ["subscribe"],
    templateMethods: [],
    util: ["charToByte", "byteToChar", "fixOldString", "stringFromStream", "streamFromString",
        "iconStreamFromIcon", "readFileIntoStream", "crackURL", "xmlToSpans", "spansToXML"
    ],
    afMethods: ["AFBuildRegExps", "AFDateFromYMD", "AFDateHorizon", "AFExactMatch", "AFExtractRegExp",
        "AFExtractTime", "AFGetMonthIndex", "AFGetMonthString", "AFMakeArrayFromList", "AFMatchMonth",
        "AFParseDate", "AFParseDateOrder", "AFParseDateWithPDF", "AFParseDateYCount", "AFParseGMTDateString",
        "AFParseTime", "AFSignature_Format", "AFSignatureLock", "AFSimpleInit", "AFSpecial_Format",
        "AFStringReplace"
    ],
    console: [],
    colorProperties: [],
    colorMethods: []
};

function getAdobePropObj() {


    var t = {
        __app: [],
        __this: [],
        __field: [],
        __global: [],
        __util: [],
        __color: [],
        __console: [],
        __identity: [],
        __template: [],
        __thermometer: []
    };
    t['__app'].push('DisablePermEnforcement');
    t['__app'].push('EnablePermEnforcement');
    t['__app'].push('Monitors');
    t['__app'].push('activeDocs');
    t['__app'].push('addMenuItem');
    t['__app'].push('addSubMenu');
    t['__app'].push('addToolButton');
    t['__app'].push('addressBookAvailable');
    t['__app'].push('alert');
    t['__app'].push('beep');
    t['__app'].push('beginPriv');
    t['__app'].push('browseForDoc');
    t['__app'].push('calculate');
    t['__app'].push('checkForUpdate');
    t['__app'].push('clearInterval');
    t['__app'].push('clearTimeOut');
    t['__app'].push('compareDocuments');
    t['__app'].push('constants');
    t['__app'].push('endPriv');
    t['__app'].push('execDialog');
    t['__app'].push('execMenuItem');
    t['__app'].push('findComponent');
    t['__app'].push('focusRect');
    t['__app'].push('formsVersion');
    t['__app'].push('fromPDFConverters');
    t['__app'].push('fs');
    t['__app'].push('fsClick');
    t['__app'].push('fsColor');
    t['__app'].push('fsCursor');
    t['__app'].push('fsEscape');
    t['__app'].push('fsLoop');
    t['__app'].push('fsTimeDelay');
    t['__app'].push('fsTransition');
    t['__app'].push('fsUsePageTiming');
    t['__app'].push('fsUseTimer');
    t['__app'].push('fullscreen');
    t['__app'].push('getNthPlugInName');
    t['__app'].push('getPath');
    t['__app'].push('getString');
    t['__app'].push('goBack');
    t['__app'].push('goForward');
    t['__app'].push('hideMenuItem');
    t['__app'].push('hideToolbarButton');
    t['__app'].push('language');
    t['__app'].push('launchURL');
    t['__app'].push('listMenuItems');
    t['__app'].push('listToolbarButtons');
    t['__app'].push('mailGetAddrs');
    t['__app'].push('mailMsg');
    t['__app'].push('measureDialog');
    t['__app'].push('media');
    t['__app'].push('monitors');
    t['__app'].push('newDoc');
    t['__app'].push('newFDF');
    t['__app'].push('numPlugIns');
    t['__app'].push('openDoc');
    t['__app'].push('openFDF');
    t['__app'].push('openInPlace');
    t['__app'].push('platform');
    t['__app'].push('plugIns');
    t['__app'].push('popUpMenu');
    t['__app'].push('popUpMenuEx');
    t['__app'].push('printColorProfiles');
    t['__app'].push('printerNames');
    t['__app'].push('removeToolButton');
    t['__app'].push('response');
    t['__app'].push('runtimeHighlight');
    t['__app'].push('runtimeHighlightColor');
    t['__app'].push('setInterval');
    t['__app'].push('setProfile');
    t['__app'].push('setTimeOut');
    t['__app'].push('thermometer');
    t['__app'].push('toolbar');
    t['__app'].push('toolbarHorizontal');
    t['__app'].push('toolbarVertical');
    t['__app'].push('trustPropagatorFunction');
    t['__app'].push('trustedFunction');
    t['__app'].push('user');
    t['__app'].push('viewerType');
    t['__app'].push('viewerVariation');
    t['__app'].push('viewerVersion');
    t['__this'].push('ADBCAnnotEnumerator');
    t['__this'].push('ADBCAnnotStore');
    t['__this'].push('ADBCGetColumnArrayFromStatement');
    t['__this'].push('ADBCGetRowFromStatement');
    t['__this'].push('ADBCString');
    t['__this'].push('AFAMRegExp');
    t['__this'].push('AFBuildRegExps');
    t['__this'].push('AFDateFromYMD');
    t['__this'].push('AFDateHorizon');
    t['__this'].push('AFDate_Format');
    t['__this'].push('AFDate_FormatEx');
    t['__this'].push('AFDate_Keystroke');
    t['__this'].push('AFDate_KeystrokeEx');
    t['__this'].push('AFDigitsRegExp');
    t['__this'].push('AFExactMatch');
    t['__this'].push('AFExtractNums');
    t['__this'].push('AFExtractRegExp');
    t['__this'].push('AFExtractTime');
    t['__this'].push('AFGetMonthIndex');
    t['__this'].push('AFGetMonthString');
    t['__this'].push('AFMakeArrayFromList');
    t['__this'].push('AFMakeNumber');
    t['__this'].push('AFMatchMonth');
    t['__this'].push('AFMergeChange');
    t['__this'].push('AFMonthsRegExp');
    t['__this'].push('AFNumberCommaSepCommitRegExp');
    t['__this'].push('AFNumberCommaSepEntryRegExp');
    t['__this'].push('AFNumberDotSepCommitRegExp');
    t['__this'].push('AFNumberDotSepEntryRegExp');
    t['__this'].push('AFNumber_Format');
    t['__this'].push('AFNumber_Keystroke');
    t['__this'].push('AFPMRegExp');
    t['__this'].push('AFParseDate');
    t['__this'].push('AFParseDateEx');
    t['__this'].push('AFParseDateOrder');
    t['__this'].push('AFParseDateWithPDF');
    t['__this'].push('AFParseDateYCount');
    t['__this'].push('AFParseTime');
    t['__this'].push('AFPercent_Format');
    t['__this'].push('AFPercent_Keystroke');
    t['__this'].push('AFPhoneCommitRegExp');
    t['__this'].push('AFPhoneEntryRegExp');
    t['__this'].push('AFRange_Validate');
    t['__this'].push('AFSSNCommitRegExp');
    t['__this'].push('AFSSNEntryRegExp');
    t['__this'].push('AFSignatureLock');
    t['__this'].push('AFSignature_Format');
    t['__this'].push('AFSimple');
    t['__this'].push('AFSimpleInit');
    t['__this'].push('AFSimple_Calculate');
    t['__this'].push('AFSpecial_Format');
    t['__this'].push('AFSpecial_Keystroke');
    t['__this'].push('AFSpecial_KeystrokeEx');
    t['__this'].push('AFStringReplace');
    t['__this'].push('AFTimeGarbageRegExp');
    t['__this'].push('AFTimeLongRegExp');
    t['__this'].push('AFTimeShortRegExp');
    t['__this'].push('AFTime_Format');
    t['__this'].push('AFTime_FormatEx');
    t['__this'].push('AFTime_Keystroke');
    t['__this'].push('AFZip4CommitRegExp');
    t['__this'].push('AFZip4EntryRegExp');
    t['__this'].push('AFZipCommitRegExp');
    t['__this'].push('AFZipEntryRegExp');
    t['__this'].push('ANApprovalGetStrings');
    t['__this'].push('ANClipPrec3');
    t['__this'].push('ANContinueApproval');
    t['__this'].push('ANCreateMLSEElementsFromArray');
    t['__this'].push('ANCreateMLSElement');
    t['__this'].push('ANCreateTipElements');
    t['__this'].push('ANDefaultInvite');
    t['__this'].push('ANDoSend');
    t['__this'].push('ANEndApproval');
    t['__this'].push('ANFB_ShouldAppearInPanel');
    t['__this'].push('ANFB_ShouldCollaborate');
    t['__this'].push('ANFB_ShouldEdit');
    t['__this'].push('ANFB_ShouldExport');
    t['__this'].push('ANFB_ShouldNone');
    t['__this'].push('ANFB_ShouldPrint');
    t['__this'].push('ANFB_ShouldSummarize');
    t['__this'].push('ANFB_ShouldView');
    t['__this'].push('ANFancyAlertImpl');
    t['__this'].push('ANRejectApproval');
    t['__this'].push('ANSB_Author');
    t['__this'].push('ANSB_ModDate');
    t['__this'].push('ANSB_None');
    t['__this'].push('ANSB_Page');
    t['__this'].push('ANSB_Seq');
    t['__this'].push('ANSB_Subject');
    t['__this'].push('ANSB_Type');
    t['__this'].push('ANSendApprovalToAuthorEnabled');
    t['__this'].push('ANSendCommentsToAuthor');
    t['__this'].push('ANSendCommentsToAuthorEnabled');
    t['__this'].push('ANSendForApproval');
    t['__this'].push('ANSendForReview');
    t['__this'].push('ANSendForReviewEnabled');
    t['__this'].push('ANStartApproval');
    t['__this'].push('ANTrustPropagateAll');
    t['__this'].push('ANVerifyComments');
    t['__this'].push('ANstateful');
    t['__this'].push('ANsumFlatten');
    t['__this'].push('ANsummAnnot');
    t['__this'].push('ANsummarize');
    t['__this'].push('ANsumorder');
    t['__this'].push('ANsums');
    t['__this'].push('AnnotsString');
    t['__this'].push('CBAutoConfigCommentRepository');
    t['__this'].push('CBBBRInit');
    t['__this'].push('CBBBRInvite');
    t['__this'].push('CBCanDoApprovalWorkflowCheckExpr');
    t['__this'].push('CBCanDoEBRReviewWorkflowCheckExpr');
    t['__this'].push('CBCanDoReviewWorkflowCheckExpr');
    t['__this'].push('CBCanDoWorkflowCheckExprAPR');
    t['__this'].push('CBCreateGettingStartedStepDescription');
    t['__this'].push('CBCreateInviteStepDescription');
    t['__this'].push('CBCreateInviteStepDescriptionApproval');
    t['__this'].push('CBCreateSendInvitationStepDescription');
    t['__this'].push('CBCreateStepNavElements');
    t['__this'].push('CBCreateUploadStepDescription');
    t['__this'].push('CBDeleteReplyChain');
    t['__this'].push('CBFDBPerDoc');
    t['__this'].push('CBFNiceDBName');
    t['__this'].push('CBFNiceTableName');
    t['__this'].push('CBFreezeFunc');
    t['__this'].push('CBGetReplyChain');
    t['__this'].push('CBPutReplyChain');
    t['__this'].push('CBRunApproveDialog');
    t['__this'].push('CBRunBBRReviewWizard');
    t['__this'].push('CBRunEmailApprovalWizard');
    t['__this'].push('CBRunEmailReviewWizard');
    t['__this'].push('CBRunReturnResponseDialog');
    t['__this'].push('CBRunReviewOptionsDialog');
    t['__this'].push('CBRunSimpleWiz');
    t['__this'].push('CBStartWizStep');
    t['__this'].push('CBStrToLongColumnThing');
    t['__this'].push('CBTrustPropagateWiz');
    t['__this'].push('CBannotData');
    t['__this'].push('CBannotSetData');
    t['__this'].push('CBannotdata');
    t['__this'].push('CBconnect');
    t['__this'].push('CBcreateTable');
    t['__this'].push('CBdef');
    t['__this'].push('CBgetInfo');
    t['__this'].push('CBgetTableConnect');
    t['__this'].push('CBgetTableDesc');
    t['__this'].push('CBsetInfo');
    t['__this'].push('Collab');
    t['__this'].push('ColorConvert');
    t['__this'].push('ColorEqual');
    t['__this'].push('CreateViewerVersionCheck70');
    t['__this'].push('CreateViewerVersionCheckCase');
    t['__this'].push('DoIdentityDialog');
    t['__this'].push('DynamicAnnotStore');
    t['__this'].push('EScriptString');
    t['__this'].push('HostContainerDisclosurePolicy');
    t['__this'].push('IDS_AM');
    t['__this'].push('IDS_GREATER_THAN');
    t['__this'].push('IDS_GT_AND_LT');
    t['__this'].push('IDS_INVALID_DATE');
    t['__this'].push('IDS_INVALID_DATE2');
    t['__this'].push('IDS_INVALID_MONTH');
    t['__this'].push('IDS_INVALID_VALUE');
    t['__this'].push('IDS_LESS_THAN');
    t['__this'].push('IDS_MONTH_INFO');
    t['__this'].push('IDS_PM');
    t['__this'].push('IDS_STARTUP_CONSOLE_MSG');
    t['__this'].push('Init');
    t['__this'].push('LoginForGuardian');
    t['__this'].push('LookUpWordDefinitionURL');
    t['__this'].push('LookUpWordEnable');
    t['__this'].push('Matrix2D');
    t['__this'].push('RE_NUMBER_COMMIT_COMMA_SEP');
    t['__this'].push('RE_NUMBER_COMMIT_DOT_SEP');
    t['__this'].push('RE_NUMBER_ENTRY_COMMA_SEP');
    t['__this'].push('RE_NUMBER_ENTRY_DOT_SEP');
    t['__this'].push('RE_PHONE_COMMIT');
    t['__this'].push('RE_PHONE_ENTRY');
    t['__this'].push('RE_SSN_COMMIT');
    t['__this'].push('RE_SSN_ENTRY');
    t['__this'].push('RE_ZIP4_COMMIT');
    t['__this'].push('RE_ZIP4_ENTRY');
    t['__this'].push('RE_ZIP_COMMIT');
    t['__this'].push('RE_ZIP_ENTRY');
    t['__this'].push('RSS');
    t['__this'].push('RefreshPoliciesForGuardian');
    t['__this'].push('SOAP');
    t['__this'].push('SOAPMessageStyle');
    t['__this'].push('SOAPRequestStyle');
    t['__this'].push('SOAPString');
    t['__this'].push('SOAPVersion');
    t['__this'].push('SPSearchForServices');
    t['__this'].push('SearchBuildURL');
    t['__this'].push('SearchBuildURLWithContext');
    t['__this'].push('SearchBuildURLWithoutContext');
    t['__this'].push('SearchGetURLVersion');
    t['__this'].push('ServiceDiscovery');
    t['__this'].push('StreamDigest');
    t['__this'].push('URL');
    t['__this'].push('WDAnnotEnumerator');
    t['__this'].push('WDAnnotStore');
    t['__this'].push('WDmungeURL');
    t['__this'].push('XMLData');
    t['__this'].push('addAnnot');
    t['__this'].push('addField');
    t['__this'].push('addIcon');
    t['__this'].push('addLink');
    t['__this'].push('addNewField');
    t['__this'].push('addRecipientListCryptFilter');
    t['__this'].push('addRequirement');
    t['__this'].push('addScript');
    t['__this'].push('addThumbnails');
    t['__this'].push('addWatermarkFromFile');
    t['__this'].push('addWatermarkFromText');
    t['__this'].push('addWeblinks');
    t['__this'].push('alternatePresentations');
    t['__this'].push('annotFilter');
    t['__this'].push('app');
    t['__this'].push('ar');
    t['__this'].push('array');
    t['__this'].push('author');
    t['__this'].push('baseURL');
    t['__this'].push('binsert');
    t['__this'].push('bookmarkRoot');
    t['__this'].push('border');
    t['__this'].push('bringToFront');
    t['__this'].push('calculate');
    t['__this'].push('calculateNow');
    t['__this'].push('catalog');
    t['__this'].push('certified');
    t['__this'].push('closeDoc');
    t['__this'].push('closed');
    t['__this'].push('color');
    t['__this'].push('console');
    t['__this'].push('createDataObject');
    t['__this'].push('createIcon');
    t['__this'].push('createTemplate');
    t['__this'].push('creationDate');
    t['__this'].push('creator');
    t['__this'].push('cursor');
    t['__this'].push('dataObjects');
    t['__this'].push('debugExcept');
    t['__this'].push('delay');
    t['__this'].push('deleteIcon');
    t['__this'].push('deletePages');
    t['__this'].push('deleteSound');
    t['__this'].push('dirty');
    t['__this'].push('disclosed');
    t['__this'].push('dispatch');
    t['__this'].push('display');
    t['__this'].push('docID');
    t['__this'].push('documentFileName');
    t['__this'].push('dynamicXFAForm');
    t['__this'].push('eMailValidate');
    t['__this'].push('embedDocAsDataObject');
    t['__this'].push('encoding');
    t['__this'].push('encryptForRecipients');
    t['__this'].push('encryptUsingPolicy');
    t['__this'].push('encryptUsingPolicyForJSObject');
    t['__this'].push('evaluators');
    t['__this'].push('event');
    t['__this'].push('executeTest');
    t['__this'].push('exportAsFDF');
    t['__this'].push('exportAsFDFStr');
    t['__this'].push('exportAsText');
    t['__this'].push('exportAsTextStr');
    t['__this'].push('exportAsXFAStr');
    t['__this'].push('exportAsXFDF');
    t['__this'].push('exportAsXFDFStr');
    t['__this'].push('exportDataObject');
    t['__this'].push('exportXFAData');
    t['__this'].push('external');
    t['__this'].push('extractPages');
    t['__this'].push('fileSystem');
    t['__this'].push('filesize');
    t['__this'].push('flattenPages');
    t['__this'].push('font');
    t['__this'].push('functions');
    t['__this'].push('getAnnot');
    t['__this'].push('getAnnot3D');
    t['__this'].push('getAnnots');
    t['__this'].push('getAnnots3D');
    t['__this'].push('getDataObject');
    t['__this'].push('getDataObjectContents');
    t['__this'].push('getField');
    t['__this'].push('getIcon');
    t['__this'].push('getLegalWarnings');
    t['__this'].push('getLinks');
    t['__this'].push('getNthFieldName');
    t['__this'].push('getNthIconName');
    t['__this'].push('getNthTemplate');
    t['__this'].push('getOCGOrder');
    t['__this'].push('getOCGs');
    t['__this'].push('getPageBox');
    t['__this'].push('getPageLabel');
    t['__this'].push('getPageNthWord');
    t['__this'].push('getPageNthWordQuads');
    t['__this'].push('getPageNumWords');
    t['__this'].push('getPageRotation');
    t['__this'].push('getPageTransition');
    t['__this'].push('getPrintParams');
    t['__this'].push('getPrintSepsParams');
    t['__this'].push('getSound');
    t['__this'].push('getTemplate');
    t['__this'].push('getURL');
    t['__this'].push('global');
    t['__this'].push('gotoNamedDest');
    t['__this'].push('hasHanko');
    t['__this'].push('hidden');
    t['__this'].push('highlight');
    t['__this'].push('i');
    t['__this'].push('icons');
    t['__this'].push('identity');
    t['__this'].push('importAnFDF');
    t['__this'].push('importAnXFDF');
    t['__this'].push('importDataObject');
    t['__this'].push('importIcon');
    t['__this'].push('importSound');
    t['__this'].push('importTextData');
    t['__this'].push('importXFAData');
    t['__this'].push('indexOfNextEssential');
    t['__this'].push('info');
    t['__this'].push('innerAppWindowRect');
    t['__this'].push('innerDocWindowRect');
    t['__this'].push('insertPages');
    t['__this'].push('isAlphaNumeric');
    t['__this'].push('isAlphabetic');
    t['__this'].push('isModal');
    t['__this'].push('isNumber');
    t['__this'].push('isReservedMaskChar');
    t['__this'].push('isort');
    t['__this'].push('item');
    t['__this'].push('j');
    t['__this'].push('keywords');
    t['__this'].push('layout');
    t['__this'].push('mailDoc');
    t['__this'].push('mailForm');
    t['__this'].push('maskSatisfied');
    t['__this'].push('media');
    t['__this'].push('metadata');
    t['__this'].push('migrateAnnotsFrom');
    t['__this'].push('modDate');
    t['__this'].push('mouseX');
    t['__this'].push('mouseY');
    t['__this'].push('movePage');
    t['__this'].push('msg');
    t['__this'].push('newPage');
    t['__this'].push('numFields');
    t['__this'].push('numIcons');
    t['__this'].push('numPages');
    t['__this'].push('numTemplates');
    t['__this'].push('openDataObject');
    t['__this'].push('outerAppWindowRect');
    t['__this'].push('outerDocWindowRect');
    t['__this'].push('pageNum');
    t['__this'].push('pageWindowRect');
    t['__this'].push('pane');
    t['__this'].push('path');
    t['__this'].push('permStatusReady');
    t['__this'].push('permission');
    t['__this'].push('position');
    t['__this'].push('print');
    t['__this'].push('printSeps');
    t['__this'].push('printSepsWithParams');
    t['__this'].push('printWithParams');
    t['__this'].push('privOK');
    t['__this'].push('producer');
    t['__this'].push('prop');
    t['__this'].push('propertyName');
    t['__this'].push('removeDataObject');
    t['__this'].push('removeField');
    t['__this'].push('removeIcon');
    t['__this'].push('removeLinks');
    t['__this'].push('removeProps');
    t['__this'].push('removeRequirement');
    t['__this'].push('removeScript');
    t['__this'].push('removeTemplate');
    t['__this'].push('removeThumbnails');
    t['__this'].push('removeWeblinks');
    t['__this'].push('replacePages');
    t['__this'].push('requestPermission');
    t['__this'].push('requirements');
    t['__this'].push('requiresFullSave');
    t['__this'].push('resetForm');
    t['__this'].push('saveAs');
    t['__this'].push('scaleHow');
    t['__this'].push('scaleWhen');
    t['__this'].push('scroll');
    t['__this'].push('search');
    t['__this'].push('security');
    t['__this'].push('securityHandler');
    t['__this'].push('selectPageNthWord');
    t['__this'].push('selectedAnnots');
    t['__this'].push('setAction');
    t['__this'].push('setDataObjectContents');
    t['__this'].push('setOCGOrder');
    t['__this'].push('setPageAction');
    t['__this'].push('setPageBoxes');
    t['__this'].push('setPageLabels');
    t['__this'].push('setPageRotations');
    t['__this'].push('setPageTabOrder');
    t['__this'].push('setPageTransitions');
    t['__this'].push('setUserPerms');
    t['__this'].push('sounds');
    t['__this'].push('spawnPageFromTemplate');
    t['__this'].push('spell');
    t['__this'].push('spellDictionaryOrder');
    t['__this'].push('spellLanguageOrder');
    t['__this'].push('stampAPFromPage');
    t['__this'].push('storage');
    t['__this'].push('style');
    t['__this'].push('subject');
    t['__this'].push('submitForm');
    t['__this'].push('submitFormUsageRights');
    t['__this'].push('syncAnnotScan');
    t['__this'].push('templates');
    t['__this'].push('testAFDate_Format');
    t['__this'].push('testAFDate_FormatEx');
    t['__this'].push('testAFDate_Keystroke');
    t['__this'].push('testAFDate_KeystrokeEx');
    t['__this'].push('testAFExtractNums');
    t['__this'].push('testAFMakeNumber');
    t['__this'].push('testAFMergeChange');
    t['__this'].push('testAFNumber_Format');
    t['__this'].push('testAFNumber_Keystroke');
    t['__this'].push('testAFParseDateEx');
    t['__this'].push('testAFPercent_Format');
    t['__this'].push('testAFPercent_Keystroke');
    t['__this'].push('testAFRange_Validate');
    t['__this'].push('testAFSimple');
    t['__this'].push('testAFSimple_Calculate');
    t['__this'].push('testAFSpecial_Keystroke');
    t['__this'].push('testAFSpecial_KeystrokeEx');
    t['__this'].push('testAFTime_Format');
    t['__this'].push('testAFTime_FormatEx');
    t['__this'].push('testAFTime_Keystroke');
    t['__this'].push('testActiveDocs');
    t['__this'].push('testAddAnnot');
    t['__this'].push('testAddField');
    t['__this'].push('testAddIcon');
    t['__this'].push('testAddLink');
    t['__this'].push('testAddressBookAvailable');
    t['__this'].push('testAlert');
    t['__this'].push('testAlignment');
    t['__this'].push('testAppVersion');
    t['__this'].push('testArr');
    t['__this'].push('testAuthor');
    t['__this'].push('testBeep');
    t['__this'].push('testBlack');
    t['__this'].push('testBlue');
    t['__this'].push('testBookmarkRoot');
    t['__this'].push('testBorderStyle');
    t['__this'].push('testBrowseForDoc');
    t['__this'].push('testBrowseForFileToSubmit');
    t['__this'].push('testButtonAlignX');
    t['__this'].push('testButtonAlignY');
    t['__this'].push('testButtonFitBounds');
    t['__this'].push('testButtonGetCaption');
    t['__this'].push('testButtonGetIcon');
    t['__this'].push('testButtonImportIcon');
    t['__this'].push('testButtonPosition');
    t['__this'].push('testButtonScaleHow');
    t['__this'].push('testButtonScaleWhen');
    t['__this'].push('testButtonSetCaption');
    t['__this'].push('testButtonSetIcon');
    t['__this'].push('testCalcOrderIndex');
    t['__this'].push('testCalculate');
    t['__this'].push('testCalculateNow');
    t['__this'].push('testCharLimit');
    t['__this'].push('testCheckThisBox');
    t['__this'].push('testClear');
    t['__this'].push('testClearInterval');
    t['__this'].push('testClearItems');
    t['__this'].push('testClearTimeOut');
    t['__this'].push('testCloseDoc');
    t['__this'].push('testComb');
    t['__this'].push('testCommitOnSelChange');
    t['__this'].push('testConvert');
    t['__this'].push('testCoporation');
    t['__this'].push('testCreateDataObject');
    t['__this'].push('testCreateTemplate');
    t['__this'].push('testCreationDate');
    t['__this'].push('testCreator');
    t['__this'].push('testCurrentValueIndices');
    t['__this'].push('testCyan');
    t['__this'].push('testDataObjects');
    t['__this'].push('testDefaultIsChecked');
    t['__this'].push('testDefaultStyle');
    t['__this'].push('testDefaultValue');
    t['__this'].push('testDelay');
    t['__this'].push('testDeleteItemAt');
    t['__this'].push('testDeletePages');
    t['__this'].push('testDirty');
    t['__this'].push('testDisplay');
    t['__this'].push('testDkGray');
    t['__this'].push('testDoNotScroll');
    t['__this'].push('testDoNotSpellCheck');
    t['__this'].push('testDoc');
    t['__this'].push('testDocMedia');
    t['__this'].push('testDocumentFileName');
    t['__this'].push('testDynamicXFAForm');
    t['__this'].push('testEditable');
    t['__this'].push('testEmail');
    t['__this'].push('testEqual');
    t['__this'].push('testExecDialog');
    t['__this'].push('testExecMenuItem');
    t['__this'].push('testExportAsFDF');
    t['__this'].push('testExportAsText');
    t['__this'].push('testExportAsXFDF');
    t['__this'].push('testExportDataObject');
    t['__this'].push('testExportValues');
    t['__this'].push('testExternal');
    t['__this'].push('testExtractPages');
    t['__this'].push('testFieldDelay');
    t['__this'].push('testFileSelect');
    t['__this'].push('testFilesize');
    t['__this'].push('testFillColor');
    t['__this'].push('testFindComponent');
    t['__this'].push('testFormsVersion');
    t['__this'].push('testFs');
    t['__this'].push('testFullscreen');
    t['__this'].push('testGetAnnot');
    t['__this'].push('testGetAnnot3D');
    t['__this'].push('testGetAnnots');
    t['__this'].push('testGetAnnots3D');
    t['__this'].push('testGetArray');
    t['__this'].push('testGetDataObject');
    t['__this'].push('testGetField');
    t['__this'].push('testGetIcon');
    t['__this'].push('testGetItemAt');
    t['__this'].push('testGetLinks');
    t['__this'].push('testGetLock');
    t['__this'].push('testGetNthFieldName');
    t['__this'].push('testGetOCGs');
    t['__this'].push('testGetPageBox');
    t['__this'].push('testGetPageNthWord');
    t['__this'].push('testGetPageNthWordQuads');
    t['__this'].push('testGetPageNumWords');
    t['__this'].push('testGetPageRotation');
    t['__this'].push('testGetPageTransition');
    t['__this'].push('testGetPrintParams');
    t['__this'].push('testGetTemplate');
    t['__this'].push('testGetURL');
    t['__this'].push('testGoBack');
    t['__this'].push('testGoForward');
    t['__this'].push('testGotoNamedDest');
    t['__this'].push('testGray');
    t['__this'].push('testGreen');
    t['__this'].push('testHidden');
    t['__this'].push('testHide');
    t['__this'].push('testHighlight');
    t['__this'].push('testIcons');
    t['__this'].push('testIdentityName');
    t['__this'].push('testImportAnFDF');
    t['__this'].push('testImportAnXFDF');
    t['__this'].push('testImportDataObject');
    t['__this'].push('testImportTextData');
    t['__this'].push('testInfo');
    t['__this'].push('testInsertItemAt');
    t['__this'].push('testInsertPages');
    t['__this'].push('testIsBoxChecked');
    t['__this'].push('testIsDefaultChecked');
    t['__this'].push('testKeywords');
    t['__this'].push('testLanguage');
    t['__this'].push('testLaunchURL');
    t['__this'].push('testLayout');
    t['__this'].push('testLineWidth');
    t['__this'].push('testLoginName');
    t['__this'].push('testLtGray');
    t['__this'].push('testMagenta');
    t['__this'].push('testMailDoc');
    t['__this'].push('testMailForm');
    t['__this'].push('testMailMsg');
    t['__this'].push('testMedia');
    t['__this'].push('testModDate');
    t['__this'].push('testMouseX');
    t['__this'].push('testMouseY');
    t['__this'].push('testMultiline');
    t['__this'].push('testMultipleSelection');
    t['__this'].push('testName');
    t['__this'].push('testNewDoc');
    t['__this'].push('testNewFDF');
    t['__this'].push('testNumFields');
    t['__this'].push('testNumItems');
    t['__this'].push('testNumPages');
    t['__this'].push('testOpenDoc');
    t['__this'].push('testOpenFDF');
    t['__this'].push('testPage');
    t['__this'].push('testPageNum');
    t['__this'].push('testPassword');
    t['__this'].push('testPath');
    t['__this'].push('testPlatform');
    t['__this'].push('testPlugins');
    t['__this'].push('testPopUpMenu');
    t['__this'].push('testPopUpMenuEx');
    t['__this'].push('testPrint');
    t['__this'].push('testPrintd');
    t['__this'].push('testPrinterNames');
    t['__this'].push('testPrintf');
    t['__this'].push('testPrintln');
    t['__this'].push('testPrintx');
    t['__this'].push('testProducer');
    t['__this'].push('testRadiosInUnixon');
    t['__this'].push('testReadonly');
    t['__this'].push('testRect');
    t['__this'].push('testRed');
    t['__this'].push('testRemoveDataObject');
    t['__this'].push('testRemoveField');
    t['__this'].push('testRemoveIcon');
    t['__this'].push('testReplacePages');
    t['__this'].push('testRequired');
    t['__this'].push('testResetForm');
    t['__this'].push('testResponse');
    t['__this'].push('testRichText');
    t['__this'].push('testRichValue');
    t['__this'].push('testRotation');
    t['__this'].push('testRuntimeHighlight');
    t['__this'].push('testRuntimeHighlightColor');
    t['__this'].push('testSaveAs');
    t['__this'].push('testScand');
    t['__this'].push('testScroll');
    t['__this'].push('testSecurityHandler');
    t['__this'].push('testSetAction');
    t['__this'].push('testSetFocus');
    t['__this'].push('testSetInterval');
    t['__this'].push('testSetItems');
    t['__this'].push('testSetLock');
    t['__this'].push('testSetPersistent');
    t['__this'].push('testSetTimeOut');
    t['__this'].push('testShow');
    t['__this'].push('testSignatureGetModifications');
    t['__this'].push('testSignatureGetSeedValue');
    t['__this'].push('testSignatureInfo');
    t['__this'].push('testSignatureSetSeedValue');
    t['__this'].push('testSignatureSign');
    t['__this'].push('testSignatureValidate');
    t['__this'].push('testSpawn');
    t['__this'].push('testSpawnPageFromTemplate');
    t['__this'].push('testStrokeColor');
    t['__this'].push('testStyle');
    t['__this'].push('testSubject');
    t['__this'].push('testSubmitForm');
    t['__this'].push('testSubmitName');
    t['__this'].push('testTemplateHidden');
    t['__this'].push('testTemplateName');
    t['__this'].push('testTemplates');
    t['__this'].push('testTextColor');
    t['__this'].push('testTextFont');
    t['__this'].push('testTextSize');
    t['__this'].push('testTitle');
    t['__this'].push('testTransparent');
    t['__this'].push('testType');
    t['__this'].push('testURL');
    t['__this'].push('testUserName');
    t['__this'].push('testValue');
    t['__this'].push('testValueAsString');
    t['__this'].push('testViewerType');
    t['__this'].push('testViewerVariation');
    t['__this'].push('testViewerVersion');
    t['__this'].push('testWhite');
    t['__this'].push('testYellow');
    t['__this'].push('testZoom');
    t['__this'].push('testZoomType');
    t['__this'].push('title');
    t['__this'].push('trans');
    t['__this'].push('tts');
    t['__this'].push('util');
    t['__this'].push('view');
    t['__this'].push('viewState');
    t['__this'].push('wireframe');
    t['__this'].push('zoom');
    t['__this'].push('zoomType');
    t['__this'].push('zoomtype');
    t['__field'].push('alignment');
    t['__field'].push('bgColor');
    t['__field'].push('borderColor');
    t['__field'].push('borderStyle');
    t['__field'].push('borderWidth');
    t['__field'].push('browseForFileToSubmit');
    t['__field'].push('buttonAlignX');
    t['__field'].push('buttonAlignY');
    t['__field'].push('buttonFitBounds');
    t['__field'].push('buttonGetCaption');
    t['__field'].push('buttonGetIcon');
    t['__field'].push('buttonImportIcon');
    t['__field'].push('buttonPosition');
    t['__field'].push('buttonScaleHow');
    t['__field'].push('buttonScaleWhen');
    t['__field'].push('buttonSetCaption');
    t['__field'].push('buttonSetIcon');
    t['__field'].push('calcOrderIndex');
    t['__field'].push('charLimit');
    t['__field'].push('checkThisBox');
    t['__field'].push('clear');
    t['__field'].push('clearItems');
    t['__field'].push('comb');
    t['__field'].push('commitOnSelChange');
    t['__field'].push('currentValueIndices');
    t['__field'].push('defaultIsChecked');
    t['__field'].push('defaultStyle');
    t['__field'].push('defaultValue');
    t['__field'].push('delay');
    t['__field'].push('deleteItemAt');
    t['__field'].push('display');
    t['__field'].push('doNotScroll');
    t['__field'].push('doNotSpellCheck');
    t['__field'].push('doc');
    t['__field'].push('editable');
    t['__field'].push('exportValues');
    t['__field'].push('fgColor');
    t['__field'].push('fileSelect');
    t['__field'].push('fillColor');
    t['__field'].push('getArray');
    t['__field'].push('getItemAt');
    t['__field'].push('getLock');
    t['__field'].push('hidden');
    t['__field'].push('highlight');
    t['__field'].push('insertItemAt');
    t['__field'].push('isBoxChecked');
    t['__field'].push('isDefaultChecked');
    t['__field'].push('lineWidth');
    t['__field'].push('multiline');
    t['__field'].push('multipleSelection');
    t['__field'].push('name');
    t['__field'].push('numItems');
    t['__field'].push('page');
    t['__field'].push('password');
    t['__field'].push('print');
    t['__field'].push('radiosInUnison');
    t['__field'].push('readonly');
    t['__field'].push('rect');
    t['__field'].push('required');
    t['__field'].push('richText');
    t['__field'].push('richValue');
    t['__field'].push('rotation');
    t['__field'].push('setAction');
    t['__field'].push('setExportValues');
    t['__field'].push('setFocus');
    t['__field'].push('setItems');
    t['__field'].push('setLock');
    t['__field'].push('signatureGetModifications');
    t['__field'].push('signatureGetSeedValue');
    t['__field'].push('signatureInfo');
    t['__field'].push('signatureSetSeedValue');
    t['__field'].push('signatureSign');
    t['__field'].push('signatureValidate');
    t['__field'].push('strokeColor');
    t['__field'].push('style');
    t['__field'].push('submitName');
    t['__field'].push('textColor');
    t['__field'].push('textFont');
    t['__field'].push('textSize');
    t['__field'].push('type');
    t['__field'].push('userName');
    t['__field'].push('value');
    t['__field'].push('valueAsString');
    t['__global'].push('setPersistent');
    t['__global'].push('subscribe');
    t['__util'].push('byteToChar');
    t['__util'].push('charToByte');
    t['__util'].push('crackURL');
    t['__util'].push('fixOldString');
    t['__util'].push('iconStreamFromIcon');
    t['__util'].push('printd');
    t['__util'].push('printf');
    t['__util'].push('printx');
    t['__util'].push('scand');
    t['__util'].push('spansToXML');
    t['__util'].push('streamFromString');
    t['__util'].push('stringFromStream');
    t['__util'].push('xmlToSpans');
    t['__color'].push('black');
    t['__color'].push('blue');
    t['__color'].push('convert');
    t['__color'].push('cyan');
    t['__color'].push('dkGray');
    t['__color'].push('equal');
    t['__color'].push('gray');
    t['__color'].push('green');
    t['__color'].push('ltGray');
    t['__color'].push('magenta');
    t['__color'].push('red');
    t['__color'].push('transparent');
    t['__color'].push('white');
    t['__color'].push('yellow');
    t['__console'].push('clear');
    t['__console'].push('hide');
    t['__console'].push('println');
    t['__console'].push('show');
    t['__identity'].push('corpAbbrev');
    t['__identity'].push('corporation');
    t['__identity'].push('department');
    t['__identity'].push('email');
    t['__identity'].push('firstName');
    t['__identity'].push('lastName');
    t['__identity'].push('loginName');
    t['__identity'].push('name');
    t['__identity'].push('title');
    t['__thermometer'].push('begin');
    t['__thermometer'].push('cancelled');
    t['__thermometer'].push('duration');
    t['__thermometer'].push('end');
    t['__thermometer'].push('text');
    t['__thermometer'].push('toString');
    t['__thermometer'].push('value');

    return t;
}

function generateReport() {

    var msg = "";
    var testArr = ["__app", "__this", "__field", "__global", "__util", "__color", "__console", "__identity", "__template", "__thermometer"];
    var evaluators = ["app", "this", "getField('TextField0')", "global", "util", "color", "console", "identity", "getTemplate", "app.thermometer"];

    var t = getAdobePropObj();
    for (var prop in t) { //every category
        //__app for example

        var tItemArray = t[prop];
        var propIndex = testArr.indexOf(prop);

        msg += (prop + "\r\n");

        for (var i in tItemArray) {
            // i is the index
            var found = false;
            for (var j in eval(evaluators[propIndex])) //evaluator's properties
            {
                if (String(tItemArray[i]) == String(j)) {
                    found = true;
                    break;
                }
            }

            msg += (prop + "." + tItemArray[i] + " : " + found + "\r\n");
        }

    }

    getField("Report0").value = msg;
}
