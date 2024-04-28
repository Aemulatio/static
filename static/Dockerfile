FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

COPY images /www/data/images

COPY buildImages.ts /www/data/
CMD ["npm", "i", "ts-node"]
CMD ["ts-node", "buildImages.ts"]
RUN rm /www/data/buildImages.ts

COPY types /www/data/types

CMD ["nginx", "-g", "daemon off;"]
