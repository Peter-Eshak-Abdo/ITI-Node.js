الـ Prompt:

"Explain what Express middleware is and how it works in simple terms."

رد الذكاء الاصطناعي (AI Response):
"الـ Middleware في Express هو ببساطة دوال (Functions) تمتلك صلاحية الوصول إلى كائن الطلب (Request - req)، وكائن الاستجابة (Response - res)، والدالة التالية في دورة حياة الطلب والتي تُسمى غالباً next.
كيف يعمل؟ عندما يصل طلب إلى الخادم، يمر عبر سلسلة من هذه الدوال. يمكن للـ middleware تنفيذ أي كود، تعديل الطلب أو الاستجابة، إنهاء دورة الطلب، أو استدعاء الدالة next() لتمرير التحكم إلى الـ middleware الذي يليه."

//-----------------------------------------------------------------------------
الـ Prompt:

"Show me a practical example of a logging middleware in Express.js. Please explain each line of the code clearly."

رد الذكاء الاصطناعي (AI Response):

JavaScript
const logger = (req, res, next) => { // 1. Define function with req, res, next
  console.log(`${req.method} request to ${req.url}`); // 2. Log HTTP method and URL
  next(); // 3. Pass control to the next middleware/route handler
};
app.use(logger); // 4. Apply it globally
//--------------------------------------------------------------------------
الـ Prompt (نصاً كما هو مطلوب):"Act as a senior Node.js developer. Explain the middleware pattern in Express with a real-world analogy. Show a complete example of authentication middleware using API keys. Format as commented code with a summary table of the middleware lifecycle."  رد الذكاء الاصطناعي (AI Response):"التشبيه الواقعي: تخيل أن الـ Express App هو نادٍ حصري. الـ Middleware هم حراس الأمن والموظفون عند الباب. الأول يتحقق من هويتك (Authentication)، الثاني يفتش حقيبتك (Validation)، وإذا اجتزت الجميع، تصل إلى الحفلة بالداخل (Route Handler). إذا أوقفك أحد الحراس، فلن تمر للمرحلة التالية."(يقوم الذكاء الاصطناعي هنا بتوفير كود مبدئي لـ API Key Auth وجدول يوضح دورة الحياة من Request إلى Response).
