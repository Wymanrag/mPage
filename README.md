# mPage
## This is my personal webpage.

## Instalation Guide

Install git, Node.js and npm
```shell
sudo apt-get update
sudo apt-get install git nodejs npm
```


Create a directory for hosting the webpage files
```
mkdir /usr/www
cd /usr/www/
git clone https://github.com/Wymanrag/mPage.git
```


## Run app.js as a service with systemd

Create a service for the app:
```
cp intall/mPage.service /etc/systemd/system
systemctl daemon-reload
systemctl start mPage
```
Make it start on boot:
```
systemctl enable mPage
```

To check the status of the app use `journalctl -u mPage` or `systemctl status mPage`

*maintained by José Rodrigues*

## Run app.js as a service with PM2

Install PM2:
```
npm install pm2 -g
```
Start the app
```
cd /usr/www/mPage
pm2 start app.js -i max
```
Make it start on boot:
```
$ pm2 startup systemd
```