import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function RichTextEditor({ editorState, onChange }) {
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <Box sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1, p: 1 }}>
      <ToggleButtonGroup size="small" sx={{ mb: 1 }}>
        <ToggleButton
          value="BOLD"
          onClick={() => toggleInlineStyle('BOLD')}
        >
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton
          value="ITALIC"
          onClick={() => toggleInlineStyle('ITALIC')}
        >
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton
          value="UNDERLINE"
          onClick={() => toggleInlineStyle('UNDERLINE')}
        >
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton
          value="unordered-list-item"
          onClick={() => toggleBlockType('unordered-list-item')}
        >
          <FormatListBulletedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ minHeight: 100, p: 1 }}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </Box>
    </Box>
  );
}

export default RichTextEditor; 