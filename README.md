# p2-iproject-server
Individual Project - Server


 sequelize model:create --name Location --attributes code:integer,name:string,state:string,country:string,long:integer,lat:integer

 sequelize model:create --name WeatherToday --attributes datetime:integer,status:string,iconUrl:string,temperature:integer,pressure:integer,humidity:integer,wingspeed:integer,LocationId:integer

 sequelize model:create --name WeatherHistory --attributes datetime:integer,status:string,iconUrl:string,temperature:integer,pressure:integer,humidity:integer,wingspeed:integer,LocationId:integer

 sequelize model:create --name WeatherForecast --attributes datetime:integer,status:string,iconUrl:string,temperature:integer,pressure:integer,humidity:integer,wingspeed:integer,LocationId:integer,WeatherHistoryId:integer,WeatherTodayId:integer

background-image: url('https://picsum.photos/id/519/2200/1200');

https://i.picsum.photos/id/717/4288/2848.jpg?hmac=pfarEcqTU1BFiNpitmqcE12_ZEVv1G59jgjFIiLXm5I