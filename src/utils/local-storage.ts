const LANG = "lang";
const AUTHENTICITY_TOKEN = "token";
const INSTITUTION_ID = "institution_id";
const USER_ID = "user_id";
const SCHOOL_ID = "school_id";
const PROFILE = "profile";

// LANG

export const getStorageLang = () => {
  const data = localStorage.getItem(`${LANG}`);
  if (!!!data === false) return null;
  return JSON.parse(data);
};

export const setStorageLang = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${LANG}`, data);
};

// AUTHENTICITY_TOKEN

export const getStorageAuthenticityToken = () => {
  const data = localStorage.getItem(`${AUTHENTICITY_TOKEN}`);
  return JSON.parse(data);
};

export const setStorageAuthenticityToken = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${AUTHENTICITY_TOKEN}`, data);
};

// INSTITUITION_ID

export const getStorageInstitutionId = () => {
  const data = localStorage.getItem(`${INSTITUTION_ID}`);
  return JSON.parse(data);
};

export const setStorageInstitutionId = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${INSTITUTION_ID}`, data);
};

// USER_ID

export const getStorageUserId = () => {
  const data = localStorage.getItem(`${USER_ID}`);
  return JSON.parse(data);
};

export const setStorageUserId = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${USER_ID}`, data);
};

// SCHOOL_ID

export const getStorageSchoolId = () => {
  const data = localStorage.getItem(`${SCHOOL_ID}`);
  return JSON.parse(data);
};

export const setStorageSchoolId = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${SCHOOL_ID}`, data);
};

export const getStorageProfile = () => {
  const data = localStorage.getItem(`${PROFILE}`);
  return JSON.parse(data);
};

export const setStorageProfile = (value) => {
  const data = JSON.stringify(value);
  return localStorage.setItem(`${PROFILE}`, data);
};
