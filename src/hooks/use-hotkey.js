import { useEffect } from "react";
import useModifierKey from "./use-modifier-key";

function useHotkey(modifierKey, letterKey, action) {
  const modifierKeyDown = useModifierKey(modifierKey);
  useEffect(() => {
    function doActionOnKeypress(e) {
      if (!modifierKeyDown) return;
      if (e.isComposing || e.keyCode === 229) return;
      if (e.key !== letterKey.toLowerCase()) return;
      action();
    }

    window.addEventListener("keydown", doActionOnKeypress);
    return () => {
      window.removeEventListener("keydown", doActionOnKeypress);
    };
  }, [modifierKeyDown, letterKey, action]);
}

export default useHotkey;
