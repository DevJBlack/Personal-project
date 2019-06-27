INSERT INTO admin (
  name, email, password
)
VALUES(${name},${email},${hash})
RETURNING *;