FROM python:3.11-bullseye

RUN apt-get update
RUN apt-get install -y build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs --no-install-recommends
RUN rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man
RUN apt-get clean

RUN python -m pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./aldenluthfi /app
WORKDIR /app

COPY start.sh /start.sh

ENTRYPOINT ["sh", "/start.sh"]