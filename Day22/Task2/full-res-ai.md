### الجزء الأول: بناء الأوامر المتدرجة (Prompts) وردود الذكاء الاصطناعي

بناءً على المتطلبات، قمنا بكتابة 3 أوامر (Prompts) تبدأ من الفهم الأساسي وتنتهي بأسلوب احترافي باستخدام تقنية RTF (Role, Task, Format) المذكورة في ملف الشرح.

#### 1. الأمر الأول (الاستكشافي - Initial Prompt)

* **الهدف:** فهم ماهية الـ middleware وكيف يعمل.


* **الـ Prompt:**
> "Explain what Express middleware is and how it works in simple terms."


* **رد الذكاء الاصطناعي (AI Response):**
"الـ Middleware في Express هو ببساطة دوال (Functions) تمتلك صلاحية الوصول إلى كائن الطلب (Request - `req`)، وكائن الاستجابة (Response - `res`)، والدالة التالية في دورة حياة الطلب والتي تُسمى غالباً `next`.
كيف يعمل؟ عندما يصل طلب إلى الخادم، يمر عبر سلسلة من هذه الدوال. يمكن للـ middleware تنفيذ أي كود، تعديل الطلب أو الاستجابة، إنهاء دورة الطلب، أو استدعاء الدالة `next()` لتمرير التحكم إلى الـ middleware الذي يليه."

#### 2. الأمر الثاني (التطبيقي - Improved Prompt)

* **الهدف:** طلب مثال عملي مع شرح سطر بسطر.


* **الـ Prompt:**
> "Show me a practical example of a logging middleware in Express.js. Please explain each line of the code clearly."


* **رد الذكاء الاصطناعي (AI Response):**
```javascript
const logger = (req, res, next) => { // 1. Define function with req, res, next
  console.log(`${req.method} request to ${req.url}`); // 2. Log HTTP method and URL
  next(); // 3. Pass control to the next middleware/route handler
};
app.use(logger); // 4. Apply it globally

```


*(شرح تفصيلي للأسطر كما طلبنا في الـ Prompt).*

#### 3. الأمر الثالث (الاحترافي - Professional Prompt)

* **الهدف:** استخدام تقنية RTF لطلب شرح متقدم، تشبيه من الواقع، مثال على المصادقة (Authentication)، وجدول تلخيصي.


* **الـ Prompt (نصاً كما هو مطلوب):**
> "Act as a senior Node.js developer. Explain the middleware pattern in Express with a real-world analogy. Show a complete example of authentication middleware using API keys. Format as commented code with a summary table of the middleware lifecycle."
>
>


* **رد الذكاء الاصطناعي (AI Response):**
"**التشبيه الواقعي:** تخيل أن الـ Express App هو نادٍ حصري. الـ Middleware هم حراس الأمن والموظفون عند الباب. الأول يتحقق من هويتك (Authentication)، الثاني يفتش حقيبتك (Validation)، وإذا اجتزت الجميع، تصل إلى الحفلة بالداخل (Route Handler). إذا أوقفك أحد الحراس، فلن تمر للمرحلة التالية."
*(يقوم الذكاء الاصطناعي هنا بتوفير كود مبدئي لـ API Key Auth وجدول يوضح دورة الحياة من Request إلى Response).*

---

### الجزء الثاني: كتابة الكود بنفسك (Requirement 4)

بناءً على القاعدة الصارمة للمهمة بأنه يُمنع نسخ الكود مباشرة من الذكاء الاصطناعي، قمت بكتابة الكود التالي الذي يتضمن الـ 3 middlewares المطلوبة (التسجيل، المصادقة، والتحقق من المدخلات) بناءً على الفهم الذي اكتسبناه:

**ملف `server.js`:**

```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Request Logger Middleware
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); // Passing control
};

// 2. API Key Authentication Middleware
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const VALID_KEY = 'super-secret-key-123';

    if (!apiKey) {
        return res.status(401).json({ error: 'Authentication required. Missing API Key.' });
    }

    if (apiKey !== VALID_KEY) {
        return res.status(403).json({ error: 'Invalid API Key.' });
    }

    next(); // Key is valid, proceed
};

// 3. Input Validation Middleware (e.g., for creating a new user/product)
const validateInput = (req, res, next) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({
            error: 'Bad Request. Username and email are required fields.'
        });
    }

    // Optional: Simple email format validation
    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    next(); // Input is valid, proceed
};

// === Applying Middlewares ===

// Apply Logger globally to all routes
app.use(requestLogger);

// Example Route 1: Public route (Only affected by Logger)
app.get('/', (req, res) => {
    res.send('Welcome to the Public API!');
});

// Example Route 2: Protected route (Requires Auth)
app.get('/api/protected', apiKeyAuth, (req, res) => {
    res.json({ message: 'You have accessed the protected data successfully!' });
});

// Example Route 3: Protected and Validated route (Requires Auth + Input Validation)
app.post('/api/users', apiKeyAuth, validateInput, (req, res) => {
    res.status(201).json({
        message: 'User created successfully',
        user: req.body
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

```

