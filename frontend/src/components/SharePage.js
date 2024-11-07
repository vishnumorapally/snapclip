import React, { useState, useEffect } from 'react';
import './SharePage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SharePage() {
    const [text, setText] = useState('');
    const [codeInputs, setCodeInputs] = useState(['', '', '', '']);
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [buttonText, setButtonText] = useState('Check Code');
    const [shareLink, setShareLink] = useState('');
    const [isLinkGenerated, setIsLinkGenerated] = useState(false);
    const [isCustomCode, setIsCustomCode] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state

    const handleTextChange = (e) => {
        setText(e.target.value);
        setIsLinkGenerated(false);
    };

    const handleCodeChange = (e, index) => {
        const newCodeInputs = [...codeInputs];
        newCodeInputs[index] = e.target.value;
        setCodeInputs(newCodeInputs);
        handleCheckCode();
    };

    const generateRandomCode = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const handleCheckCode = async () => {
        const isValidCode = codeInputs.every((input) => input.length === 1 && !isNaN(input));
        if (isValidCode) {
            setIsCodeValid(true);
            setError('');
            setLoading(true); // Set loading to true
            const codeda = codeInputs.join('');

            try {
                await axios.post('/checkcode', { code: codeda });
                setButtonText('Code Generated');
                setGeneratedCode(codeda);
            } catch (err) {
                setError('Code already exists in our database');
                setIsCodeValid(false);
                setButtonText('Try Again');
            } finally {
                setLoading(false); // Set loading to false when the request is complete
            }
        } else {
            setError('Code should be exactly 4 digits');
            setIsCodeValid(false);
            setButtonText('Check Code');
        }
    };

    const handleGenerateLink = async () => {
        if (!text) return;
        setLoading(true); // Set loading to true

        try {
            let codeToUse = generatedCode;
            if (!isCodeValid || !generatedCode) {
                codeToUse = generateRandomCode();
                let isUnique = false;
                while (!isUnique) {
                    try {
                        await axios.post('/checkcode', { code: codeToUse });
                        isUnique = true;
                    } catch {
                        codeToUse = generateRandomCode();
                    }
                }
                setGeneratedCode(codeToUse);
            }

            await axios.post('/share', { code : codeToUse, data: text });
            setShareLink(`/${codeToUse}`);
            setIsLinkGenerated(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    };

    return (
        <div className='containersharepage'>
            <div className="share-page">
                <h1>Share Your Clipboard</h1>
                <div className="form-group">
                    <textarea
                        placeholder="Enter text to share"
                        value={text}
                        onChange={handleTextChange}
                        rows="5"
                        className="textarea ljadsf"
                    />
                </div>

                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={isCustomCode}
                            onChange={() => setIsCustomCode(!isCustomCode)}
                        />
                        Generate your own 4-digit code
                    </label>
                </div>

                {isCustomCode && (
                    <>
                        <div className="form-group">
                            <div className="code-input-group">
                                {codeInputs.map((input, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={input}
                                        onChange={(e) => handleCodeChange(e, index)}
                                        maxLength="1"
                                        className="code-input"
                                        pattern="[0-9]*"
                                        autoFocus={index === 0}
                                        disabled={isLinkGenerated}
                                    />
                                ))}
                            </div>
                            {error && <div className="error">{error}</div>}
                        </div>

                        <button
                            className="check-btn"
                            onClick={handleCheckCode}
                            disabled={isLinkGenerated}
                        >
                            {isCodeValid && <span className="correct">✔️</span>}
                            {buttonText}
                        </button>
                    </>
                )}

                <button
                    className="generate-btn"
                    onClick={handleGenerateLink}
                    disabled={isLinkGenerated || !text}
                >
                    Generate Share Link
                </button>

                {loading && <div className="loader"></div>} {/* Loader */}

                {shareLink && (
                    <div className="share-result">
                        <p>Code: {shareLink.replace("/", "")}</p>
                        <p>Your unique shareable link is:
                            <Link to={`https://snapclip-1.onrender.com/get${shareLink}`} target="_blank" rel="noopener noreferrer">
                                {`https://snapclip-1.onrender.com/get${shareLink}`}
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SharePage;
