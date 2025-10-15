[GOWN ITEMS]
name
id
price
description
quantity
created_at
created_by

[SIZES]
id
gown_id
size (s,m,l,xl,xxl,3x) enum
stock

[USER]
name
id
role (customer, admin)
created_at


[CONTACT]
id
user_id
contact_no

[AUTH]
user_id
email
password

[ADDRESS]
id
user_id
country_id
province_id
city_id
street
postal_code

[COUNTRY]
id
name

[PROVINCE]
id
country_id
name

[CITY]
id
province_id
postal_id
name


[CART_ITEMS]
id
user_id
gown_id
size
quantity
added_at

[ORDER ITEM]
id
down_id
size
quantity
price_each
order_id

[ORDER]
id
user_id
subtotal
discount
total_payable
status
created_at
updated_by

[RECEIPT]
id
receipt_code
amount_paid
order_id
change
date/time

[DISCOUNT]
id
code
description
percentage
active
expiration_date







