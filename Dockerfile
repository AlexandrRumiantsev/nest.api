# Основной образ
FROM node:20 AS base

WORKDIR /usr/src/app

# Установка зависимостей
COPY package*.json yarn.lock* ./
RUN npm ci

# Скопируем исходники
COPY . .

# Старт Dev-режима
CMD ["npm", "run", "start:dev"]