import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Trophy, Star, Target } from 'lucide-react';

const ExtraCurricular = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const leetcodeUsername = 'himanshu8809564335';

  useEffect(() => {
    // Fetch live LeetCode stats
    const fetchLeetcode = async () => {
      try {
        const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`);
        if (response.data && response.data.solvedProblem !== undefined) {
          setLeetcodeData(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch LeetCode data', error);
      }
    };
    fetchLeetcode();
  }, []);

  return (
    <div className="section coding-profiles-section">
      <h2>Coding Profiles & Extra Curricular</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
        I actively participate in algorithmic challenges to sharpen my problem-solving skills.
      </p>

      <div className="profiles-grid" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        
        {/* LeetCode Card */}
        <div className="profile-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{ width: 24, height: 24, filter: 'var(--invert-img)' }} />
              LeetCode
            </h3>
            <a href={`https://leetcode.com/u/${leetcodeUsername}`} target="_blank" rel="noreferrer" style={linkStyle}>
              View <ExternalLink size={14} />
            </a>
          </div>
          
          <div style={statsContainerStyle}>
            {leetcodeData ? (
              <>
                <div style={statBoxStyle}>
                  <Trophy size={18} color="#eab308" />
                  <div style={statTextStyle}>
                    <span style={statNumberStyle}>{leetcodeData.solvedProblem}</span>
                    <span style={statLabelStyle}>Solved</span>
                  </div>
                </div>
                <div style={statBoxStyle}>
                  <Target size={18} color="#22c55e" />
                  <div style={statTextStyle}>
                    <span style={statNumberStyle}>{leetcodeData.easySolved}</span>
                    <span style={statLabelStyle}>Easy</span>
                  </div>
                </div>
                <div style={statBoxStyle}>
                  <Target size={18} color="#eab308" />
                  <div style={statTextStyle}>
                    <span style={statNumberStyle}>{leetcodeData.mediumSolved}</span>
                    <span style={statLabelStyle}>Medium</span>
                  </div>
                </div>
                <div style={statBoxStyle}>
                  <Target size={18} color="#ef4444" />
                  <div style={statTextStyle}>
                    <span style={statNumberStyle}>{leetcodeData.hardSolved}</span>
                    <span style={statLabelStyle}>Hard</span>
                  </div>
                </div>
              </>
            ) : (
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Loading live stats...</p>
            )}
          </div>
        </div>

        {/* HackerRank Card */}
        <div className="profile-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: '#00EA64' }}>
                <path d="M11.984 0L1.758 5.923v11.846L11.984 24l10.242-5.923V5.923L11.984 0zm0 2.214l8.326 4.814v9.64L11.984 21.48l-8.326-4.813v-9.64L11.984 2.214zm4.495 6.703H7.49v6.166h8.99v-6.166zm-5.02 1.34h1.045v3.486h-1.045v-3.486z" />
              </svg>
              HackerRank
            </h3>
            <a href={`https://www.hackerrank.com/profile/himanshu88095641`} target="_blank" rel="noreferrer" style={linkStyle}>
              View <ExternalLink size={14} />
            </a>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
            Regular participant in algorithm and data structure tracks. Solving challenges to improve logic building.
          </p>
          <div style={statsContainerStyle}>
             <div style={statBoxStyle}>
                <Star size={18} color="#00EA64" />
                <div style={statTextStyle}>
                  <span style={statNumberStyle}>Active</span>
                  <span style={statLabelStyle}>Problem Solving</span>
                </div>
              </div>
          </div>
        </div>

        {/* GeeksForGeeks Card */}
        <div className="profile-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GFG" style={{ width: 24, height: 24 }} />
              GeeksForGeeks
            </h3>
            <a href={`https://www.geeksforgeeks.org/profile/himanshu8809564335`} target="_blank" rel="noreferrer" style={linkStyle}>
              View <ExternalLink size={14} />
            </a>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
            Practicing core computer science concepts and preparing for technical interviews.
          </p>
        </div>

        {/* CodeChef Card */}
        <div className="profile-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" style={{ width: 24, height: 24, filter: 'var(--invert-img)' }} />
              CodeChef
            </h3>
            <a href={`https://www.codechef.com/users/himu_0707`} target="_blank" rel="noreferrer" style={linkStyle}>
              View <ExternalLink size={14} />
            </a>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
            Participating in competitive programming contests and advancing ratings.
          </p>
        </div>

      </div>
    </div>
  );
};

// Styles for inline usage
const cardStyle = {
  padding: '1.25rem',
  borderRadius: 'var(--radius-md)',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  transition: 'transform var(--transition), box-shadow var(--transition)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid var(--border)',
  paddingBottom: '0.75rem',
  marginBottom: '1rem',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.85rem',
  color: 'var(--accent)',
  textDecoration: 'none',
  fontWeight: 600,
};

const statsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.8rem',
  marginTop: '1rem',
};

const statBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '0.6rem 0.8rem',
  borderRadius: '8px',
};

const statTextStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const statNumberStyle = {
  fontWeight: 700,
  fontSize: '1.1rem',
  lineHeight: 1.1,
  color: 'var(--text)',
};

const statLabelStyle = {
  fontSize: '0.75rem',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

export default ExtraCurricular;
