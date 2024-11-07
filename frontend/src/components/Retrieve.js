import React, { useState } from 'react';
import './Retrieve.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Retrieve() {
    const [code, setCode] = useState(['', '', '', '']); // State to store the 4-digit code as an array
    const [retrievedText, setRetrievedText] = useState(''); // State for storing the retrieved text
    const [validationMessage, setValidationMessage] = useState(''); // Validation message for user feedback
    const [isContentRetrieved, setIsContentRetrieved] = useState(false); // State to track if content is retrieved
    const [loading, setLoading] = useState(false); // State to track loading

    const navigate = useNavigate();

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

        // setLoading(true); // Start the loader

        // Simulate an API call or any asynchronous operation
        // try {
        //     // You can replace this with your API call
        //     const response = await axios.get(`/get/${codeString}`);
        //     setRetrievedText(response.data); // Use the response data
        //     setIsContentRetrieved(true);
        // } catch (error) {
        //     setValidationMessage('Failed to retrieve content. Please try again.');
        //     setIsContentRetrieved(false);
        // } finally {
        //     setLoading(false); // Stop the loader
        // }

        navigate(`/get/${codeString}`);
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

    return (
        <div className='containerretripa'>
            <section className="retrieve-page">
                <h2>Retrieve Shared Content</h2>
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
                    <button onClick={handleRetrieve} className="retrieve-button">
                        Retrieve
                    </button>
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

export default Retrieve;
