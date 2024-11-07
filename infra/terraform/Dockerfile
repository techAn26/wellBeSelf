FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl unzip git

ARG version="1.9.5"

# Terraformをインストール
RUN curl -O "https://releases.hashicorp.com/terraform/${version}/terraform_${version}_linux_amd64.zip"
RUN unzip terraform_${version}_linux_amd64.zip
RUN rm terraform_${version}_linux_amd64.zip
RUN mv terraform /usr/local/bin/

WORKDIR /terraform

CMD bash
