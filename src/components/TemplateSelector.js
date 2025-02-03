import React from 'react';
import { Box, Card, CardContent, CardMedia, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    preview: '/templates/modern.png',
    theme: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
      fontSize: '1rem',
      fontFamily: 'Arial, sans-serif',
    }
  },
  {
    id: 'classic',
    name: 'Classic',
    preview: '/templates/classic.png',
    theme: {
      primary: '#34495e',
      secondary: '#95a5a6',
      fontSize: '1.1rem',
      fontFamily: 'Times New Roman, serif',
    }
  },
  {
    id: 'minimal',
    name: 'Minimal',
    preview: '/templates/minimal.png',
    theme: {
      primary: '#2c3e50',
      secondary: '#bdc3c7',
      fontSize: '0.95rem',
      fontFamily: 'Helvetica, sans-serif',
    }
  }
];

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Choose Template
      </Typography>
      <RadioGroup
        row
        value={selectedTemplate}
        onChange={(e) => onTemplateChange(e.target.value)}
      >
        {templates.map((template) => (
          <FormControlLabel
            key={template.id}
            value={template.id}
            control={<Radio />}
            label={
              <Card sx={{ width: 200, m: 1 }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={template.preview}
                  alt={template.name}
                />
                <CardContent>
                  <Typography variant="subtitle1">{template.name}</Typography>
                </CardContent>
              </Card>
            }
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

export default TemplateSelector; 