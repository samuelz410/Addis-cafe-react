import { useState } from "react";

export default function OrderForm({ orderTotal }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isPhoneValid = /^(09|07)\d{8}$/.test(form.phone.trim());

  const isFormValid =
    form.name.trim() !== "" && form.area.trim() !== "" && isPhoneValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert(
      `Order submitted for ${form.name}! Total: ${orderTotal.toFixed(2)} ETB`
    );
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Delivery Details</h3>

      <div className="field">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. almi werku"
        />
      </div>

      <div className="field">
        <label>TeleBirr Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="0912345678 "
        />
        {form.phone && !isPhoneValid && (
          <span className="error">
            Enter a valid 10-digit TeleBirr number (starting with 09 or 07)
          </span>
        )}
      </div>

      <div className="field">
        <label>Delivery Area</label>
        <input
          type="text"
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="e.g. Bole"
        />
      </div>

      <button type="submit" disabled={!isFormValid || orderTotal === 0}>
        Place Order ({orderTotal.toFixed(2)} ETB)
      </button>
    </form>
  );
}