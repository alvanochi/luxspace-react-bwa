import React, { useRef } from "react";

export default function MyComponent() {
  {
    window.addEventListener("click", (e) => {
      console.log(e);
    });
  }
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const handleClick = () => {
    // inputRef.current.focus(); // Fokus ke input
    countRef.current++; // Increment nilai tanpa render ulang
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Klik Saya</button>
      <p>Count: {countRef.current}</p>
    </div>
  );
}
