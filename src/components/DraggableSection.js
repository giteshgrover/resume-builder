import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Paper, Box, Typography, IconButton } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function DraggableSection({ id, index, title, children }) {
  return (
    <Draggable draggableId={id} index={index}>
      {/* Rest of the component code */}
    </Draggable>
  );
}

export default DraggableSection; 