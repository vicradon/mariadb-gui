-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
INSERT INTO orders (user_id, order_date, status) VALUES (:user_id, :order_date, :order_status);