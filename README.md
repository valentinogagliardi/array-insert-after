# array-insert-after
> Insert an element after the given index.

## Install

```bash
npm install @valentinog/array-insert-after
```

## Usage

With a numeric index:

```typescript
const elements = ["b", "c", "d"];
const newElement = "a";

insertAfter<string>(elements, newElement, 1);
```

With a predicate function:

```typescript
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

## Development

### Test

```bash
npm test
```
