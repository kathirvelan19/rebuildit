export const APP_CONFIG = {
  // App Details
  name: "Rebuild",
  tagline: "21 Days. One Direction. One Commitment.",
  headline: "Small steps. Real change.",
  subheadline: "Rebuild your routine, regain your focus, and become consistent again — one day at a time.",
  
  // Centralized Google Drive File ID
  // Replace with your Google Drive File ID (e.g. "1WoBw2WqebgRQjwmn4w3KH3hxLP9gKcWH")
  GOOGLE_DRIVE_FILE_ID: "1WoBw2WqebgRQjwmn4w3KH3hxLP9gKcWH",
  
  // App Info
  version: "v1.0.4-release",
  androidReq: "Android 8.0 or higher",
  fileSize: "54 MB",
  lastUpdated: "2026",
  
  // Contact & Legal
  contactEmail: "support@rebuildapp.io",
  
  // Social links
  socials: {
    twitter: "https://twitter.com/rebuildapp",
    github: "https://github.com/rebuildapp",
  }
};

/**
 * Returns the exact Google Drive direct-download URL:
 * https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
 */
export const getGoogleDriveDirectDownloadUrl = (fileId: string): string => {
  if (!fileId || fileId.trim() === "" || fileId.includes("YOUR_FILE_ID")) {
    return "";
  }
  
  // If user enters a full Google Drive URL by mistake, extract the file ID safely
  const match = fileId.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || fileId.match(/id=([a-zA-Z0-9_-]+)/);
  const cleanId = match && match[1] ? match[1] : fileId.trim();

  return `https://drive.google.com/uc?export=download&id=${cleanId}`;
};

/**
 * Helper to trigger direct download using window.location.href to prevent unnecessary new tabs.
 * If file ID is missing, invokes fallback modal handler.
 */
export const handleDirectDownload = (onMissingFileId?: () => void) => {
  const directUrl = getGoogleDriveDirectDownloadUrl(APP_CONFIG.GOOGLE_DRIVE_FILE_ID);

  if (!directUrl) {
    if (onMissingFileId) onMissingFileId();
  } else {
    window.location.href = directUrl;
  }
};
