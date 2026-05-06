import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (error) {
        console.log("Orders API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h5 className="text-muted">Loading Orders...</h5>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 px-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold" style={{ color: "#5E35B1" }}>
          My Orders
        </h3>
        <p className="text-muted mb-0">
          Track all your recent buy and sell requests.
        </p>
      </div>

      {orders.length === 0 ? (
        <div
          className="card border-0 shadow-sm text-center p-5"
          style={{ borderRadius: "16px" }}
        >
          <h5 className="mb-2">No Orders Found</h5>
          <p className="text-muted mb-0">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "16px" }}
          >
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead
                    style={{
                      backgroundColor: "#f8f9fa",
                    }}
                  >
                    <tr>
                      <th className="ps-4">Stock</th>
                      <th>Type</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th className="pe-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td className="ps-4 fw-semibold">{order.stock}</td>

                        <td>
                          <span
                            className={`badge ${
                              order.type === "BUY" ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {order.type}
                          </span>
                        </td>

                        <td>{order.qty}</td>

                        <td>₹{order.price}</td>

                        <td>{new Date(order.createdAt).toLocaleString()}</td>
                        <td className="pe-4">
                          <span
                            className={`fw-semibold ${
                              order.status === "Completed"
                                ? "text-success"
                                : "text-warning"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row g-4 mt-1">
            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: "14px" }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">Total Orders</h6>
                  <p className="mb-0 text-muted">{orders.length}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: "14px" }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">Completed</h6>
                  <p className="mb-0 text-success">
                    {
                      orders.filter((item) => item.status === "Completed")
                        .length
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: "14px" }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">Pending</h6>
                  <p className="mb-0 text-warning">
                    {orders.filter((item) => item.status === "Pending").length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
