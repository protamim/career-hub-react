const getStoredApplications = () => {
  const storedApplication = localStorage.getItem("job-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const savedApplication = (id) => {
  const storedApplications = getStoredApplications();
  const exist = storedApplications.find((jobId) => jobId == id);
  if (!exist) {
    storedApplications.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedApplications));
  }
};

export { savedApplication, getStoredApplications };