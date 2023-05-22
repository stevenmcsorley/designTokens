// Base API URL
const BASE_URL = "https://members-api.parliament.uk";

// Fetch function
const fetchFromAPI = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return response.json();
};

// Location functions
export const browseLocation = (locationType: string, locationName: string) =>
  fetchFromAPI(`/api/Location/Browse/${locationType}/${locationName}`);
export const searchConstituency = () =>
  fetchFromAPI(`/api/Location/Constituency/Search`);
export const getConstituencyById = (id: string) =>
  fetchFromAPI(`/api/Location/Constituency/${id}`);
// ... other functions for each Location endpoint

// LordsInterests functions
export const getLordsInterestsRegister = () =>
  fetchFromAPI(`/api/LordsInterests/Register`);
export const getLordsInterestsStaff = () =>
  fetchFromAPI(`/api/LordsInterests/Staff`);

// Members functions
export const searchMembers = (searchQuery: string) =>
  fetchFromAPI(`/api/Members/Search?Name=${encodeURIComponent(searchQuery)}`);
export const searchMembersHistorical = () =>
  fetchFromAPI(`/api/Members/SearchHistorical`);
export const getMemberById = (id: string) => fetchFromAPI(`/api/Members/${id}`);
// ... other functions for each Members endpoint

// Parties functions
export const getStateOfTheParties = (house: string, forDate: string) =>
  fetchFromAPI(`/api/Parties/StateOfTheParties/${house}/${forDate}`);
export const getLordsByType = (forDate: string) =>
  fetchFromAPI(`/api/Parties/LordsByType/${forDate}`);
export const getActiveParties = (house: string) =>
  fetchFromAPI(`/api/Parties/GetActive/${house}`);

// Posts functions
export const getGovernmentPosts = () =>
  fetchFromAPI(`/api/Posts/GovernmentPosts`);
export const getOppositionPosts = () =>
  fetchFromAPI(`/api/Posts/OppositionPosts`);
export const getSpokespersons = () => fetchFromAPI(`/api/Posts/Spokespersons`);
export const getDepartments = (type: string) =>
  fetchFromAPI(`/api/Posts/Departments/${type}`);
export const getSpeakerAndDeputies = (forDate: string) =>
  fetchFromAPI(`/api/Posts/SpeakerAndDeputies/${forDate}`);

// Reference functions
export const getPolicyInterests = () =>
  fetchFromAPI(`/api/Reference/PolicyInterests`);
export const getReferenceDepartments = () =>
  fetchFromAPI(`/api/Reference/Departments`);
export const getAnsweringBodies = () =>
  fetchFromAPI(`/api/Reference/AnsweringBodies`);
export const getDepartmentLogo = (id: string) =>
  fetchFromAPI(`/api/Reference/Departments/${id}/Logo`);
