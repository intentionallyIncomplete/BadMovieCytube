**THEME 2 installation** 

**Environment Setup**
1. Copy `.env.example` to create your own `.env` file
2. Edit the `.env` file with your configuration values

**Installation Steps**
1. Configure your environment variables in `.env`
2. Add the module loader to your channel JS: https://pastebin.com/raw/igcf8ZyZ 
3. Add the CustomChannelCSS to your channel CSS: https://raw.githubusercontent.com/BillTube/BillTube2/master/CustomChannelCSS

**Configuration Guide**
The `.env` file contains all your channel configuration. Each variable is documented with comments explaining its purpose. 
Channel CSS can be edited to customize the colors of the main theme, Although users may be able to switch to a different built-in theme if you prefer. 

It's highly recommended to leave the Billtube script as is, hosting it yourself is possible but you will miss out on updates. The script is still being worked on and tested.

Customizing your theme is very easy,
Go to admin settings > Edit > CSS and change the following variables to your liking (These are HEX color codes, RGB codes are also supported).
```
:root {
 --body-bg-color: #0e1015fa;
 --theme-bg-color: #040405;
etc```

After changing the CSS variables, you'll need to configure your environment settings in the `.env` file.