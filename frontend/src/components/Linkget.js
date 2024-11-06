import React, { lazy, useEffect, useState } from 'react';
import './Retrieve.css';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

function Linkget() {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '']); // State to store the 4-digit code as an array
    const [retrievedText, setRetrievedText] = useState(''); // State for storing the retrieved text
    const [validationMessage, setValidationMessage] = useState(''); // Validation message for user feedback
    const [isContentRetrieved, setIsContentRetrieved] = useState(false); // State to track if content is retrieved
    const [loading, setLoading] = useState(false); // State for loading

    const handleChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) { // Only allow digits
            const newCode = [...code];
            newCode[index] = value; // Update the specific index
            setCode(newCode);
            setValidationMessage(''); // Clear any existing message

            // Move to the next input if the current one is filled
            if (value && index < 3) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleRetrieve = async () => {
        const codeString = code.join('');
        if (codeString.length !== 4) {
            setValidationMessage('Code must be 4 digits.');
            // Clear validation message after 3 seconds
            setTimeout(() => {
                setValidationMessage('');
            }, 3000);
            return;
        }
        setLoading(true); // Start loading

        try {
            navigate(`/get/${codeString}`);
            setIsContentRetrieved(true); // Mark content as retrieved
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(retrievedText).then(() => {
            setValidationMessage('Content copied to clipboard!');
            // Clear the message after 3 seconds
            setTimeout(() => {
                setValidationMessage('');
            }, 3000);
        });
    };

    const location = useLocation();
    const codeString = location.pathname.replace("/get/", "");

    const chkf = async () => {
        setLoading(true); // Start loading

        try {
            const checkcodeindatabase = await axios.post("/get", { "code": codeString });
            if (checkcodeindatabase) {
                setRetrievedText(checkcodeindatabase.data.data.data);
            } else {
                setRetrievedText(`Retrieved content for code ${codeString}: Is Not Available in our DataBase`);
            }
        } catch (error) {
            setRetrievedText(`Retrieved content for code ${codeString}: Is Not Available in our DataBase`);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        if (codeString.length > 0 && codeString.length !== 4) {
            setRetrievedText(`${codeString}: Is Not Available in our DataBase`);
        } else {
            chkf();
            setIsContentRetrieved(true);
        }
    }, [codeString]);

    return (
        <div className='containerretripa'>
            <section className="retrieve-page">
                <h2>Retrieve Shared Content From Link</h2>
                <div className="code-input">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            id={`otp-input-${index}`}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder="-"
                            maxLength={1} // Limit input to 1 character
                            className="otp-input"
                        />
                    ))}
                    <button onClick={handleRetrieve} className="retrieve-button">Retrieve</button>
                </div>

                {validationMessage && (
                    <p className="validation-message">{validationMessage}</p>
                )}

                {/* Loader */}
                {loading && <div className="loader"></div>}

                <textarea
                    className='jlsdj'
                    value={retrievedText}
                    readOnly
                    placeholder="Retrieved content will appear here..."
                />
                {isContentRetrieved && (
                    <button onClick={handleCopy} className="copy-button">Copy Text</button>
                )}
            </section>
        </div>
    );
}

export default Linkget;
