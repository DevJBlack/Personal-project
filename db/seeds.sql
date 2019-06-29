CREATE TABLE admin (
    admin_id SERIAL PRIMARY KEY,
    name VARCHAR, 
    email VARCHAR,
    password VARCHAR(255)
),
CREATE TABLE products (
    products_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES admin(admin_id)
    name VARCHAR,
    disc TEXT,
    price INTEGER,
    image_url TEXT
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
    disc,
    price,
    image_url
)

values('Model S', 'Performance, Battery: Long Range 345 miles, Acceleration: 0-60 2.4s Drive: All-Wheel Drive, Seating: 5 Adults, Wheels: 19" or 21", Touchscreen Display: 17"', 96000, 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg ');

insert into products (
    name,
    disc,
    price,
    image_url
)

values('Roadster', 'Acceleration 0-60 1.9s, Acceleration 0-100 4.2s, Acceleration 1/4 miles 8.8s, Top Speed Over 250 mph, Mile Range 620 miles, Drive: All-Wheel Drive, Seating: 4', 250000, 'https://st.motortrend.com/uploads/sites/5/2018/09/2020-Tesla-Roadster-white-on-Grand-Basel-show-floor.jpg');

insert into products (
    name,
    disc,
    price,
    image_url
)

values(	'Model 3', 'Performance, Battery: Long Range 310 miles, Acceleration: 0-60 3.2, Drive: Dual Motor All-Wheel Drive, Seating: 5 Adults, Wheels: 20" Performance Wheels, Touchsreen Display: 15"', 59900, 'https://teslamotorsclub.com/wp-content/uploads/2019/04/5.png?x34629');

insert into products (
    name,
    disc,
    price,
    image_url
)

values('Model X', 'Performance, Battery: Long Range 325 miles, Acceleration: 0-60 2.7, Drive: All-Wheel Drive, Seating: 7 Adults, Wheels: 20" 22" Performance Wheels, Touchsreen Display: 17"', 102000, 'https://postmediadriving.files.wordpress.com/2015/11/tesla_model_x.png?w=800&h=520&crop=1');

insert into products (
    name,
    disc,
    price,
    image_url
)

values('Model Y', 'Performance, Battery: Long Range 280 miles, Acceleration: 0-60 3.5s Drive: All-Wheel Drive, Seating: 7 Adults, Wheels: 20", Touchsreen Display: 15"', 61000, 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/model_3_-_mountain_pearl.jpg?itok=MqxuLFle');

    insert into products (
    name,
    disc,
    price,
    image_url
)

	values(name: "Semi",
	disc: "Semi is the safest, most comfortable truck ever. Four independent motors provide maximum power and acceleration and require the lowest energy cost ",
	price: 200000,
	image_url: "https://amp.businessinsider.com/images/5c6ec80a342cca0349392a33-750-563.jpg");

insert into products (
    name,
    disc,
    price,
    image_url
)

values('Wall Connector', 'A Tesla Wall Connector is the most convenient way to charge at your home or office - with the fastest recharge speeds. Simply plug in overnight and wake up to a full charge, every morning.', 500, 'https://shop.tesla.com/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/CHARGING_ADAPTERS/1050067-01-E_0.png');

insert into products (
    name,
    disc,
    price,
    image_url
)

values('Corded Mobile Connector','The Corded Mobile Connector has an integrated 240 volt 50 amp rated plug for high power output. A seamless design provides a low profile connection, allowing for use with covered outdoor outlets.', 520, 'https://shop.tesla.com/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/CHARGING_ADAPTERS/1106293-00-A_0.jpg');


