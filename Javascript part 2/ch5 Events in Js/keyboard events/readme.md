# ⌨️ Keyboard Events in JavaScript

Keyboard events are triggered when a user presses, holds, or releases a key on the keyboard.  
They are commonly used for form handling, shortcuts, and game controls.

---

## 📌 Common Keyboard Events

| Event | Description |
|-------|-------------|
| `keydown` | Fires when a key is pressed down (fires repeatedly if held). |
| `keypress` | Fires when a key is pressed (deprecated, use `keydown`). |
| `keyup` | Fires when a key is released. |

---

## 📌 Useful Event Properties

| Property | Description |
|----------|-------------|
| `e.key` | Returns the actual key pressed (e.g., `"a"`, `"Enter"`). |
| `e.code` | Returns the physical key code (e.g., `"KeyA"`, `"Enter"`). |
| `e.keyCode` | Returns the numeric code of key (deprecated but still works). |
| `e.altKey` | `true` if **Alt** key is pressed during event. |
| `e.ctrlKey` | `true` if **Ctrl** key is pressed during event. |
| `e.shiftKey` | `true` if **Shift** key is pressed during event. |
| `e.metaKey` | `true` if **Windows/Command** key is pressed. |
| `e.repeat` | `true` if key is being held down (repeated firing). |
| `e.preventDefault()` | Prevents default action (e.g., stops typing in input). |

