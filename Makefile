all:
	rm -rf static/
	gssg --url https://www.gregmckeever.com --domain http://127.0.0.1:2368
	cp ghost/etc/keybase.txt static/
	cp static/404/index.html static/404.html