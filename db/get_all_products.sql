select p.*, a.name
from products p
join admin a on p.user_id = a.admin_id;
select * from products