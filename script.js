jwplayer("jwplayerDiv").setup({    
     file: "https://ev-fast-mpd.starzplayarabia.com/live/eds/CricLifeMax/DASH/CricLifeMax.mpd", 
         position: 'bottom',  
        "autostart": true,
        "Volume": "100",
        "mute": false,         
        "stretching": "exactfit",
        "width": "100%", 
      type: "dash",    
      drm: { "clearkey": {    
               "keyId": "ad59b720bd4b44d063686212b99484b5",    
              "key": "e1744990edf98acc729c0773a3766583" 
            } 
             }             
}); 
