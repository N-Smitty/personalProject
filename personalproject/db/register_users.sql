insert into register_users (
email,
password
) values (
    $1,
    $2
)
returning *