# 📝 Form Events in JavaScript

Form events are triggered when a user interacts with input fields, textareas, checkboxes, or submits forms.  
They are commonly used for **form validation, input tracking, and submission handling**.

---

## 📌 Common Form Events

| Event | Description |
|-------|-------------|
| `submit` | Fires when a form is submitted. |
| `input` | Fires when the value of an input/textarea changes (on every keystroke). |
| `change` | Fires when the value of an input changes **and loses focus** (blur). |
| `focus` | Fires when an input gains focus (clicked or tabbed into). |
| `blur` | Fires when an input loses focus. |
| `reset` | Fires when a form is reset. |

---

### 📌 Summary
`submit` → triggered when form is submitted (use e.preventDefault() to stop reload).
`input` → fires on every keystroke inside an input/textarea.
`change` → fires when input changes after losing focus.
`focus` → triggered when field is active.
`blur` → triggered when field loses focus.
`reset` → triggered when form reset button is clicked.
