# FROM php:8.2 AS building
# ENV TZ Europe/Rome


# RUN apt-get update && apt-get upgrade -y
# RUN docker-php-ext-install pdo
# RUN docker-php-ext-install pdo_mysql
# RUN docker-php-ext-install sockets
# RUN docker-php-ext-install bcmath
# RUN apt-get install -y libzip-dev zip
# RUN curl -sS https://getcomposer.org/installer | php -- \
#      --install-dir=/usr/local/bin --filename=composer

# WORKDIR /app
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
# COPY ./pokeweb_BE-main .
# RUN composer install --no-dev --ignore-platform-reqs
# RUN php artisan key:generate

FROM php:8-alpine3.16 AS building
ENV TZ Europe/Rome

RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
 
WORKDIR /app
COPY ./pokeweb_BE-main .
RUN composer install
RUN php artisan key:generate