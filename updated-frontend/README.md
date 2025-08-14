# MediSense Facilitator Dashboard

A frontend-only healthcare dashboard for facilitators to manage patient cases and coordinate with doctors.

## 🚀 Quick Start

### For Next.js App Router

1. Copy all files to your Next.js project:
   \`\`\`
   your-project/
   ├── app/
   │   ├── facilitator/
   │   │   ├── page.jsx
   │   │   └── patients/
   │   │       └── [id]/
   │   │           └── page.jsx
   │   └── globals.css
   ├── components/
   │   ├── PatientQueue.jsx
   │   ├── PatientCard.jsx
   │   ├── PatientDetail.jsx
   │   ├── AiReportCard.jsx
   │   ├── DoctorResponsePanel.jsx
   │   └── StatusDropdown.jsx
   ├── data/
   │   └── mockPatients.json
   └── public/
       └── data/
           └── mockPatients.json (copy here for fetch to work)
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install lucide-react
   \`\`\`

3. Make sure you have Tailwind CSS configured

4. Copy `mockPatients.json` to `public/data/` directory

5. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Navigate to `/facilitator` to see the dashboard

## 📁 File Structure

\`\`\`
├── app/facilitator/page.jsx              # Main dashboard with 3-panel layout
├── app/facilitator/patients/[id]/page.jsx # Individual patient detail page
├── components/
│   ├── PatientQueue.jsx                  # Left panel - patient list with search/filter
│   ├── PatientCard.jsx                   # Individual patient card component
│   ├── PatientDetail.jsx                 # Center panel - detailed patient view
│   ├── AiReportCard.jsx                  # AI summary display with mock generation
│   ├── DoctorResponsePanel.jsx           # Right panel - doctor responses
│   └── StatusDropdown.jsx                # Status change dropdown
├── data/mockPatients.json                # Mock data (3 patients + doctors)
└── app/globals.css                       # Tailwind styles + custom CSS
\`\`\`

## 🎯 Features

- **3-Panel Layout**: Queue (25%) | Detail (50%) | Response (25%)
- **Patient Management**: Search, filter, and status updates
- **AI Integration**: Mock AI report generation with loading states
- **Doctor Responses**: Prescriptions and video consultation scheduling
- **Responsive Design**: Desktop and tablet optimized
- **Accessibility**: ARIA labels and keyboard navigation
- **Mock Data**: 3 sample patients with different statuses

## 🎨 UI Components

- Clean healthcare-themed design
- Status indicators and priority badges
- Image gallery for medical images
- Interactive modals and dropdowns
- Loading states and animations

## 🔧 Customization

- Modify `mockPatients.json` to add more sample data
- Update color scheme in `globals.css`
- Add new status types in `StatusDropdown.jsx`
- Extend patient fields in the data structure

## 📱 Responsive Breakpoints

- Desktop: Full 3-panel layout
- Tablet: Stacked panels with navigation
- Mobile: Single panel with navigation tabs

Navigate to `http://localhost:3000/facilitator` to see the dashboard in action!
