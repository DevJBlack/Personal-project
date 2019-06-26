update products 
set
  name=${name},
  disc=${disc},
  price=${price},
  image_url=${image_url}
where products_id = ${id}

select * from products