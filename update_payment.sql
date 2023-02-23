-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
UPDATE payments
SET order_id=:order_id,payment_method=:payment_method,amount=:amount
WHERE id=:id;