// Player Manager Module
var VERSION = '2.3';

// Ensure the player is resilient to runtime errors
function videofix() {
    var vplayer = videojs('ytapiplayer');

    // If the player emits an error, reload it after 10 seconds
    vplayer.on('error', function () {
        window.setTimeout(function () {
            vplayer.createModal('reloading the player!');
            refreshVideo();
            console.log('reloading player');
        }, 10000);
    });
}

// Initialize and return the Video.js player instance
function initializePlayer() {
    var vplayer = videojs('ytapiplayer');
    return vplayer;
}

// Export module
export { initializePlayer, videofix, VERSION };
