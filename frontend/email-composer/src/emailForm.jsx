import { useEmail } from "./useContext.jsx";

export default function EmailForm() {
  const { email, setEmail } = useEmail();

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email)
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      alert("Email sent successfully!");
    } catch (error) {
      alert(error.message || "Failed to send email");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
    fontSize: "15px"
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Compose Email
      </h2>

      <input
        style={inputStyle}
        name="to"
        type="email"
        placeholder="Recipient email"
        value={email.to}
        onChange={handleChange}
      />

      <input
        style={inputStyle}
        name="subject"
        placeholder="Subject"
        value={email.subject}
        onChange={handleChange}
      />

      <textarea
        style={{ ...inputStyle, height: "180px", resize: "vertical" }}
        name="body"
        placeholder="Write your email..."
        value={email.body}
        onChange={handleChange}
      />

      <button
        onClick={handleSend}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Send Email
      </button>
    </div>
  );
}