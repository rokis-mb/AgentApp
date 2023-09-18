import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import the styles
import './DummyTextFormatter.css';

const DummyTextFormatter = () => {
    const [editorState, setEditorState] = useState(null);
    const [editorContent, setEditorContent] = useState('');

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        setEditorContent(newEditorState.getCurrentContent().getPlainText());
    };

    return (
        <div className="editor-container">
            
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}
export default DummyTextFormatter;
