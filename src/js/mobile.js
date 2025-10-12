(function () {
    $(`<style>`).appendTo('head').text(`
    @media (max-width: 992px){/*html{overflow-x: hidden}*/#videocontrols{float: right !important;padding-right:0px;}#wrap{padding: 0 0 0px;}#pmbar,#motdrow, #playlistrow{display: none;z-index: 1029!important;}#motdrow, #playlistrow{position: fixed;top:50px;overflow-y: auto;padding-bottom: 50px}.pm-panel, .pm-panel-placeholder{width: 97vw;}.pm-panel > .panel-body > .pm-buffer {height: calc(100vh - 252px);max-height: calc(100vh - 252px);}@-moz-document url-prefix(){.pm-panel > .panel-body > .pm-buffer {max-height: calc(100vh - 146px);height:calc(100vh - 146px)}}.close {font-size: 50px;line-height: 0.5;}.btn-default.pmchatbtnmenu.new-pm{background-color: #2f6f6f !important;}.pm-num{position: relative;left: -22px;top: 10px;padding: 1px;border-radius: 7px;background-color: red;padding-left: 5px; padding-right: 5px}.pmchatbtnmenu{width: 60px;}
    }`);

    $('#motdrow').insertBefore('#playlistrow');
    $('#playlistrow').insertAfter('#mainpage');
    $('#leftcontrols').insertAfter('#chatwrap');
    $('#leftpane').insertAfter('#leftcontrols');
    $('#plcontrol').prependTo('#rightpane');

    document.getElementById("main").classList.remove('row');

    $('.motdbtnmenu').on('click', function () {
        if (!$(this).hasClass('btn-success')) {
            $(this).addClass('btn-success');
            $('.playlistbtnmenu').removeClass('btn-success');
            $('.pmchatbtnmenu').removeClass('btn-success');
            $('.pl-mobile-style').remove();
            $('.pm-mobile-style').remove();
            $('<style>').addClass('motd-mobile-style').appendTo('head').text('.btn-default.motdbtnmenu.btn-success{background: green !important}#motdrow{display:block !important;pointer-events: painted;height: 100%;max-height: calc(100vh - 50px);background-color: black;}');
        } else {
            $(this).removeClass('btn-success');
            $('.playlistbtnmenu').removeClass('btn-success');
            $('.pmchatbtnmenu').removeClass('btn-success');
            $('.pl-mobile-style').remove();
            $('.motd-mobile-style').remove();
            $('.pm-mobile-style').remove();
        }
    });

    $('.playlistbtnmenu').on('click', function () {
        if (!$(this).hasClass('btn-success')) {
            $(this).addClass('btn-success');
            $('.motdbtnmenu').removeClass('btn-success');
            $('.pmchatbtnmenu').removeClass('btn-success');
            $('.motd-mobile-style').remove();
            $('.pm-mobile-style').remove();
            $('<style>').addClass('pl-mobile-style').appendTo('head').text('.btn-default.playlistbtnmenu.btn-success{background: green !important}#playlistrow{display:block !important;pointer-events: painted;height: 100%;width: 100vw;max-height: calc(100vh - 50px);background-color: black;}');
        } else {
            $(this).removeClass('btn-success');
            $('.motdbtnmenu').removeClass('btn-success');
            $('.pmchatbtnmenu').removeClass('btn-success');
            $('.pl-mobile-style').remove();
            $('.motd-mobile-style').remove();
            $('.pm-mobile-style').remove();
        }
    });

    $('.pmchatbtnmenu').on('click', function () {
        if (!$(this).hasClass('btn-success')) {
            $(this).addClass('btn-success');
            $('.motdbtnmenu').removeClass('btn-success');
            $('.playlistbtnmenu').removeClass('btn-success');
            $('.motd-mobile-style').remove();
            $('.pl-mobile-style').remove();
            $('<style>').addClass('pm-mobile-style').appendTo('head').text('.btn-default.pmchatbtnmenu.btn-success{background: green !important}#pmbar{display:block !important;pointer-events: painted;background-color: black;}#mainpage{display: none}');
        } else {
            $(this).removeClass('btn-success');
            $('.motdbtnmenu').removeClass('btn-success');
            $('.playlistbtnmenu').removeClass('btn-success');
            $('.pl-mobile-style').remove();
            $('.motd-mobile-style').remove();
            $('.pm-mobile-style').remove();
        }
    });
    $(`<span class="pm-num"></span>`).insertAfter('#pm-chat');
    $('.pm-btn').on('click', function () { if (!$('.pmchatbtnmenu').hasClass('btn-success')) { $('.pmchatbtnmenu').click(); } });

    (function () {
        let x = setTimeout(function z() {
            var a;
            a = function () {
                if ($('.panel-heading').length > 0) {
                    if ($('.panel-primary').length > 0) {
                        $('.btn-default.pmchatbtnmenu').addClass('new-pm');
                    } else { if ($('.btn-default.pmchatbtnmenu').hasClass('new-pm')) { $('.btn-default.pmchatbtnmenu').removeClass('new-pm'); } }
                }
                if (($('.panel-heading').length == 0) && $('.pmchatbtnmenu').hasClass('btn-success')) { $('.pmchatbtnmenu').click(); }
                $(`.pm-num`).html(`${$('.panel-heading').length}`);
            }; a();
            x = setTimeout(z, 100);
        }, 2);
    })();
})();

$('video').attr('playsinline', '');
$('video').attr('loop', '');
$('video').attr('autoplay', '');
//videojs('ytapiplayer', {autoplay: true});

if (UI_ChannelAnnouncement == "1") {
    ChannelAnnouncement_Title == "" ? ChannelAnnouncement_Title = 'Administration Message' : '';
    ChannelAnnouncement_HTML == "" ? ChannelAnnouncement_HTML = '<i>no messages</i>' : '';
    makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).insertBefore("#motdrow");
}

if (UI_ChannelName == "1" && ChannelName_Caption != "") {
    $(".navbar-brand").html(ChannelName_Caption);
}