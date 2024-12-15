import { useState } from "react";

const CareerFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null,
    address: '',
    comments: ''
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('/api/career-email', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Application submitted successfully!');
        setShowModal(false);
      } else {
        alert(result.error ||'Error submitting the application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div>
      <button className="theme-btn apply-button" onClick={handleOpenModal}>
        Apply Now
      </button>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Apply for this job</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
                <textarea
                  id="comments"
                  name="comments"
                  placeholder="Additional comments (if any)"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>

                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        /* Modal Background */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
            
        .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1000;
        }

        /* Modal Content */
        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 50%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            position: relative;
            font-family: var(--text-font);
            padding-bottom:60px;
        }
          .container {
          font-family: var(--text-font);
          padding: 2rem;
          max-width: 800px;
          margin: auto;
        }
        .apply-button {
          position: relative;
          font-size: 13px;
          line-height: 24px;
          padding: 15px 50px;
          font-weight: 700;
          letter-spacing: 0.1em;
          overflow: hidden;
          text-transform: uppercase;
          color: var(--theme-color1);
          background: var(--bg-theme-color2);
          border-radius: 50px;
          width: 150px;
        }
        /* .apply-button:hover { 
          background-color: #28597a;
          color: #fff;
        } */

        .apply-button:before {
          position: absolute;
        left: 0;
        top: 0%;
        height: 100%;
        width: 100%;
        content: "";
        background-color: var(--bg-theme-color1);
        -webkit-transform: scale(1, 0);
                transform: scale(1, 0);
        -webkit-transform-origin: bottom left;
                transform-origin: bottom left;
        transition: -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        -webkit-transition: -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        transition: transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        transition: transform 500ms cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
                transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
        z-index: -1;
        }
        .apply-button:hover:before {
          -webkit-transform-origin: top right;
                transform-origin: top right;
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
        }
        .apply-button:hover {
          color: #ffffff;
        -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .apply-button.hvr-light:hover {
          color: var(--theme-color2);
        }
        .apply-button.hvr-light:before {
          background-color: #ffffff;
        }
        .apply-button.bg-light:not(hover) {
          background-color: #ffffff !important;
        }

        .modal-content h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .modal-content form {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        /* .modal-content form label {
            margin-top: 10px;
        } */

        .modal-content form input,
        .modal-content form textarea,
        .modal-content form button {
            margin-top: 5px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .modal-content form button {
            background-color: #022a51;
            color: white;
            cursor: pointer;
            margin-top: 20px;
            font-size: 13px;
            width:100px;
            right: 20px;
            bottom: 10px;
        }

        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 28px;
            cursor: pointer;
        }
        @media (max-width: 600px) {
            .modal-content {
            width: 100vw;
            height: 100vh;
            max-width: 100vw;
            max-height: 100vh;
            padding: 15px;
            }
        }
        
        @media (max-width: 400px) {
            .modal-content {
            width: 100%;
            height: auto;
            max-height: 90vh;
            padding: 10px;
            }
        }
      `}</style>
    </div>
  );
};

export default CareerFormModal;
