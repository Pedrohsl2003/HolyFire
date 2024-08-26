import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

interface Profile {
  name: string;
  image: string;
  description: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

const profiles: Profile[] = [
  {
    name: 'Ataíde & Cida',
    image: 'https://via.placeholder.com/500x500',
    description: 'Pastores fundadores da igreja.',
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
  {
    name: 'Gustavo & Renata',
    image: 'https://via.placeholder.com/500x500',
    description: 'Descrição do Gustavo & Renata.',
    facebook: '#',
    instagram: '#',
  },
  {
    name: 'Nelci',
    image: 'https://via.placeholder.com/500x500',
    description: 'Descrição do Nelci.',
    facebook: '#',
    instagram: '#',
  },
  {
    name: 'Denis & Daiane',
    image: 'https://via.placeholder.com/500x500',
    description: 'Descrição do Denis & Daiane.',
    facebook: '#',
    instagram: '#',
  },
];

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => (
  <div className="flex flex-col items-center p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
    <img className="h-48 w-48 object-cover rounded-full border-4 border-blue-500 mb-6" src={profile.image} alt={profile.name} />
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{profile.name}</h2>
    <p className="text-gray-600 text-center mb-4">{profile.description}</p>
    <div className="flex space-x-4">
      {profile.facebook && (
        <a href={profile.facebook} className="text-blue-600 hover:text-blue-700">
          <FaFacebookF className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
      )}
      {profile.instagram && (
        <a href={profile.instagram} className="text-orange-600 hover:text-orange-700">
          <FaInstagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
      )}
      {profile.youtube && (
        <a href={profile.youtube} className="text-red-600 hover:text-red-700">
          <FaYoutube className="h-5 w-5" />
          <span className="sr-only">YouTube</span>
        </a>
      )}
    </div>
  </div>
);

const Equipe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-12">Nossa Equipe Pastoral</h1>
      
      {/* Container para os pastores fundadores */}
      <div className="w-full max-w-4xl mb-12 bg-white rounded-2xl shadow-sm">
        <ProfileCard profile={profiles[0]} />
      </div>
      
      {/* Container para os outros pastores */}
      <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profiles.slice(1).map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;
