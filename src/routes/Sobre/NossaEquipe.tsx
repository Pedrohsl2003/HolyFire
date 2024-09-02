import React from 'react';
import { profiles } from '../../data';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import BannerImage from '../../assets/CongressoOnFire.jpeg';

const NossaEquipe: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-64">
        <img
          src={BannerImage}
          alt="Congresso On Fire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Conheça Nossa Equipe Pastoral</h1>
        </div>
      </div>

      {/* Cards Pastores */}
      <div className="container mx-auto py-8 max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{profile.name}</h2>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="flex space-x-3">
                {profile.facebook && (
                  <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF className="h-6 w-6" />
                  </a>
                )}
                {profile.instagram && (
                  <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                )}
                {profile.youtube && (
                  <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                    <FaYoutube className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NossaEquipe;
