import React from 'react';
import './TermsAndConditions.css';
import {Link} from "react-router-dom"

function TermsAndConditions() {
    return (
        <div className='fljfls'>
            <div className="terms-container">
                <h1>Terms and Conditions</h1>
                <p className="last-updated">Last Updated: November 2024</p>

                <section className="terms-content">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to SnapClip, a platform that allows users to share and retrieve clipboard content securely. These Terms and Conditions (“Terms”) govern your use of our website, services, and any content or features provided by SnapClip. By accessing or using our website, you agree to comply with these Terms. If you do not agree with these Terms, you must not use our website.
                    </p>

                    <h2>2. Use of Our Website</h2>
                    <ul>
                        <li><strong>Eligibility:</strong> You must be at least 13 years old to use the services provided by SnapClip.</li>
                        <li><strong>Account Creation:</strong> While using certain services, you may be asked to create an account or provide personal information. You agree to provide accurate, complete, and up-to-date information during the registration process.</li>
                        <li><strong>Permitted Use:</strong> You may use our website for lawful purposes only and in accordance with these Terms. You agree not to:
                            <ul>
                                <li>Use the site for any unlawful, harmful, or unauthorized purpose.</li>
                                <li>Interfere with or disrupt the site or servers.</li>
                                <li>Upload, share, or transmit content that violates any third-party rights, including copyright or intellectual property.</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>3. User-Generated Content</h2>
                    <ul>
                        <li><strong>Content Ownership:</strong> By using SnapClip, you retain ownership of any content you submit, including clipboard data, but you grant us a non-exclusive, worldwide, royalty-free license to display, share, or distribute such content as part of the functionality of our services.</li>
                        <li><strong>Content Responsibility:</strong> You are solely responsible for the content you share through the website. We do not claim ownership of user-generated content, and we are not responsible for its accuracy, legality, or appropriateness.</li>
                    </ul>

                    <h2>4. Generated Code and Link</h2>
                    <ul>
                        <li><strong>Random and Custom Codes:</strong> Users can either generate a random 4-digit code or create a custom code for sharing content. By generating a code, users agree to be bound by the unique identifier associated with their clipboard content.</li>
                        <li><strong>Share Links:</strong> After sharing a piece of content, users are provided with a shareable link. This link can be accessed by anyone with the link and will display the clipboard content shared by the user.</li>
                        <li><strong>Code Expiration:</strong> Generated codes are temporary and may expire after a period defined by the website. Users must ensure that their codes are valid before sharing the link.</li>
                    </ul>

                    <h2>5. Privacy and Data Protection</h2>
                    <p>
                        We are committed to protecting your privacy. Our <Link to="/privacy-policy">Privacy Policy</Link> explains how we collect, use, and protect your personal data. By using the website, you consent to the collection and use of your personal data in accordance with our Privacy Policy.
                    </p>

                    <h2>6. Limitations of Liability</h2>
                    <ul>
                        <li><strong>Use at Your Own Risk:</strong> You use SnapClip and its services at your own risk. We do not guarantee the accuracy, completeness, or reliability of any content provided on the site, including clipboard data.</li>
                        <li><strong>Limitation of Liability:</strong> In no event will SnapClip, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the website or services.</li>
                        <li><strong>Third-Party Links:</strong> Our website may contain links to third-party websites. We are not responsible for the content or practices of those websites.</li>
                    </ul>

                    <h2>7. Prohibited Conduct</h2>
                    <p>
                        You agree not to engage in any of the following activities:
                        <ul>
                            <li>Uploading or sharing content that is illegal, obscene, offensive, or harmful to others.</li>
                            <li>Using the website in a manner that violates any applicable law or regulation.</li>
                            <li>Attempting to interfere with the functioning of the website or its services.</li>
                        </ul>
                    </p>

                    <h2>8. Termination of Access</h2>
                    <p>
                        We may suspend or terminate your access to our website at any time, without notice, if we believe you have violated these Terms. You can terminate your account by contacting us, and we will remove your data in accordance with our privacy policy.
                    </p>

                    <h2>9. Changes to These Terms</h2>
                    <p>
                        We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page with a revised "Last Updated" date. Your continued use of the website after any changes to these Terms will constitute your acceptance of those changes.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms will be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these Terms will be subject to the exclusive jurisdiction of the courts in India.
                    </p>

                    <h2>11. Contact Information</h2>
                    <p>
                        If you have any questions or concerns about these Terms and Conditions, please contact us at:
                    </p>
                    <ul>
                    <li><strong>Email:</strong> <a href="mailto:vishnumorapally2004@gmail.com">vishnumorapally2004@gmail.com</a></li>
                    <li><strong>Phone:</strong> +91 7013652387</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default TermsAndConditions;
