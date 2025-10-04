# 🪟 Window Events in JavaScript

Window events are triggered by actions on the **browser window or document**, such as loading, resizing, scrolling, or closing the page.  
They are useful for handling **page setup, performance tracking, user behavior, and cleanup before leaving the page**.

---

## 📌 Common Window Events

| Event | Description |
|-------|-------------|
| `load` | Fires when the whole page (HTML, CSS, images, scripts) is fully loaded. |
| `DOMContentLoaded` | Fires when HTML is loaded and parsed (before images/scripts are loaded). |
| `resize` | Fires when the browser window is resized. |
| `scroll` | Fires when the page is scrolled. |
| `beforeunload` | Fires before the page is closed or refreshed (allows showing confirmation). |
| `unload` | Fires when the document is being unloaded (not reliable, replaced by `beforeunload`). |
| `focus` | Fires when the window gets focus (active tab). |
| `blur` | Fires when the window loses focus (user switches tab/app). |
| `error` | Fires when a JavaScript error occurs. |
| `hashchange` | Fires when the URL hash (`#section`) changes. |
| `online` | Fires when the browser goes online. |
| `offline` | Fires when the browser goes offline. |

---

## 📌 Summary

* `load` → fires when everything is loaded.
* `DOMContentLoaded` → fires earlier, when HTML is parsed.
* `resize` → track window size changes.
* `scroll` → detect scroll position.
* `beforeunload` → show confirmation before leaving page.
* `focus` / `blur` → detect tab switch.
* `online` / `offline` → track network status.