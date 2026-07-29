إليك نموذج كامل للتسليم (Deliverables) مقسم حسب المتطلبات:

1. المطالبات وإجابات الذكاء الاصطناعي (Prompts & AI Responses)
يتطلب منك التكليف كتابة 3 مطالبات (Prompts) متدرجة وتوثيقها. يمكنك استخدام هذه المطالبات في أي أداة ذكاء اصطناعي (مثل ChatGPT أو Gemini) ونسخ إجاباتها في ملف التسليم الخاص بك:
PDF

Prompt 1 (Initial):

"Explain what Express middleware is and how it works."
PDF

ملاحظة للتسليم: قم بنسخ إجابة الذكاء الاصطناعي التي تشرح المفهوم الأساسي للـ Middleware وأرفقها في ملفك.

Prompt 2 (Improved):

"Show me a practical example of a logging middleware with an explanation of each line."
PDF

ملاحظة للتسليم: قم بنسخ الكود والشرح الذي سيولده الذكاء الاصطناعي كأمثلة تعليمية.

Prompt 3 (Professional - RTF Technique):

"Act as a senior Node.js developer. Explain the middleware pattern in Express with a real-world analogy. Show a complete example of authentication middleware using API keys. Format as commented code with a summary table of the middleware lifecycle."
PDF

ملاحظة للتسليم: انسخ الإجابة الكاملة التي ستحتوي على التشبيه الواقعي، كود المصادقة، وجدول دورة حياة الـ Middleware.

2. الكود المصدري (Source Code)
بناءً على القاعدة التي تنص على "عدم نسخ الكود مباشرة من الذكاء الاصطناعي واستخدام ما تعلمته"، إليك الكود الذي يجب عليك كتابته بنفسك في ملف server.js. الكود يحتوي على الـ 3 Middleware المطلوبة:
PDF
+ 1

JavaScript
const express = require('express');
const app = express();

// السماح لـ Express بقراءة الـ JSON من الـ Body
app.use(express.json());

// 1. Request Logger Middleware
// وظيفتها: طباعة نوع الطلب ومساره ووقت حدوثه
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next(); // الانتقال إلى الـ Middleware أو الـ Route التالي
};

// 2. API Key Authentication Middleware
// وظيفتها: التأكد من وجود مفتاح API صحيح في الـ Headers
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const VALID_API_KEY = "my_secret_key_123";

    if (!apiKey) {
        return res.status(401).json({ error: 'Access Denied: No API key provided.' });
    }
    if (apiKey !== VALID_API_KEY) {
        return res.status(403).json({ error: 'Access Denied: Invalid API key.' });
    }
    next();
};

// 3. Input Validation Middleware
// وظيفتها: التأكد من أن البيانات المرسلة في طلب الـ POST صحيحة
const validateInput = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Bad Request: Missing name or email.' });
    }
    next();
};

// --- تطبيق الـ Middlewares على الـ Routes ---

// تطبيق الـ Logger على جميع المسارات
app.use(requestLogger);

// مسار محمي يتطلب Auth و Validation
app.post('/api/data', apiKeyAuth, validateInput, (req, res) => {
    res.status(200).json({
        message: 'Data successfully processed!',
        data: req.body
    });
});

// مسار محمي يتطلب Auth فقط للتحقق
app.get('/api/data', apiKeyAuth, (req, res) => {
    res.status(200).json({ message: 'You have valid access to get data.' });
});

// تشغيل الخادم
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
3. الاختبار ولقطات الشاشة (Testing & Screenshots)
يتطلب التكليف اختبار كل Middleware وتوثيق النتائج بلقطات شاشة (Screenshots). ستحتاج إلى استخدام أداة مثل Postman أو Thunder Client لاختبار الكود والتقاط الصور:
PDF

اختبار الـ Logger: قم بإرسال أي طلب (GET أو POST) إلى الخادم.

اللقطة المطلوبة: التقط صورة للـ Terminal (موجه الأوامر) الخاص بك وهو يطبع شيئاً مثل: [2026-07-29T11:46:31.000Z] GET request to /api/data.

اختبار الـ Auth:

أرسل طلب GET /api/data بدون إرسال x-api-key في الـ Headers. (يجب أن تظهر النتيجة 401 Access Denied). التقط صورة.

أرسل الطلب مرة أخرى مع إرسال x-api-key: my_secret_key_123 في الـ Headers. (يجب أن تنجح العملية). التقط صورة.

اختبار الـ Validation:

