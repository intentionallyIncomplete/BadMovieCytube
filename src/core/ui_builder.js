export class ThemeLayout {
    async buildMobileLayout() { }
    async buildDesktopLayout() { }
}

async function buildMobileLayout() {
    $("#ytapiplayer").attr("muted", "");
    $("#ytapiplayer").attr("playsinline", "");
    $("#main").after($("#chatwrap"));
    try {
        await loadResources([
            { type: 'css', href: `${CDN_URL}${DEV_BRANCH}/src/css/mobile.css` },
            { type: 'js', src: `${CDN_URL}${DEV_BRANCH}/src/js/mobile.js` },
        ]);
    } catch (err) {
        console.error('Failed to load resource:', err.message, err);
    }
}

async function buildDesktopLayout() {
    try {
        await loadResources([
            { type: 'css', href: `${CDN_URL}${DEV_BRANCH}/src/css/base.css` },
            { type: 'css', href: `${CDN_URL}${DEV_BRANCH}/src/css/city_theme.css` },
            { type: 'js', src: `${CDN_URL}${DEV_BRANCH}/src/assets/notifications.js` },
            { type: 'js', src: `${CDN_URL}${DEV_BRANCH}/src/assets/avatars.js` },
        ]);
    } catch (err) {
        console.error('Failed to load resource:', err.message, err);
    }

    if (window.location.protocol != "https:")
        window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

    $("#rightpane-inner").prepend("<div id='mediabuttons'></div>");
    $('#modflair').hide();
    $('#emotelistbtn').hide();
    $('#voteskip').hide();
    $('#fullscreenbtn').hide();
    $("#nav-collapsible").append("<div id='headermenu' class='headermenu'></div>");
    $('#videowrap-header').hide();
    $('body').removeClass('compact').removeClass('synchtube').removeClass('hd');
    $("#chatwrap").append(
        '<div class="chat-area-footer">' +
        '<div class="chat-area-buttons">' +
        '<div id="chatbox"></div>' +
        '</div></div>');
    $("#chatheader").append(
        '<div class="chat-area-header">' +
        '<div class="chat-area-title" data-tooltip="Toggle title scroll" data-tooltip-pos="down-left"><i id="marq" class="fas fa-play" onclick="toggleClassTitle()"></i></div>' +
        '<div class="chat-area-group">' +
        '<span></span>' +
        '</div>');
    $('div[class^="chat-msg-"], div[class*=" chat-msg-"]').css({
        'min-height': '20px'
    });
    var setImageSrc = function (imageData) {
        $placeholder.attr('src', imageData);
        imageWidth = $placeholder.get(0).naturalWidth;
        imageHeight = $placeholder.get(0).naturalHeight;
    }
    $("#videowrap").addClass("vjs-theme-city");
    $(".server-msg-reconnect").addClass("fas fa-plug");
    $(".server-msg-reconnect").text("");
    $("body").addClass("darktheme");
    $("#userlisttoggle").removeClass("glyphicon glyphicon-chevron-down pull-left pointer");
    $("#newpollbtn").removeClass("btn btn-sm btn-default").addClass("headerbtn");
    $("#leader").removeClass("btn btn-sm btn-default");
    $("#Notif").removeClass("btn btn-sm btn-default");
    $("#fullscreenbtn").removeClass("btn-default").addClass("fas fa-expand");
    $("#userlisttoggle").addClass("fas fa-users ch").text("");
    $("#showchansettings").text("Admin Settings");
    $("#controlsrow").after($("#motdrow"));
    $(".container-fluid").append($("#footer"));
    $('#footer').children('.container').append('<p class="text-muted credit">Copyrights and trademarks for the shows and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. The author is not responsible for any contents linked or referred to from his pages, All CyTu.be does is link or embed content that was uploaded to popular Online Video hosting sites like Youtube.com / Google drive. All Google users signed a contract with the sites when they set up their accounts wich forces them not to upload illegal content.(<a href="https://www.lumendatabase.org/topics/14">DMCA Safe Harbor</a>)<h4><center><br>BillTube Theme 2</p>(<a href="http://discord.gg/fwadWd9">Available Now</a>)</center></h4>');
    $("#mainpage").prepend($("#chatwrap"));
    $("#userlist").prepend("<div id='connected'></div>");
    $("#userlisttoggle").append($("#usercount"));
    $("#connected").append("<span id='connectedText'>&nbsp Logged in users</span>");
    $("#main").after($("#drinkbarwrap"));
    $("#nav-collapsible").append("<div id='headright'><div id='progbar'></div></div>");
    $(".chat-area-title").after($("#currenttitle"));
    $("#emotelistbtn").text("").removeClass("btn btn-sm btn-default").addClass("fas fa-image ch");
    $("#fullscreenbtn").text("").addClass("fas fa-maximize").removeClass("btn btn-sm");
    $("#loginform").detach().after("#headermenu");
    $("#nav-collapsible").after($("#fullscreenbtn"));
    $("#morebtn").after($("#videocontrols"));
    $("#videocontrols").removeClass("pull-right");
    $("#chatline").attr("placeholder", "Send a message");
    $("#userlist").attr("style", "display: none;");
    $("#main").after($("#motdrow"));
    $("#motdwrap").append($(".visible-lg"));
    $("#morebtn").after("<ul class='dropdown-menu'><li id='mediarefreshli'></li><li><button></button></li><li id='modli'></li><li><button></button></li></ul>");
    $("#modli").append($("#modflair"));
    $("#videoinfo").after($("#rightpane"));
    $("#rightpane-inner").addClass("section");
    $("#mediarefresh").addClass("fas fa-sync OLB").removeClass("btn btn-sm btn-default").text("");
    $("#userlist").addClass("animated animatedFadeInUp fadeInUp");
    $("#queue").addClass("queue_sortable");
    $("#rightpane").after("<div id='queuecontainer' class='section'><div class='textheader'><p id='upnext' class='sectionheader'>Up Next</p></div></div>");
    $("#queuecontainer").append($("#queue"));
    $("#upnext").append($("#plmeta")).after("<ul id='ploptions' class='menu hidden' role='menu'></ul>");
    $("#ploptions").append($("#shuffleplaylist"), $("#clearplaylist"), $("#getplaylist"));
    $("#upnext").before($("#qlockbtn"));
    $('#queuecontainer').hover(function () {
        $('#pllength').css({ 'opacity': '0.9', });
    }, function () {
        $('#pllength').css({ 'opacity': '0', });
    });
    if (window.CLIENT.rank >= 3) {
        $("#ploptions").removeClass("hidden");
    }
    $("body").addClass("fluid");
    $("#videowrap").addClass("col-lg-7 col-md-7");
    $("#mediabuttons").append($("#showmediaurl"), $("#showsearch"), $("#showplaylistmanager"), $("#showcustomembed"));
    $("#videowrap").removeClass("col-md-8 col-md-offset-2");
    $("body").removeClass("synchtube");
    $("#usertheme").attr("href", "/css/themes/slate.css");
    $("#main").append($("#videowrap"));
    $("#maincontain .nano-content").append($("#mainpage > .container"));
    $("#videowrap").after($("#pollwrap"));
    $("#mainpage").append("<div class='nano' id='maincontain'></div>");
    $("#maincontain").append("<div class='nano-content'></div>");
    $("#maincontain .nano-content").append($("#mainpage > .container-fluid"));
    $('video').attr('crossOrigin', 'anonymous');
    $("#usertheme").attr("href", "/css/themes/slate.css");
    $("#maincontain .nano-content").append($("#mainpage > .container"));
    $("#messagebuffer").after("<div class='nano'></div>");
    $("#chatwrap .nano").append($("#messagebuffer"));
    $('#chatwrap').children('.form-control').before("<input type='text' id='username'style='width:0;height:0;visibility:hidden;position:absolute;left:0;top:0' /><input type='password'style='width:0;height:0;visibility:hidden;position:absolute;left:0;top:0' />");
    $('.form-control').attr('autocomplete', 'off');
    $("nav .navbar-brand").attr('href', document.URL);
    $("#mainpage").append("<style id='splitRatio'>@media (min-width: 992px) {#mainpage > .nano {width: 83%;} #chatwrap {width: 17%;}}</style>");
    $("#maincontain").addClass("maincontain");
    $("#sitefooter").append($("#logoutform"));
    $("#logoutform").removeClass("pull-right");
    $('#modflair').detach().prependTo('#headermenu');
    $(".chat-area-header").after("<div class='nano'></div>");
    $("#chatbox").append($("#chatline")).append($("#guestlogin"));
    $(".chat-area-group").append($("#userlisttoggle"));
    $("#chatline").attr('autocomplete', 'off');
    $("#usercount").unbind();
    $('#announcements').detach().appendTo('#sitefooter');
    $('#videowrap-header').remove();
    $('#resizewrap').remove();

    var EMOTELISTMODAL = $("#emotelist");
    $("#emotelistbutton").click(function () {
        EMOTELISTMODAL.modal();
    });
}