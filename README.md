# 📦 Logistics ERP - Booking Management System


## 🛠 Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS + Custom CSS
- **Form Management**: React Hook Form
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
LogisticsERP/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── FormInput.tsx          # Reusable form input component
│   │   │   ├── FormInput.css
│   │   │   ├── SectionWrapper.tsx     # Card section wrapper
│   │   │   ├── SectionWrapper.css
│   │   │   └── index.ts               # Component exports
│   │   └── sections/                  # Future section components
│   ├── pages/
│   │   ├── BookingPage.tsx            # Main booking entry page
│   │   └── BookingPage.css
│   ├── styles/
│   │   └── globals.css                # Global styles & design system
│   ├── types/
│   │   └── index.ts                   # TypeScript type definitions
│   ├── App.tsx                        # Root component
│   ├── main.tsx                       # Application entry point
│   └── index.css                      # CSS imports
├── public/                            # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── todo.md                            # Project TODO tracker
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. **Clone the repository** (or extract the project)
   ```bash
   cd LogisticsERP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   The app will be running at `http://localhost:5173`

## 📋 Form Fields & Validation

### Sender Details
- **Full Name** (required): Text input
- **Mobile Number** (required): Exactly 10 digits
- **Email** (optional): Valid email format

### Receiver Details
- **Full Name** (required): Text input
- **Full Address** (required): Textarea for complete address

### Package Details
- **Weight (kg)** (required): Number > 0
- **Rate per kg (INR)** (required): Number > 0
- **Total Shipping Cost** (auto-calculated): Weight × Rate

## 🧪 Testing the App

1. Fill in the sender details
2. Enter the receiver information
3. Input package weight and rate
4. Watch the total cost auto-calculate
5. Submit button activates when form is valid
6. On submit, form data is logged to console
7. Success notification appears
8. Form resets after 2 seconds

## 🎯 Key Implementation Details

### Type Safety
- Fully typed with TypeScript
- No usage of `any` type (except for necessary form library compatibility)
- Strict type checking enabled

### Form Management
- React Hook Form for efficient form handling
- Real-time validation with onChange mode
- Proper error handling and display

### Component Architecture
- Reusable UI components in `components/ui/`
- Page-level components in `pages/`
- Clean separation of concerns
- Modular CSS with component-specific styles
