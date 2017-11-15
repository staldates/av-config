ME-U channel name setup
=======================

The ME-U has a fixed IP address, which is 192.168.1.40 by default, and is accessed through the normal
RJ45 port (non-ethercon) labelled network on it's fron panel (note that we plan to change this default
and link this network to the St Aldate's AV network know as Galactica on WiFi).

When you are connected to the interface with the right manual IP address setup, The ME-U's built in web
interface is available [here](http://192.168.1.40/).

The ME-U channel names are set by sending a GET request to /cgi-bin/setsharedchanneldata.cgi with
a query string consisting of encoded JSON data with a key "Channels" containing an array of the 40 channels,
as below:

```JSON
{
  "Channels": [
    {
      "ReceivedChannelName": "",
      "UserChannelName": "Talk",
      "UseReceivedName": false,
      "ReceivedStereoLink": false,
      "UserStereoLink": false,
      "UseReceivedStereoLink": true
    },
    ...
  ]
}
```

This means that to reset the config, you can simply connect to the network and click on
[this link](http://192.168.1.40/cgi-bin/setsharedchanneldata.cgi?{%22Channels%22:[{%22UserChannelName%22:%22Talk%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%222%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Gtr%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Gtr%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Keys%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Keys%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Bass%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%228%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22E.Gtr%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2210%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2211%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2212%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%203%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%204%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Kick%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22SnareT%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22SnareB%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Hats%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22TomR%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22TomF%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22OH%20L%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22OH%20R%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2225%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2226%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2227%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2228%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2229%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2230%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2231%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%2232%22,%22UseReceivedName%22:true,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%203%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Red%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Blue%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Yellow%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Mics%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Record%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true}]}&_=1510490768080)
which will override all the channel names with no further warning.

To generate a link like this to save a custom config, use your browser's insepctor features to
capture the URL that is generated when the save button is pressed in the web interface. It will
be a single URL about 4k long.
