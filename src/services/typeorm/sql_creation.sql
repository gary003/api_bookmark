drop database mediadb;

create database mediadb;

use mediadb;

create table link(
  linkId int AUTO_INCREMENT,
  linkType varchar(50) not null,
  title varchar(50) not null,
  URL varchar(50) not null,
  addDate varchar(50) not null,
  publicationDate varchar(50) not null,
  thumbnail varchar(100) not null,
  height int not null,
  width int not null,
  duration int,
  primary key(linkId)
);

insert into link(
  linkType,
  title,
  URL,
  addDate,
  publicationDate,
  thumbnail,
  height,
  width,
  duration
) values
  ('photo','title1', 'site1.com','2020-11-23 12:02:55','2022-06-12 08:52:24.985 +02:00', 'thumbnail2.com',12,15,null),
  ('video','title2','site2.com','2022-01-15 22:02:55','2022-04-12 11:12:24.569 +02:00', 'thumbnail4.com',12,15,145),
  ('photo','title3', 'site3.com','2021-11-08 15:02:55','2022-05-04 22:12:24.478 +02:00', 'thumbnail1.com',12,15,null)
;