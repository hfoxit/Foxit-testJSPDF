var globalMessage = "";

function testOutput(message) {
    globalMessage += message;
    globalMessage += "\n";
}

function testUndefined(what) {
    if (what == undefined)
        testOutput(what + " is undefined");
}

function testEqual(op1, op2, what) {
    if (op1 != op2)
        testOutput(what + " are not equal");
}

//////////// real test code starts

function testActiveDocs() {
    //this test would not pass. Why?
    var docs = app.activeDocs;
    testEqual(docs[0], this, "In activedocs docs[0] and this");

}

function testAddMenuItem() {
    if (app.addMenuItem == undefined) {
        testUndefined("app.addMenuItem()");
    }
}

//TODO: output
function testAlert() {
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
}

//setInterval setTimeOut clearInterval clearTimeOut
//TODO: output
function testInterval() {
    function sound() {
        app.beep(1);
    }
    timeout = app.setTimeOut("sound()", 1000);

    try {
        app.clearTimeOut(timeout);
    } catch (e) {

    }
}

//TODO: output
function testExecDialog() {
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
}

function testExecMenuItem() {
    app.execMenuItem("Open");
}

function testMailMsg() {
    app.mailMsg(false, "hong_zhang@foxitsoftware.com", "", "", "This is the subject", "This is the body");
}

function testNewFDF() {
    var fdf = app.newFDF();
    var oEntity = {
        firstName: "Fred",
        lastName: "Smith",
        fullName: "Fred Smith"
    };
    fdf.addContact(oEntity);
    fdf.save("C:\\Users\\Hong\\Downloads\\myFile.fdf");
}

function testOpenDoc() {
    var myDoc0 = app.openDoc("C:\\test\ doc\\formcont.txt");
    var myDoc1 = app.openDoc("C:\\test\ doc\\FoxitForm.pdf");
    var myDoc2 = app.openDoc("C:\\Users\\Hong\\Pictures\\workspace.PNG");
    this.closeDoc();
}

function testOpenFDF() {
    app.openFDF("C:\\Users\\Hong\\Downloads\\FoxitForm.fdf");
}

function testPopUpMenu() {
    var cChoice = app.popUpMenu("Introduction", "-", "Chapter 1", ["Chapter 2", "Chapter 2 Start", "Chapter 2 Middle", ["Chapter 2 End", "The End"]]);
}

function testPopUpMenuEx() {
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
}

function testResponse() {
    var cResponse = app.response({
        cQuestion: "How are you today?",
        cTitle: "Your Health Status",
        cDefault: "Fine",
        bPassword: true,
        cLabel: "Response:"
    });
}

function testColorEqual() {
    var res = color.equal(color.yellow, color.yellow);
}

function testColorConvert() {
    var cmyk = color.convert(["RGB", 1, 0, 0], "CMYK");
}

function testDoc() {

    function executeTest(object, property) //allowing incorrect syntax
    {
        console.println(object + property + " test starts");

        console.println(object.property);
        object.property = "FoxitTest";
        console.println(object.property);

        console.println(object + property + " test ends");

    }

    var propertyArray = [author, baseURL, bookmarkRoot, creationDate, creator, delay, dirty, docID, documentFileName, filesize, hidden, metadata, modDate, mouseX, mouseY, numFields, numIcons, numPages, numTemplates, pageNum, path, producer, subject, title, URL, zoomType];

    for (i = 0; i < propertyArray.length; i++) {
        executeTest(this, propertyArray[i]);
    }
}

function testMedia() {
    var annots = this.media.getAnnots({
        nPage: 0
    });
    console.println(annots.length);
}

function testAddAnnot() {
    var annot = this.addAnnot({
        page: 0,
        type: "Square",
        rect: [0, 0, 100, 100],
        name: "OnMarketShare",
        author: "A. C. Robat",
        contents: "This section needs revision."
    });
}

function testAddField() {
    var inch = 72;
    var aRect = this.getPageBox({
        nPage: 0
    });
    aRect[0] += .5 * inch; // from upper left hand corner of page.
    aRect[2] = aRect[0] + .5 * inch; // Make it .5 inch wide
    aRect[1] -= .5 * inch;
    aRect[3] = aRect[1] - 24;
    console.println(aRect[0] + ", " + aRect[1] + ", " + aRect[2] + ", " + aRect[3]);
    var f = this.addField("NextPage", "button", 0, aRect);
}

