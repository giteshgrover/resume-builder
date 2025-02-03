import React from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  Paper,
  Grid,
  Rating
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function SkillSection({ skills = [], handleInputChange, addNewItem, removeItem }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      
      {skills.map((skill) => (
        <Box key={skill.id} sx={{ mb: 3, position: 'relative' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skill Name"
                value={skill.name || ''}
                onChange={(e) =>
                  handleInputChange('skills', 'name', e.target.value, skill.id)
                }
                margin="normal"
              />
            </Grid>
            
            <Grid item xs={6}>
              <Typography component="legend">Proficiency Level</Typography>
              <Rating
                value={Number(skill.proficiency) || 0}
                onChange={(_, newValue) =>
                  handleInputChange('skills', 'proficiency', newValue, skill.id)
                }
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Years of Experience"
                type="number"
                value={skill.years || 0}
                onChange={(e) =>
                  handleInputChange('skills', 'years', e.target.value, skill.id)
                }
                InputProps={{ inputProps: { min: 0, max: 50 } }}
                margin="normal"
              />
            </Grid>
          </Grid>

          <IconButton
            onClick={() => removeItem('skills', skill.id)}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Button
        variant="outlined"
        onClick={() => addNewItem('skills')}
        fullWidth
      >
        Add Skill
      </Button>
    </Paper>
  );
}

export default SkillSection; 