# 🧠 Functional State Management System (JavaScript)

This is a modular state management system built with **pure functions**, **immutable state updates**, **functional programming principles**, and support for **undo/redo** actions. It is implemented in **Node.js** using **CommonJS syntax** and **Immer** for immutability.

---

## 📦 Features

- 🧱 **Single Source of Truth** (`appState`)
- ❄️ **Immutable State Updates** using [Immer](https://immerjs.github.io/immer/)
- ⚙️ **Pure Reducer Function** for predictable state transitions
- 🔁 **Undo & Redo Functionality** using curried pure functions
- 🧪 **Dispatch System** for processing actions through the reducer
- 📝 **Curried Logging Function** for customizable, pure logging

---

## 📁 File Structure

```

/State_Management_Functional_Approach/
├── state.js         # Initial app state and history object
├── reducer.js       # Pure reducer logic
├── dispatcher.js    # Dispatch system to process state changes
├── logger.js        # Curried logging function
├── undoRedo.js      # Undo/redo state transition functions
└── index.js         # Example usage and test driver

````

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/DagmMesfin/State_Management_Functional_Approach.git
cd State_Management_Functional_Approach
````

### 2. Install dependencies

```bash
npm install
```

> Only [Immer](https://www.npmjs.com/package/immer) is required as a dependency.

### 3. Run the example

```bash
node index.js
```

---

## 🧠 Example Output

```bash
[App] Event dispatched: { type: 'ADD_ITEM', payload: { id: 1, name: 'Apple' } }
[App] Event dispatched: { type: 'ADD_ITEM', payload: { id: 2, name: 'Banana' } }
After adds: { items: [ { id: 1, name: 'Apple' }, { id: 2, name: 'Banana' } ] }
After undo: { items: [ { id: 1, name: 'Apple' } ] }
After redo: { items: [ { id: 1, name: 'Apple' }, { id: 2, name: 'Banana' } ] }
```

---

## 🔧 Customization

### Add a new reducer action:

Edit `reducer.js`:

```js
case 'UPDATE_ITEM':
  draft.items = draft.items.map(item =>
    item.id === event.payload.id ? { ...item, ...event.payload.updates } : item
  );
  break;
```

### Customize logger:

In `index.js`:

```js
const logger = createLogger('MyApp');
```

---

## 🧪 Functional Programming Principles Used

| Principle               | How It’s Applied                                       |
| ----------------------- | ------------------------------------------------------ |
| Immutability            | Immer handles structural cloning on state updates      |
| Pure Functions          | All logic functions return output without side effects |
| Curried Functions       | Logger and undo/redo use currying for flexibility      |
| No Shared Mutable State | Every change creates a new state & history object      |
| Declarative Logic       | Action-driven state transition via reducer             |
| Single Source of Truth  | `history.present` holds the true app state             |

---

## 📚 Dependencies

* [immer](https://www.npmjs.com/package/immer) — to produce immutable state updates easily.

Install with:

```bash
npm install immer
```

---

## ✨ Author

Created by [Dagim Mesfin](https://github.com/DagmMesfin)
