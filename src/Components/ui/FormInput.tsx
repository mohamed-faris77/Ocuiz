import React from 'react';
import type { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';
import type { BookingFormData } from '../../types';
import './FormInput.css';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'textarea';
  placeholder?: string;
  register: UseFormRegister<BookingFormData>;
  error?: FieldError;
  readOnly?: boolean;
  value?: string | number;
  className?: string;
  validation?: RegisterOptions<BookingFormData>;
  icon?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  readOnly = false,
  value,
  className = '',
  validation,
  icon,
}) => {
  const baseClasses = `form-input ${error ? 'error' : ''} ${readOnly ? 'readonly' : ''} ${className}`;

  return (
    <div className="form-input-wrapper animate-slide-up">
      <label htmlFor={name} className="form-label">
        {icon && <span className="label-icon">{icon}</span>}
        {label}
        {validation?.required && <span className="required-indicator">*</span>}
      </label>

      <div className="input-container">
        {type === 'textarea' ? (
          <textarea
            id={name}
            {...register(name as any, validation)}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            className={`${baseClasses} form-textarea`}
            rows={3}
          />
        ) : (
          <input
            id={name}
            type={type}
            {...register(name as any, validation)}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            className={baseClasses}
            step={type === 'number' ? '0.01' : undefined}
          />
        )}
      </div>

      {error && (
        <p className="error-message animate-slide-up">
          <svg className="error-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
