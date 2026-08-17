import React from 'react';
import { Landmark, GraduationCap, Microscope, BookOpen, Activity, Cpu, Briefcase } from 'lucide-react';

interface FeeRow {
  program: string;
  fiftyScholarship: string;
  fiftyPrice: string;
  seventyFiveScholarship?: string;
  seventyFivePrice?: string;
  eightyScholarship?: string;
  eightyPrice?: string;
  oneHundredScholarship: string;
  oneHundredPrice: string;
}

interface UniSectionProps {
  name: string;
  color: string;
  icon: React.ReactNode;
  rows: FeeRow[];
  scholarshipLabel?: string;
}

const Universityprice: React.FC<UniSectionProps> = ({ name, color, icon, rows, scholarshipLabel = "75%" }) => (
  <div style={{ 
    marginBottom: '60px', 
    overflow: 'hidden', 
    borderRadius: '16px', 
    border: `1px solid ${color}44`, // Subtler border
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

    <div style={{ overflowX: 'auto', position: 'relative', zIndex: 1 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', fontSize: '0.85rem', textAlign: 'center' }}>
            <th style={{ border: '1px solid #dee2e6', padding: '15px' }} rowSpan={2}>Available Programs</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px' }} colSpan={2}>50% Scholarship</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px' }} colSpan={2}>{scholarshipLabel} Scholarship</th>
            <th style={{ border: '1px solid #dee2e6', padding: '12px' }} colSpan={2}>100% Scholarship</th>
          </tr>
          <tr style={{ backgroundColor: '#f1f3f5', fontSize: '0.7rem', textAlign: 'center', color: '#495057' }}>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>SCHOLARSHIP PRICE</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>FEES AFTER SCH.</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>SCHOLARSHIP PRICE</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>FEES AFTER SCH.</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>SCHOLARSHIP PRICE</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>FEES AFTER SCH.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} style={{ textAlign: 'center', fontSize: '0.9rem' }}>
              <td style={{ border: '1px solid #dee2e6', padding: '15px', fontWeight: '700', textAlign: 'left', color: '#212529' }}>{row.program}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', color: '#868e96' }}>{row.fiftyPrice}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: '800', color: color }}>{row.fiftyScholarship}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', color: '#868e96' }}>{row.seventyFivePrice || row.eightyPrice || "—"}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: '800', color: color }}>{row.seventyFiveScholarship || row.eightyScholarship || "No Scholarship"}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', color: '#868e96' }}>{row.oneHundredPrice}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: '800', color: '#2b8a3e' }}>{row.oneHundredScholarship}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
// template start from here, you can copy and paste this component for each university and change the props accordingly

<Universityprice
        name="Bahçeşehir Cyprus University" 
        color="#2b5ba3" 
        icon={<Cpu />}
        scholarshipLabel="80%"
        rows={[
          { program: "Pharmacy", fiftyPrice: "5,100$", fiftyScholarship: "5,100$", eightyPrice: "—", eightyScholarship: "No Scholarship", oneHundredPrice: "10,200$", oneHundredScholarship: "900$" },
          { program: "Engineering and other program", fiftyPrice: "3,870$", fiftyScholarship: "3,870$", eightyPrice: "1,728$", eightyScholarship: "1,728$", oneHundredPrice: "7,740$", oneHundredScholarship: "900$" },
        ]}
      />
      export default Universityprice;