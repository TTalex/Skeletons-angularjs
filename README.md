# Skeletons: Angularjs
This is a skeleton app for an Angularjs project

## Deployment
This app can be deployed with the help of nginx
#### Installing nginx
```bash
sudo apt-get install nginx
sudo service nginx start
```
#### Configuration
Edit */etc/nginx/sites-available/default*
```ruby
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root <PATH>/Skeletons_angular;

	index index.html

	server_name _;

	location / {
		try_files $uri$args $uri$args/ /index.html =404;
	}
    # SSL configuration
	# https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04
	# listen 443 ssl default_server;
	# listen [::]:443 ssl default_server;
	# ssl_certificate <PATH>/certs/device.crt;
	# ssl_certificate_key <PATH>/certs/device.key;
}
```

Then restart nginx
```
sudo service nginx restart
```
