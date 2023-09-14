import React from 'react'
import '../../CSS/TextArea.css'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = (props) => {
    return (
        <div className='textarea-container'>
            <Editor
                editorState={props.editorState}
                onEditorStateChange={props.onEditorStateChange}
            />
        </div>
    )
}

export default RichTextEditor;