أرسل طلب POST /api/data يحتوي على الـ API Key الصحيح، لكن بجسم (Body) فارغ {}. (يجب أن يظهر الخطأ 400 Bad Request). التقط صورة.

أرسل الطلب مع إضافة name و email في الـ JSON body. (يجب أن يعود بـ 200 Data successfully processed). التقط صورة.

4. مراجعة الكود بواسطة الذكاء الاصطناعي (AI Code Review & Feedback)
يطلب منك التكليف أن تطلب من الذكاء الاصطناعي مراجعة الكود الذي كتبته، ثم توثيق مقترحاته وتوضيح ما إذا كنت تتفق أو تختلف معها (مع ذكر الأسباب).
PDF

الـ Prompt المستخدم للمراجعة:
"Review the following Express middleware code I wrote. Suggest improvements for best practices, edge cases, or security." (وقم بلصق الكود أعلاه).

نموذج للتحليل المطلوب إرفاقه (Agree/Disagree Analysis):
PDF

اقتراح الذكاء الاصطناعي الأول: اقترح استخدام مكتبة خارجية مثل morgan لعمل الـ Logging بدلاً من كتابتها يدوياً.

موقفي: أختلف (Disagree).

السبب: على الرغم من أن morgan ممتازة لبيئات الإنتاج (Production)، إلا أن الهدف من هذا التكليف هو فهم كيفية عمل الـ Middleware من الصفر وبناء المنطق برمجياً، لذلك الـ Custom Logger يفي بالغرض التعليمي بشكل أفضل.

اقتراح الذكاء الاصطناعي الثاني: اقترح استخدام مكتبة مثل Joi أو Zod لعمل الـ Input Validation بدلاً من التحقق اليدوي بـ if statements.

موقفي: أتفق (Agree).

السبب: الاعتماد على الشروط اليدوية (if/else) يصبح معقداً جداً وغير قابل للتوسع عندما تكبر قاعدة البيانات (مثلاً التحقق من صيغة الإيميل الصحيحة أو طول كلمة المرور). استخدام Joi يجعل الكود أكثر نظافة وقوة.

5. الإجابات التأملية (Reflection Answers)
قم بإضافة هذه الفقرة في نهاية ملفك:

//-------------------------------------------------------------
1. تحديد 5 مشاكل في الكود القديم (قبل استخدام الذكاء الاصطناعي)بناءً على الكود الموروث (Legacy Code) المرفق في التكليف، هذه 5 مشاكل رئيسية في جودة الكود:  انعدام معالجة الأخطاء (No Error Handling): الكود لا يحتوي على أي فحص للأخطاء (مثل تعطل قاعدة البيانات)، مما قد يؤدي إلى توقف الخادم (Server Crash).استخدام الـ Callbacks: الكود يعتمد على طريقة الـ Callbacks القديمة (Callback Hell) بدلاً من استخدام الطرق الحديثة مثل async/await أو Promises.  غياب التحقق من المدخلات (No Input Validation): مسار الـ POST يقوم بإدخال req.body.name و req.body.price مباشرة إلى قاعدة البيانات دون التحقق من وجودهما أو صحة نوعهما.  تداخل المهام (No Separation of Concerns): الكود يجمع بين تعريف المسارات (Routes) ومنطق قواعد البيانات في مكان واحد، ولا يتبع نمط MVC.  استخدام أكواد حالة غير احترافية (Poor HTTP Status Codes): عند إضافة منتج بنجاح، يقوم الخادم بإرسال res.send('Added') بدلاً من استخدام الرد القياسي res.status(201).json(...).2. التفاعل مع الذكاء الاصطناعي (الـ 3 Prompts المطلوبة)إليك الـ Prompts التي يجب توثيقها في ملف التسليم الخاص بك مع الردود المتوقعة:Prompt 1 (المراجعة المبدئية)Prompt: Review the following Express + MongoDB legacy code and identify its code quality issues: [Insert the legacy code here].نتيجة المقارنة (Comparison): سيتطابق رد الذكاء الاصطناعي بنسبة كبيرة مع المشاكل الخمسة التي قمنا بتحديدها في الخطوة الأولى، حيث سيشير إلى غياب معالجة الأخطاء والاعتماد على الـ Callbacks.Prompt 2 (خطة إعادة الهيكلة)يطلب التكليف كتابة Prompt لطلب خطة عمل مقسمة حسب الأولويات.  Prompt: Based on the issues you found, provide a step-by-step refactoring plan with priorities (High, Medium, Low) to improve this Express API.الرد المتوقع (AI Response):High Priority: استبدال الـ Callbacks بـ async/await وإضافة كتل try/catch لمعالجة الأخطاء.Medium Priority: إضافة نظام للتحقق من المدخلات (Input validation) واستخدام HTTP Status Codes الصحيحة.Low Priority: إعادة هيكلة المشروع وتقسيمه إلى (Routes, Controllers, Models).Prompt 3 (الـ Prompt الاحترافي لتوليد الكود)هنا نستخدم تقنية لتحديد الدور (Role) وتوضيح المتطلبات بدقة.  Prompt: Act as a Senior Node.js Backend Developer. Suggest a refactored version of the legacy Express API provided earlier. Your code must follow the MVC pattern (separate into routes/, controllers/, and models/). Implement async/await, proper try/catch error handling, and basic input validation for the product's name and price.3. الكود بعد إعادة الهيكلة (Refactored Code)بناءً على توجيهات التكليف، يجب إعادة هيكلة الكود إلى مجلدات models/, controllers/, و routes/ واستخدام الممارسات السليمة.  1. ملف models/productModel.js(يعزل هذا الملف كل العمليات الخاصة بقاعدة البيانات)JavaScriptconst { getDb } = require('../config/database'); // Assuming a DB connection file exists

