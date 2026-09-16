FROM nginx:1.27-alpine

COPY index.html app.js styles.css config.example.js /usr/share/nginx/html/
COPY resources /usr/share/nginx/html/resources
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /docker-entrypoint.d/40-wedding-registry-config.sh

RUN chmod +x /docker-entrypoint.d/40-wedding-registry-config.sh
