
import styled from 'styled-components';
import { useState } from "react";
import { toast } from "sonner";
const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("پیام شما با موفقیت ارسال شد ✅");
    setFormData({ email: "", message: "" });
  };
  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
                <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@company.com"
                      />
                      </div>
              <div className="form-group">
            <label htmlFor="message">How Can We Help You?</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />
          </div>
         <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }`;

export default ContactForm;
