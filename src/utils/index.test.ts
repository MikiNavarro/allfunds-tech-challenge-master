import { describe, it, expect } from "vitest";
import { addItem, removeItem } from ".";

describe("regarding the addItem function", () => {
  describe("when the item is not in the cart", () => {
    it("should add the item to the cart with quantity to 1", () => {
      const cartItems = [];
      const id = "1";
      expect(addItem(cartItems, id)).toEqual([{ id, quantity: 1 }]);
    });
  });

  describe("when the item is already in the cart", () => {
    it("should increase the quantity of the item in the cart by 1", () => {
      const cartItems = [{ id: "1", quantity: 1 }];
      const id = "1";
      expect(addItem(cartItems, id)).toEqual([{ id, quantity: 2 }]);
    });
  });
});

describe("regarding the removeItem function", () => {
  describe("when the item has a quantity greater than 1", () => {
    it("should remove an item from the cart", () => {
      const cartItems = [{ id: "1", quantity: 2 }];
      const id = "1";
      expect(removeItem(cartItems, id)).toEqual([{ id, quantity: 1 }]);
    });
  });

  describe("when the item has a quantity equal than 1", () => {
    it("should remove an item from the cart", () => {
      const cartItems = [{ id: "1", quantity: 1 }];
      const id = "1";
      expect(removeItem(cartItems, id)).toEqual([]);
    });
  });
});
