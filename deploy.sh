git remote | grep 'heroku' &> /dev/null
if [ $? -ne 0 ]; then
    git remote add heroku git@heroku.com:fc-chaordic-onsite.git
fi
git push heroku master
