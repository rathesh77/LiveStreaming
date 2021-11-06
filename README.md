# Live Streaming

Start recording your desktop and stream it live to the world ! 

For the moment, the instructions below can be safely applied on a windows operating system.

## Installation instructions

- Download "nginx 1.7.11.3 Gryphon.zip" from http://nginx-win.ecsds.eu/download/
- After cloning this repo : 
    -   unzip nginx 1.7.11.3 Gryphon.zip
    -    move /conf/nginx.conf inside nginx 1.7.11.3 Gryphon/conf folder
    -    move /srv folder into nginx 1.7.11.3 Gryphon root folder

## Start the NGINX server

- open a terminal and browse inside the extracted folder above
- start the nginx server with the command ```nginx```. This will start a web server listening on port 80 and a rtmp server listening on port 1935

## Record and stream your windows desktop using FFMPEG
- After downloading an already compiled version of FFMPEG (or the source code that you compiled on your own), browse to the ffmpeg.exe file location and start recording and streaming your windows desktop with the following command : ``` ffmpeg -f dshow -framerate 30 -i video="screen-capture-recorder" -vcodec libx264 -pix_fmt yuv420p -tune zerolatency -preset ultrafast -f flv rtmp://localhost/live/test ```. This will streaming your desktop and stream it to the rtmp server which is running under the url "rtmp://localhost/live/test". By default, RTMP uses port 1935 so you do not need to specify it.

Go to http://localhost and enjoy ! 
## License

MIT

