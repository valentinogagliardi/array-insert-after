import test from "ava";
import insertAfter from "../src/insertAfter.js";

test("insert a new element after the given index", (t) => {
  const elements = ["b", "c", "d"];
  const newElement = "a";

  t.deepEqual(insertAfter<string>(elements, newElement, 1), [
    "b",
    "c",
    "a",
    "d",
  ]);
});

test("insert a new element after the given index, at the end", (t) => {
  const elements = ["b", "c", "d"];
  const newElement = "a";

  t.deepEqual(insertAfter<string>(elements, newElement, 2), [
    "b",
    "c",
    "d",
    "a",
  ]);
});

test("insert a new element after the given index, at the beginning", (t) => {
  const elements = ["b", "c", "d"];
  const newElement = "a";

  t.deepEqual(insertAfter<string>(elements, newElement, 0), [
    "b",
    "a",
    "c",
    "d",
  ]);
});

test("insert a new element after the given index based on a predicate finder function", (t) => {
  const elements = [
    {
      id: 1,
      name: "a",
    },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];
  const newElement = {
    id: 4,
    name: "x",
  };

  const predicate = (element: typeof newElement) => element.id === 2;

  t.deepEqual(
    insertAfter<{ id: number; name: string }>(elements, newElement, predicate),
    [
      {
        id: 1,
        name: "a",
      },
      { id: 2, name: "b" },
      {
        id: 4,
        name: "x",
      },
      { id: 3, name: "c" },
    ]
  );
});

test("index out of bounds with array of primitives", (t) => {
  const elements = ["b", "c", "d"];
  const newElement = "a";

  t.throws(() => insertAfter<string>(elements, newElement, 3), {
    message: "Error: Index out of bounds",
  });
});

test("index out of bounds with array of objects", (t) => {
  const elements = [
    {
      id: 1,
      name: "a",
    },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];
  const newElement = {
    id: 4,
    name: "x",
  };

  t.throws(
    () => insertAfter<{ id: number; name: string }>(elements, newElement, 3),
    {
      message: "Error: Index out of bounds",
    }
  );
});
