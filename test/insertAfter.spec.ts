import test from "ava";
import { insertAfter } from "../src/insertAfter.js";

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
