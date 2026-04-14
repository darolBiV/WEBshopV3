import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc" }}>
      <button
        type="button"
        onClick={toggleAccordion}
        style={{
          width: "100%",
          padding: "12px",
          textAlign: "left",
          background: "#f5f5f5",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div style={{ padding: "12px", background: "#fff" }}>
          <p style={{ margin: 0 }}>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;