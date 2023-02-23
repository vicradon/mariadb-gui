-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
INSERT INTO payments (order_id, payment_method, amount) VALUES (:order_id, :payment_method, :amount);