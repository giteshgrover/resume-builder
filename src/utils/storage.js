export const saveResume = (resumeData) => {
  const timestamp = new Date().getTime();
  const resumeKey = `resume_${timestamp}`;
  
  try {
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || {};
    savedResumes[resumeKey] = {
      ...resumeData,
      savedAt: timestamp,
      name: resumeData.personalInfo.fullName || `Resume ${Object.keys(savedResumes).length + 1}`
    };
    localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
    return true;
  } catch (error) {
    console.error('Error saving resume:', error);
    return false;
  }
};

export const loadResumes = () => {
  try {
    return JSON.parse(localStorage.getItem('savedResumes')) || {};
  } catch (error) {
    console.error('Error loading resumes:', error);
    return {};
  }
};

export const deleteResume = (resumeKey) => {
  try {
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || {};
    delete savedResumes[resumeKey];
    localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
    return true;
  } catch (error) {
    console.error('Error deleting resume:', error);
    return false;
  }
}; 