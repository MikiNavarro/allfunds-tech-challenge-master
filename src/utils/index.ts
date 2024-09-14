export const addItem = (
  list: { id: string; quantity: number }[],
  id: string
) => {
  const existingItems = list.find((item) => item.id === id);
  if (existingItems) {
    return list.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...list, { id, quantity: 1 }];
  }
};

export const removeItem = (list, id) =>
  list
    .map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    })
    .filter(Boolean);
