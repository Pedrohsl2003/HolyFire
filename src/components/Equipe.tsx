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
  <div className="flex flex-col items-center p-12">
    <img className="h-56 w-56 object-cover rounded-2xl mb-8" src={profile.image} alt={profile.name} />
    <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
    <p className="text-gray-600 text-center mb-4">{profile.description}</p>
    <div className="flex space-x-4">
      {profile.facebook && (
        <a href={profile.facebook} className="text-blue-500 hover:text-blue-600">
          <FaFacebookF className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </a>
      )}
      {profile.instagram && (
        <a href={profile.instagram} className="text-orange-500 hover:text-orange-600">
          <FaInstagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </a>
      )}
      {profile.youtube && (
        <a href={profile.youtube} className="text-red-600 hover:text-red-700">
          <FaYoutube className="h-6 w-6" />
          <span className="sr-only">YouTube</span>
        </a>
      )}
    </div>
  </div>
);

const Equipe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-8">Nossa Equipe Pastoral</h1>
      
      {/* Container para os pastores fundadores */}
      <div className="w-full max-w-5xl mb-8 bg-white rounded-2xl shadow-lg">
        <ProfileCard profile={profiles[0]} />
      </div>
      
      {/* Container para os outros pastores */}
      <div className="w-full max-w-5xl bg-white rounded-2xl p-4 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.slice(1).map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;
