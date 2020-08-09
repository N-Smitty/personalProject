insert into breeding_info (
dog_id,
insemination_type,
ng_ml,
date_taken,
time_taken
) values (
$1,
$2,
$3,
$4,
$5
);

returning * where dog_id = $1;
