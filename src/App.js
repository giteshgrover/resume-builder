import React, { useState, useRef } from 'react';
import { Button, Container, TextField, Box, Typography, Paper } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import ResumeTemplate from './components/ResumeTemplate';
import ResumeForm from './components/ResumeForm';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TemplateSelector from './components/TemplateSelector';
import DraggableSection from './components/DraggableSection';
import ImageUpload from './components/ImageUpload';
import { saveResume, loadResumes } from './utils/storage';

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    },
    summary: '',
    experience: [
      {
        id: 1,
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
      },
    ],
    education: [
      {
        id: 1,
        degree: '',
        school: '',
        graduationYear: '',
        details: '',
      },
    ],
    skills: [
      {
        id: 1,
        name: '',
        proficiency: 3,
        years: 0,
      },
    ],
  });

  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const handleInputChange = (section, field, value, id = null) => {
    setResumeData((prev) => {
      if (id !== null) {
        // Handle array fields (experience, education)
        const newData = { ...prev };
        const index = newData[section].findIndex((item) => item.id === id);
        newData[section][index] = { ...newData[section][index], [field]: value };
        return newData;
      } else if (section === 'personalInfo') {
        // Handle nested personalInfo fields
        return {
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            [field]: value,
          },
        };
      } else {
        // Handle other fields
        return {
          ...prev,
          [section]: value,
        };
      }
    });
  };

  const addNewItem = (section) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        {
          id: prev[section].length + 1,
          ...(section === 'experience'
            ? {
                title: '',
                company: '',
                startDate: '',
                endDate: '',
                responsibilities: '',
              }
            : {
                degree: '',
                school: '',
                graduationYear: '',
                details: '',
              }),
        },
      ],
    }));
  };

  const removeItem = (section, id) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [profileImage, setProfileImage] = useState(null);
  const [sectionOrder, setSectionOrder] = useState([
    'summary',
    'experience',
    'education',
    'skills'
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newSectionOrder = Array.from(sectionOrder);
    const [reorderedItem] = newSectionOrder.splice(result.source.index, 1);
    newSectionOrder.splice(result.destination.index, 0, reorderedItem);

    setSectionOrder(newSectionOrder);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Resume Builder
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
          <Box sx={{ flex: 1 }}>
            <ResumeForm
              resumeData={resumeData}
              handleInputChange={handleInputChange}
              addNewItem={addNewItem}
              removeItem={removeItem}
            />
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePrint}
                fullWidth
              >
                Export to PDF
              </Button>
            </Paper>
            
            <div ref={resumeRef}>
              <ResumeTemplate resumeData={resumeData} />
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App; 