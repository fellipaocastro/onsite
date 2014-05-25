HEROKU_URL='git@heroku.com:fc-chaordic-onsite.git'

git remote | grep 'heroku' &> /dev/null

if [ $? -ne 0 ]; then
    git remote add heroku $HEROKU_URL
fi

git push heroku master
