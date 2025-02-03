import React from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import SkillSection from './SkillSection';

function ResumeForm({ resumeData, handleInputChange, addNewItem, removeItem }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          value={resumeData.personalInfo.fullName}
          onChange={(e) =>
            handleInputChange('personalInfo', 'fullName', e.target.value)
          }
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={resumeData.personalInfo.email}
          onChange={(e) =>
            handleInputChange('personalInfo', 'email', e.target.value)
          }
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          value={resumeData.personalInfo.phone}
          onChange={(e) =>
            handleInputChange('personalInfo', 'phone', e.target.value)
          }
          margin="normal"
        />
        <TextField
          fullWidth
          label="Location"
          value={resumeData.personalInfo.location}
          onChange={(e) =>
            handleInputChange('personalInfo', 'location', e.target.value)
          }
          margin="normal"
        />
        <TextField
          fullWidth
          label="LinkedIn"
          value={resumeData.personalInfo.linkedin}
          onChange={(e) =>
            handleInputChange('personalInfo', 'linkedin', e.target.value)
          }
          margin="normal"
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Professional Summary
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Summary"
          value={resumeData.summary}
          onChange={(e) => handleInputChange('summary', null, e.target.value)}
          margin="normal"
        />
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Experience
        </Typography>
        {resumeData.experience.map((exp) => (
          <Box key={exp.id} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Job Title"
              value={exp.title}
              onChange={(e) =>
                handleInputChange('experience', 'title', e.target.value, exp.id)
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Company"
              value={exp.company}
              onChange={(e) =>
                handleInputChange('experience', 'company', e.target.value, exp.id)
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                handleInputChange(
                  'experience',
                  'startDate',
                  e.target.value,
                  exp.id
                )
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="End Date"
              value={exp.endDate}
              onChange={(e) =>
                handleInputChange('experience', 'endDate', e.target.value, exp.id)
              }
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Responsibilities"
              value={exp.responsibilities}
              onChange={(e) =>
                handleInputChange(
                  'experience',
                  'responsibilities',
                  e.target.value,
                  exp.id
                )
              }
              margin="normal"
            />
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={() => addNewItem('experience')}
          fullWidth
        >
          Add Experience
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        {resumeData.education.map((edu) => (
          <Box key={edu.id} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleInputChange('education', 'degree', e.target.value, edu.id)
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="School"
              value={edu.school}
              onChange={(e) =>
                handleInputChange('education', 'school', e.target.value, edu.id)
              }
              margin="normal"
            />
            <TextField
              fullWidth
              label="Graduation Year"
              value={edu.graduationYear}
              onChange={(e) =>
                handleInputChange(
                  'education',
                  'graduationYear',
                  e.target.value,
                  edu.id
                )
              }
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Additional Details"
              value={edu.details}
              onChange={(e) =>
                handleInputChange('education', 'details', e.target.value, edu.id)
              }
              margin="normal"
            />
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={() => addNewItem('education')}
          fullWidth
        >
          Add Education
        </Button>
      </Paper>

      <SkillSection
        skills={resumeData.skills || []}
        handleInputChange={handleInputChange}
        addNewItem={addNewItem}
        removeItem={removeItem}
      />
    </Box>
  );
}

export default ResumeForm; 