import React from 'react';
import { Box, Typography, Divider, Grid, Rating } from '@mui/material';

function ResumeTemplate({ resumeData }) {
  // Ensure resumeData and skills exist and are arrays
  const skills = Array.isArray(resumeData?.skills) ? resumeData.skills : [];

  return (
    <Box sx={{ p: 4, backgroundColor: 'white' }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          {resumeData.personalInfo.fullName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {resumeData.personalInfo.location} | {resumeData.personalInfo.linkedin}
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Professional Summary
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body1">{resumeData.summary}</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Experience
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {resumeData.experience.map((exp) => (
          <Box key={exp.id} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {exp.title}
            </Typography>
            <Typography variant="subtitle2">
              {exp.company} | {exp.startDate} - {exp.endDate}
            </Typography>
            <Typography variant="body2">{exp.responsibilities}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {resumeData.education.map((edu) => (
          <Box key={edu.id} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {edu.degree}
            </Typography>
            <Typography variant="subtitle2">
              {edu.school} | {edu.graduationYear}
            </Typography>
            <Typography variant="body2">{edu.details}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill.id}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="subtitle1" sx={{ mr: 1 }}>
                  {skill.name}
                </Typography>
                <Rating 
                  value={Number(skill.proficiency) || 0} 
                  readOnly 
                  size="small" 
                />
                <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                  ({skill.years} years)
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ResumeTemplate; 