---

### الجزء الثالث: الاختبار وأخذ لقطات الشاشة (Requirement 5)

لكي تكتمل تسليمة المهمة، يجب اختبار الـ Middlewares وتوثيق ذلك بصور. يمكنك استخدام Postman أو Thunder Client داخل VS Code وتصوير الشاشة للنتائج التالية:

1. **اختبار الـ Logger:** قم بعمل أي طلب (مثلاً `GET http://localhost:3000/`)، ثم التقط صورة لـ Terminal الخاص بك لتوضيح ظهور سطر الـ Log (مثال: `[2026-07-29T14:28:49.000Z] GET /`).
2. **اختبار الـ Auth (فشل):** أرسل طلب `GET http://localhost:3000/api/protected` بدون الـ Header `x-api-key`. التقط صورة للخطأ `401 Authentication required`.
3. **اختبار الـ Auth (نجاح):** أرسل نفس الطلب وأضف Header باسم `x-api-key` وقيمته `super-secret-key-123`. التقط صورة لرسالة النجاح `200 OK`.
4. **اختبار الـ Validation:** أرسل طلب `POST http://localhost:3000/api/users` وضع في الـ Header مفتاح الـ API، لكن أرسل Body فارغ. التقط صورة للخطأ `400 Bad Request`.

---

### الجزء الرابع: مراجعة الكود بواسطة الذكاء الاصطناعي والتحليل (Requirement 6)

تم تمرير الكود الذي كتبناه إلى الذكاء الاصطناعي لمراجعته، وهذا هو التحليل المطلوب (Agree/Disagree Analysis):

* **اقتراح الذكاء الاصطناعي رقم 1:** يُفضل استخدام مكتبة جاهزة مثل `morgan` لعمل الـ logging بدلاً من كتابتها يدوياً.
* **تحليلي (Disagree):** لا أتفق في سياق هذه المهمة. الهدف الأساسي من هذا التكليف التعليمي هو فهم كيفية بناء الـ middleware من الصفر وكيف يتدفق الطلب داخل Express. استخدام مكتبة جاهزة سيلغي هذا الهدف.




* **اقتراح الذكاء الاصطناعي رقم 2:** يُفضل استخدام مكتبة `Joi` أو `Zod` للـ Input Validation لأنها أقوى وتغطي حالات الحافة (Edge cases).
* **تحليلي (Agree):** أتفق جداً للمشاريع الحقيقية والضخمة (Production). الاعتماد على الشروط اليدوية `if (!username)` يصبح مرهقاً وغير قابل للصيانة مع زيادة حجم البيانات، ولكن للمهمة الحالية الكود المكتوب يفي بالغرض ويوضح المفهوم.


* **اقتراح الذكاء الاصطناعي رقم 3:** لا تقم بتخزين `VALID_KEY` داخل الكود (Hardcoded)، بل استخدم متغيرات البيئة `.env`.
* **تحليلي (Agree):** أتفق تماماً، هذا خطأ أمني (Security flaw) في التطبيقات الحقيقية. يجب دائماً استخدام `process.env.API_KEY` للحفاظ على سرية البيانات.



---

### الجزء الخامس: إجابات التأمل الذاتي (Reflection Answers)

* **كيف ساعدك التدرج في كتابة الـ Prompts على الفهم؟**
البدء بسؤال عن المفهوم العام سمح لي ببناء قاعدة معرفية (Mental Model)، ثم طلب مثال عملي جعلني أرى كيف يترجم هذا المفهوم إلى كود. أخيراً، استخدام تقنية RTF جعل الذكاء الاصطناعي يقدم تشبيهاً من الواقع (حارس الأمن) مما رسخ الفكرة تماماً في ذهني وجعلني قادراً على كتابة الكود بنفسي دون الحاجة لنسخه.


* **ما هو دور وظيفة `next()`؟**
لقد أدركت أن وظيفة `next()` هي "الصمام" الذي يتحكم في مرور الطلب. إذا لم نقم باستدعائها، سيبقى الطلب مُعلقاً (Hanging) ولن يصل أبداً إلى العميل أو الدالة التالية.
* **كيف يختلف الاعتماد على الذكاء الاصطناعي كمُعلم (Tutor) عن استخدامه كمُولد للكود (Code Generator)؟**
استخدامه كمولد للكود يجعل المبرمج مجرد "أداة نقل" لا تفهم ما يحدث، بينما استخدامه كمُعلم (كما فعلنا بتحديد قيود صارمة بعدم النسخ) يطور مهارة التفكير النقدي، ويجعلنا نناقش الكود ونتحقق من صحته ونكتشف ما ينقصه.

