**THEME 2 installation** 

*** ``paste the contents of these scripts into your channel in this order. ``
***https://raw.githubusercontent.com/BillTube/BillTube2/master/ChannelConfig.js into channel JS.
paste the module loader after it also in your channel JS https://pastebin.com/raw/igcf8ZyZ 
https://raw.githubusercontent.com/BillTube/BillTube2/master/CustomChannelCSS into channel CSS


**Read this when installing the script**
You will have to edit your channel JS to fit your needs, everything should be self explanatory. 
Channel CSS can be edited to customize the colors of the main theme, Although users may be able to switch to a different built-in theme if you prefer. 

It's highly recommended to leave the Billtube script as is, hosting it yourself is possible but you will miss out on updates. The script is still being worked on and tested.

Customizing your theme is very easy,
Go to admin settings > Edit > CSS and change the following variables to your liking (These are HEX color codes, RGB codes are also supported).
```
:root {
 --body-bg-color: #0e1015fa;
 --theme-bg-color: #040405;
etc```

After changing that you can go to your 
Amin settings > Edit > Javascript.

This part is pretty self explanatory, 1 is enabled, 0 is disabled.
For Example ```UI_ChannelAnnouncement = 1;    
ChannelAnnouncement_Title = 'bills announcement';
ChannelAnnouncement_HTML = '<center>This is a custom channel announcement!</center>';``` 
This will Enable a custom announcement above the MOTD.

You are *required*to fill in the **wallpapers **and **video poster **yourself, without it you will corrupt the theme and it won't work properly.
What you need to look for is *var BGPics* and *var Poster_URL*.

Channel carousel under the video has been updated and is now using a json file.
 ```var Channel_JSON = 'https://cdn.jsdelivr.net/gh/BillTube/BillTube2@latest/channels.json';```