function testAddLink() {
    var linkWidth = 36;
    var linkHeight = 18;
    var linkRect = [0, linkHeight, linkWidth, 0];
    var lk = this.addLink(00, linkRect);
    lk.setAction("this.getURL('http://www.google.com');");
}

function testCloseDoc() {
    var myDoc = app.newDoc();
    myDoc.closeDoc(true);
}

function testCreateDataObject() {
    this.createDataObject("MyData", "This is some data.");
    var d = this.getDataObject("MyData");
    for (var i in d) console.println("MyData." + i + "=" + d[i]);
}

function testDeletePages() {
    this.deletePages({
        nStart: 1,
        nEnd: 3
    });
}

function testExportAsFDF() {
    this.exportAsFDF(true, true, null, true);
}

function testExportAsText() {
    var text = this.exportAsText();
    console.println(text);
}

function testExportAsXFDF() {
    this.exportAsXFDF();
}

function testExportDataObject() {
    this.createDataObject("MyData", "This is some data.");
    this.exportDataObject("MyData");
}

function testExtractPages() {
    this.extractPages({
        nStart: 1,
        cPath: "C:\\test doc\\a.pdf"
    });
}

function testGetAnnot() {
    testAddAnnot();
    var ann = this.getAnnot(0, "OnMarketShare");
    console.println("Found it! type: " + ann.type);
}

function testGetAnnots() {
    var annots = this.getAnnots({
        nPage: 0
    });
    annots.forEach(function(element) {
        for (var property in element)
            console.println(element[property]);
    });
}

function testAddIconAndGetFieldAndGetIcon() {
    var f = this.getField("pb1");
    this.addIcon("myButtonIcon", f.buttonGetIcon());

    var b = this.getField("pb2");
    var i = this.getIcon("myButtonIcon");
    b.buttonSetIcon(i);
}

function testGetAnnots3D() {
    var annots3d = this.getAnnots3D({
        nPage: 0
    });
    annots3d.forEach(function(element) {
        for (var property in element)
            console.println(element[property]);
    });
}

function testGetLinksAndGetPageBox() {
    var numLinks = 0;
    for (var p = 0; p < this.numPages; p++) {
        var b = this.getPageBox("Crop", p);
        var l = this.getLinks(p, b);
        console.println("Number of Links on page " + p + " is " + l.length);
        numLinks += l.length;
    }
    console.println("Number of Links in Document is " + numLinks);
}

function testGetNthFieldName() {
    for (var i = 0; i < this.numFields; i++)
        console.println("Field[" + i + "] = " + this.getNthFieldName(i));
}

function testGetOCGs() {
    var ocgArray = getOCGs(0);
    console.println(ocgArray.length);
}

function testGetPageNthWordAndGetPageNthWordQuadsAndGetPageNumWordsAndGetPageRotation() {

    var word = getPageNthWord({
        nPage: 0,
        nWord: 0
    });
    console.println(word);

    var quads = getPageNthWordQuads({
        nPage: 0,
        nWord: 0
    });

    console.println(quads);

    var cnt = getPageNumWords(0);
    console.println(cnt);

    var rotation = getPageRotation(100);
    console.println(rotation);
}

function testGetPageTransition() {
    var transitionArray = this.getPageTransition();
    console.println(transitionArray[0]);
}

function testGetPrintParams() {
    var pp = this.getPrintParams();
    for (prop in pp)
        console.println(pp[prop]);
}

function testGetURL() {
    this.getURL("http://www.adobe.com", true);
}

