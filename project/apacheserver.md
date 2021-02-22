[Home page](../)

[back to Inprogress](inprogress.md)
[NLP info](nlp.md)

# Setting up Flask with Apache Server

Steps below assumes you have a general understanding of Python and a bit of flask and no knowledge of Apache or servers. (myself rn when writing this)



## 1.)  Installing Flask and Apache

Linux:
```
sudo apt install apache2
```

Then find your local IP address, either by ```i``` or ```hostname -I | awk 'print $1}'```.  Then open the IP address in a browser, if you get something similar in the image, then instalization is a success.

<picture>
<source srcset="../IMAGES/apachesuccess.webp" type="image/webp">
<source srcset="../IMAGES/apachesuccess.png" type="image/png" alt="Image of Apache front page">
</picture>

### net-tools
otherwise use ```ifconfig``` to get more detail about IP and stuff.
```netstat -a | more``` to get info about ports


commands related to the apache webserver (left and right are the same command)
Stop the server:
```sudo /etc/init.d/apache2 stop``` or ```sudo systemctl stop apache2.service```
Start:
``` sudo /etc/init.d/apache2 start``` or ```sudo systemctl start apache2.service```
Restart:
``` sudo /etc/init.d/apache2 restart``` or ```sudo systemctl restart apache2.service```
Reload:
``` sudo /etc/init.d/apache2 reload``` or ```sudo systemctl reload apache2.service```


apache default site is index.html

in /var/www/index.html

### configure Firewall (UFW)

```sudo ufw show app list``` to display applications that use ports 80

```sudo ufw allow 'Apache'``` to enable apache, chnage apache to OpenSSH for SSH.

then verify the change using ```sudo ufw status```


### apache logs and other files:

From [this site](https://phoenixnap.com/kb/how-to-install-apache-web-server-on-ubuntu-18-04)
"""
As mentioned above, website content is stored in the/var/www/html/directory. You can create subdirectories within this location for each different website hosted on your server.

Apache creates log files for any errors it generates in the file /var/log/apache2/error.log.

It also creates access logs for its interactions with clients in the file /var/log/apache2/access.log.

Like many Linux-based applications, Apache functions through the use of configuration files. They are all located in the /etc/apache2/ directory.

Here’s a list of other essential directories:

/etc/apache2/apache2.conf – This is the main Apache configuration file and controls everything Apache does on your system. Changes here affect all the websites hosted on this machine.
/etc/apache2/ports.conf – The port configuration file. You can customize the ports Apache monitors using this file. By default, Port 80 is configured for http traffic.
/etc/apache2/sites-available – Storage for Apache virtual host files. A virtual host is a record of one of the websites hosted on the server.
/etc/apache2/sites-enabled – This directory holds websites that are ready to serve clients. The a2ensite command is used on a virtual host file in the sites-available directory to add sites to this location.

"""


## 2.) install mod_wsgi

mod_wsgi is an apache module that allows you to host a python web apps.
mod_wsgi is required because python has its Python WSGI configuration and you need a pipeline/interface between the server and web application.

```sudo apt install libapache2-mod-wsgi``` (on ubuntu. for other linux distributions, the package name might differ)

also install ```sudo apt install python-dev```


### what a flask app looks like:

insert stuff


## 3.) setting a virtual enviroment (just to be very safe)

pip install virtualenv

```
$ sudo virtualenv venv
$ source venv/bin/activate
```
then install flask

```
(venv)$ sudo pip install Flask
```
checkl if flask runs in virtualenv:

```
(venv)$ sudo python __init__.py
```
output should be a link to a local host


# from website

Here is the Apache config file (/etc/apache2/sites-available/flaskhelloworldsite.com.conf):
```
<VirtualHost *:80>
ServerAdmin webmaster@flaskhelloworldsite.com
ServerName www.flaskhelloworldsite.com
ServerAlias flaskhelloworldsite.com
ErrorLog /var/www/flaskhelloworldsite.com/logs/error.log
CustomLog /var/www/flaskhelloworldsite.com/logs/access.log combined

WSGIDaemonProcess helloworldapp user=www-data group=www-data threads=5
WSGIProcessGroup helloworldapp
WSGIScriptAlias / /var/www/FLASKAPPS/helloworldapp/helloworldapp.wsgi
Alias /static/ /var/www/FLASKAPPS/helloworldapp/static
<Directory /var/www/FLASKAPPS/helloworldapp/static>
    Order allow,deny
    Allow from all
</Directory>

</VirtualHost>
```
then:
```
$ sudo a2ensite flaskhelloworldsite.com.conf
```
The WSGI file (/var/www/FLASKAPPS/helloworldapp/helloworldapp.wsgi):
```
#!/usr/bin/python
import sys
sys.path.insert(0,"/var/www/FLASKAPPS/")
from helloworldapp import app as application
```

Add the following line to /etc/hosts file:
```
127.0.0.1 flaskhelloworldsite.com
```

Also, we need to create ```/var/www/flaskhelloworldsite.com/logs``` directory:
```
$ sudo mkdir -p /var/www/flaskhelloworldsite.com/logs
```
Change the owner:
```
$ sudo chown -R www-data:www-data flaskhelloworldsite.com
```

then reload app:
``` sudo /etc/init.d/apache2 reload```