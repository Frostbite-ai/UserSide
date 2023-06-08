import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // sign in
      login: "Log In",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot Password?",
      dontHaveAnAccount: "Dont have an account?",
      register: "Register",
      // reset password
      resetPassword: "Reset Your Password",
      sendResetLink: "Send Reset Link",
      // sign up
      createAccount: "Create Your Account",
      //sidebar
      Dashboard:"Dashboard",
      AllEvents: "All Events",
      RegisteredEvents: "Registered Events",
      Messages: "Messages",
      Calendar: "Calendar",
      Campaigns: "Campaigns",
      MyProfile: "My Profile",
      Pages: "Pages",
      //my profle
      BasicDetails: " Basic Details",
      GovernmentIDs: "Government IDs",
      EmploymentStatus: "Employment Status",
      EducationStatus: "Education Status",
      SocioeconomicStatus: "Socioeconomic Status",
      MedicalRecords: "Medical Records",


    },
  },
  hi: {
    translation: {
      login: "लॉग इन",
      email: "ईमेल",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड भूल गए?",
      dontHaveAnAccount: "खाता नहीं है?",
      register: "रजिस्टर",
      resetPassword: "पासवर्ड रीसेट करें",
      sendResetLink: "रीसेट लिंक भेजें",
      createAccount: "अपना खाता बनाएं",
      //sidebar
      Dashboard:"डैशबोर्ड",
      AllEvents: "सभी घटनाएँ",
      RegisteredEvents: "पंजीकृत ईवेंट",
      Messages: "संदेश",
      Calendar: "कैलेंडर",
      Campaigns: "अभियान",
      MyProfile: "मेरी प्रोफ़ाइल",
      Pages: "पृष्ठों",
      //my profle
      BasicDetails: "मूल विवरण",
      GovernmentIDs: "सरकारी आईडी",
      EmploymentStatus: "रोजगार की स्थिति",
      EducationStatus: "शिक्षा की स्थिति",
      SocioeconomicStatus: "सामाजिक आर्थिक स्थिति",
      MedicalRecords: "मेडिकल रिकॉर्ड",
    },
  },
  mr: {
    translation: {
      login: "लॉगिन",
      email: "ईमेल",
      password: "पासवर्ड",
      forgotPassword: "पासवर्ड विसरलात?",
      dontHaveAnAccount: "खाते नाही?",
      register: "रजिस्टर",
      resetPassword: "संकेतशब्द पुनर्प्रस्थापित करा",
      sendResetLink: "रीसेट लिंक पाठवा",
      createAccount: "तुमचे खाते तयार करा",
      //sidebar
      Dashboard:"डैशबोर्ड",
      AllEvents: "सर्व घटना",
      RegisteredEvents: "नोंदणीकृत घटना",
      Messages: "संदेश",
      Calendar: "पंचांग",
      Campaigns: "मोहिमा",
      MyProfile: "माझी प्रोफाईल",
      Pages: "पृष्ठे[संपादन]",
     //my profle
     BasicDetails: "मूलभूत तपशील",
     GovernmentIDs: "सरकारी आय.डी.",
     EmploymentStatus: "रोजगार ाची स्थिती",
     EducationStatus: "शैक्षणिक स्थिती",
     SocioeconomicStatus: "सामाजिक-आर्थिक स्थिति",
     MedicalRecords: "मेडिकल रेकॉर्ड",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "hi", "mr"],
  debug: process.env.NODE_ENV === "development",
});

export default i18n;
