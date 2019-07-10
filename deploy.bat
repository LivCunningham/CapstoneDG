dotnet publish -c Release 

Copy-Item dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t date-genie-image ./bin/release/netcoreapp2.2/publish

docker tag date-genie-image registry.heroku.com/date-genie/web

docker push registry.heroku.com/date-genie/web

heroku container:release web -a date-genie

# sudo chmod 755 deploy.sh
# ./deploy.sh