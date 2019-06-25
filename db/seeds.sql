CREATE TABLE admin (
    admin_id SERIAL PRIMARY KEY,
    email VARCHAR,
    password VARCHAR(50)
),
CREATE TABLE products (
    products_id SERIAL PRIMARY KEY,
    name, VARCHAR,
    acceleration  DECIMAL,
    cubic_ft INTEGER,
    range INTEGER,
    disc TEXT
)
,
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    phone INTEGER,
    email VARCHAR,
    city VARCHAR,
    state VARCHAR(2),
    zip INTEGER
),

insert into products (
    name,
    acceleration,
    cubic_ft,
    range,
    disc
)

values('Model S', 2.4, 30, 345, 'Performance, Battery: Long Range, Drive: All-Wheel Drive, Seating: 5 Adults, Wheels: 19" or 21", Touchscreen Display: 17" ')

insert into products (
    name,
    acceleration,
    cubic_ft,
    range,
    disc
)

values('Roadster', 1.9, 66, 620, 'Acceleration 0-60 1.9s, Acceleration 0-100 4.2s, Acceleration 1/4 miles 8.8s, Top Speed Over 250 mph, Mile Range 620 miles, Drive: All-Wheel Drive, Seating: 4, Founders Series Price: 250,000')
