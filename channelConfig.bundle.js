/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- BILLTUBE THEME CONFIGURATION ----- */
/* ----- Put this in your channel JS Before the module loader ----- */
/* ----- custom channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Values moved to .env)

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
'BillTube':      { active: 1, rank: -1, url: "https://cdn.jsdelivr.net/gh/intentionallyIncomplete/BadMovieCytube@5ece4926068afb5631e85b87e9e7384c9b5cb86d/BillTube2.min.js",              callback: true },
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

    (() => {
        const E = window.__ENV__ || {};
        if (typeof UI_CHANNEL_NAME === 'undefined') window.UI_CHANNEL_NAME = Number(E.UI_CHANNEL_NAME);
      })();

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