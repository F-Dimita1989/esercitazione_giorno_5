import React, { useEffect, useState } from "react";

type Preferences = {
  theme: "light" | "dark";
  language: "it" | "en";
};

const PreferencesForm: React.FC = () => {
  const [prefs, setPrefs] = useState<Preferences>({
    theme: "light",
    language: "it",
  });

  // Carica preferenze al mount
  useEffect(() => {
    const saved = localStorage.getItem("prefs");
    if (saved) setPrefs(JSON.parse(saved));
  }, []);

  // Salva preferenze al cambio
  useEffect(() => {
    localStorage.setItem("prefs", JSON.stringify(prefs));
  }, [prefs]);

  return (
    <form>
      <label>
        Tema:
        <select
          value={prefs.theme}
          onChange={e =>
            setPrefs({ ...prefs, theme: e.target.value as "light" | "dark" })
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Lingua:
        <select
          value={prefs.language}
          onChange={e =>
            setPrefs({ ...prefs, language: e.target.value as "it" | "en" })
          }
        >
          <option value="it">Italiano</option>
          <option value="en">English</option>
        </select>
      </label>
    </form>
  );
};

export default PreferencesForm;
