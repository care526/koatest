#! /bin/bash

pm2 list

pm2 start ../dist/app.js --name koatest