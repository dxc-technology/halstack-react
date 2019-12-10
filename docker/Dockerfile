FROM node:8.12-alpine

RUN apk add --update git bash curl

ENV AWS_CLI_VERSION 1.15.47

RUN apk --no-cache update && \
    apk --no-cache add python py-pip py-setuptools ca-certificates groff less && \
    pip --no-cache-dir install awscli==${AWS_CLI_VERSION} && \
    rm -rf /var/cache/apk/*