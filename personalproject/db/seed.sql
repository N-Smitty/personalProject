create table users (
    user_id serial primary key,
    first_name varchar(64),
    last_name varchar(64),
    email varchar(250),
    password varchar (250)
);

insert into users (
    first_name,
    last_name,
    email,
    password
) values (
    'hello',
    'world',
    'natalie@testing.com',
    'testing'
);

-- select * from existing_users

CREATE TABLE dog_profile (
dog_id SERIAL PRIMARY KEY,
dog_name VARCHAR(150),
dog_age INT,
breed VARCHAR(250),
heat_number INT,
user_id INT REFERENCES users
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
