FROM php:7.2.5-fpm
RUN apt-get update \
	&& apt-get install -y openssl libmcrypt-dev nano \
	&& rm -rf /var/lib/apt/lists/* \
	&& pecl install mcrypt-1.0.1 \
	&& docker-php-ext-enable mcrypt
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring
WORKDIR /app
COPY . /app
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000