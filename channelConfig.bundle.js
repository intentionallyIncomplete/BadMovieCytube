/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- BILLTUBE THEME CONFIGURATION ----- */
/* ----- Put this in your channel JS Before the module loader ----- */
/* ----- custom channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Channel Information
UI_CHANNEL_NAME=0
CHANNEL_NAME_CAPTION='Quiglys-Movie-Repo'

// Channel Announcement
UI_CHANNEL_ANNOUNCEMENT=0
CHANNEL_ANNOUNCEMENT_TITLE='custom-announcement'
CHANNEL_ANNOUNCEMENT_HTML=`<center>This is a custom channel announcement!</center>`

// Discord Integration
UI_DISCORD=0
DISCORD_NAME=name
DISCORD_URL='discord_url'

// Favicon Configuration
UI_FAVICON=1
FAVICON_URL='https://cdnjs.cloudflare.com/ajax/libs/faviconx/1.0.1/faviconx-min.js'
FAVICON_ICON='fa-film'

// TheMovieDB Configuration
MOVIEDB_SHOW=0
MOVIEDB_API_KEY='api_key'
MOVIEDB_LIST_KEY='list_key'

// Video Player Configuration
POSTER_URL=

// Background Configuration
BG_DIMMED=0
BG_PICS='wallpaper_url'
BG_STOCK=1

// Channel List Configuration
UI_CHANNEL_LIST=0
CHANNEL_JSON='https://cdn.jsdelivr.net/gh/intentionallyIncomplete/BadMovieCytube@dev/channels.json'

/* ----- Do Not Touch ----- */
/*!
**|   XaeMae Sequenced Module Loader
**|   
**@preserve
*/
// -- Channel Namespace --
if (!this[CHANNEL.name])
    this[CHANNEL.name] = {};
// -- The Module Library
window[CHANNEL.name].sequenceList = {
'BillTube':      { active: 1, rank: -1, url: "https://cdn.jsdelivr.net/gh/intentionallyIncomplete/BadMovieCytube@dev/BillTube2.min.js",              callback: true },
};
window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList)

window[CHANNEL.name].sequencerLoader = function (){
    // After first run we curry the previous modules callback
    // This is mainly used to reassign variables in modules/scripts that don't use module options
    if(window[CHANNEL.name].sequencePrev){
        setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0)
        window[CHANNEL.name].sequencePrev = "";
    }

    if(window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length){
        return (function(){ console.log("Xaekai's Script Sequencer: Loading Complete.") })()
    }

    var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
    if(window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length){
        if(window[CHANNEL.name].sequenceList[currKey].active
            && window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank
        ){
            console.log("Xaekai's Script Sequencer: Loading " + currKey);
            window[CHANNEL.name].sequencePrev = currKey;
            window[CHANNEL.name].sequenceState++;
            $.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader)
        } else {
            window[CHANNEL.name].sequenceState++;
            window[CHANNEL.name].sequencerLoader()
        }
    }
};window[CHANNEL.name].sequencerLoader()