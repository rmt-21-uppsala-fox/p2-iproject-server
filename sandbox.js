/**

npx sequelize-cli model:generate --name User --attributes userName:string,email:string,password:string
npx sequelize-cli model:generate --name Trip --attributes name:string,imgUrl:string,price:integer,description:string,date:date
npx sequelize-cli model:generate --name TripUser --attributes UserId:integer,TripId:integer

 */