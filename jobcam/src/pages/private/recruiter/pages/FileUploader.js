import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

const SubmitResume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();
    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedFileData, setSelectedFileData] = useState('');

    useEffect(() => {
        const fileName = localStorage.getItem('selectedPDFFileName');
        const fileData = localStorage.getItem('selectedPDFData');
        if (fileName && fileData) {
            setSelectedFileName(fileName);
            setSelectedFileData(fileData);
        }
    }, []);
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file.type === 'application/pdf') {
            setSelectedFileName(file.name);
            const reader = new FileReader();
            reader.onload = function (event) {
                setSelectedFileData(event.target.result);
                localStorage.setItem('selectedPDFFileName', file.name);
                localStorage.setItem('selectedPDFData', event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a PDF file.');
        }
    };


    const handleClearFile = () => {
        setSelectedFileName('');
        setSelectedFileData('');
        localStorage.removeItem('selectedPDFFileName');
        localStorage.removeItem('selectedPDFData');
    };

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                overflow: 'auto',
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <Typography variant="h5" gutterBottom>
                Drag & Drop a PDF File Here or Click to Upload
            </Typography>
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
                id="file-input"
            />
            <label htmlFor="file-input">
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            {selectedFileName && (
                <div>
                    <Typography variant="body1" gutterBottom>
                        Selected File: {selectedFileName}
                    </Typography>
                    <Button variant="outlined" onClick={handleClearFile}>
                        Clear File
                    </Button>
                </div>
            )}
            {selectedFileData && (
                <Box>
                    <Typography variant="h6">PDF Viewer</Typography>
                    <Document file={selectedFileData}>
                        <Page pageNumber={1} />
                    </Document>
                </Box>
            )}
        </Paper>
    );
};

export default SubmitResume;