function testSimple() {
    this.gotoNamedDest("foxit");
    this.importAnFDF("C:\\test\ doc\\foxitForm.FDF");
    this.importAnXFDF("C:\\test\ doc\\foxitForm.FDF");
    this.importTextData("C:\\test\ doc\\foxitForm.txt");
    this.insertPages({
        nPage: -1,
        cPath: "C:\\test\ doc\\foxitText.txt",
        nStart: 0
    });
    this.mailDoc(true);
    this.mailForm(true);
    this.movePage({
        nPage: 1,
        nAfter: -1
    });
    this.print(false, 1, 1);
    this.replacePages({
        nPage: 0,
        cPath: "C:\\test\ doc\\foxitForm.pdf",
        nStart: 0,
        nEnd: 0
    });
    this.resetForm("Text Field0");
    this.saveAs("C:\\test\ doc\\foxitText1.txt");
    this.scroll(0, 300);
    var f = getField("TextField0");
    f.alignment = "right";
    f.borderStyle = border.s;
    f.hidden = true;
    console.println(f.source);

    f = getField("pb1");
    f.buttonAlignX = 100;
    f.buttonAlignY = 100;
    f.buttonFitBounds = true;
    console.println(f.buttonPosition);
    f.buttonPosition = position.textOnly; //position.iconOnly
    f.buttonScaleHow = scaleHow.anamorphic;
    f.buttonScaleWhen = scaleWhen.Never;
    console.println(getField("TextField0").calcOrderIndex);
    console.println(getField("pb1").calcOrderIndex);
    console.println(getField("TextField0").charLimit);
    getField("TextField0").comb = true;
    getField("ComboBox0").commitOnSelChange = true;
    console.println(getField("ComboBox0").currentValueIndices);

    var style = getField("TextField0").defaultStyle;
    style.textColor = rolor.red;
    getField("TextField0").defaultStyle = style;
    getField("TextField0").defaultValue = "34";
    getField("TextField0").display = display.hidden;
    console.println(getField("TextField0").doc.filesize);
    getField("TextField0").doNotScroll = true;
    getField("TextField0").doNotSpellCheck = false;
    getField("TextField0").fileSelect = true;
    getField("TextField0").fillColor = color.red;
    getField("TextField0").lineWidth = 3;
    getField("TextField0").multiline = true;
    getField("ListBox0").multipleSelection = true;
    getField("PushButton0").highlight = hightlight.i;
    console.println(getField("TextField0").name);
    console.println(getField("ListBox0").numItems);
    console.println(getField("TextField0").page);
    getField("TextField0").password = true;
    getField("TextField0").print = false;
    getField("RadioButton1").radiosInUnixon = false;
    getField("TextField0").readonly = true;

    var b = getField("TextField0");
    var aRect = b.rect;
    aRect[0] += 10;
    aRect[2] += 10;
    b.rect = aRect;

    getField("TextField0").required = true;
    getField("TextField0").richText = true;

    var spans = new Array();
    spans[0] = new Object();
    spans[0].text = "attention: \r";
    spans[0].textColor = color.blue;
    spans[0].textSize = 18;
    getField("TextField0").richValue = spans;

    getField("TextField0").rotation = 180;
    getField("TextField0").strokeColor = color.blue;

    getField("RadioButton1").style = style.st;

    getField("TextField0").submitName = "TextField100";
    getField("TextField0").textColor = color.blue;
    getField("TextField0").textFont = font.TimesI;
    getField("TextField0").textSize = 28;
    console.println(getField("TextField0").type);
    getField("TextField0").userName = "A TextField";
    getField("TextField0").value = "Two TextFields";
    getField("TextField0").value = 50;
    console.println(getField("TextField0").valueAsString);



    //on click
    f = getField("CheckBox0");
    f.delay = true;
    f.borderStyle = border.d;
    f.strokeWidth = 2;
    f.delay = false;
    f.editable = true;
    f.exportValues = ["Meh", "Boo"];


    ////////field methods
    getField("TextField0").fileSelect = true;
    getField("TextField0").browseForFileToSubmit();

    console.println(getField("PushButton0").buttonGetCaption());
    //buttonGetIcon at line 344
    getField("pb0").buttonImportIcon("C:\\test\ doc\\FoxitForm.pdf");
    getField("pb0").buttonSetCaption("HelloButton");

    //buttonSetIcon at line 344
    getField("CheckBox0").checkThisBox(0, true);
    getField("ComboBox0").clearItems();

    getField("CheckBox0").defaultIsChecked(0, true);
    resetForm(["CheckBox0"]);

    getField("ComboBox0").deleteItemAt(1);

    var f = this.getField("f");
    var a = f.getArray();
    console.println(a[1].value);

    console.println(getField("ComboBox0").getItemAt(1));

    var lockObject = {
        action: "Include",
        fields: ["pb0", "TextField0"]
    };

    getField("Signature0").setLock(lockObject);
    var lo = getField("Signature0").getLock();
    console.println(lo.fields[1]);

    getField("ComboBox0").insertItemAt("sam", "s", -1);
    console.println(getField("CheckBox0").isBoxChecked(0));

    console.println(getField("CheckBox0").isDefaultChecked(0));

    var f = this.addField("actionField", "button", 0, [20, 100, 100, 20]);
    f.setAction("MouseUp", "app.beep(0);");
    f.fillColor = color.ltGray;
    f.buttonSetCaption("Beep");
    f.borderStyle = border.b;
    f.lineWidth = 3;
    f.strokeColor = color.red;
    f.highlight = highlight.p;

    getField("CheckBox0").setExportValues(["Bar", "Foo"]);
    getField("TextField0").setFocus();

    getField("ComboBox0").setItems([
        ["item0", "export0"],
        ["item1", "export1"],
        ["item2", "export2"]
    ]);

    var sigMods = getField("Signature0").signatureGetModifications();
    var fields = sigMods.formFieldsCreated;
    for (var i = 0; i < fields.length; i++) {
        console.println(fields[i].name);
    }


    var sig = getField("Signature0").signatureInfo();
    console.println("Signature Attributes:");
    for (i in sig) console.println(i + " = " + s[i]);

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
    console.println("Filter name:" + seedValue.filter);
    console.println("Flags:" + seedValue.flags);

    var status = sigFie.signatureValidate();
    sig = getField("Signature0").signatureInfo();
    var msg = "";
    if (status < 3)
        msg = "Signature not valid!" + sig.statusText;
    else
        msg = "Signature valid! " + sig.statusText;

    console.println(msg);

    console.println(identity.corporation);
    console.println(identity.email);
    console.println(identity.loginName);
    console.println(identity.name);

    global.radius = 8;
    global.setPersistent("radius", true);
    console.println(global.radius);

    var t = getTemplate("temp0");
    if (t == undefined) {
        console.println("template undefined");
    }
    t.spawn(numPages, false, false);
    console.println(t.name);
    t.hidden = true;

    console.println(util.printf("hex: %x", 1209));
    console.println(util.printx("(XXX) XXX - XXXX", "abcdefghij"));
    console.println(util.printd("mmmm dd, yyyy", new Date()));

    var dstring = util.printd("mmmm dd, yyyy", new Date());
    var dreal = util.scand("mmmm dd, yyyy", dstring);

    console.println(dreal);
    console.println(util.printd("mmmm dd, yyyy", dreal));
}

