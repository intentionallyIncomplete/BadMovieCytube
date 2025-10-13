export function registerSocketHandlers(socket) {
    socket.on("login", function () {
        if (CLIENT.rank === 0) {
            $(window).on("mouseover", function () {
                if (MOUSEOVER) {
                    MOUSEOVER = false;
                    welcomeBack();
                    setTimeout(function () {
                        MOUSEOVER = false;
                    }, 1000);
                }
            });
        }
    });

    socket.on("changeMedia", function () {
        var myVideo = document.getElementById("ytapiplayer");
        if (myVideo.addEventListener) {
            myVideo.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            }, false);
        } else {
            myVideo.attachEvent('oncontextmenu', function () {
                window.event.returnValue = false;
            });
        }
    });

    socket.on('setAFK', scrollChat);
    socket.on('chatMsg', scrollChat);
    socket.on('chatMsg', function (data) {
        if (data.msg.indexOf('<a') != -1 || data.msg.indexOf('<img') != -1) {
            setTimeout(scrollChat, 500);
        }
    });

    socket.on("closePoll", function () {
        $("#closepolls").remove();
        $('.well.muted').unbind().insertAfter("#navtabs");
        $('<button class="btn btn-xs closepolls" id="closepolls">Clear All Polls</button>').insertBefore('.well.muted:first').click(function () {
            $('.well.muted').remove();
            $("#closepolls").remove();
        });
    });


}