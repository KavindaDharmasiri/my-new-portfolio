// EmailJS configuration
// Create a free account at https://www.emailjs.com/
// 1. Add your email (kavindadarmasiri15@gmail.com) as a linked service.
// 2. Create an Email Template and make sure its "To email" is
//    kavindadarmasiri15@gmail.com.
// 3. IMPORTANT — the site passes these template variables from the form:
//      {{from_name}}  -> the visitor's name
//      {{from_email}} -> the visitor's email
//      {{subject}}    -> mission objective
//      {{message}}    -> message body
//    In the template, map them like this so the mail you receive is from
//    the visitor and replies go straight back to them:
//      From email:  {{from_email}}
//      Reply To:    {{from_email}}
//      Subject:     {{subject}}
//      Content:     Name: {{from_name}} / Email: {{from_email}} / {{message}}
// 4. Paste the values below from the EmailJS dashboard:
//    - Public Key:  Account -> API Keys -> Public Key
//    - Service ID:  Email Services -> your service -> Service ID
//    - Template ID: Email Templates -> your template -> Template ID
const EMAILJS = {
	serviceId: "service_t9osph8",
	templateId: "template_vvy3d3o",
	publicKey: "pGfsKdFqLt8AvkOme",
};

export default EMAILJS;
