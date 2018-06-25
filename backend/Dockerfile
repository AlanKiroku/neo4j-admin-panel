FROM alpine:latest 
MAINTAINER theydonthaveit "theydonthaveit@gmail.com"

ENV APP_DIR /app
COPY . ${APP_DIR}

RUN apk update && \
    apk add python python3 python3-dev supervisor && \
    pip3 install --upgrade pip && \
    pip3 install --trusted-host pypi.python.org -r /app/requirements.txt && \
    mkdir -p /etc/supervisor && \
    mkdir -p ${APP_DIR}/web && \
    mkdir -p ${APP_DIR}/conf && \
    mkdir -p ${APP_DIR}/logs && \
    echo "files = *.ini" >> /etc/supervisor/supervisord.conf

VOLUME ["${APP_DIR}"]
EXPOSE 5000
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"
