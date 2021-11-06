FROM ubuntu 

RUN apt update
RUN apt install -y build-essential git
RUN apt install -y libpcre3-dev libssl-dev zlib1g-dev

WORKDIR /nginx-server

RUN git clone https://github.com/arut/nginx-rtmp-module.git
RUN git clone https://github.com/nginx/nginx.git

WORKDIR /nginx-server/nginx

RUN ./auto/configure --add-module=../nginx-rtmp-module
RUN make
RUN make install

COPY ./conf/nginx.conf /usr/local/nginx/conf
RUN sed -i 's/.\/srv/\/usr\/local\/nginx\/srv/g' /usr/local/nginx/conf/nginx.conf
COPY ./srv /usr/local/nginx/srv

EXPOSE 80
EXPOSE 1935

CMD [ "/usr/local/nginx/sbin/nginx", "-g", "daemon off;" ]