const getAllProducts = async () => {
    const db = getDb();
    return await db.collection('products').find().toArray();
};

const createProduct = async (productData) => {
    const db = getDb();
    return await db.collection('products').insertOne(productData);
};

module.exports = { getAllProducts, createProduct };
2. ملف controllers/productController.js(يحتوي على المنطق، التحقق، ومعالجة الأخطاء)JavaScriptconst Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;

        // Input Validation
        if (!name || !price) {
            return res.status(400).json({ message: 'Validation Error: Name and price are required' });
        }

        const newProduct = await Product.createProduct({ name, price });
        res.status(201).json({ message: 'Product added successfully', data: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

module.exports = { getProducts, addProduct };
3. ملف routes/productRoutes.js(يحتوي على المسارات فقط)JavaScriptconst express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.post('/products', productController.addProduct);

module.exports = router;
4. ملف server.js (الأساسي)JavaScriptconst express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json()); // Middleware for parsing JSON req.body

app.use('/api', productRoutes);

// Database connection logic goes here...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
4. التقييم والمقارنة (Before/After Comparison & Reflection)في الخطوة الأخيرة، يجب أن تطلب من الذكاء الاصطناعي مقارنة الكود القديم بالجديد.  Prompt to AI: Compare the legacy code with the new MVC refactored code. What exactly improved and what could still be better?التوثيق للإجابة (Documented Analysis):ما تم تحسينه (What improved):الكود أصبح قابلاً للقراءة والتطوير بفضل تقسيم MVC.  استخدام try/catch مع async/await يمنع الخادم من التوقف المفاجئ عند فشل قاعدة البيانات.  التحقق المسبق من المدخلات (Input validation) يحمي قاعدة البيانات من البيانات الناقصة.  ما يمكن تحسينه مستقبلاً (What could still be better):استخدام مكتبة مخصصة للتحقق من المدخلات مثل Joi أو Zod لمزيد من الأمان.إضافة ميزة تقسيم الصفحات (Pagination) في الـ GET route إذا كان عدد المنتجات ضخماً.
//------------------------------------------------------------------

1. تحديد 5 مشاكل في الكود القديم (قبل استخدام الذكاء الاصطناعي)بناءً على الكود الموروث (Legacy Code) المرفق في التكليف، هذه 5 مشاكل رئيسية في جودة الكود:  انعدام معالجة الأخطاء (No Error Handling): الكود لا يحتوي على أي فحص للأخطاء (مثل تعطل قاعدة البيانات)، مما قد يؤدي إلى توقف الخادم (Server Crash).استخدام الـ Callbacks: الكود يعتمد على طريقة الـ Callbacks القديمة (Callback Hell) بدلاً من استخدام الطرق الحديثة مثل async/await أو Promises.  غياب التحقق من المدخلات (No Input Validation): مسار الـ POST يقوم بإدخال req.body.name و req.body.price مباشرة إلى قاعدة البيانات دون التحقق من وجودهما أو صحة نوعهما.  تداخل المهام (No Separation of Concerns): الكود يجمع بين تعريف المسارات (Routes) ومنطق قواعد البيانات في مكان واحد، ولا يتبع نمط MVC.  استخدام أكواد حالة غير احترافية (Poor HTTP Status Codes): عند إضافة منتج بنجاح، يقوم الخادم بإرسال res.send('Added') بدلاً من استخدام الرد القياسي res.status(201).json(...).2. التفاعل مع الذكاء الاصطناعي (الـ 3 Prompts المطلوبة)إليك الـ Prompts التي يجب توثيقها في ملف التسليم الخاص بك مع الردود المتوقعة:Prompt 1 (المراجعة المبدئية)Prompt: Review the following Express + MongoDB legacy code and identify its code quality issues: [Insert the legacy code here].نتيجة المقارنة (Comparison): سيتطابق رد الذكاء الاصطناعي بنسبة كبيرة مع المشاكل الخمسة التي قمنا بتحديدها في الخطوة الأولى، حيث سيشير إلى غياب معالجة الأخطاء والاعتماد على الـ Callbacks.Prompt 2 (خطة إعادة الهيكلة)يطلب التكليف كتابة Prompt لطلب خطة عمل مقسمة حسب الأولويات.  Prompt: Based on the issues you found, provide a step-by-step refactoring plan with priorities (High, Medium, Low) to improve this Express API.الرد المتوقع (AI Response):High Priority: استبدال الـ Callbacks بـ async/await وإضافة كتل try/catch لمعالجة الأخطاء.Medium Priority: إضافة نظام للتحقق من المدخلات (Input validation) واستخدام HTTP Status Codes الصحيحة.Low Priority: إعادة هيكلة المشروع وتقسيمه إلى (Routes, Controllers, Models).Prompt 3 (الـ Prompt الاحترافي لتوليد الكود)هنا نستخدم تقنية لتحديد الدور (Role) وتوضيح المتطلبات بدقة.  Prompt: Act as a Senior Node.js Backend Developer. Suggest a refactored version of the legacy Express API provided earlier. Your code must follow the MVC pattern (separate into routes/, controllers/, and models/). Implement async/await, proper try/catch error handling, and basic input validation for the product's name and price.3. الكود بعد إعادة الهيكلة (Refactored Code)بناءً على توجيهات التكليف، يجب إعادة هيكلة الكود إلى مجلدات models/, controllers/, و routes/ واستخدام الممارسات السليمة.  1. ملف models/productModel.js(يعزل هذا الملف كل العمليات الخاصة بقاعدة البيانات)JavaScriptconst { getDb } = require('../config/database'); // Assuming a DB connection file exists

const getAllProducts = async () => {
    const db = getDb();
    return await db.collection('products').find().toArray();
};

const createProduct = async (productData) => {
    const db = getDb();
    return await db.collection('products').insertOne(productData);
};

module.exports = { getAllProducts, createProduct };
2. ملف controllers/productController.js(يحتوي على المنطق، التحقق، ومعالجة الأخطاء)JavaScriptconst Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;

        // Input Validation
        if (!name || !price) {
            return res.status(400).json({ message: 'Validation Error: Name and price are required' });
        }

        const newProduct = await Product.createProduct({ name, price });
        res.status(201).json({ message: 'Product added successfully', data: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

module.exports = { getProducts, addProduct };
3. ملف routes/productRoutes.js(يحتوي على المسارات فقط)JavaScriptconst express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.post('/products', productController.addProduct);

module.exports = router;
4. ملف server.js (الأساسي)JavaScriptconst express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json()); // Middleware for parsing JSON req.body

app.use('/api', productRoutes);

// Database connection logic goes here...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
4. التقييم والمقارنة (Before/After Comparison & Reflection)في الخطوة الأخيرة، يجب أن تطلب من الذكاء الاصطناعي مقارنة الكود القديم بالجديد.  Prompt to AI: Compare the legacy code with the new MVC refactored code. What exactly improved and what could still be better?التوثيق للإجابة (Documented Analysis):ما تم تحسينه (What improved):الكود أصبح قابلاً للقراءة والتطوير بفضل تقسيم MVC.  استخدام try/catch مع async/await يمنع الخادم من التوقف المفاجئ عند فشل قاعدة البيانات.  التحقق المسبق من المدخلات (Input validation) يحمي قاعدة البيانات من البيانات الناقصة.  ما يمكن تحسينه مستقبلاً (What could still be better):استخدام مكتبة مخصصة للتحقق من المدخلات مثل Joi أو Zod لمزيد من الأمان.إضافة ميزة تقسيم الصفحات (Pagination) في الـ GET route إذا كان عدد المنتجات ضخماً.
