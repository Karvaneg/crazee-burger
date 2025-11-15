import { useCallback, useState } from "react";

export function useArray(initial = []) {
  const [array, setArray] = useState(initial);

  // --- GETTERS ----------------------------------------------------------

  const count = useCallback(() => array.length, [array]);

  const findById = useCallback(
    (id) => array.find((item) => item && item.id === id),
    [array]
  );

  const findIndex = useCallback(
    (predicate) => array.findIndex(predicate),
    [array]
  );

  const exists = useCallback((predicate) => array.some(predicate), [array]);

  // --- MUTATIONS (SETTERS +++)---------------------------------------------------------

  const setAll = useCallback((newArray) => {
    setArray([...newArray]);
  }, []);

  const push = useCallback((item) => {
    setArray((prev) => [...prev, item]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const removeByIndex = useCallback((index) => {
    setArray((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const removeById = useCallback((id) => {
    setArray((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const replaceAtIndex = useCallback((index, newItem) => {
    setArray((prev) => prev.map((item, i) => (i === index ? newItem : item)));
  }, []);

  const updateById = useCallback((id, updates) => {
    setArray((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  }, []);

  // --- API EXPOSÉ --------------------------------------------------------

  return {
    array,
    setAll,
    push,
    clear,
    removeByIndex,
    removeById,
    replaceAtIndex,
    updateById,
    findById,
    findIndex,
    exists,
    count,
  };
}
