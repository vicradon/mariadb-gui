UPDATE orders
SET user_id=:user_id,order_status=:order_status,order_date=:order_date
WHERE id=:id;