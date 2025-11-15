import DBF from '../assets/Projects/DPF.png';
import cruise from '../assets/Projects/cruise.png';
import ISR from '../assets/Projects/ISR.png';
import satelliteGEE from '../assets/Projects/GoogleEarthEngine.png';
export const HERO_CONTENT = `Driven aerospace engineering student at Cairo University with hands-on experience in aerodynamic design, structural analysis, and CAD modeling. Proven success in competitive engineering projects and cross-functional collaboration. Proficient in engineering tools including SolidWorks, MATLAB, and ANSYS. Seeking impactful opportunities in aerospace design, mechanical systems, or simulation roles.`;

export const ABOUT_TEXT = `My journey in aerospace engineering has been fueled by a passion for innovation and precision. As an aerospace engineering student at Cairo University, I've developed expertise in CAD modeling, aerodynamic analysis, and structural simulation. From leading competitive aircraft design projects to working as a Mechanical Design Engineer at OSCORP ENERGY, I've honed my skills in SolidWorks, MATLAB, ANSYS, and sustainable engineering solutions. I thrive in cross-functional teams and am committed to advancing aerospace technology through innovative design and rigorous analysis.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 - Present",
    role: "Mechanical Design Engineer",
    company: "OSCORP ENERGY – Sydney, Australia",
    description: `Leading mechanical design and development of advanced waste-sorting and recycling machines. Designed a Mixed Waste Separation System to separate hazardous waste (batteries, laptops) from non-hazardous materials. Led Battery Sorting System design with motion and stress simulations. Delivered manufacturable CAD models optimized for DFM, supported by FEA and motion simulations. Enhanced system safety, efficiency, and cost-effectiveness through iterative design optimization and stakeholder collaboration.`,
    technologies: ["SolidWorks", "CAD Modeling", "FEA", "Motion Simulation", "DFM", "Technical Documentation", "R&D"],
  },
  {
    year: "Mar 2025 - Jun 2025",
    role: "Mechanical Design Engineer – V8 Engine Project",
    company: "Personal Project",
    description: `Designed and validated a complete V8 engine assembly in SolidWorks, applying advanced CAD, tolerance analysis, and manufacturability practices. Engineered pistons, camshaft, crankshaft, valve train, and housing with full motion studies and exploded-view animations. Applied geometric tolerancing and DFM practices to ensure accurate part interaction and production feasibility. Produced professional technical documentation and reports suitable for manufacturing reference.`,
    technologies: ["SolidWorks", "Parametric Modeling", "GD&T", "Motion Studies", "Assembly Design", "Technical Documentation"],
  },
];

export const PROJECTS = [
  {
    title: "Design–Build–Fly (DBF) Aircraft Competition",
    image: DBF, 
    description: `Led the design and development of a small-scale aircraft achieving 3rd place in competition. Directed a multidisciplinary team through four major design iterations, resolving performance, structural, and stability issues. Conducted simulations and flight/load testing to validate performance and verify safety margins. Coordinated research, CAD modeling, propulsion analysis, and documentation across the team.`,
    technologies: ["SolidWorks", "MATLAB", "XFLR5", "Flow5", "ANSYS", "3D Printing", "Aerodynamic Analysis", "Structural Analysis"],
    link: "https://drive.google.com/drive/folders/1g8mLrcPX5NxNq6hzm2IxcqDGJnRPAdng"
  },
  {
    title: "Cruise Control System – MATLAB Simulink",
    image: cruise,
    description: `Built a cruise control model using Simulink with PID controller implementation. Analyzed stability and performance metrics and validated results against expected system behavior. Demonstrated understanding of control systems theory and practical application in automotive engineering.`,
    technologies: ["MATLAB", "Simulink", "PID Control", "Control Systems", "System Modeling"],
    link: "https://drive.google.com/drive/folders/1g8mLrcPX5NxNq6hzm2IxcqDGJnRPAdng"
  },
  {
    title: "Embedded Systems – Arduino Interrupt Service Routine",
    image: ISR, 
    description: `Developed an Interrupt Service Routine (ISR) on Arduino to handle asynchronous inputs. Documented the complete hardware-software interface and ISR execution logic. Demonstrated proficiency in embedded systems programming and real-time response handling.`,
    technologies: ["Arduino", "C/C++", "Embedded Systems", "ISR", "Hardware Interface"],
    link: "https://drive.google.com/drive/folders/1g8mLrcPX5NxNq6hzm2IxcqDGJnRPAdng"
  },
  {
    title: "Satellite Data Analysis using Google Earth Engine",
    image: satelliteGEE,
    description: `Developed a Java-based application to extract and analyze satellite data on land use and precipitation. Processed spatial data to visualize trends for academic research purposes. Applied remote sensing techniques and geospatial analysis for environmental monitoring.`,
    technologies: ["Java", "Google Earth Engine", "Geospatial Analysis", "Remote Sensing", "Data Visualization"],
    link: "https://drive.google.com/drive/folders/1g8mLrcPX5NxNq6hzm2IxcqDGJnRPAdng"
  },
];

export const CONTACT = {
  address: "Cairo, Egypt",
  phoneNo: "+20 111 541 7266",
  email: "mohammedgamal0092@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title: "SolidWorks Professional",
    status: "Proficient",
    issuer: "Dassault Systèmes",
    year: "2025"
  },
  {
    title: "MATLAB & Simulink",
    status: "Proficient",
    issuer: "MathWorks",
    year: "2024"
  },
  {
    title: "ANSYS Structural Analysis",
    status: "Proficient",
    issuer: "ANSYS",
    year: "2024"
  },
  {
    title: "Aerodynamic Analysis (XFLR5, Flow5)",
    status: "Proficient",
    issuer: "Academic Training",
    year: "2024"
  },
  {
    title: "Python Programming",
    status: "Intermediate",
    issuer: "Self-Study",
    year: "2024"
  },
  {
    title: "Arduino & Embedded Systems",
    status: "Intermediate",
    issuer: "Academic Projects",
    year: "2024"
  },
];

export const SOFT_SKILLS = [
  "Leadership & Team Collaboration",
  "Cross-Functional Communication",
  "Critical Thinking & Problem-Solving",
  "Project Management & Time Management",
  "Technical Documentation & Reporting",
  "Iterative Design & Continuous Improvement",
  "Stakeholder Management",
  "Attention to Detail & Precision",
];