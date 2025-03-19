import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const hackathons = [
  {
    organizer: 'Google',
    title: 'Code With Google',
    location: 'Online',
    date: '12 April',
    domains: ['Blockchain', 'Web', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg', // 👈 image path (stored in public/images)
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Google',
    title: 'Code With Google',
    location: 'Online',
    date: '12 April',
    domains: ['Blockchain', 'Web', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  // ... Add others similarly
];

const StyledHackathonCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px; /* Increased width */
  margin: 0.5rem; /* Decreased gap */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }

  .status-user {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color, #fff);
    background-color: var(--online-status, #00a6fb);
    transition: var(--btn-transition, 0.3s);
    animation: active-status 2s ease-in-out infinite;
  }

  @keyframes active-status {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const HackathonCardComponent = ({ organizer, title, location, date, domains, applyLink, poster }) => {
  return (
    <StyledHackathonCard>
      <div className="dot"></div>
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-white">
          <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00a6fb]" /> {organizer}
        </span>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300"
        >
          <div className="status-user" style={{ marginRight: '8px' }} />
          Apply Now
        </a>
      </div>

      <div className="h-40 w-full overflow-hidden rounded-xl p-2 shadow-md">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full rounded-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />
      </div>

      <h2 className="mt-1 p-1 text-center text-lg font-bold text-white">{title}</h2>

      <div className="flex justify-between p-2 text-sm text-[#00a6fb]">
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-white" /> {location}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-white" /> {date}
        </span>
      </div>

      {/* <div className="text-sm text-gray-600 p-4">
                <div className="mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {date}
                </div>
            </div> */}

      <div className="mt-2 flex flex-wrap gap-2 p-2">
        {domains.map((domain, idx) => (
          <span
            key={idx}
            className="bg-gray-1000 rounded-full border border-[#00a6fb]  px-2 py-1 text-xs text-gray-300"
          >
            {domain}
          </span>
        ))}
      </div>
    </StyledHackathonCard>
  );
};

const HackathonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* Decreased gap */
  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
const HackathonList = () => {
  return (
    <HackathonListContainer>
      {hackathons.map((hackathon, idx) => (
        <HackathonCardComponent key={idx} {...hackathon} />
      ))}
    </HackathonListContainer>
  );
};

export default HackathonList;
