INSERT INTO products (
user_id,  name, disc, price, image_url
)

VALUES(${admin_id}, ${name}, ${disc}, ${price}, ${image_url});

SELECT * FROM products