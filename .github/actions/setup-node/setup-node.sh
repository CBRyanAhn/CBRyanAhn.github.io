#!/bin/sh
set -e
echo "Setting up Node.js..."
apk add --no-cache nodejs npm
node -v
npm -v
