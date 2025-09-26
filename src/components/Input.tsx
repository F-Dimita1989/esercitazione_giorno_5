import React, { useState } from "react";

const InputRealtime: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Testo digitato: {value}</p>
    </div>
  );
};

export default InputRealtime;
