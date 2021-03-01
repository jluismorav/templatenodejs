FROM node:12.19.1

RUN mkdir -p /templatenodejs

WORKDIR /templatenodejs

COPY . .
RUN /bin/bash -c "source  install.sh"
