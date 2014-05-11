git remote | grep 'heroku' &> /dev/null
if [ $? -ne 0 ]; then
    git remote add heroku git@heroku.com:chaordic-code-challenge.git
fi
git push heroku master
