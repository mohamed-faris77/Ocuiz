# 📦 Logistics ERP - Booking Management System

A modern, premium web application for managing logistics bookings with an intuitive user interface and seamless user experience.

![Logistics ERP](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)

## 🎯 Features

✨ **Modern UI/UX**
- Premium glassmorphism design
- Smooth animations and transitions
- Gradient color schemes
- Responsive layout for all devices

📝 **Smart Form**
- Real-time validation with inline error messages
- Auto-calculation of shipping costs
- Required field indicators
- Keyboard-friendly navigation

🎨 **Design System**
- Custom CSS variables for easy theming
- Reusable UI components
- Consistent spacing and typography
- Modern Inter font family

📱 **Fully Responsive**
- Desktop: 2-column grid layout
- Tablet: Optimized spacing
- Mobile: Stacked single-column layout

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS + Custom CSS
- **Form Management**: React Hook Form
- **Icons**: Inline SVG icons
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
- npm or yarn

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

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

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

## 🎨 Design Features

### Color Palette
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Accent Colors**: Pink, Orange, Teal
- **Neutrals**: Gray scale from 50 to 900

### Animations
- Fade-in effects on page load
- Slide-up transitions for form elements
- Hover effects on interactive elements
- Smooth focus transitions

### Responsive Breakpoints
- **Desktop**: ≥ 1024px (2-column grid)
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px (stacked layout)

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

### No Backend Integration
- Console logging for form submission
- No API calls or backend dependencies
- Ready for backend integration when needed

## 📸 Screenshots

*Desktop View*: Modern glassmorphism design with gradient background
*Mobile View*: Fully responsive stacked layout

## 🚧 Future Enhancements

- [ ] Toast notifications instead of alerts
- [ ] Form data persistence (localStorage)
- [ ] Print booking receipt
- [ ] Export to PDF
- [ ] Backend API integration
- [ ] Authentication system
- [ ] Booking history dashboard
- [ ] Search and filter bookings

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configured for React + TypeScript
- Consistent formatting with Prettier (optional)
- Component-based architecture
- CSS modules pattern

## 📄 License

This project is created as part of a frontend engineering assessment.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for lightning-fast development
- Tailwind CSS for utility-first styling
- React Hook Form for form management

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
