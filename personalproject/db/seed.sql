create table register_users (
user_id serial primary key,
first_name varchar(300),
last_name varchar(300),
email varchar(250),
password varchar(250)
);

insert into register_users (
first_name,
last_name,
email,
password
) values (
'Natalie',
'Smith',
'natalie@smithbunch.org',
'password'
);

select * from register_users

create table existing_users (
email varchar(250),
password varchar (250)
);

insert into existing_users (
email,
password
) values (
'natalie@testing.com',
'testing'
);

select * from existing_users

create table dog_profile (
dog_id serial primary key,
dog_name varchar(150),
dog_age int,
breed varchar(250),
heat_number int
);

insert into dog_profile (
dog_name,
dog_age,
breed, 
heat_number
) values (
'Bella',
2,
'English Bulldog',
2
);

select * from dog_profile


create table breeding_info (
breeding_id serial primary key,
insemination_type varchar(100) not null,
ng_ml int not null,
date_taken date not null,
time_taken time(0) not null
);

alter table breeding_info 
add column dog_id int references dog_profile(dog_id)

insert into breeding_info (
insemination_type,
ng_ml,
date_taken,
time_taken
) values (
'Artificial Insemination',
6,
'2020-08-05',
'09:22:00'
);

select * from breeding_info
