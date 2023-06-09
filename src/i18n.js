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
      Dashboard: "Dashboard",
      AllEvents: "All Events",
      RegisteredEvents: "Registered Events",
      Messages: "Contact",
      Calendar: "Calendar",
      Campaigns: "Campaigns",
      MyProfile: "My Profile ✨",
      Pages: "Pages",
      FAQ: "FAQ",
      Tasks: "Tasks",
      //my profle
      BasicDetails: " Basic Details",
      GovernmentIDs: "Government IDs",
      EmploymentStatus: "Employment Status",
      EducationStatus: "Education Status",
      SocioeconomicStatus: "Socioeconomic Status",
      MedicalRecords: "Medical Records",
      GovtIDs: "GovtIDs",
      //Govt Ids:
      RationCard: "Ration Card",
      PanCard: "Pan Card",
      AadharCard: "Aadhar Card",
      ESharamCard: "e-Sharam Card",
      VoterIDCard: "Voter ID Card",
      Save: "Save",

      //employment status:
      EmploymentStatus: "Employment Status",
      CurrentEmploymentStatus: "Current Employment Status",
      Worknature: "Work nature",
      IndustryofWork: "Industry of Work",
      PreviousEmployment: "Previous Employment (if any)",
      OpenForEmployment: "Open For Employment?",
      Employed: "Employed",
      Unemployed: "Unemployed",
      Retired: "Retired",
      Student: "Student",
      Permanent: "Permanent",
      Contract: "Contract",
      Casual: "Casual",
      Agriculture: "Agriculture",
      Manufacturing: "Manufacturing",
      Construction: "Construction",
      Other: "Other",
      Yes: "Yes",
      No: "No",
      Select: "Select",
      //education status:
      EducationStatus: "Education Status",
      Educationlevel: "Education level",
      OngoingEducation: "Ongoing Education",
      FurtherStudyInterest: "Further Study Interest?",
      PrimarySchool: "Primary School",
      MiddleSchool: "Middle School",
      Diploma: "Diploma",
      NoEducation: "No Education",
      Graduate: "Graduate",
      //Socioeconomic:
      SocioeconomicStatus: "Socioeconomic Status",
      ElectricityAccess: "Do you have access to electricity?",
      TransportationAccess:
        "What type of transportation do you have access to?",
      HouseType: "What type of House do you live in?",
      CleanWater: "Do you have access to clean water?",
      Kutcha: "Kutcha",
      Pucca: "Pucca",
      SemiPucca: "SemiPucca",
      Public: "Public",
      Private: "Private",
      None: "None",
      none: "none",

      //medical status:
      MedicalStatus: "Medical Status",
      Chronicillnesses: "Chronic illnesses",
      CurrentMedications: "Current Medications",
      BloodGroup: "Blood Group",
      Allergies: "Allergies",
      HealthInsurance: "Health Insurance",
      VaccinationRecords: "Vaccination Records",
      Apos: "A+",
      Aneg: "A-",
      Bpos: "B+",
      Bneg: "B-",
      ABneg: "AB-",
      ABpos: "AB+",
      Opos: "O+",
      Oneg: "O-",
      HospitalizationRecords: "HospitalizationRecords",

      //dropdown:
      TinyMiracles: "Tiny Miracles",
      Settings: "Settings",
      SignOut: "Sign Out",
      MyProfile: "My Profile ✨",
      //Events:
      AttendedEvents: "Attended Events",
      YettoAttend: "Yet to Attend",
      FutureEvents: "Upcoming Events",
      PastEvents: "Past Events",
      TotalEvents: "Total events",

      //Welcome Banner:
      Goodafternoon: "Good Afternoon",
      bannerLine: "Here is what’s happening with your community today:",
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
      Dashboard: "डैशबोर्ड",
      AllEvents: "सभी घटनाएँ",
      RegisteredEvents: "पंजीकृत ईवेंट",
      Messages: "संदेश",
      Calendar: "कैलेंडर",
      Campaigns: "अभियान",
      MyProfile: "मेरी प्रोफ़ाइल",
      Pages: "पृष्ठों",
      FAQ: "अक्सर पूछे जाने वाले प्रश्न",
      Tasks: "कार्य",
      //my profle
      BasicDetails: "मूल विवरण",
      GovernmentIDs: "सरकारी आईडी",
      EmploymentStatus: "रोजगार की स्थिति",
      EducationStatus: "शिक्षा की स्थिति",
      SocioeconomicStatus: "सामाजिक आर्थिक स्थिति",
      MedicalRecords: "मेडिकल रिकॉर्ड",
      GovtIDs: "सरकारी आईडी",
      //Govt Ids:
      RationCard: "राशन कार्ड",
      PanCard: "पैनकार्ड",
      AadharCard: "आधार कार्ड",
      ESharamCard: "ई-शरम कार्ड",
      VoterIDCard: "वोटर आईडी कार्ड",
      Save: "सेव करें",

      //employment status:
      EmploymentStatus: "रोजगार की स्थिति",
      CurrentEmploymentStatus: "वर्तमान रोजगार की स्थिति",
      Worknature: "कार्य प्रकृति",
      IndustryofWork: "काम का उद्योग",
      PreviousEmployment: "पिछला रोजगार (यदि कोई हो)",
      OpenForEmployment: "रोजगार के लिए खुला?",
      Employed: "कार्यरत",
      Unemployed: "बेकार",
      Retired: "सेवानिवृत्त",
      Student: "छात्र",
      Permanent: "स्थायी",
      Contract: "ठेका",
      Casual: "आकस्मिक",
      Agriculture: "कृषि",
      Manufacturing: "निर्माण",
      Construction: "निर्माण",
      Other: "दूसरा",
      Yes: "हाँ",
      No: "नहीं",
      Select: "चुनना",
      //education status:
      EducationStatus: "शिक्षा की स्थिति ",
      Educationlevel: "शिक्षा का स्तर",
      OngoingEducation: "चल रही शिक्षा",
      FurtherStudyInterest: "आगे अध्ययन रुचि?",
      PrimarySchool: "प्राथमिक विद्यालय",
      MiddleSchool: "मिडिल स्कूल  ",
      Diploma: "डिप्लोमा",
      NoEducation: "कोई शिक्षा नहीं",
      Graduate: "स्नातक",

      //Socioeconomic:
      SocioeconomicStatus: "सामाजिक आर्थिक स्थिति",
      ElectricityAccess: "क्या आपके पास बिजली है?",
      TransportationAccess: "आपके पास किस प्रकार के परिवहन तक पहुंच है?",
      HouseType: "आप किस तरह के घर में रहते हैं?",
      CleanWater: "क्या आपके पास साफ पानी है?",
      Kutcha: "कच्चा",
      Pucca: "पक्का",
      SemiPucca: "सेमी पक्के",
      Public: "सार्वजनिक",
      Private: "निजी",
      None: "कोई नहीं",
      none: "कोई नहीं",

      //medical status:
      MedicalStatus: "चिकित्सा की स्थिति",
      Chronicillnesses: "पुरानी बीमारियां",
      CurrentMedications: "वर्तमान दवाएं",
      BloodGroup: "रक्त समूह",
      Allergies: "एलर्जी",
      HealthInsurance: "स्वास्थ्य बीमा",
      VaccinationRecords: "लसीकरणाच्या नोंदी",
      Apos: "ए +",
      Aneg: "ए -",
      Bpos: "बी +",
      Bneg: "बी -",
      ABneg: "एबी -",
      ABpos: "एबी +",
      Opos: "ओ +",
      Oneg: "ओ -",
      HospitalizationRecords: " अस्पताल में भर्ती रिकॉर्ड",

      //dropdown:
      TinyMiracles: "टाइनी मिराक्लेस ",
      Settings: "सेटिंग्स",
      SignOut: "साइन आउट करें",
      MyProfile: "मेरी प्रोफ़ाइल  ✨",
      //Events:
      AttendedEvents: "कार्यक्रमों में भाग लिया",
      YettoAttend: "अभी भाग लेना बाकी है",
      FutureEvents: "आगामी कार्यक्रम",
      PastEvents: "पिछले कार्यक्रम",
      TotalEvents: "कुल कार्यक्रम",

      //Welcome Banner:
      Goodafternoon: "नमस्कार",
      bannerLine: "आज आपके कम्यूनिटी के साथ क्या होगा, वह यहाँ है :",
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
      Dashboard: "डैशबोर्ड",
      AllEvents: "सर्व घटना",
      RegisteredEvents: "नोंदणीकृत घटना",
      Messages: "संदेश",
      Calendar: "पंचांग",
      Campaigns: "मोहिमा",
      MyProfile: "माझी प्रोफाईल",
      Pages: "पृष्ठे[संपादन]",
      FAQ: "सामान्य प्रश्न",
      Tasks: "कामे",
      //my profle
      BasicDetails: "मूलभूत तपशील",
      GovernmentIDs: "सरकारी आय.डी.",
      EmploymentStatus: "रोजगार ाची स्थिती",
      EducationStatus: "शैक्षणिक स्थिती",
      SocioeconomicStatus: "सामाजिक-आर्थिक स्थिति",
      MedicalRecords: "मेडिकल रेकॉर्ड",
      GovtIDs: "सरकारी आय.डी.",
      //Govt Ids:
      RationCard: "रेशन कार्ड",
      PanCard: "पॅनकार्ड",
      AadharCard: "आधार कार्ड",
      ESharamCard: "ई-शारम कार्ड",
      VoterIDCard: "वोटर आईडी कार्ड",
      Save: "सेव करें",
      Select: "चुनना",

      //employment status:
      EmploymentStatus: "रोजगार ाची स्थिती",
      CurrentEmploymentStatus: "सध्याची रोजगारस्थिती",
      Worknature: "कामाचे स्वरूप",
      IndustryofWork: "कामाचा उद्योग",
      PreviousEmployment: "मागील रोजगार (असल्यास)",
      OpenForEmployment: "रोजगारासाठी खुला?",
      Employed: "नोकरी लावली.",
      Unemployed: "बेकार",
      Retired: "सेवानिवृत्त",
      Student: "विद्यार्थी",
      Permanent: "कायम",
      Contract: "करार",
      Casual: "आकस्मिक",
      Agriculture: "कृषि",
      Manufacturing: "मॅन्युफॅक्चरिंग",
      Construction: "बांधकाम",
      Other: "इतर",
      Yes: "हो",
      No: "नाही",
      //education status:
      EducationStatus: "शैक्षणिक स्थिती",
      Educationlevel: "शैक्षणिक स्तर",
      OngoingEducation: "चालू असलेले शिक्षण",
      FurtherStudyInterest: "पुढील अभ्यासाची आवड?",
      PrimarySchool: "प्राथमिक शाळा",
      MiddleSchool: "मिडिल स्कूल  ",
      Diploma: "पदविका",
      NoEducation: "शिक्षण नाही",
      Graduate: "ग्रॅज्युएट",

      //Socioeconomic:
      SocioeconomicStatus: "सामाजिक आर्थिक स्थिति",
      ElectricityAccess: "आपल्याकडे वीज उपलब्ध आहे का?",
      TransportationAccess: "आपल्याकडे कोणत्या प्रकारच्या वाहतुकीत प्रवेश आहे?",
      HouseType: "तुम्ही कोणत्या प्रकारच्या घरात राहता?",
      CleanWater: "स्वच्छ पाणी उपलब्ध आहे का?",
      Kutcha: "कच्चा",
      Pucca: "पक्के पैसे",
      SemiPucca: "सेमी पक्के",
      Public: "सार्वजनिक",
      Private: "खासगी",
      None: "काहीही नाही",
      none: "काहीही नाही",

      //medical status:
      MedicalStatus: "वैद्यकीय स्थिती",
      Chronicillnesses: "जुनाट आजार",
      CurrentMedications: "सध्याची औषधे",
      BloodGroup: "रक्त गट",
      Allergies: "अॅलर्जी",
      HealthInsurance: "हेल्थ इन्शुरन्स",
      VaccinationRecords: "लसीकरणाच्या नोंदी",
      Apos: "ए +",
      Aneg: "ए -",
      Bpos: "बी +",
      Bneg: "बी -",
      ABneg: "एबी -",
      ABpos: "एबी +",
      Opos: "ओ +",
      Oneg: "ओ -",
      HospitalizationRecords: " रुग्णालयात दाखल होण्याच्या नोंदी",

      //dropdown:
      TinyMiracles: "टाइनी मिराक्लेस",
      Settings: "सेटिंग्स",
      SignOut: "साइन आउट करा",
      MyProfile: "माझी प्रोफाईल ✨",

      //Events:
      AttendedEvents: "कार्यक्रमांना हजेरी लावली",
      YettoAttend: "अजून उपस्थित राहणे बाकी आहे",
      FutureEvents: "आगामी कार्यक्रम",
      PastEvents: "भूतकाळातील कार्यक्रम",
      TotalEvents: "एकूण कार्यक्रम",
      //Welcome Banner:
      Goodafternoon: "शुभ दुपार",
      bannerLine: "आज आपल्या समाजाचे काय होईल ते येथे आहे :",
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
