#!/bin/sh
set -e
echo "Checking out the repository..."
git checkout $GITHUB_REF
