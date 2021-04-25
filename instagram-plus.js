// ==UserScript==
// @name          Instagram+
// @namespace     http://userstyles.org
// @description	  This is a Dark Mode for Instagram that has lots of things more.
// @author        Sabbir (shasabbir234@gmail.com)
// @homepage      https://github.com/shasabbir/instagram-plus-dark
// @icon         https://svgshare.com/i/VDM.svg
// @include       http://instagram.com/*
// @include       https://instagram.com/*
// @include       http://*.instagram.com/*
// @include       https://*.instagram.com/*
// @run-at        document-idle
// @version       1.105
// ==/UserScript==

function dark() {
    var css = [
        " /* Full wide start */",

        /* "/Individual Post/ ",
	".ltEKP .QBXjJ{",
	"    border: none;",
	"}",
	"._8-yf5 [d=\"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\"]{",
	"	filter: invert(0) !important;",
	"    fill: #12B6A9 !important;",
	"}",
	".JyscU.ePUX4 .UE9AK{",
	"    background-color: var(--bg3-color) !important;",
	"    border-left: none;",
	"    border-bottom: none;",
	"}",
	".JyscU.ePUX4 .eo2As{",
	"    border-left: none;",
	"    border-top: none;",
	"}",
	".JyscU .Slqrh{",
	"    border-top: none;",
	"}",
	"",
	"._9AhH0 {",
	"    display: none;",
	"}",
	"",
	".PyenC, .fXIG0 {",
	"    height: 135px;",
	"    left: 50%;",
	"    margin-left: -67px;",
	"    margin-top: -67px;",
	"    top: 50%;",
	"    width: 135px;",
	"    z-index: 1;",
	"}",
	"",
	".PdwC2 {",
	"    max-width: 65% !important;",
	"    max-height: 100% !important;",
	"}",
	"",
	".JyscU ._97aPb,.eLAPa,.pR7Pc, .rQDP3  {",
	"    max-height: 100% !important;",
	"}",
	".glyphsSpriteDirect__outline__24__grey_9, .glyphsSpriteFacebook_circle__outline__24__grey_9, .glyphsSpriteFacebook_circle_filled_24, .glyphsSpriteApp_messenger__outline__24__grey_9, .glyphsSpriteApp_twitter__outline__24__grey_9, .glyphsSpriteMail__outline__24__grey_9, .glyphsSpriteLink__outline__24__grey_9, .glyphsSpriteLite_app_icon{",
	"    filter: invert(1);",
	"}",
	"",
    "/Individual Post/", */
        /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*----------------------------------------------------------------------------------------------------------------------------------------------------*/
        "/*post hover */",
        ".qn-0x,.Ln-UN{",
        "background-color: rgba(0, 0, 0, 0)!important;",
        "}",
        ".-V_eO{",
        "opacity:0 !important;",
        "}",

        "body /* to even out with the scrollbar container width */ {",
        "    margin-left:6px;",
        "}",
        ".M9sTE  .L_LMM  .JyscU  .ePUX4{",
        "    width:100%!important;",
        "    max-width:none!important;",
        "    padding:0!important;",
        "    margin:2.5px 5px!important;",
        "}",
        "body /* roboto as font */ {",
        "    font-family:roboto;",
        "    text-rendering:geometricPrecision; ",
        "}",
        ".v9tJq /* stretches posts grid to the full width of the screen */ {",
        "    max-width:none!important;",
        "    padding:0!important;",
        "    width:100%!important;",
        "}",
        "._bz0w, .weEfm, .v9tJq  /* removes margins from posts */ {",
        "    margin:2.5px 5px!important;",
        "}",
        ":focus /* hides ugly blue outline from elements which are in focus currently */ {",
        "    outline:0;",
        "}",
        ".vtbgv /* adds a margin between sticky header and profile header */ {",
        "    margin-top:44px;",
        "}",
        ".aUCRo /* hides the sticky header when scrolling past profile header */, ._49XvD, .iHqQ7, .SkY6J /* hides stories, follow suggestions and instagram links from the homepage sidebar */ {",
        "    display:none;",
        "}",
        ".qqm6D /* centers higlights */ {",
        "    margin:0 auto;",
        "}",
        ".KQA-S, ._1MzIy, ._3MPWk, ._8Rm4L, .zMhqu /* border radius for posts */ {",
        "    border-radius:16px !important;",
        "}",
        ".JYWcJ, .JYWcJ:link, .JYWcJ:visited /* sets font weight to regular on photo tags */ {",
        "    font-weight:400;",
        "}",
        "  /* scrollbar css */",
        "  /* total width */",
        "::-webkit-scrollbar {width:6px}",
        "::-webkit-scrollbar:horizontal {height:6px}",
        "",
        "/* background of the scrollbar except button or resizer */",
        "::-webkit-scrollbar-track {background-color:rgba(232,232,232,.2)}",
        "::-webkit-scrollbar-track:horizontal {background-color:rgba(232,232,232,.2)}",
        "",
        "/* scrollbar itself */",
        "::-webkit-scrollbar-thumb {background-color:rgba(152,152,152);border-radius:16px;width:6px;transition:all 3s ease}",
        "::-webkit-scrollbar-thumb:hover {background-color:rgba(104,104,104)}",
        "",
        "/* set button(top and bottom of the scrollbar) */",
        "::-webkit-scrollbar-button {display:none}",
        " /* scrollbar css end */",
        " /* Full wide end */",
        "body{",
        "background: black !important;",
        "}",
        "",
        "/*variables 1*/",
        "",
        ".sDN5V {",
        "    /*variables modification*/",
        "    ",
        " /* the panels and the navigation bar */ ",
        "    --d87: 0,0,0!important;",
        " /* background  */",
        "    --b3f: 5,5,5!important;",
        " /* general borders I think */",
        "    --b6a: 30,30,30!important;",
        " /* border that goes for photos */",
        "    --ce3: 30,30,30 !important;",
        " /* Name of the Stories */",
        "    --i1d: 255,255,255 !important;",
        " /* white bar in the activities part */",
        "    --f23: 0,0,0!important;",
        " /* likes */",
        "    --f75: 255,255,255;",
        " /* mention */",
        "    --fe0: 245,245,245 !important;",
        " /* I sew up the photos in the profiles */",
        "    --b38: 100,100,100 !important;",
        " /* chat selected */",
        "    --bb2: 20,20,20!important;",
        "",
        "    ",
        "    /*------------------------------*/",
        "    --edc: 199,199,199;",
        "    --ca6: 219,219,219;",
        "    --cdd: 38,38,38;",
        "    --e22: 199,199,199;",
        "    --e62: 245,251,255;",
        "    --b2f: 88,195,34;",
        "    --c8c: 168,168,168;",
        "    --jd9: 0,0,0;",
        "    --j64: 54,54,54;",
        "    --a97: 243,243,243;",
        "    --d20: 38,38,38;",
        "}",
        "",
        "/*Variables 2*/",
        ".ekjoN, .sDN5V {",
        "     /*variables modification*/",
        "",
        "    /*search bar */",
        "    --f52: 161,161,161 !important;",
        "	/*multimedia background */",
        "    --jb7: 10,10,10 !important;",
        "   /*when you share*/",
        "    --fa7: 27,41,52;",
        "",
        "",
        "	/*---------------------------------*/",
        "    --h1d: 255,255,255;",
        "    --de5: 255,255,255;",
        "    --d69: 0,149,246;",
        "    --b86: 88,195,34;",
        "    --i30: 237,73,86;",
        "    --d62: 255,255,255;",
        "    --e4f: 54,54,54;",
        "    --a72: 255,255,255;",
        "    --ie3: 142,142,142;",
        "    --c37: 237,73,86;",
        "    --f24: 0,149,246;",
        "    --jbb: 53,121,234;",
        "    --eca: 255,255,255;",
        "    --ba8: 168,168,168;",
        "    --eac: 237,73,86;",
        "}",
        "/*Homepage*/",
        "",
        "",
        "",
        "/*scroll bar*/",
        "",
        "*::-webkit-scrollbar {",
        "	width: 15px;",
        "	background:#121212;",
        "",
        "}",
        "",
        "*::-webkit-scrollbar-thumb {",
        "	background: rgba(255,255,255,.3);",
        "}",
        "",
        "/*LOGO*/",
        ".s4Iyt {",
        "    filter: invert(1) !important;",
        "}",
        "",
        "/*three dots of more options and the other icons on the navigation bar*/",
        "",
        "",
        "a > ._8-yf5 {",
        "    fill: rgb(255,255,255) !important;",
        "}",
        "div > ._8-yf5 {",
        "    fill: rgb(255,255,255) !important;",
        "}",
        "",
        "",
        
        "span svg[aria-label=\"Me gusta\"], span svg[aria-label=\"Like\"], span svg[aria-label=\"Hou van\"], span svg[aria-label=\"To se mi líbí\"], span svg[aria-label=\"Synes godt om\"], span svg[aria-label=\"Gefällt mir\"], span svg[aria-label=\"Μου αρέσει!\"], span svg[aria-label=\"Tykkää\"], span svg[aria-label=\"J’aime\"], span svg[aria-label=\"Suka\"], span svg[aria-label=\"Mi piace\"], span svg[aria-label=\"いいね！\"], span svg[aria-label=\"좋아요\"], span svg[aria-label=\"Liker\"], span svg[aria-label=\"Vind ik leuk\"], span svg[aria-label=\"Lubię to!\"], span svg[aria-label=\"Curtir\"], span svg[aria-label=\"Gosto\"], span svg[aria-label=\"Нравится\"], span svg[aria-label=\"Gilla\"], span svg[aria-label=\"ถูกใจ\"], span svg[aria-label=\"I-like\"], span svg[aria-label=\"Beğen\"], span svg[aria-label=\"赞\"], span svg[aria-label=\"讚\"], span svg[aria-label=\"লাইক\"], span svg[aria-label=\"પસંદ\"], span svg[aria-label=\"लाइक करें\"], span svg[aria-label=\"Sviđa mi se\"], span svg[aria-label=\"Tetszik\"], span svg[aria-label=\"ಇಷ್ಟ\"], span svg[aria-label=\"ലൈക്കുചെയ്യുക\"], span svg[aria-label=\"पसंत करा\"], span svg[aria-label=\"मनपराउनुहोस्\"], span svg[aria-label=\"ਪਸੰਦ ਕਰੋ\"], span svg[aria-label=\"කැමැත්ත\"], span svg[aria-label=\"Páči sa mi to\"], span svg[aria-label=\"விருப்பம்\"], span svg[aria-label=\"ఇష్టం\"], span svg[aria-label=\"Thích\"], span svg[aria-label=\"讚好\"], span svg[aria-label=\"Харесва ми\"], span svg[aria-label=\"Îmi place\"], span svg[aria-label=\"Свиђа ми се\"], span svg[aria-label=\"Подобається\"]{",
        " fill: rgb(255,255,255) !important;",
        "}",
        "",
        "/*.QBdPU > svg[aria-label=\"Me gusta\"], .QBdPU > svg[aria-label=\"Like\"]{",
        " fill: rgb(255,255,255) !important;",
        "}*/",
        "",
        ".ZyFrc> svg{",
        " fill: rgb(237, 73, 86) !important;",
        "}",
        "",
        "",
        "/*search bar*/",
        ".Di7vw {",
        "    background: #262626 !important;",
        "}",
        ".x3qfX {",
        "  background: #262626 !important;",
        "}",
        "",
        "/*mute video*/",
        ".IhCmn > svg{",
        "    fill: #262626 !important;",
        "}",
        "",
        "",
        "/*perfiles*/",
        "",
        "",
        "/*buttons*/",
        "span button.-fzfL {",
        "    border-color: #fff !important;",
        "}",
        ".glyphsSpriteFriend_Follow{",
        " filter: invert(1) !important;",
        "}",
        ".coreSpriteDropdownArrowGrey9{",
        " filter: invert(1) !important;",
        "}",
        "",
        "",
        ".RnEpo {",
        "    background-color: rgba(20,20,20,.65);",
        "}",
        "",
        "",
        "a, button,h2,span{",
        "    color: #ffffff !important;",
        "}",
        "",
        "/*posts*/",
        ".IhCmn {",
        "    background-color: #fff !important;",
        "}",
        "/* Big following list */",
        "body > div.RnEpo.Yx5HN > div{",
        "    max-height: 2200px !important;",
        "}",
        "span._2dbep,a._2dbep.qNELH.kIKUG{",
        "    width: 80px !important;",
        "    height: 80px !important;",
        "}",
        "canvas.CfWVH{",
        "    width: 90px !important;",
        "    height: 90px !important;",
        "}",
        "#react-root > section > main > div > header > div > div > span {",
        "    width: 150px !important;",
        "    height: 150px !important;",
        "}",
        "#react-root > section > main > div > header > div > div > canvas{",
        "    width: 168px !important;",
        "    height: 168px !important;",
        "}",
        "#react-root > section > div > div._lz6s.Hz2lF > div > div.ctQZg > div > div:nth-child(5) > span,#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > span{",
        "    width: 22px !important;",
        "    height: 22px !important;",
        "}",
        "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > canvas{",
        "    width: 66px !important;",
        "    height: 66px !important;",
        "}",
        "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a > img,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a{",
        "    width: 56px !important;",
        "    height: 56px !important;",
        "}",
        "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > canvas{",
        "    width: 44px !important;",
        "    height: 44px !important;",
        "}",
        "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > a,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > span{",
        "    width: 32px !important;",
        "    height: 32px !important;",
        "}",
        "#react-root > section > main > section > div.cGcGK > * > div > * > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span,body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span{",
        "    width: 20px !important;",
        "    height: 20px !important;",
        "}",

        ".theme1 {",
        "display: none !important;",
        "width: 100% !important;",
        "position: absolute !important;",
        "background-color: black !important;",
        /*
  "box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);",*/
        "z-index: 1 !important;",
        "}",
        ".theme1 button, .theme {",
        "background-color: black !important;",
        "color: white !important;",

        "text-align: center !important;",
        "text-decoration: none !important;",
        "display: inline-block !important;",
        "}",

        ".theme:hover .theme1 {",
        "display: block !important;",
        "background-color:black !important;",
        "}",
        ".theme h2 {",
        "border: 5px solid black !important;",
        " font-size: 10px !important;",
        "background-color:black !important;",
        "}",
        ".theme {",
        "margin-left: 20px !important;",
        "}",
    "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.mLCHD._1OSdk > button > div > span > svg {",//similar account
    "fill: white !important;",
    "}",
		"#react-root > section > main > div > div.NP414.ccgHY.GZkEI > div.Igw0E.IwRSH.eGOV_._4EzTm > div > button.Szr5J._6CZji > div,#react-root > section > main > div > div.NP414.ccgHY.GZkEI > div.Igw0E.IwRSH.eGOV_._4EzTm > div > button.Szr5J.POSa_ > div {",//more similar arrow
      "background: #4a4552a1 !important;",
    	"border-bottom-left-radius: 20px !important;",
    	"border-top-left-radius: 20px !important;",
    	"border-bottom-right-radius: 8px !important;",
    	"border-top-right-radius: 8px !important;",
        "}",
			"#react-root > section > main > div > div._4bSq7 > div > div > div > ul > * > div {",//highlighted stories
    "border-radius: 16px !important;",
    "background: #0f0e0e !important;",
"}",


    ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
    goodies();
}
function blue() {var css = [
    " /* Full wide start */",

    /* "/Individual Post/ ",
	".ltEKP .QBXjJ{",
	"    border: none;",
	"}",
	"._8-yf5 [d=\"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\"]{",
	"	filter: invert(0) !important;",
	"    fill: #12B6A9 !important;",
	"}",
	".JyscU.ePUX4 .UE9AK{",
	"    background-color: var(--bg3-color) !important;",
	"    border-left: none;",
	"    border-bottom: none;",
	"}",
	".JyscU.ePUX4 .eo2As{",
	"    border-left: none;",
	"    border-top: none;",
	"}",
	".JyscU .Slqrh{",
	"    border-top: none;",
	"}",
	"",
	"._9AhH0 {",
	"    display: none;",
	"}",
	"",
	".PyenC, .fXIG0 {",
	"    height: 135px;",
	"    left: 50%;",
	"    margin-left: -67px;",
	"    margin-top: -67px;",
	"    top: 50%;",
	"    width: 135px;",
	"    z-index: 1;",
	"}",
	"",
	".PdwC2 {",
	"    max-width: 65% !important;",
	"    max-height: 100% !important;",
	"}",
	"",
	".JyscU ._97aPb,.eLAPa,.pR7Pc, .rQDP3  {",
	"    max-height: 100% !important;",
	"}",
	".glyphsSpriteDirect__outline__24__grey_9, .glyphsSpriteFacebook_circle__outline__24__grey_9, .glyphsSpriteFacebook_circle_filled_24, .glyphsSpriteApp_messenger__outline__24__grey_9, .glyphsSpriteApp_twitter__outline__24__grey_9, .glyphsSpriteMail__outline__24__grey_9, .glyphsSpriteLink__outline__24__grey_9, .glyphsSpriteLite_app_icon{",
	"    filter: invert(1);",
	"}",
	"",
    "/Individual Post/", */

    "body /* to even out with the scrollbar container width */ {",
    "    margin-left:6px;",
    "}",
    ".M9sTE  .L_LMM  .JyscU  .ePUX4{",
    "    width:100%!important;",
    "    max-width:none!important;",
    "    padding:0!important;",
    "    margin:2.5px 5px!important;",
    "}",
    "body /* roboto as font */ {",
    "    font-family:roboto;",
    "    text-rendering:geometricPrecision; ",
    "}",
    ".v9tJq /* stretches posts grid to the full width of the screen */ {",
    "    max-width:none!important;",
    "    padding:0!important;",
    "    width:100%!important;",
    "}",
    "._bz0w, .weEfm, .v9tJq  /* removes margins from posts */ {",
    "    margin:2.5px 5px!important;",
    "}",
    ":focus /* hides ugly blue outline from elements which are in focus currently */ {",
    "    outline:0;",
    "}",
    ".vtbgv /* adds a margin between sticky header and profile header */ {",
    "    margin-top:44px;",
    "}",
    ".aUCRo /* hides the sticky header when scrolling past profile header */, ._49XvD, .iHqQ7, .SkY6J /* hides stories, follow suggestions and instagram links from the homepage sidebar */ {",
    "    display:none;",
    "}",
    ".qqm6D /* centers higlights */ {",
    "    margin:0 auto;",
    "}",
    ".KQA-S, ._1MzIy, ._3MPWk, ._8Rm4L, .zMhqu /* <- border radius for posts and stories in profile -> */,.Igw0E,.rBNOH,.YBx95,._4EzTm{",
    "    border-radius:16px!important;",
    "}",
    ".JYWcJ, .JYWcJ:link, .JYWcJ:visited /* sets font weight to regular on photo tags */ {",
    "    font-weight:400;",
    "}",
    "  /* scrollbar css */",
    "  /* total width */",
    "::-webkit-scrollbar {width:6px}",
    "::-webkit-scrollbar:horizontal {height:6px}",
    "",
    "/* background of the scrollbar except button or resizer */",
    "::-webkit-scrollbar-track {background-color:rgba(50, 55, 87)}",
    "::-webkit-scrollbar-track:horizontal {background-color:rgba(50, 55, 87)}",
    "",
    "/* scrollbar itself */",
    "::-webkit-scrollbar-thumb {background-color:rgba(42, 52, 115);border-radius:16px;width:6px;transition:all 3s ease}",
    "::-webkit-scrollbar-thumb:hover {background-color:rgba(135, 141, 176)}",
    "",
    ".Igw0E,.rBNOH,.eGOV_,.ybXk5,._4EzTm,.XfCBB,.HVWg4,.IwRSH{",
    "background: rgb(0,6,51) !important;",
    "}",
    /*".uk0Yc,.GGDyX{",
    "background: #5461bf !important;",
    "}",*/
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div{",
    "padding:16px 16px !important;",
    "}",
    "",
    "/* set button(top and bottom of the scrollbar) */",
    "::-webkit-scrollbar-button {display:none}",
    " /* scrollbar css end */",
    " /* Full wide end */",
    "body{",
    "background: #000633 !important;",
    "}",
    "/*post hover */",
    ".qn-0x,.Ln-UN{",
    "background-color: rgba(0, 0, 0, 0)!important;",
    "}",
    ".-V_eO{",
    "opacity:0 !important;",
    "}",


    "/*fb and other icon*/",
    "FuWoR,.-wdIA,.x7xX2{",
    "background: #474769 !important;",
    "}",
    "",
    "/*variables 1*/",
    "",
    ".sDN5V {",
    "    /*variables modification*/",
    "    ",
    " /* the panels and the navigation bar  */ ",
    "    --d87: 0, 6, 51!important;",
    " /* background  */",
    "    --b3f: 10,15,57!important;",
    " /* general borders I think */",
    "    --b6a: 30,30,30!important;",
    " /* border that goes for photos */",
    "    --ce3: 30,30,30 !important;",
    " /* Name of the Stories */",
    "    --i1d: 255,255,255 !important;",
    " /* white bar in the activities part */",
    "    --f23: 0, 6, 51!important;",
    " /* likes */",
    "    --f75: 255,255,255;",
    " /* mention */",
    "    --fe0: 245,245,245 !important;",
    " /* I sew up the photos in the profiles */",
    "    --b38: 100,100,100 !important;",
    " /* chat selected */",
    "    --bb2: 10,15,57!important;",
    "",
    "    ",
    "    /*------------------------------*/",
    "    --edc: 199,199,199;",
    "    --ca6: 219,219,219;",
    "    --cdd: 0,6,51;",
    "    --e22: 199,199,199;",
    "    --e62: 245,251,255;",
    "    --b2f: 88,195,34;",
    "    --c8c: 168,168,168;",
    "    --jd9: 0, 6, 51;",
    "    --j64: 54,54,54;",
    "    --a97: 243,243,243;",
    "    --d20: 0,6,51;",
    "}",
    "",

    "/*Variables 2*/",
    ".ekjoN, .sDN5V {",
    "     /*variables modification*/",
    "",
    "    /*search bar */",
    "    --f52: 161,161,161 !important;",
    "	/*multimedia background */",
    "    --jb7: 10,10,10 !important;",
    "   /*when you share*/",
    "    --fa7: 27,41,52;",
    "",
    "",
    "	/*---------------------------------*/",
    "    --h1d: 255,255,255;",
    "    --de5: 255,255,255;",
    "    --d69: 0,149,246;",
    "    --b86: 88,195,34;",
    "    --i30: 237,73,86;",
    "    --d62: 255,255,255;",
    "    --e4f: 54,54,54;",
    "    --a72: 255,255,255;",
    "    --ie3: 142,142,142;",
    "    --c37: 237,73,86;",
    "    --f24: 0,149,246;",
    "    --jbb: 53,121,234;",
    "    --eca: 255,255,255;",
    "    --ba8: 168,168,168;",
    "    --eac: 237,73,86;",
    "}",
    "/*Homepage*/",
    "",
    "",
    "",
    "/*scroll bar*/",
    "",
    "*::-webkit-scrollbar {",
    "	width: 15px;",
    "	background:#121212;",
    "",
    "}",
    "",
    "*::-webkit-scrollbar-thumb {",
    "	background: rgba(255,255,255,.3);",
    "}",
    "",
    "/*LOGO*/",
    ".s4Iyt {",
    "    filter: invert(1) !important;",
    "}",
    "",
    "/*three dots of more options and the other icons on the navigation bar*/",
    "",
    "",
    "a > ._8-yf5 {",
    "    fill: rgb(255,255,255) !important;",
    "}",
    "div > ._8-yf5 {",
    "    fill: rgb(255,255,255) !important;",
    "}",
    "",
    "",
    "/*los MEGUSTA */",
    "span svg[aria-label=\"Me gusta\"], span svg[aria-label=\"Like\"], span svg[aria-label=\"Hou van\"], span svg[aria-label=\"To se mi líbí\"], span svg[aria-label=\"Synes godt om\"], span svg[aria-label=\"Gefällt mir\"], span svg[aria-label=\"Μου αρέσει!\"], span svg[aria-label=\"Tykkää\"], span svg[aria-label=\"J’aime\"], span svg[aria-label=\"Suka\"], span svg[aria-label=\"Mi piace\"], span svg[aria-label=\"いいね！\"], span svg[aria-label=\"좋아요\"], span svg[aria-label=\"Liker\"], span svg[aria-label=\"Vind ik leuk\"], span svg[aria-label=\"Lubię to!\"], span svg[aria-label=\"Curtir\"], span svg[aria-label=\"Gosto\"], span svg[aria-label=\"Нравится\"], span svg[aria-label=\"Gilla\"], span svg[aria-label=\"ถูกใจ\"], span svg[aria-label=\"I-like\"], span svg[aria-label=\"Beğen\"], span svg[aria-label=\"赞\"], span svg[aria-label=\"讚\"], span svg[aria-label=\"লাইক\"], span svg[aria-label=\"પસંદ\"], span svg[aria-label=\"लाइक करें\"], span svg[aria-label=\"Sviđa mi se\"], span svg[aria-label=\"Tetszik\"], span svg[aria-label=\"ಇಷ್ಟ\"], span svg[aria-label=\"ലൈക്കുചെയ്യുക\"], span svg[aria-label=\"पसंत करा\"], span svg[aria-label=\"मनपराउनुहोस्\"], span svg[aria-label=\"ਪਸੰਦ ਕਰੋ\"], span svg[aria-label=\"කැමැත්ත\"], span svg[aria-label=\"Páči sa mi to\"], span svg[aria-label=\"விருப்பம்\"], span svg[aria-label=\"ఇష్టం\"], span svg[aria-label=\"Thích\"], span svg[aria-label=\"讚好\"], span svg[aria-label=\"Харесва ми\"], span svg[aria-label=\"Îmi place\"], span svg[aria-label=\"Свиђа ми се\"], span svg[aria-label=\"Подобається\"]{",
    " fill: rgb(255,255,255) !important;",
    "}",
    "",
    "/*.QBdPU > svg[aria-label=\"Me gusta\"], .QBdPU > svg[aria-label=\"Like\"]{",
    " fill: rgb(255,255,255) !important;",
    "}*/",
    "",
    ".ZyFrc> svg{",
    " fill: rgb(237, 73, 86) !important;",
    "}",
    "",
    "",
    "/*search bar*/",
    ".Di7vw {",
    "    background: #415382 !important;",
    "}",
    ".x3qfX {",
    "  background: #415382 !important;",
    "}",
    "",
    "/*mute video*/",
    ".IhCmn > svg{",
    "    fill: #415382 !important;",
    "}",
    "",
    "",
    "/*perfiles*/",
    "",
    "",
    "/*buttons*/",
    "span button.-fzfL {",
    "    border-color: #fff !important;",
    "}",
    ".glyphsSpriteFriend_Follow{",
    " filter: invert(1) !important;",
    "}",
    ".coreSpriteDropdownArrowGrey9{",
    " filter: invert(1) !important;",
    "}",
    "",
    "",
    ".RnEpo {",
    "    background-color: #0a0f39;",
    "}",
    "",
    "",
    "a, button,h2,span{",
    "    color: #ffffff !important;",
    "}",
    "",
    "/*posts*/",
    ".IhCmn {",
    "    background-color: #fff !important;",
    "}",
    "/* Big following list */",
    "body > div.RnEpo.Yx5HN > div{",
    "    max-height: 2200px !important;",
    "}",
    "span._2dbep,a._2dbep.qNELH.kIKUG{",
    "    width: 80px !important;",
    "    height: 80px !important;",
    "}",
    "canvas.CfWVH{",
    "    width: 90px !important;",
    "    height: 90px !important;",
    "}",
    "#react-root > section > main > div > header > div > div > span {",
    "    width: 150px !important;",
    "    height: 150px !important;",
    "}",
    "#react-root > section > main > div > header > div > div > canvas{",
    "    width: 168px !important;",
    "    height: 168px !important;",
    "}",
    "#react-root > section > div > div._lz6s.Hz2lF > div > div.ctQZg > div > div:nth-child(5) > span,#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > span{",
    "    width: 22px !important;",
    "    height: 22px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > canvas{",
    "    width: 66px !important;",
    "    height: 66px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a > img,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a{",
    "    width: 56px !important;",
    "    height: 56px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > canvas{",
    "    width: 44px !important;",
    "    height: 44px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > a,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > span{",
    "    width: 32px !important;",
    "    height: 32px !important;",
    "}",
    "#react-root > section > main > section > div.cGcGK > * > div > * > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span,body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span{",
    "    width: 20px !important;",
    "    height: 20px !important;",
    "}",

    ".theme {",
    "background-color: rgb(20, 26, 71) !important;",
    " position: relative !important;",
    "display: inline-block !important;",
    "}",

    ".theme1 {",
    "width: 100% !important;",
    "display: none !important;",
    "position: absolute !important;",
    "background-color: rgb(20, 26, 71) !important;",
    "min-width: 7px !important;",
    "z-index: 1 !important;",
    "}",
    ".theme1 button, .theme {",

    "background-color: rgb(20, 26, 71) !important;",
    "color: white !important;",
    "text-align: center !important;",
    "text-decoration: none !important;",
    "display: inline-block !important;",
    "}",

    ".theme:hover .theme1 {",
    "display: block !important;",
    "background-color:rgb(20, 26, 71) !important;",
    "}",
    ".theme h2 {",
    "border: 5px solid rgb(20, 26, 71)  !important;",
    " font-size: 10px !important;",
    "background-color:rgb(20, 26, 71)  !important;",
    "}",
    ".theme {",
    "margin-left: 20px !important;",
    "}",
    "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div > div > span > span.mLCHD._1OSdk > button > div {",//similar account
    "background-color: #2196f3 !important;",
    "}",
    "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.mLCHD._1OSdk > button > div > span > svg {",//similar account
    "fill: white !important;",
    "}",
		"#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.mLCHD._1OSdk > button > div {",//similar account
    "background-color: #20183000 !important;",
    "}",
		//""#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.mLCHD._1OSdk > button > div > span > svg



].join("\n");
                 if (typeof GM_addStyle != "undefined") {
                     GM_addStyle(css);
                 } else if (typeof PRO_addStyle != "undefined") {
                     PRO_addStyle(css);
                 } else if (typeof addStyle != "undefined") {
                     addStyle(css);
                 } else {
                     var node = document.createElement("style");
                     node.type = "text/css";
                     node.appendChild(document.createTextNode(css));
                     var heads = document.getElementsByTagName("head");
                     if (heads.length > 0) {
                         heads[0].appendChild(node);
                     } else {
                         // no head yet, stick it whereever
                         document.documentElement.appendChild(node);
                     }
                 }

                 goodies();
                }
function normal() {var css = [
    " /* Full wide start */",

    "/*Individual Post*/",
    ".ltEKP .QBXjJ{",
    "    border: none;",
    "}",
    "._8-yf5 [d=\"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z\"]{",
    "	filter: invert(0) !important;",
    "    fill: #12B6A9 !important;",
    "}",
    ".JyscU.ePUX4 .UE9AK{",
    "    background-color: var(--bg3-color) !important;",
    "    border-left: none;",
    "    border-bottom: none;",
    "}",
    ".JyscU.ePUX4 .eo2As{",
    "    border-left: none;",
    "    border-top: none;",
    "}",
    ".JyscU .Slqrh{",
    "    border-top: none;",
    "}",
    "",
    "._9AhH0 {",
    "    display: none;",
    "}",
    "",
    ".PyenC, .fXIG0 {",
    "    height: 135px;",
    "    left: 50%;",
    "    margin-left: -67px;",
    "    margin-top: -67px;",
    "    top: 50%;",
    "    width: 135px;",
    "    z-index: 1;",
    "}",
    "",
    ".PdwC2 {",
    "    max-width: 65% !important;",
    "    max-height: 100% !important;",
    "}",
    "",
    ".JyscU ._97aPb,.eLAPa,.pR7Pc, .rQDP3  {",
    "    max-height: 100% !important;",
    "}",
    ".glyphsSpriteDirect__outline__24__grey_9, .glyphsSpriteFacebook_circle__outline__24__grey_9, .glyphsSpriteFacebook_circle_filled_24, .glyphsSpriteApp_messenger__outline__24__grey_9, .glyphsSpriteApp_twitter__outline__24__grey_9, .glyphsSpriteMail__outline__24__grey_9, .glyphsSpriteLink__outline__24__grey_9, .glyphsSpriteLite_app_icon{",
    "    filter: invert(1);",
    "}",
    "",
    "/*post hover */",
    ".qn-0x,.Ln-UN{",
    "background-color: rgba(0, 0, 0, 0)!important;",
    "}",
    ".-V_eO{",
    "opacity:0 !important;",
    "}",
    "/*Individual Post*/",

    "body /* to even out with the scrollbar container width */ {",
    "    margin-left:6px;",
    "}",
    ".M9sTE  .L_LMM  .JyscU  .ePUX4{",
    "    width:100%!important;",
    "    max-width:none!important;",
    "    padding:0!important;",
    "    margin:2.5px 5px!important;",
    "}",
    "body /* roboto as font */ {",
    "    font-family:roboto;",
    "    text-rendering:geometricPrecision; ",
    "}",
    ".v9tJq /* stretches posts grid to the full width of the screen */ {",
    "    max-width:none!important;",
    "    padding:0!important;",
    "    width:100%!important;",
    "}",
    "._bz0w, .weEfm, .v9tJq  /* removes margins from posts */ {",
    "    margin:2.5px 5px!important;",
    "}",
    ":focus /* hides ugly blue outline from elements which are in focus currently */ {",
    "    outline:0;",
    "}",
    ".vtbgv /* adds a margin between sticky header and profile header */ {",
    "    margin-top:44px;",
    "}",
    ".aUCRo /* hides the sticky header when scrolling past profile header */, ._49XvD, .iHqQ7, .SkY6J /* hides stories, follow suggestions and instagram links from the homepage sidebar */ {",
    "    display:none;",
    "}",
    ".qqm6D /* centers higlights */ {",
    "    margin:0 auto;",
    "}",
    ".KQA-S, ._1MzIy, ._3MPWk, ._8Rm4L, .zMhqu /* border radius for posts */ {",
    "    border-radius:16px;",
    "}",
    ".JYWcJ, .JYWcJ:link, .JYWcJ:visited /* sets font weight to regular on photo tags */ {",
    "    font-weight:400;",
    "}",
    "  /* scrollbar css */",
    "  /* total width */",
    "::-webkit-scrollbar {width:6px}",
    "::-webkit-scrollbar:horizontal {height:6px}",
    "",
    "/* background of the scrollbar except button or resizer */",
    "::-webkit-scrollbar-track {background-color:rgba(232,232,232,.2)}",
    "::-webkit-scrollbar-track:horizontal {background-color:rgba(232,232,232,.2)}",
    "",
    "/* scrollbar itself */",
    "::-webkit-scrollbar-thumb {background-color:rgba(152,152,152);border-radius:16px;width:6px;transition:all 3s ease}",
    "::-webkit-scrollbar-thumb:hover {background-color:rgba(104,104,104)}",
    "",
    "/* set button(top and bottom of the scrollbar) */",
    "::-webkit-scrollbar-button {display:none}",
    " /* scrollbar css end */",
    " /* Full wide end */",
    "}",
    "/* Big following list */",
    "body > div.RnEpo.Yx5HN > div{",
    "    max-height: 2200px !important;",
    "}",
    "span._2dbep,a._2dbep.qNELH.kIKUG{",
    "    width: 80px !important;",
    "    height: 80px !important;",
    "}",
    "canvas.CfWVH{",
    "    width: 90px !important;",
    "    height: 90px !important;",
    "}",
    "#react-root > section > main > div > header > div > div > span {",
    "    width: 150px !important;",
    "    height: 150px !important;",
    "}",
    "#react-root > section > main > div > header > div > div > canvas{",
    "    width: 168px !important;",
    "    height: 168px !important;",
    "}",
    "#react-root > section > div > div._lz6s.Hz2lF > div > div.ctQZg > div > div:nth-child(5) > span,#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(5) > span{",
    "    width: 22px !important;",
    "    height: 22px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > canvas{",
    "    width: 66px !important;",
    "    height: 66px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a > img,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div.m0NAq.xrWdL > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > a{",
    "    width: 56px !important;",
    "    height: 56px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > canvas{",
    "    width: 44px !important;",
    "    height: 44px !important;",
    "}",
    "#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > a,#react-root > section > main > section > div.COOzN.MnWb5.YT6rB > div._8UZ6e > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_.WKY0a > div > div > div > * > div.Igw0E.IwRSH.eGOV_._4EzTm.yC0tu > div > div > span{",
    "    width: 32px !important;",
    "    height: 32px !important;",
    "}",
    "#react-root > section > main > section > div.cGcGK > * > div > * > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span,body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.EDfFK.ygqzn > div > div.Igw0E._56XdI.eGOV_._4EzTm.ItkAi > a > div > div > span{",
    "    width: 20px !important;",
    "    height: 20px !important;",
    "}",
    "#react-root > section > main > section > div.cGcGK > div.zGtbP.IPQK5.VideM > div > div > div > div > ul > * > div > button > div.eebAO.h_uhZ{",
    "    text-shadow: 2px 1px 2px #ffffff !important;",
    "    color: rgba(0,0,0) !important;",
    "}",
    ".theme {",
    "background-color: #CDCFDA  !important;",
    " position: relative !important;",
    "display: inline-block !important;",
    "}",

    ".theme1 {",
    "width: 100% !important;",
    "display: none !important;",
    "position: absolute !important;",
    "background-color: #CDCFDA  !important;",
    "min-width: 7px !important;",
    "box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);",
    "z-index: 1 !important;",
    "}",
    ".theme1 button, .theme {",

    "background-color: #CDCFDA  !important;",
    "color: black !important;",
    "text-align: center !important;",
    "text-decoration: none !important;",
    "display: inline-block !important;",
    "}",

    ".theme:hover .theme1 {",
    "display: block !important;",
    "background-color:#CDCFDA  !important;",
    "}",
    ".theme h2 {",
    "border: 5px solid #CDCFDA  !important;",
    " font-size: 10px !important;",
    "background-color:#CDCFDA  !important;",
    "}",
    ".theme {",
    "margin-left: 20px !important;",
    "}",

].join("\n");
                   if (typeof GM_addStyle != "undefined") {
                       GM_addStyle(css);
                   } else if (typeof PRO_addStyle != "undefined") {
                       PRO_addStyle(css);
                   } else if (typeof addStyle != "undefined") {
                       addStyle(css);
                   } else {
                       var node = document.createElement("style");
                       node.type = "text/css";
                       node.appendChild(document.createTextNode(css));
                       var heads = document.getElementsByTagName("head");
                       if (heads.length > 0) {
                           heads[0].appendChild(node);
                       } else {
                           // no head yet, stick it whereever
                           document.documentElement.appendChild(node);
                       }
                   }
                   goodies();

                  }
const delay = ms => new Promise(res => setTimeout(res, ms));
(function() {
    var themex=localStorage.getItem("num2");
    if(themex==null){themex=1;}
    if(themex==1){dark();}
    else if(themex==2){blue();}
    else if(themex==3){normal();}
    console.log("button starts here");
    themebutton();

})();
async function themebutton() {
    if(document.URL=="https://www.instagram.com/"){
        await delay(1000);
        console.log("delay done");
        var kar=document.querySelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div");
        var theContainer = document.createElement('div');
        var themeContaineraa1 = document.createElement('div');var themeContaineraa2 = document.createElement('div');var themeContaineraa3 = document.createElement('div');
        theContainer.className="theme";
        themeContaineraa1.className="theme1";themeContaineraa2.className="theme1";themeContaineraa3.className="theme1";

        let amain1 =document.createElement('button');
        let aa1 =document.createElement('button');
        let aa2 =document.createElement('button');
        let aa3 =document.createElement('button');
        amain1.innerHTML='<h2>Theme</h2>';
        aa1.innerHTML="Dark";
        aa2.innerHTML="Blue";
        aa3.innerHTML="Lite..";
        aa1.onclick=od;
        aa2.onclick=ob;
        aa3.onclick=on;
        kar.append(theContainer);
        theContainer.append(amain1);
        theContainer.append(themeContaineraa1);
        themeContaineraa1.append(aa1,themeContaineraa2);themeContaineraa2.append(aa2,themeContaineraa3);themeContaineraa3.append(aa3);
        console.log("theme changer done");}

}
function goodies(){
		var trk=0;
    var player =true;var followi =true;
	window.onscroll = function(e) {//scroll hide navigation bar
  // Scroll vanish navigation
  if(this.oldScroll < this.scrollY){
    document.querySelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div").style.zoom=.000001;
}
if(this.oldScroll > this.scrollY){
    document.querySelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div").style.zoom=1;
}
  this.oldScroll = this.scrollY;
}

    /*--------------Full size media scrollbar -----------*/
		
		function scroll(){var k=0;
    var durl = document.URL;
    var res1 = durl.substring(0, 24);
    var res2 = durl.substring(0, 28);
    console.log(res1);
    console.log(res2);
    if(res1=="https://instagram.com/p/"){
        k=1;
    }
    if(res2=="https://www.instagram.com/p/"){
        k=1;
    }
    if(durl=="https://instagram.com/"){
        k=1;
    }
    if(durl=="https://www.instagram.com/"){
        k=1;
}

		
    if(k==0){
			
        console.log('hi insta scroll');
        // https://www.instagram.com/graphql/query/?query_hash=<hash>&variables={%22shortcode%22:%22<shortcode>%22}

        const IMAGES_PER_QUERY = 12;
        const NTH_TO_LAST_IMAGE = 3;
        const HEIGHT_PCT = .8;
        const WIDTH_PCT = .49;
        const VID_VOLUME = 0.02;
        let m = document.body.innerHTML.match(/profilePage_(\d+)/);
        var userId = m && m[1];
        var notLoaded = true;

        function getQueryHash() {

            let allScripts = Array.from(document.getElementsByTagName('script'));
            let PostPageContainer = allScripts.find(el => el.src && el.src.match(/ProfilePageContainer.js/));
            let ConsumerLibCommons = allScripts.find(el => el.src && el.src.match(/ConsumerLibCommons.js/));
            let Consumer = allScripts.find(el => el.src && el.src.match(/Consumer.js/));

            var query_hash = false,
                query_id = false;

            fetch(ConsumerLibCommons.src)
                .then(resp => {
                console.log('resp 1', resp);
                return resp.text();
            })
                .then(text => {
                let m = text.match(/profilePosts\.byUserId\.get.*?queryId:"([a-f0-9]+)"/); //profilePosts.byUserId.get(n))||void 0===s?void 0:s.pagination},queryId:"e5555555555555555555555555555508"
                console.log('queryId m', m);
                query_id = m && m[1];
                query_id && notLoaded && loadImages(query_id, query_hash);
                // query_id && query_hash && loadImages(query_id, query_hash);
            });

            fetch(PostPageContainer.src)
                .then(resp => {
                console.log('resp 1', resp);
                return resp.text();
            })
                .then(text => {
                let m = text.match(/profilePosts\.byUserId\.get.*?queryId:"([a-f0-9]+)"/); //profilePosts.byUserId.get(n))||void 0===s?void 0:s.pagination},queryId:"e5555555555555555555555555555508"
                console.log('queryId m', m);
                query_id = m && m[1];
                query_id && notLoaded && loadImages(query_id, query_hash);
                // query_id && query_hash && loadImages(query_id, query_hash);
            });

            // l.pagination},queryId:"15b55555555555555555555555555551"
            fetch(Consumer.src)
                .then(resp => {
                console.log('resp 1', resp);
                return resp.text();
            })
                .then(text => {
                let m = text.match(/l\.pagination\},queryId:"([a-f0-9]+)"/); //const s="05555555555555555555555555555554",E="
                console.log('queryId m', m);
                query_id = m && m[1];
                query_id && notLoaded && loadImages(query_id, query_hash);
            });

            //         fetch(Consumer.src)
            //         .then(resp => {
            //             console.log('resp 1', resp);
            //             return resp.text();
            //         })
            //         .then(text => {
            //             let m = text.match(/const s="([a-f0-9]+)",E="/); //const s="05555555555555555555555555555554",E="
            //             m = m || text.match(/var u="([a-f0-9]+)",s="/);
            //             console.log('query_hash m', m);
            //             query_hash = m && m[1];
            //             query_hash && query_id && loadImages(query_id, query_hash);
            //         });
        }

        // https://www.instagram.com/graphql/query/?query_hash=<queryhash>&variables=%7B%22id%22%3A%22<profle_id>%22%2C%22first%22%3A12%2C%22after%22%3A%22<after_code>%3D%3D%22%7D
        function loadImages(query_id, query_hash, after) {
            notLoaded = false;
            console.log('id', query_id, 'hash', query_hash);

            // let userIdMetaTag = document.querySelector('head > meta[property="instapp:owner_user_id"]');
            // let userId = userIdMetaTag && userIdMetaTag.content;
            let m = document.body.innerHTML.match(/profilePage_(\d+)/);
            userId = userId || (m && m[1]);
            if (!userId) return;
            let queryVariables = {"id": userId, "first": IMAGES_PER_QUERY};
            if (after) queryVariables.after = after;
            let queryVariablesString = encodeURIComponent(JSON.stringify(queryVariables));
            let imageListQueryUrl = `https://www.instagram.com/graphql/query/?query_hash=${query_id}&variables=${queryVariablesString}`;

            fetch(imageListQueryUrl, { responseType: 'json' })
                .then(resp => {
                console.log('resp 1', resp);
                return resp.json();
            })
                .then(json => {
                console.log('json', json);

                let timelineMedia = json.data.user.edge_owner_to_timeline_media;
                let end_cursor = timelineMedia.page_info.end_cursor;
                let mediaList = timelineMedia.edges.map(n => n.node);
                console.log('media list', mediaList);

                let bigContainer = document.querySelector('#igBigContainer');
                // Create the main container if it doesn't exist
                if (!bigContainer) {
                    let tempDiv = document.createElement('div');
                    tempDiv.innerHTML = `<div id="igBigContainer" style="background-color: #112;width: 100%;height: 100%;z-index: 999;position: fixed;top: 0;left: 0;overflow: scroll;">
                    <div id="igAllImages" style="display:block; text-align:center;"></div></div>`;
                                 bigContainer = tempDiv.firstElementChild;
                                 document.body.innerHTML = '';
                                 document.body.appendChild(bigContainer);

                                 let imgStyle = document.createElement('style');
                                 imgStyle.type = 'text/css';
                                 setMaxSize(imgStyle);
                                 document.body.appendChild(imgStyle);
                                 window.addEventListener('resize', evt => setMaxSize(imgStyle));
                                 styleIt();
                             }
                             let innerContainer = bigContainer.firstElementChild;

                             for (let media of mediaList) {
                                 addMedia(media, innerContainer);
                             }

                             var button = document.createElement("a");
                             button.innerHTML = "BACK";button.href=document.URL;
                             button.style = "top:300px;right:20px;opacity: 0.7;padding-top:15px;padding-left:8px;background-color: #434957;border-radius: 50%;display:inline-block;width: 50px;height: 35px;position:absolute;z-index: 9999";
                             //button.style.hover.opacity=1;

                             document.body.appendChild(button);

                             if (end_cursor) {
                                 console.log('end_cursor', end_cursor);
                                 let triggerImage = document.querySelector('#igAllImages a:nth-last-of-type(3)');
                                 bigContainer.onscroll = (evt) => {
                                     let vh = document.documentElement.clientHeight || window.innerHeight || 0;
                                     if (triggerImage.getBoundingClientRect().top - 800 < vh) {
                                         bigContainer.onscroll = null;
                                         console.log('loading next set of images');
                                         loadImages(query_id, query_hash, end_cursor);
                                     }

                                 }
                             }
                         });
                     }

                     function getBestImage(media) {
                         return media.display_resources.reduce((a, b) => a.width > b.width ? a : b).src;
                     }

                     function addMedia(media, container) {
                         let shortcode = media.shortcode;
                         let medias = media.edge_sidecar_to_children ? media.edge_sidecar_to_children.edges.map(n => n.node) : [ media ];
                         for (let m of medias) {
                             let a = document.createElement('a');
                             a.href = `https://www.instagram.com/p/${shortcode}/`;
                             if (m.is_video) {
                                 let vid = document.createElement('video');
                                 vid.src = m.video_url;
                                 vid.controls = true;
                                 vid.volume = VID_VOLUME;
                                 a.textContent = 'Link';
                                 container.appendChild(vid);
                                 container.appendChild(a);
                             } else {
                                 a.innerHTML += `<img src="${getBestImage(m)}">`;
                                 container.appendChild(a);
                             }
                         }
                     }

                     function setMaxSize(userStyle) {
                         let vw = document.documentElement.clientWidth || window.innerWidth || 0;
                         let vh = document.documentElement.clientHeight || window.innerHeight || 0;
                         userStyle.innerHTML = `
#igAllImages img, #igAllImages video {
  max-height: ${vh * HEIGHT_PCT}px;
  max-width: ${vw * WIDTH_PCT}px;
}
`;
        }

                     function styleIt() {
                         let userStyle = document.createElement('style');
                         userStyle.type = 'text/css';
                         userStyle.innerHTML = `
#igAllImages video {
  border: green solid 2px;
`;
            document.body.appendChild(userStyle);
        }

                     function startUp() {
                         let tempDiv = document.createElement('div');
                         tempDiv.innerHTML = `<div style="margin: 5px;font-size: 18px;font-weight: bold;color: #3897F0; cursor: pointer;"><h2>++</h2></div>`;
                         let loadButton = tempDiv.firstElementChild;
                         loadButton.onclick = getQueryHash;

                         (function insertButton() {
                             let insAt = document.querySelector('.ZcHy5, ._47KiJ');
                             if (insAt) {
                                 insAt.parentNode.insertBefore(loadButton, insAt);
                             } else {
                                 window.setTimeout(insertButton, 20);
                             }
                         })();
                     }
                     startUp();
                 }}
	scroll();
	
window.addEventListener('click', event => {trk++;//Theme button when tab change 
  console.log(trk);
			if(document.URL=="https://www.instagram.com/"){if(document.querySelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div.theme > button > h2")==null){themebutton();}}
			else if(document.URL=="https://www.instagram.com/accounts/access_tool/accounts_you_follow" && followi==true){setTimeout(function(){console.log("follow list");followi=false;follow();}, 1000);
	}
			/*else{setTimeout(function(){
		if(document.querySelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div:nth-child(1) > h2")==null){console.log("NOW ++");scroll();}}, 3000);
	}*/});

    /*-------------Download Button----------*/

    // =================
    // =    Options    =
    // =================
    var dcolor;
    if(localStorage.getItem("num2")==3){dcolor="black";}else{dcolor="white";}
    const attachLink = true; // add link into the button elements
    const postFilenameTemplate = "%id%-%datetime%-%medianame%.%ext%";
    const storyFilenameTemplate = postFilenameTemplate;

    // ==================

    function yyyymmdd(date) {
        // ref: https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object?page=1&tab=votes#tab-top
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('');
    }

    var svgDownloadBtn =
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="24" width="24"
	 viewBox="0 0 477.867 477.867" style="fill:%color;" xml:space="preserve">
	<g>
		<path d="M443.733,307.2c-9.426,0-17.067,7.641-17.067,17.067v102.4c0,9.426-7.641,17.067-17.067,17.067H68.267
			c-9.426,0-17.067-7.641-17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v102.4
			c0,28.277,22.923,51.2,51.2,51.2H409.6c28.277,0,51.2-22.923,51.2-51.2v-102.4C460.8,314.841,453.159,307.2,443.733,307.2z"/>
	</g>
	<g>
		<path d="M335.947,295.134c-6.614-6.387-17.099-6.387-23.712,0L256,351.334V17.067C256,7.641,248.359,0,238.933,0
			s-17.067,7.641-17.067,17.067v334.268l-56.201-56.201c-6.78-6.548-17.584-6.36-24.132,0.419c-6.388,6.614-6.388,17.099,0,23.713
			l85.333,85.333c6.657,6.673,17.463,6.687,24.136,0.031c0.01-0.01,0.02-0.02,0.031-0.031l85.333-85.333
			C342.915,312.486,342.727,301.682,335.947,295.134z"/>
	</g>
</svg>`;

    var svgNewtabBtn =
        `<svg id="Capa_1" style="fill:%color;" viewBox="0 0 482.239 482.239" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m465.016 0h-344.456c-9.52 0-17.223 7.703-17.223 17.223v86.114h-86.114c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793h-310.01v-310.01h310.011v310.01zm103.337-103.337h-68.891v-223.896c0-9.52-7.703-17.223-17.223-17.223h-223.896v-68.891h310.011v310.01z"/>
</svg>`;

    document.addEventListener('keydown', keyDownHandler);

    function keyDownHandler(event) {
        if (window.location.href === 'https://www.instagram.com/') return;

        if (event.altKey && event.key === 'k') {
            let buttons = document.getElementsByClassName('download-btn');
            if (buttons.length > 0) {
                let mockEvent = { currentTarget: buttons[buttons.length-1] };
                if (attachLink) onMouseInHandler(mockEvent);
                onClickHandler(mockEvent);
            }
        }
        if (event.altKey && event.key === 'i') {
            let buttons = document.getElementsByClassName('newtab-btn');
            if (buttons.length > 0) {
                let mockEvent = { currentTarget: buttons[buttons.length-1] };
                if (attachLink) onMouseInHandler(mockEvent);
                onClickHandler(mockEvent);
            }
        }

        if (event.altKey && event.key === 'l') {
            // right arrow
            let buttons = document.getElementsByClassName('coreSpriteRightChevron');
            if (buttons.length > 0) {
                buttons[0].click();
            }
        }

        if (event.altKey && event.key === 'j') {
            // left arrow
            let buttons = document.getElementsByClassName('coreSpriteLeftChevron');
            if (buttons.length > 0) {
                buttons[0].click();
            }
        }
    }

    var checkExistTimer = setInterval(function () {
        let sharePostSelector = "article section span button";
        let menuSeletor = "header button > span";
        let storySeletor = "header button > span";
        let profileSelector = "header section svg circle";

        // check story
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(menuSeletor)) {
                addCustomBtn(document.querySelector(storySeletor), dcolor, append2Post);
            }
        }

        // check post
        let articleList = document.querySelectorAll("article");
        for (let i = 0; i < articleList.length; i++) {
            if (articleList[i].querySelector(sharePostSelector) &&
                articleList[i].getElementsByClassName("custom-btn").length === 0) {
                addCustomBtn(articleList[i].querySelector(sharePostSelector), dcolor, append2Post);
            }
        }

        // check profile
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(profileSelector)) {
                addCustomBtn(document.querySelector(profileSelector), dcolor, append2Header);
            }
        }
    }, 500);

    function append2Header(node, btn) {
        node.parentNode.parentNode.parentNode.appendChild(btn, node.parentNode.parentNode);
    }

    function append2Post(node, btn) {
        node.parentNode.parentNode.appendChild(btn);
    }

    function addCustomBtn(node, iconColor, appendNode) {
        // add download button and set onclick handler
        // add newtab button
        let newtabBtn = createCustomBtn(svgNewtabBtn, iconColor, "newtab-btn", "16px");
        appendNode(node, newtabBtn);

        // add download button
        let downloadBtn = createCustomBtn(svgDownloadBtn, iconColor, "download-btn", "14px");
        appendNode(node, downloadBtn);
    }

    function createCustomBtn(svg, iconColor, className, marginLeft) {
        let newBtn = document.createElement("a");
        newBtn.innerHTML = svg.replace('%color', iconColor);
        newBtn.setAttribute("class", "custom-btn " + className);
        newBtn.setAttribute("target", "_blank");
        newBtn.setAttribute("style", "cursor: pointer;margin-left: " + marginLeft + ";margin-top: 8px;");
        newBtn.onclick = onClickHandler;
        if (attachLink) newBtn.onmouseenter = onMouseInHandler;
        if (className.includes("newtab")) {
            newBtn.setAttribute("title", "Open in new tab");
        } else {
            newBtn.setAttribute("title", "Download");
        }
        return newBtn;
    }

    function onClickHandler(e) {
        // handle button click
        let target = e.currentTarget;
        e.stopPropagation();
        e.preventDefault();
        if (window.location.pathname.includes('stories')) {
            storyOnClicked(target);
        } else if (document.querySelector('header') &&
            document.querySelector('header').contains(target)) {
            profileOnClicked(target);
        } else {
            postOnClicked(target);
        }
    }

    function onMouseInHandler(e) {
        let target = e.currentTarget;
        if (!attachLink) return;
        if (window.location.pathname.includes('stories')) {
            storyOnMouseIn(target);
        } else if (document.querySelector('header') &&
            document.querySelector('header').contains(target)) {
            profileOnMouseIn(target);
        } else {
            postOnMouseIn(target);
        }
    }

    function profileOnMouseIn(target) {
        let url = profileGetUrl(target);
        target.setAttribute("href", url);
    }

    function profileOnClicked(target) {
        // extract profile picture url and download or open it
        let url = profileGetUrl(target);
        let filename = '.png';

        if (url.length > 0) {
            // check url
            if (target.getAttribute("class").includes("download-btn")) {
                // generate filename 
                let posterName = document.querySelector('header h2').textContent;
                filename = posterName + filename;
                downloadResource(url, filename);
            } else {
                // open url in new tab
                openResource(url);
            }
        }
    }

    function profileGetUrl(target) {
        let img = document.querySelector('header img');
        let url = img.getAttribute('src');
        return url;
    }

    async function postOnMouseIn(target) {
        let articleNode = postGetArticleNode(target);
        let url = await postGetUrl(target, articleNode);
        target.setAttribute("href", url);
    }

    async function postOnClicked(target) {
        // extract url from target post and download or open it
        let articleNode = postGetArticleNode(target);
        let url = await postGetUrl(target, articleNode);

        // ==============================
        // = download or open media url =
        // ==============================
        if (url.length > 0) {
            // check url
            if (target.getAttribute("class").includes("download-btn")) {
                let mediaName = url.split('?')[0].split('\\').pop().split('/').pop();
                let ext = mediaName.substr(mediaName.lastIndexOf('.') + 1);
                mediaName = mediaName.substring(0, mediaName.lastIndexOf('.') + 1);
                let datetime = new Date(articleNode.querySelector('time').getAttribute('datetime'));
                datetime = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '');
                let posterName = articleNode.querySelector('header a').getAttribute('href').replace(/\//g, '');
                
                let filename = filenameFormat(postFilenameTemplate, posterName, datetime, mediaName, ext);
                downloadResource(url, filename);
            } else {
                // open url in new tab
                openResource(url);
            }
        }
    }

    function postGetArticleNode(target) {
        let articleNode = target;
        while (articleNode && articleNode.tagName !== "ARTICLE") {
            articleNode = articleNode.parentNode;
        }
        return articleNode;
    }

    async function postGetUrl(target, articleNode) {
        // meta[property="og:video"]
        let list = articleNode.querySelectorAll('li[style][class]');
        let url = "";
        if (list.length === 0) {
            // single img or video
            if (articleNode.querySelector('article  div > video')) {
                let videoElem = articleNode.querySelector('article  div > video');
                url = videoElem.getAttribute('src');
                if (videoElem.hasAttribute('videoURL')) {
                    url = videoElem.getAttribute('videoURL');
                } else if (url === null || url.includes('blob')) {
                    url = await fetchVideoURL(articleNode, videoElem);
                }
            } else if (articleNode.querySelector('article  div[role] div > img')) {
                url = articleNode.querySelector('article  div[role] div > img').getAttribute('src');
            } else {
                console.log("Err: not find media at handle post single");
            }
        } else {
            // multiple imgs or videos
            let idx = 0;
            // check current index
            if (!articleNode.querySelector('.coreSpriteLeftChevron')) {
                idx = 0;
            } else if (!articleNode.querySelector('.coreSpriteRightChevron')) {
                idx = list.length - 1;
            } else idx = 1;

            let node = list[idx];
            if (node.querySelector('video')) {
                let videoElem = node.querySelector('video');
                url = videoElem.getAttribute('src');
                if (videoElem.hasAttribute('videoURL')) {
                    url = videoElem.getAttribute('videoURL');
                } else if (url === null || url.includes('blob')) {
                    url = await fetchVideoURL(articleNode, videoElem);
                }
            } else if (node.querySelector('img')) {
                url = node.querySelector('img').getAttribute('src');
            }
        }
        return url
    }

    async function fetchVideoURL(articleNode, videoElem) {
        let poster = videoElem.getAttribute('poster');
        let timeNodes = articleNode.querySelectorAll('time');
        let posterUrl = timeNodes[timeNodes.length-1].parentNode.href;
        let posterPattern = /\/([^\/?]*)\?/;
        let posterMatch = poster.match(posterPattern);
        let postFileName = posterMatch[1];
        let pattern = new RegExp(`${postFileName}.*?video_url":("[^"]*")`, 's');
        let resp = await fetch(posterUrl);
        let content = await resp.text();
        let match = content.match(pattern);
        let videoUrl = JSON.parse(match[1]);
        videoElem.setAttribute('videoURL', videoUrl)
        return videoUrl;
    }

    function storyOnMouseIn(target) {
        let sectionNode = storyGetSectionNode(target);
        let url = storyGetUrl(target, sectionNode);
        target.setAttribute('href', url);
    }

    function storyOnClicked(target) {
        // extract url from target story and download or open it
        let sectionNode = storyGetSectionNode(target);
        let url = storyGetUrl(target, sectionNode);

        // ==============================
        // = download or open media url =
        // ==============================
        if (target.getAttribute("class").includes("download-btn")) {
            let mediaName = url.split('?')[0].split('\\').pop().split('/').pop();
            let ext = mediaName.substr(mediaName.lastIndexOf('.') + 1);
            mediaName = mediaName.substring(0, mediaName.lastIndexOf('.') + 1);
            let datetime = new Date(sectionNode.querySelector('time').getAttribute('datetime'));
            datetime = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '');
            let posterName = sectionNode.querySelector('header a').getAttribute('href').replace(/\//g, '');

            let filename = filenameFormat(storyFilenameTemplate, posterName, datetime, mediaName, ext);
            downloadResource(url, filename);
        } else {
            // open url in new tab
            openResource(url);
        }
    }

    function storyGetSectionNode(target) {
        let sectionNode = target;
        while (sectionNode && sectionNode.tagName !== "SECTION") {
            sectionNode = sectionNode.parentNode;
        }
        return sectionNode;
    }

    function storyGetUrl(target, sectionNode) {
        let url = "";
        if (sectionNode.querySelector('video > source')) {
            url = sectionNode.querySelector('video > source').getAttribute('src');
        } else if (sectionNode.querySelector('img[decoding="sync"]')) {
            let img = sectionNode.querySelector('img[decoding="sync"]');
            url = img.srcset.split(/ \d+w/g)[0].trim(); // extract first src from srcset attr. of img
            if (url.length > 0) {
                return url;
            }
            url = sectionNode.querySelector('img[decoding="sync"]').getAttribute('src');
        }
        return url;
    }

    function filenameFormat(template, id, datetime, medianame, ext) {
        let filename = template;
        filename = filename.replaceAll("%id%", id);
        filename = filename.replaceAll("%datetime%", datetime);
        filename = filename.replaceAll("%medianame%", medianame);
        filename = filename.replaceAll("%ext%", ext);
        return filename;
    }

    function openResource(url) {
        // open url in new tab
        var a = document.createElement('a');
        a.href = url;
        a.setAttribute("target", "_blank");
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function forceDownload(blob, filename) {
        // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
        var a = document.createElement('a');
        a.download = filename;
        a.href = blob;
        // For Firefox https://stackoverflow.com/a/32226068
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    // Current blob size limit is around 500MB for browsers
    function downloadResource(url, filename) {
        // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
        if (!filename) filename = url.split('\\').pop().split('/').pop();
        fetch(url, {
            headers: new Headers({
                'Origin': location.origin
            }),
            mode: 'cors'
        })
            .then(response => response.blob())
            .then(blob => {
                let blobUrl = window.URL.createObjectURL(blob);
                forceDownload(blobUrl, filename);
            })
            .catch(e => console.error(e));
    }
    /*-------------video control----------*/
    if(player==true){
    console.log('full control of player')
    var videoList = document.getElementsByTagName("video");
    setInterval(function(){
        if(videoList[0]){
            videoList[0].setAttribute("controls", "controls");
            videoList[0].style.zIndex = "1";
        }
    }, 1000);}


/*----------------------------get followed list----------------------*/	
function follow(){if(document.URL=="https://www.instagram.com/accounts/access_tool/accounts_you_follow"){
	if(document.querySelector("body > div > div.page.-cx-PRIVATE-Page__body.-cx-PRIVATE-Page__body__ > div > div > h2")==null){
var myVar = setInterval(myTimer, 800);}

function myTimer() {
if(document.querySelector("#react-root > section > main > div > article > main > button")==null){console.log("done scrolling");myStopFunction();myFunction();}
else{
  document.querySelector("#react-root > section > main > div > article > main > button").click();}
}
function myFunction() {
  //var txt;
  if (confirm("Do you want text, cancel means html")) {
    totext();
  } else {
    tohtml();
  }
  //document.getElementById("demo").innerHTML = txt;
}
function myStopFunction() {
  clearInterval(myVar);
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function totext() {
var i=1;var str="";
while(document.querySelector("#react-root > section > main > div > article > main > section > div:nth-child("+i+")")!=null)
{
str=str+"https://www.instagram.com/"+document.querySelector("#react-root > section > main > div > article > main > section > div:nth-child("+i+")").innerText+"/\n";i++;
}
console.log(str);
download("hello.txt",str);
}
function tohtml() {
var i=1;var str="";
while(document.querySelector("#react-root > section > main > div > article > main > section > div:nth-child("+i+")")!=null)
{
str=str+"<a href=\"https://www.instagram.com/"+document.querySelector("#react-root > section > main > div > article > main > section > div:nth-child("+i+")").innerText+"/\">"+document.querySelector("#react-root > section > main > div > article > main > section > div:nth-child("+i+")").innerText+"</a><br>";i++;
}
download("hello.html",str);
}
}
}follow();
}
function od(){
    var nnn=localStorage.getItem("num2");
    if(nnn!=1){
        localStorage.setItem("num2",1)
        console.log(localStorage.getItem("num2"));
        location.reload();
    }
    else{console.log("Already Dark");}

}
function ob(){
    var nnn=localStorage.getItem("num2");
    if(nnn!=2){
        localStorage.setItem("num2",2)
        console.log(localStorage.getItem("num2"));
        location.reload();
    }
    else{console.log("Already Blue");}
}
function on(){
    var nnn=localStorage.getItem("num2");
    if(nnn!=3){
        localStorage.setItem("num2",3)
        console.log(localStorage.getItem("num2"));
        location.reload();
    }
    else{console.log("Already White");}
}
