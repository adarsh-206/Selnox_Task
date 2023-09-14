// TextEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ editorHtml, setEditorHtml, customStyles }) => {
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image',
    ];

    return (
        <div style={customStyles}>
            <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={setEditorHtml}
                modules={modules}
                formats={formats}
                placeholder="Write description..."
            />
        </div>
    );
};

export default TextEditor;