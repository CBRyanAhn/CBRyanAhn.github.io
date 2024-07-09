#!/bin/sh
set -e

echo "Deploying to GitHub Pages..."
apk add --no-cache git
cd $GITHUB_WORKSPACE
git config --global user.email "action@github.com"
git config --global user.name "GitHub Action"
git init
git remote add origin "https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git checkout -b gh-pages
cp -r ./public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
