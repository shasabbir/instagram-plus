// ==UserScript==
// @name          Instagram+
// @namespace     http://userstyles.org
// @description	  This is a advanced Mode for Instagram that has lots of things more.
// @author        Sabbir (shasabbir234@gmail.com)
// @homepage      https://github.com/shasabbir/instagram-plus-dark
// @include       http://instagram.com/*
// @include       https://instagram.com/*
// @include       http://*.instagram.com/*
// @include       https://*.instagram.com/*
// @run-at        document-start
// @version       1.102
// ==/UserScript==
(function() {var css = [
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
    " /* Full wide end */"

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
             /*--------------Full size media scrollbar-----------*/
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
                button.style = "top:300px;right:20px;opacity: 0.7;padding-top:15px;padding-left:8px;background-color: #434957;border-radius: 50%;display:inline-block;width: 50px;height: 35px;OnClick='https://www.gg.com';position:absolute;z-index: 9999";
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
             /*-------------Download Button----------*/
             // =================
    // =    Options    =
    // =================
    const attachLink = true; // add link into the button elements

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
        let sharePostSelector = "section > button > div";
        let menuSeletor = "header button > span";
        let storySeletor = "header button > span";
        let profileSelector = "header section svg";

        // check story
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(menuSeletor)) {
                addCustomBtn(document.querySelector(storySeletor), "white", append2Post);
            }
        }

        // check post
        let articleList = document.querySelectorAll("article");
        for (let i = 0; i < articleList.length; i++) {
            if (articleList[i].querySelector(sharePostSelector) &&
                articleList[i].getElementsByClassName("custom-btn").length === 0) {
                addCustomBtn(articleList[i].querySelector(sharePostSelector), "black", append2Post);
            }
        }

        // check profile
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(profileSelector)) {
                addCustomBtn(document.querySelector(profileSelector), "black", append2Header);
            }
        }
    }, 500);

    function append2Header(node, btn) {
        node.parentNode.parentNode.parentNode.insertBefore(btn, node.parentNode.parentNode);
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
                // add poster name to filename
                let posterName = document.querySelector('header h2').textContent;
                filename = posterName + filename;

                // download
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
                let filename = url.split('?')[0].split('\\').pop().split('/').pop();;
                // generate filename
                // add time to filename
                let datetime = new Date(articleNode.querySelector('time').getAttribute('datetime'));
                filename = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '') + '-' + filename;
                // add poster name to filename
                let posterName = articleNode.querySelector('header a').getAttribute('href').replace(/\//g, '');
                filename = posterName + '-' + filename;

                // download
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
        let url = storyGetUrl(target);
        target.setAttribute('href', url);
    }

    function storyOnClicked(target) {
        // extract url from target story and download or open it
        let url = storyGetUrl(target);
        let filename = url.split('?')[0].split('\\').pop().split('/').pop();

        // ==============================
        // = download or open media url =
        // ==============================
        if (target.getAttribute("class").includes("download-btn")) {
            // generate filename
            // add time to filename
            let datetime = new Date(document.querySelector('time').getAttribute('datetime'));
            filename = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '') + '-' + filename;
            // add poster name to filename
            let posterName = document.querySelector('header a').getAttribute('href').replace(/\//g, '');
            filename = posterName + '-' + filename;
            downloadResource(url, filename);
        } else {
            // open url in new tab
            openResource(url);
        }
    }

    function storyGetUrl(target) {
        let url = "";
        if (document.querySelector('video > source')) {
            url = document.querySelector('video > source').getAttribute('src');
        } else if (document.querySelector('img[decoding="sync"]')) {
            url = document.querySelector('img[decoding="sync"]').getAttribute('src');
        }
        return url;
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
             console.log('Here you go enjoy your democracy at instagram with full control of player, Trump 2020 KEKW')
            var videoList = document.getElementsByTagName("video");
    setInterval(function(){
            if(videoList[0]){
        videoList[0].setAttribute("controls", "controls");
        videoList[0].style.zIndex = "1";
            }
    }, 1000);
})();

