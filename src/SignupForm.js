import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #1e293b;
  font-weight: 700;
  font-size: 28px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  animation: ${fadeIn} 0.3s ease-out;
  animation-delay: ${props => props.delay || '0s'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${props => props.error ? '#dc2626' : '#cbd5e1'};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  background-color: ${props => props.error ? '#fef2f2' : '#fff'};
  color: #1e293b;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc2626' : '#6366f1'};
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(220, 38, 38, 0.2)' : 'rgba(99, 102, 241, 0.2)'};
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${props => props.error ? '#dc2626' : '#cbd5e1'};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  background-color: ${props => props.error ? '#fef2f2' : '#fff'};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  color: #1e293b;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc2626' : '#6366f1'};
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(220, 38, 38, 0.2)' : 'rgba(99, 102, 241, 0.2)'};
  }
`;

const ErrorText = styled.div`
  color: #dc2626;
  font-size: 14px;
  margin-top: 6px;
  animation: ${fadeIn} 0.2s ease-out;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  animation: ${pulse} 2s infinite;
  
  &:hover {
    background-color: #dc2626;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
    animation: none;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 30px 0;
`;

const PreviewTitle = styled.h3`
  text-align: center;
  color: #475569;
  margin-bottom: 15px;
  font-weight: 600;
`;

const PreviewContainer = styled.div`
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  font-size: 15px;
  border: 1px dashed #cbd5e1;
`;

const PreviewText = styled.p`
  margin: 8px 0;
  color: #1e293b;
  
  strong {
    color: #475569;
    font-weight: 600;
  }
`;

const EmptyPreview = styled.p`
  color: #94a3b8;
  text-align: center;
  font-style: italic;
`;

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Required field';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Required field';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone) {
      newErrors.phone = 'Required field';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Must be 10 digits';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select an option';
    }

    if (!formData.password) {
      newErrors.password = 'Required field';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Needs one uppercase letter';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Needs one number';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Signup Data:', formData);
      alert('Account created successfully!');
      setIsSubmitting(false);
    }
  };

  const hasPreviewData = Object.values(formData).some(value => value);

  return (
    <PageContainer>
      <FormContainer>
        <FormTitle>Join Us Today</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup delay="0.1s">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </FormGroup>

          <FormGroup delay="0.2s">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FormGroup>

          <FormGroup delay="0.3s">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
          </FormGroup>

          <FormGroup delay="0.4s">
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              error={errors.gender}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </Select>
            {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
          </FormGroup>

          <FormGroup delay="0.5s">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </FormGroup>

          <FormGroup delay="0.6s">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up Now'}
          </SubmitButton>
        </form>

        <Divider />

        <PreviewTitle>Your Information</PreviewTitle>
        <PreviewContainer>
          {hasPreviewData ? (
            <>
              {formData.name && <PreviewText><strong>Name:</strong> {formData.name}</PreviewText>}
              {formData.email && <PreviewText><strong>Email:</strong> {formData.email}</PreviewText>}
              {formData.phone && <PreviewText><strong>Phone:</strong> {formData.phone}</PreviewText>}
              {formData.gender && <PreviewText><strong>Gender:</strong> {formData.gender}</PreviewText>}
              {formData.password && <PreviewText><strong>Password:</strong> ••••••••</PreviewText>}
            </>
          ) : (
            <EmptyPreview>Your information will appear here</EmptyPreview>
          )}
        </PreviewContainer>
      </FormContainer>
    </PageContainer>
  );
}

export default SignupForm;