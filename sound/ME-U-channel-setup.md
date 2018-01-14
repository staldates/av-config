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
[this link](http://192.168.1.40/cgi-bin/setsharedchanneldata.cgi?{%22Channels%22:[{%22UserChannelName%22:%22Ch%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Gtr%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Gtr%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Piano%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Pads%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Bass%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Cello%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Elec%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Amb%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2011%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2012%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%203%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Vox%204%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Kick%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Snr%20T%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Snr%20Bt%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Hi%20Hat%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22R%20Tom%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Fl%20Tom%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22OH%20L%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22OH%20R%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Click%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Amb%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2027%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2028%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2029%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2030%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2031%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2032%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%201%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%202%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Lav%203%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Red%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Blue%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Yellow%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2039%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true},{%22UserChannelName%22:%22Ch%2040%22,%22UseReceivedName%22:false,%22UserStereoLink%22:false,%22UseReceivedStereoLink%22:true}]}&_=1512234816377)
which will override all the channel names with no further warning.

To generate a link like this to save a custom config, use your browser's insepctor features to
capture the URL that is generated when the save button is pressed in the web interface. It will
be a single URL about 4k long.

You can download the confing in JSON format [here](http://192.168.1.40/cgi-bin/getsharedchanneldata.cgi)
