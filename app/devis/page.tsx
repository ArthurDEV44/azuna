"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  propertySize: string;
  services: string[];
  message: string;
}

const DevisPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: 'apartment',
    propertySize: '',
    services: [],
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Votre demande de devis a été envoyée avec succès !');
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: 'apartment',
          propertySize: '',
          services: [],
          message: ''
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire.');
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 100% 100%, rgba(76, 175, 80, 0.05) 0, transparent 50%),
            radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0, transparent 50%)
          `
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/pricing"
            className="inline-flex items-center text-[#4CAF50] hover:text-[#3B82F6] transition-colors mb-8"
          >
            <span className="mr-2">←</span>
            Retour aux tarifs
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demande de devis
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> personnalisé</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            Remplissez le formulaire ci-dessous pour recevoir un devis adapté à vos besoins.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
              />

              <Input
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="johndoe@gmail.com"
              />
            </div>

            <Input
              label="Téléphone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+33 6 12 34 56 78"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Type de bien"
                value={formData.propertyType}
                onChange={(value) => setFormData({...formData, propertyType: value})}
                options={[
                  { value: 'apartment', label: 'Appartement' },
                  { value: 'house', label: 'Maison' },
                  { value: 'villa', label: 'Villa' }
                ]}
              />

              <Input
                label="Surface (m²)"
                type="number"
                required
                value={formData.propertySize}
                onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
                placeholder="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services souhaités</label>
              <div className="grid md:grid-cols-2 gap-4">
                {['Gestion complète', 'Ménage', 'Maintenance', 'Conciergerie'].map((service) => (
                  <label key={service} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={(e) => {
                        const updatedServices = e.target.checked
                          ? [...formData.services, service]
                          : formData.services.filter(s => s !== service);
                        setFormData({...formData, services: updatedServices});
                      }}
                      className="h-5 w-5 text-[#4CAF50] rounded border-gray-300 focus:ring-[#4CAF50]"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <Input
              label="Message (facultatif)"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Précisez vos besoins spécifiques..."
            />

            <motion.button
              type="submit"
              className="w-full bg-[#4CAF50] text-white px-6 py-3 rounded-xl text-lg font-medium hover:shadow-xl hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer la demande
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default DevisPage; 