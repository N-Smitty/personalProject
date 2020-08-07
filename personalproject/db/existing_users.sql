-- insert into existing_user (
--     email,
--     password
-- ) values (
--     ${email},
--     ${password}
-- );

select * from existing_users
where email = $1;