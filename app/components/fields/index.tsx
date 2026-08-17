import React from 'react';
import { Landmark, Microscope, BookOpen, Activity, Cpu, Briefcase } from 'lucide-react';

interface FeeRow {
  program: string;
  price: string; // This now holds the final price
}

interface UniSectionProps {
  name: string;
  color: string;
  icon: React.ReactNode;
  rows: FeeRow[];
}

const UniversityTable: React.FC<UniSectionProps> = ({ name, color, icon, rows }) => (
  <div style={{ 
    marginBottom: '40px', 
    overflow: 'hidden', 
    borderRadius: '16px', 
    border: `1px solid ${color}44`, 
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    position: 'relative' 
  }}>
    {/* Background Icon Watermark */}
    <div style={{
      position: 'absolute',
      right: '-20px',
      top: '-20px',
      color: color,
      opacity: 0.08,
      zIndex: 0,
      transform: 'rotate(-15deg)'
    }}>
      {React.cloneElement(icon as React.ReactElement, { size: 200 })}
    </div>

    <div style={{ 
      backgroundColor: color, 
      color: 'white', 
      padding: '20px 25px', 
      fontWeight: '800', 
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      position: 'relative',
      zIndex: 1
    }}>
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      {name}
    </div>

    <div style={{ position: 'relative', zIndex: 1 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', fontSize: '0.9rem', textAlign: 'left' }}>
            <th style={{ borderBottom: '2px solid #dee2e6', padding: '15px', color: '#495057' }}>Available Programs</th>
            <th style={{ borderBottom: '2px solid #dee2e6', padding: '15px', color: '#495057', textAlign: 'right' }}>Program Price (Annual)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} style={{ fontSize: '1rem' }}>
              <td style={{ borderBottom: '1px solid #eee', padding: '15px', fontWeight: '600', color: '#212529' }}>{row.program}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '15px', fontWeight: '800', color: color, textAlign: 'right' }}>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const UniversityFees: React.FC = () => {
  return (
    <div style={{ padding: '40px 20px', fontFamily: '"Inter", sans-serif', backgroundColor: '#fcfcfc', maxWidth: '900px', margin: '0 auto' }}>
      
      <UniversityTable 
        name="Near East University" 
        color="#801533" 
        icon={<Microscope />}
        rows={[
          { program: "Medicine", price: "10,925€" },
          { program: "Dentistry", price: "10,135€" },
          { program: "Pharmacy or Veterinary", price: "3,886€" },
          { program: "Engineering and other program", price: "2,705€" },
        ]}
      />

      <UniversityTable 
        name="University of Kyrenia" 
        color="#00a19a" 
        icon={<Activity />}
        rows={[
          { program: "Medicine", price: "7,615€" },
          { program: "Dentistry", price: "5,935€" },
          { program: "Pharmacy + Veterinary", price: "1,400€" },
          { program: "Engineering and other program", price: "3,190€" },
        ]}
      />

      <UniversityTable 
        name="Cyprus International University" 
        color="#8a1538" 
        icon={<BookOpen />}
        rows={[
          { program: "Medicine", price: "7,823€" },
          { program: "Dentistry", price: "6,495€" },
          { program: "Pharmacy", price: "2,730€" },
          { program: "Engineering and other program", price: "2,155€" },
        ]}
      />

      <UniversityTable
        name="Bahçeşehir Cyprus University" 
        color="#2b5ba3" 
        icon={<Cpu />}
        rows={[
          { program: "Pharmacy", price: "5,100$" },
          { program: "Engineering and other program", price: "1,728$" },
        ]}
      />

      <UniversityTable 
        name="Final International University" 
        color="#e32c2c" 
        icon={<Briefcase />}
        rows={[
          { program: "Dentistry", price: "5,430$" },
          { program: "Pharmacy", price: "3,502$" },
          { program: "Engineering and other program", price: "1,970$" },
        ]}
      />

    </div>
  );
};

export default UniversityFees;