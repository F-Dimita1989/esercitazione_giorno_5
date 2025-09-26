import React, { useLayoutEffect, useRef, useState } from "react";

const categories = ["sport", "tech", "music"];
const items = [
  { id: 1, category: "sport", name: "Calcio" },
  { id: 2, category: "tech", name: "Laptop" },
  { id: 3, category: "music", name: "Chitarra" },
];

const ScrollList: React.FC = () => {
  const [filter, setFilter] = useState<string>("sport");
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [filter]);

  return (
    <div>
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <div
        ref={listRef}
        style={{ height: 150, overflowY: "auto", border: "1px solid #ccc" }}
      >
        {items.filter(i => i.category === filter)
          .map(i => <div key={i.id}>{i.name}</div>)}
      </div>
    </div>
  );
};

export default ScrollList;