function generateTestPDFScript() {
    var test = {
        appMethods: ["alert", "beep", "browseForDoc", "clearInterval", "clearTimeOut",
            "execDialog", "execMenuItem", "findComponent", "goBack", "goForward",
            "launchURL", "mailMsg", "newDoc", "newFDF", "openDoc",
            "openFDF", "popUpMenu", "popUpMenuEx", "response", "setInterval",
            "setTimeOut"
        ]
    };

    function generateButtons(arr, page, verticalOffset) {
        //arr is the array of field names
        //verticalOffset is where they should start in a page

        var leftMargin = 43;
        var standardWidth = 54;
        var standardHeight = 20;
        var standardGap = 20;
        var standardRowCapacity = 5;

        //adding label
        

        //adding buttons
        for (var i = 0; i < arr.length; i++) {
            var aRect = [0, 0, 0, 0];
            var horizontalIndex = i % standardRowCapacity;
            var verticalIndex = Math.floor(i / standardRowCapacity);
            aRect[0] = leftMargin + (standardWidth + standardGap) * horizontalIndex;
            aRect[2] = aRect[0] + standardWidth;
            aRect[1] = verticalOffset - (standardHeight + standardGap) * verticalIndex;
            aRect[3] = aRect[1] - standardHeight;
            var f = this.addField(arr[i], "button", page, aRect);
            f.buttonSetCaption(arr[i]);
            var script = "functions[\"" + arr[i] + "\"]();"
            f.setAction("MouseUp", script);
        }

    }

    generateButtons(test["appMethods"], 0, 628);

}

function removeTestScript() {
    var test = {
        appMethods: ["alert", "beep", "browseForDoc", "clearInterval", "clearTimeOut",
            "execDialog", "execMenuItem", "findComponent", "goBack", "goForward",
            "launchURL", "mailMsg", "newDoc", "newFDF", "openDoc",
            "openFDF", "popUpMenu", "popUpMenuEx", "response", "setInterval",
            "setTimeOut"
        ]
    };

    for (var i in test) {
        var arr = test[i];
        for (var j = 0; j < arr.length; j++) {
            removeField(arr[j]);
        }
    }
}
