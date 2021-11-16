export type FinderPredicate<T extends any> = (element: T) => boolean;
export type InsertAfter = <T extends any>(
  elements: T[],
  newElement: T,
  after: number | FinderPredicate<T>
) => T[];

/**
 * Insert an element after the given index.
 *
 * @param elements The original array of elements.
 * @param newElement The new element to add.
 * @param after The index after the new element should be added. Can be either a number or a predicate function for Array.prototype.findIndex().
 *
 * @example
 * const elements = ["b", "c", "d"];
 * const newElement = "a";
 * insertAfter<string>(elements, newElement, 1)
 *
 * @example
 * const elements = [{ id:1 }, { id:2 }, { id:4 }]
 * const newElement = { id:9 }
 * const predicate = (element: typeof newElement) => element.id === 2;
 * insertAfter<{ id: number; name: string }>(elements, newElement, predicate)
 *
 * @version 1.0.2
 * @see https://github.com/valentinogagliardi/array-insert-after/blob/main/README.md#usage
 */
const insertAfter: InsertAfter = (elements, newElement, after) => {
  if (typeof after === "number" && after >= elements.length)
    throw Error("Error: Index out of bounds");

  if (typeof after === "function") {
    const index = elements.findIndex(after);
    const [first, ...rest] = elements.slice(index);
    return [...elements.slice(0, index), first, newElement, ...rest];
  }

  const [first, ...rest] = elements.slice(after);
  return [...elements.slice(0, after), first, newElement, ...rest];
};

export default insertAfter;
