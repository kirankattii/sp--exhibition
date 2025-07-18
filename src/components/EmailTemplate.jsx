import React from 'react';

const EmailTemplate = ({ name, email, phone, message }) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#2c3e50',
        color: '#ffffff',
        padding: '30px 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          margin: '0',
          fontSize: '28px',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          New Contact Form Submission
        </h1>
        <p style={{
          margin: '10px 0 0 0',
          fontSize: '16px',
          opacity: '0.9'
        }}>
          You have received a new message from your website
        </p>
      </div>

      {/* Content */}
      <div style={{
        padding: '40px',
        backgroundColor: '#ffffff'
      }}>
        {/* Sender Info */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '25px',
          borderRadius: '8px',
          marginBottom: '30px',
          borderLeft: '4px solid #3498db'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            color: '#2c3e50',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            Contact Information
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div>
              <strong style={{ color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Name
              </strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '16px', color: '#2c3e50', fontWeight: '500' }}>
                {name}
              </p>
            </div>
            
            <div>
              <strong style={{ color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Email
              </strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '16px', color: '#3498db' }}>
                <a href={`mailto:${email}`} style={{ color: '#3498db', textDecoration: 'none' }}>
                  {email}
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <strong style={{ color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Phone Number
            </strong>
            <p style={{ margin: '5px 0 0 0', fontSize: '16px', color: '#2c3e50', fontWeight: '500' }}>
              {phone}
            </p>
          </div>
        </div>

        {/* Message */}
        <div>
          <h2 style={{
            margin: '0 0 20px 0',
            color: '#2c3e50',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            Message
          </h2>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <p style={{
              margin: '0',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#2c3e50',
              whiteSpace: 'pre-wrap'
            }}>
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#ecf0f1',
        padding: '25px 40px',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#7f8c8d'
        }}>
          This email was sent from your website contact form on{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        
        <div style={{
          marginTop: '15px',
          paddingTop: '15px',
          borderTop: '1px solid #e9ecef'
        }}>
          <p style={{
            margin: '0',
            fontSize: '12px',
            color: '#95a5a6'
          }}>
            © 2024 S-P Exhibition. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate; 