// Add Amanda's RSVP endpoint here once the new guest list is ready.
window.GUEST_API_URL = "https://script.google.com/macros/s/AKfycbwUVNo00_zcySbaioENPI3Gu3CiuYN7S5nD7naGm7skY8_Ou0UDK3h8Whpn6RPtVmwT/exec";

// Live Server testing only: this guest is shown when no ?guest= value is present.
window.GUEST_API_LOCAL_DEFAULT_GUEST = "";

// Keep this empty for production-like testing. Guest names and passes should
// come from the Google Sheet, using URLs such as ?guest=1, ?guest=2, etc.
window.GUEST_API_FALLBACKS = {};
