# 📡 XMLHttpRequest (XHR) — Complete Guide

## 🧠 What is XMLHttpRequest?

**XMLHttpRequest (XHR)** is a built-in JavaScript object that allows web pages to make HTTP requests to a server **without reloading** the page.  
It’s the foundation of **AJAX (Asynchronous JavaScript and XML)** — used to send and receive data in the background.

> Example: Fetching data from an API, sending form data, or updating content dynamically.

---

## 🎯 Why Use XMLHttpRequest?

Here are some common **use cases**:

1. 🌐 Fetch data from an API or server  
2. 📨 Send form data to the backend  
3. 🔁 Update part of a webpage without reloading  
4. ⚠️ Handle server responses and errors  
5. 📂 Upload files asynchronously  

---

## 🧩 Basic Syntax

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log('Response:', xhr.responseText);
  } else {
    console.error('Error:', xhr.status);
  }
};
```

---

## 🪜 Steps to Use XMLHttpRequest

1. **Create** an XMLHttpRequest object  
   ```js
   const xhr = new XMLHttpRequest();
   ```

2. **Open** a connection  
   ```js
   xhr.open('GET', 'https://api.example.com/data', true);
   ```
   - `'GET'`: HTTP method  
   - `'https://api.example.com/data'`: API URL  
   - `true`: asynchronous (use `false` for synchronous)

3. **Send** the request  
   ```js
   xhr.send();
   ```

4. **Handle** the response  
   ```js
   xhr.onload = function () {
     if (xhr.status === 200) {
       console.log(xhr.responseText);
     }
   };
   ```

---

## ⚙️ Properties of XMLHttpRequest

| Property | Description |
|-----------|-------------|
| `xhr.readyState` | Holds the state of the XMLHttpRequest (0–4) |
| `xhr.status` | Returns the HTTP status code (200, 404, etc.) |
| `xhr.statusText` | Returns the status message (like "OK") |
| `xhr.responseText` | Returns the response data as a string |
| `xhr.responseXML` | Returns the response data as XML |
| `xhr.timeout` | Sets the time (ms) before request times out |
| `xhr.withCredentials` | Sends cookies or authentication headers |

---

## 🧰 Common Methods

| Method | Description |
|---------|-------------|
| `open(method, url, async)` | Initializes a request |
| `send(body)` | Sends the request to the server |
| `abort()` | Cancels the request |
| `setRequestHeader(header, value)` | Adds custom HTTP headers |
| `getResponseHeader(header)` | Gets a specific header from the response |
| `getAllResponseHeaders()` | Returns all headers from the response |

---

## 🔄 ReadyState Values

| Value | State | Description |
|--------|--------|-------------|
| `0` | `UNSENT` | Request not initialized |
| `1` | `OPENED` | Connection established |
| `2` | `HEADERS_RECEIVED` | Request sent, headers received |
| `3` | `LOADING` | Response is being received |
| `4` | `DONE` | Request finished and response ready |

---

## 💡 Example — Fetch Data Using XHR

```js
// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET request for a sample API
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// When the request loads
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log('Fetched Data:', data);
  } else {
    console.error('Error fetching data:', xhr.status);
  }
};

// Handle errors
xhr.onerror = function () {
  console.error('Request failed.');
};

// Send the request
xhr.send();
```

---

## 📤 Example — Send Data Using POST Request

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

xhr.onload = function () {
  if (xhr.status === 201) {
    console.log('Data sent successfully:', xhr.responseText);
  }
};

xhr.onerror = function () {
  console.error('Request failed.');
};

const data = JSON.stringify({ title: 'Hello', body: 'World', userId: 1 });
xhr.send(data);
```

---

## 🧠 Tips

- Always check `xhr.status` before using the response.  
- Use `JSON.parse(xhr.responseText)` for JSON responses.  
- Use `xhr.onreadystatechange` to track state changes manually.  
- Use `xhr.timeout` and `xhr.ontimeout` to handle slow responses.  
- Prefer **Fetch API** in modern JavaScript — simpler and promise-based.

---

## 🚀 XHR vs Fetch API (Quick Comparison)

| Feature | XMLHttpRequest | Fetch API |
|----------|----------------|-----------|
| Syntax | Callback-based | Promise-based |
| Error Handling | Manual | `.catch()` supported |
| Response Types | Text/XML | Text, JSON, Blob, etc. |
| Modern Usage | Legacy support | Recommended for modern apps |

---

## 📘 Summary

**XMLHttpRequest (XHR)** allows your webpage to:
- Communicate with servers without reloading  
- Send and receive data in the background  
- Build interactive, dynamic web applications  

Although modern apps use **Fetch API**, understanding XHR helps you learn how **AJAX** and **HTTP requests** work behind the scenes.

---

### 👨‍💻 Author
Created with ❤️ by [Aman Mujawar]
