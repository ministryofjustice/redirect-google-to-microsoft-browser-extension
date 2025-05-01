(async () => {
  // Stubbed API function — replace this later with a real API call
  async function getRedirectUrl(currentUrl) {
    // Simulate redirect only for a specific URL
    if (currentUrl === "https://www.google.com/test") {
      return "https://www.microsoft.com/replacement"
    }

    // Simulate API saying "no redirect"
    return false
  }

  try {
    const currentUrl = window.location.href;
    const redirectUrl = await getRedirectUrl(currentUrl);

    if (redirectUrl) {
      console.log("Redirecting to:", redirectUrl);
      window.location.replace(redirectUrl);
    }
  } catch (error) {
    console.error("Redirect check failed:", error);
  }
})();
