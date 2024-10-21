#!/bin/bash
dirName=${PWD##*/}
#cd ../../apps
if [ ! -d "$dirName" ]; then
  sudo mkdir $dirName
  echo "Created App dir"
fi

cd $dirName

if [ ! -d ".git" ]; then
  sudo git init
  sudo git remote add origin https://github.com/Riccioka/$dirName
  echo "Finished 'git init' and creation of origin in $dirName folder"
fi

sudo git pull origin main
echo "Finished 'git pull'"

NODE_PATH="/usr/local/nvm/versions/node/v20.18.0/bin/node"
NPM_PATH="/usr/local/nvm/versions/node/v20.18.0/bin/npm"
FOREVER_PATH="/usr/local/nvm/versions/node/v20.18.0/bin/forever"

$NPM_PATH install
echo "Finished 'npm install'"

$FOREVER_PATH stop htdocs/appform.js || true
$FOREVER_PATH start htdocs/appform.js
echo "App should be forever started on server. Check it out"


#sudo /usr/local/nvm/versions/node/v20.18.0/bin/npm install
#echo "Finished 'npm install'"
#forever stop htdocs/appform.js || true
#forever start htdocs/appform.js
#echo "App sould be forever started on server. Check it out"
