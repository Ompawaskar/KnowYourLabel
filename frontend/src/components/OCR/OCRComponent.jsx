import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const OCRComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('eng');

  const languages = [
    { label: 'English', value: 'eng' },
    { label: 'Korean', value: 'kor' },
    { label: 'Japanese', value: 'jpn' },
    { label: 'Marathi', value: 'mar' },
    { label: 'Hindi', value: 'hin' },
    { label: 'Kannada', value: 'kan' },
    { label: 'Telugu', value: 'tel' },
    { label: 'Afrikaans', value: 'afr' },
    { label: 'Chinese (Simplified)', value: 'chi_sim' },
    { label: 'Chinese (Traditional)', value: 'chi_tra' },
    { label: 'French', value: 'fra' },
    { label: 'German', value: 'deu' },
    { label: 'Spanish', value: 'spa' },
    { label: 'Italian', value: 'ita' },
    { label: 'Russian', value: 'rus' },
    { label: 'Portuguese', value: 'por' },
    { label: 'Dutch', value: 'nld' },
    { label: 'Arabic', value: 'ara' },
    { label: 'Bengali', value: 'ben' },
    { label: 'Greek', value: 'ell' },
    { label: 'Hebrew', value: 'heb' },
    { label: 'Turkish', value: 'tur' },
  ];

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setLoading(true);
    Tesseract.recognize(
      selectedFile,
      language,
      {
        logger: (m) => console.log(m), // To see the progress
      }
    )
    .then(({ data: { text } }) => {
      setOcrText(text);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <select onChange={handleLanguageChange} value={language}>
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
      <button onClick={handleUpload}>Upload and Process</button>
      {loading && <p>Processing...</p>}
      <pre>{ocrText}</pre>
    </div>
  );
};

export default OCRComponent;