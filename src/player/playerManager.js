// Player management module
let vplayer;

export function initializePlayer() {
    vplayer = videojs("ytapiplayer");
    return vplayer;
}

export function videofix() {
    vplayer = videojs("ytapiplayer");
    vplayer.on('error', function(e) {
        window.setTimeout(function() {
            vplayer.createModal('reloading the player!');
            refreshVideo();
            console.log("reloading player");
        }, 10000);
    });
}

// This needs to be accessible to videofix
export function refreshVideo() {
    $('#mediarefresh').click();
}