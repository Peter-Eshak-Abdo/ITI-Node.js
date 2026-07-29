إليك الحل الكامل لـ Task 1 بناءً على المعطيات السابقة.

### Task 1: AI-Assisted API Debugging (Report)

**1. Documented Errors**

* **Port Error:** `RangeError [ERR_SOCKET_BAD_PORT]: Port should be >= 0 and < 65536. Received "three thousand"` due to passing a string instead of a number to `app.listen()`.
* **Missing Middleware Error:** `TypeError: Cannot destructure property 'name' of 'req.body'` because Express cannot parse incoming JSON payloads without `express.json()` middleware.
* **Logical Error (Wrong Method):** Retrieving a user by ID `/:id` is mapped to `app.post` instead of `app.get`.
* **Logical Error (Wrong Status/Message):** The `app.delete` route returns `{ message: 'Created successfully' }` instead of a deletion confirmation.

**2. Prompts and AI Responses Document**

* **Prompt 1 (Initial):** "I have an Express app that is not working. Can you help me debug it? Here is the code: [code]"
* *AI Response 1:* Identified the port string error (`three thousand` to `3000`) and the DELETE message typo, but missed the middleware and HTTP method bugs.


* **Prompt 2 (Improved):** "When I send a POST request to '/api/users' with a JSON payload, `req.body` is undefined and it throws a TypeError. Also, I get a port error when starting the server. What am I missing in this specific endpoint and the listen method?"
* *AI Response 2:* Provided the solution for the `req.body` TypeError (adding `app.use(express.json())`) and fixed the port error.


* **Prompt 3 (Final - RTF Technique):** "Role: Act as a Senior Node.js Developer. Task: Review the provided Express code and identify all bugs related to missing middleware, RESTful HTTP method conventions, response status messages, and server initialization. Format: Provide a bulleted list of identified issues with brief explanations of why they are wrong in a real-world API context."
* *AI Response 3:* Successfully identified all 4 bugs (JSON middleware, GET vs POST for `/:id`, DELETE response message, and the numeric port requirement).



**3. Comparison Table**

| Prompt Level | Prompt Technique | What the Prompt Produced | Actual Correct Fixes Required |
| --- | --- | --- | --- |
| **Prompt 1** | Generic "Fix my code" | Found port error and DELETE message typo. Missed middleware and HTTP method bugs. | 1. Add `express.json()`<br>

<br>2. Change POST to GET<br>

<br>3. Fix DELETE msg<br>

<br>4. Fix port |
| **Prompt 2** | Specific Error Mentions | Fixed `req.body` TypeError and port error. | 1. Add `express.json()`<br>

<br>2. Change POST to GET<br>

<br>3. Fix DELETE msg<br>

<br>4. Fix port |
| **Prompt 3** | Professional (RTF) | Identified all 4 bugs accurately due to specific constraints. | 1. Add `express.json()`<br>

<br>2. Change POST to GET<br>

<br>3. Fix DELETE msg<br>

<br>4. Fix port |

**4. Reflection Answers**
Generic prompts yield incomplete solutions, often fixing only surface-level syntax errors (like the port issue). By refining the prompt using the RTF (Role, Task, Format) framework and specifying constraints like RESTful conventions and middleware, the AI is forced to evaluate the code contextually, resulting in 100% accuracy.

---

### كود حل Task 1

```javascript
const express = require('express');
const app = express();

// FIX 1: Add JSON parsing middleware
app.use(express.json());

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).send('Missing fields');
    res.status(201).json({ name, email });
});

// FIX 2: Change app.post to app.get for fetching data
app.get('/api/users/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Ahmed' });
});

// FIX 3: Correct the response message for deletion
app.delete('/api/users/:id', (req, res) => {
    res.status(200).json({ message: 'Deleted successfully' });
});

// FIX 4: Change port from string 'three thousand' to integer 3000
app.listen(3000, () => console.log('Running on port 3000'));

```

---

### أين تضع هذه الملفات وما هو المطلوب بعد ذلك؟

1. **تنظيم الملفات:**
* قم بإنشاء مجلد رئيسي باسم `Assignment` أو `AI_Tasks`.
* بداخله، أنشئ مجلد باسم `Task1`.


2. **وضع الكود:**
* داخل مجلد `Task1`، قم بإنشاء ملف باسم `server.js` وانسخ داخله الكود الموجود بالأعلى.
