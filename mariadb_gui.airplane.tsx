import {
  Button,
  Dialog,
  Form,
  Stack,
  Table,
  Title,
  useComponentState,
} from "@airplane/views";
import airplane from "airplane";

const AddCustomerDialog = () => {
  const { id, open, close } = useComponentState();
  return (
    <>
      <Dialog id={id} title="Add customer" onClose={close}>
        <Form task="add_customer" />
      </Dialog>

      <Stack direction="row" justify="end">
        <Button onClick={open}>Add Customer</Button>
      </Stack>
    </>
  );
};

const AddOrderDialog = () => {
  const { id, open, close } = useComponentState();
  return (
    <>
      <Dialog id={id} title="Add order" onClose={close}>
        <Form task="add_order" />
      </Dialog>

      <Stack direction="row" justify="end">
        <Button onClick={open}>Add Order</Button>
      </Stack>
    </>
  );
};

const AddPaymentDialog = () => {
  const { id, open, close } = useComponentState();
  return (
    <>
      <Dialog id={id} title="Add payment" onClose={close}>
        <Form task="add_payment" />
      </Dialog>

      <Stack direction="row" justify="end">
        <Button onClick={open}>Add Payment</Button>
      </Stack>
    </>
  );
};

const CustomersView = () => {
  return (
    <Stack>
      <Stack direction="row" justify="space-between">
        <Title>Customers</Title>
        <AddCustomerDialog />
      </Stack>

      <Table
        title="Customers"
        task="fetch_customers"
        rowSelection="checkbox"
        columns={[
          {
            label: "ID",
            accessor: "id",
            canEdit: false,
          },
          {
            label: "First name",
            accessor: "first_name",
            canEdit: true,
          },
          {
            label: "Last name",
            accessor: "last_name",
            canEdit: true,
          },
        ]}
        rowActions={[
          {
            slug: "update_customer",
            label: "Update",
          },
          {
            slug: "delete_customer",
            label: "Delete",
            confirm: {
              title: "Are you sure you want to delete this row?",
              body: "This action cannot be undone.",
              confirmText: "Delete",
              cancelText: "Take me back",
            },
          },
        ]}
      />
    </Stack>
  );
};

const OrdersView = () => {
  return (
    <Stack>
      <Stack direction="row" justify="space-between">
        <Title>Orders</Title>
        <AddOrderDialog />
      </Stack>

      <Table
        title="Orders"
        task="fetch_orders"
        rowSelection="checkbox"
        columns={[
          {
            label: "ID",
            accessor: "id",
            canEdit: false,
          },
          {
            label: "User ID",
            accessor: "user_id",
            canEdit: true,
          },
          {
            label: "Order Date",
            accessor: "order_date",
            canEdit: true,
          },
          {
            label: "Order Status",
            accessor: "status",
            typeOptions: {
              selectData: ["completed", "returned"],
            },
            canEdit: true,
          },
        ]}
        rowActions={[
          {
            slug: "update_order",
            label: "Update",
          },
          {
            slug: "delete_order",
            label: "Delete",
            confirm: {
              title: "Are you sure you want to delete this row?",
              body: "This action cannot be undone.",
              confirmText: "Delete",
              cancelText: "Take me back",
            },
          },
        ]}
      />
    </Stack>
  );
};

const PaymentsView = () => {
  return (
    <Stack>
      <Stack direction="row" justify="space-between">
        <Title>Payments</Title>
        <AddPaymentDialog />
      </Stack>

      <Table
        title="Orders"
        task="fetch_payments"
        rowSelection="checkbox"
        columns={[
          {
            label: "ID",
            accessor: "id",
            canEdit: false,
          },
          {
            label: "Order ID",
            accessor: "order_id",
            canEdit: true,
          },
          {
            label: "Payment Method",
            accessor: "payment_method",
            typeOptions: {
              selectData: [
                "credit_card",
                "bank_transfer",
                "gift_card",
                "coupon",
              ],
            },
            canEdit: true,
          },
          {
            label: "Amount",
            accessor: "amount",
            canEdit: true,
          },
        ]}
        rowActions={[
          {
            slug: "update_payment",
            label: "Update",
          },
          {
            slug: "delete_payment",
            label: "Delete",
            confirm: {
              title: "Are you sure you want to delete this row?",
              body: "This action cannot be undone.",
              confirmText: "Delete",
              cancelText: "Take me back",
            },
          },
        ]}
      />
    </Stack>
  );
};

const MariaDBGui = () => {
  return (
    <Stack spacing={"xl"}>
      <CustomersView />
      <OrdersView />
      <PaymentsView />
    </Stack>
  );
};

export default airplane.view(
  {
    slug: "maria_db_gui",
    name: "Maria DB GUI",
  },
  MariaDBGui
);
