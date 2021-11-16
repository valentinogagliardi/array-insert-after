# array-insert-after
> Insert an element after the given index.

## Install

```bash
npm install @valentinog/array-insert-after
```

## Usage (ES module)

With a numeric index:

```typescript
import insertAfter from "@valentinog/array-insert-after";

const elements = ["b", "c", "d"];
const newElement = "a";

insertAfter<string>(elements, newElement, 1);
```

With a predicate function:

```typescript
import insertAfter from "@valentinog/array-insert-after";

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

insertAfter<{ id: number; name: string }>(elements, newElement, predicate);
```

## Usage (CommonJS)

```typescript
const insertAfter =  require("@valentinog/array-insert-after");

// do your stuff
```

## Development

### Test

```bash
npm test
```
