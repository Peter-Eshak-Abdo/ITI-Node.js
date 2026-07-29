ـ Prompts التي يجب توثيقها في ملف التسليم الخاص بك مع الردود المتوقعة:

Prompt 1 (المراجعة المبدئية)
Prompt: Review the following Express + MongoDB legacy code and identify its code quality issues: [Insert the legacy code here].

نتيجة المقارنة (Comparison): سيتطابق رد الذكاء الاصطناعي بنسبة كبيرة مع المشاكل الخمسة التي قمنا بتحديدها في الخطوة الأولى، حيث سيشير إلى غياب معالجة الأخطاء والاعتماد على الـ Callbacks.

Prompt 2 (خطة إعادة الهيكلة)
يطلب التكليف كتابة Prompt لطلب خطة عمل مقسمة حسب الأولويات.

Prompt: Based on the issues you found, provide a step-by-step refactoring plan with priorities (High, Medium, Low) to improve this Express API.

الرد المتوقع (AI Response):

High Priority: استبدال الـ Callbacks بـ async/await وإضافة كتل try/catch لمعالجة الأخطاء.

Medium Priority: إضافة نظام للتحقق من المدخلات (Input validation) واستخدام HTTP Status Codes الصحيحة.

Low Priority: إعادة هيكلة المشروع وتقسيمه إلى (Routes, Controllers, Models).

Prompt 3 (الـ Prompt الاحترافي لتوليد الكود)
هنا نستخدم تقنية لتحديد الدور (Role) وتوضيح المتطلبات بدقة.

Prompt: Act as a Senior Node.js Backend Developer. Suggest a refactored version of the legacy Express API provided earlier. Your code must follow the MVC pattern (separate into routes/, controllers/, and models/). Implement async/await, proper try/catch error handling, and basic input validation for the product's name and price.
