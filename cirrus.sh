#!/bin/bash

python --version
sudo hdiutil attach SafariTechnologyPreview.dmg
sudo installer -pkg "/Volumes/Safari Technology Preview/Safari Technology Preview.pkg" -target /
