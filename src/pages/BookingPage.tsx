import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SectionWrapper, FormInput } from '../Components/ui';
import type { BookingFormData } from '../types';
import './BookingPage.css';

function BookingPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    mode: 'onChange',
  });

  const weight = watch('package.weight');
  const rate = watch('package.ratePerKg');

  // Auto-calculate total shipping cost
  useEffect(() => {
    const w = Number(weight) || 0;
    const r = Number(rate) || 0;
    const total = w * r;
    setValue('package.totalShippingCost', total > 0 ? Number(total.toFixed(2)) : 0);
  }, [weight, rate, setValue]);

  const onSubmit = (data: BookingFormData) => {
    console.log('📦 Booking Data:', data);

    // Show success notification
    const successNotification = document.createElement('div');
    successNotification.className = 'success-notification animate-slide-up';
    successNotification.innerHTML = `
      <svg class="notification-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      <div>
        <h4>Booking Successful!</h4>
        <p>Your shipment has been registered successfully.</p>
      </div>
    `;
    document.body.appendChild(successNotification);

    setTimeout(() => {
      successNotification.classList.add('fade-out');
      setTimeout(() => successNotification.remove(), 300);
    }, 3000);

    // Reset form after 2 seconds
    setTimeout(() => {
      reset();
    }, 2000);
  };

  // Icon components
  const UserIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  const MailIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );

  const PackageIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  );

  const ScaleIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
    </svg>
  );

  const CashIcon = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* Header */}
        <div className="page-header animate-fade-in">
          <div className="header-badge">
            <PackageIcon />
            <span>Logistics ERP</span>
          </div>
          <h1 className="page-title gradient-text">New Booking Entry</h1>
          <p className="page-subtitle">
            Fill in the details below to create a new shipment booking
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
          {/* Sender and Receiver Details - 2 column on desktop, stacked on mobile */}
          <div className="form-grid">
            <SectionWrapper title="Sender Details" icon={<UserIcon />}>
              <FormInput
                label="Full Name"
                name="sender.fullName"
                type="text"
                placeholder="Enter sender's full name"
                register={register}
                error={errors.sender?.fullName}
                validation={{
                  required: 'Full name is required',
                }}
                icon={<UserIcon />}
              />

              <FormInput
                label="Mobile Number"
                name="sender.mobileNumber"
                type="text"
                placeholder="Enter 10-digit mobile number"
                register={register}
                error={errors.sender?.mobileNumber}
                validation={{
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Mobile number must be exactly 10 digits',
                  },
                }}
                icon={<PhoneIcon />}
              />

              <FormInput
                label="Email (Optional)"
                name="sender.email"
                type="text"
                placeholder="Enter email address"
                register={register}
                error={errors.sender?.email}
                validation={{
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                }}
                icon={<MailIcon />}
              />
            </SectionWrapper>

            <SectionWrapper title="Receiver Details" icon={<LocationIcon />}>
              <FormInput
                label="Full Name"
                name="receiver.fullName"
                type="text"
                placeholder="Enter receiver's full name"
                register={register}
                error={errors.receiver?.fullName}
                validation={{
                  required: 'Full name is required',
                }}
                icon={<UserIcon />}
              />

              <FormInput
                label="Full Address"
                name="receiver.fullAddress"
                type="textarea"
                placeholder="Enter complete delivery address with pincode"
                register={register}
                error={errors.receiver?.fullAddress}
                validation={{
                  required: 'Full address is required',
                }}
                icon={<LocationIcon />}
              />
            </SectionWrapper>
          </div>

          {/* Package Details - Full width */}
          <SectionWrapper title="Package Details" icon={<PackageIcon />}>
            <div className="package-grid">
              <FormInput
                label="Weight (kg)"
                name="package.weight"
                type="number"
                placeholder="Enter weight"
                register={register}
                error={errors.package?.weight}
                validation={{
                  required: 'Weight is required',
                  min: {
                    value: 0.1,
                    message: 'Weight must be greater than 0',
                  },
                }}
                icon={<ScaleIcon />}
              />

              <FormInput
                label="Rate per kg (INR)"
                name="package.ratePerKg"
                type="number"
                placeholder="Enter rate"
                register={register}
                error={errors.package?.ratePerKg}
                validation={{
                  required: 'Rate is required',
                  min: {
                    value: 0.01,
                    message: 'Rate must be greater than 0',
                  },
                }}
                icon={<CashIcon />}
              />

              <FormInput
                label="Total Shipping Cost (INR)"
                name="package.totalShippingCost"
                type="number"
                placeholder="Auto-calculated"
                register={register}
                readOnly={true}
                value={weight && rate ? (weight * rate).toFixed(2) : ''}
                icon={<CashIcon />}
              />
            </div>
          </SectionWrapper>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={!isValid}
              className={`submit-button ${isValid ? 'active' : 'disabled'}`}
            >
              <svg className="button-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Submit Booking</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
