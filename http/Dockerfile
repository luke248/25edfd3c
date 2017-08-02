FROM node:8-onbuild

HEALTHCHECK --interval=10s --timeout=5s \
            CMD curl -f http://127.0.0.1:80 || exit 1

EXPOSE 80
