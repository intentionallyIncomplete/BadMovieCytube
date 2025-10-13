export function overrideCallbacks() {
    Callbacks.queue = function (data) {//currently for debugging purposes only. Doesn't do anything.
        _queueVIDEBLU(data);
        console.log("Called Callbacks.queue");
        console.log(data);
    }

    Callbacks.changeMedia = function (data) {//Adds to the old changeMedia() in Callbacks.js, which is called when the media changes.
        _changeMediaVIDEBLU(data);//call the old changeMedia() function stored.
        $("#currenttitle").text(data.title);//change the text of #currenttitle to data.title (gets rid of "Currently Playing: " in video title)
        $("#ss7time").attr("title", data.duration);//gets time of current video
        currentmedia.length = data.duration;
        currentmedia.id = data.id;
        currentmedia.seconds = data.seconds;
        var title = $("#queue .queue_active").attr("title");
        $("#addedby").text(title.match(/(?:Added by: ){1}(.*)/)[1]);
    }

    Callbacks.mediaUpdate = function (data) {//Adds to the old mediaUpdate() in Callbacks.js, which is called every couple seconds.
        _mediaUpdateVIDEBLU(data);//call the old mediaUpdate function stored.
        _timeVIDEBLU.paused = data.paused;//stores data.paused in another variable. (Is video paused?)
        _timeVIDEBLU.raw = Math.max(data.currentTime, 0);//stores the current video time position as _timeVIDEBLU.raw, to be used in setvideotime()
        _timeVIDEBLU.ofs = _timeVIDEBLU.raw - (new Date()).getTime() / 1000;//stores time offset, to keep the timer going between media updates
    }
}