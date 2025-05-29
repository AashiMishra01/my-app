import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileCardPage() {
  const profiles = [
    {
      id: 1,
      name: 'Devoosh.ai',
      role: 'AI-powered developer productivity platform. Founded in 2022. Specializes in intelligent code automation, workflow optimization, and AI-assisted debugging tools for engineering teams.',
      image: 'https://media.licdn.com/dms/image/v2/D4D0BAQFn0l9d8FeSyw/company-logo_200_200/company-logo_200_200/0/1727925755660?e=1753920000&v=beta&t=lUmsx9Gd6JPGuVn_ZQgQF1oK6jFPfg0ATytRpzEG474'
    },
    {
      id: 2,
      name: 'Kudos',
      role: 'Employee recognition and engagement platform. Established in 2018. Offers peer-to-peer kudos, rewards systems, and analytics to boost workplace culture and retention.',
      image: 'https://media.licdn.com/dms/image/v2/C4D0BAQHWbeKc0oXW1g/company-logo_200_200/company-logo_200_200/0/1659027043172/kudos_technolabs_logo?e=1753920000&v=beta&t=l43_5CyR0ym1rT9OZvOdwOrIy2cjVBXLA52SksoqCx4'
    },
    {
      id: 3,
      name: 'Google',
      role: 'Global technology leader. Launched in 1998. Provides search engines, cloud computing (GCP), advertising tech (AdSense), AI (Gemini), and consumer products (Android, YouTube).',
      image: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1753920000&v=beta&t=edsKo5UxhbjCKZRtsPAK7FwVBRn6-KKFBtmz9elREnw'
    }
  ];

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Tech Companies</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id}
            name={profile.name}
            role={profile.role}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileCardPage;