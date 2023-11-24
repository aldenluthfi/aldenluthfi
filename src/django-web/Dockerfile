FROM python:3.11-bullseye

RUN apt-get update \
  && apt-get install -y build-essential curl \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install -y nodejs --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean

RUN python -m pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./aldenluthfi /app
WORKDIR /app

COPY start.sh /start.sh

ENTRYPOINT ["sh", "/start.sh"]