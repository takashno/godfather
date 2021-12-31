FROM nginx:latest

RUN mkdir /usr/share/nginx/html/static
RUN mkdir /usr/share/nginx/html/static/css
RUN mkdir /usr/share/nginx/html/static/js
ADD ./build/* /usr/share/nginx/html/
ADD ./build/static/* /usr/share/nginx/html/static
ADD ./build/static/css/* /usr/share/nginx/html/static/css
ADD ./build/static/js/* /usr/share/nginx/html/static/js

RUN echo "start nginx"