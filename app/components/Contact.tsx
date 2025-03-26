"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Select from '@/app/components/ui/Select';
import Input from '@/app/components/ui/Input';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyType: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'apartment'
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyType: 'apartment'
        });
        alert('Message envoyé avec succès !');
      } else {
        alert('Une erreur est survenue lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center py-12 md:py-16">
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            className="max-w-xl mx-auto md:mx-0 flex flex-col items-center md:items-start"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              CONTACTEZ-NOUS
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Parlons de votre
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> projet</span>
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre projet de gestion locative.
            </p>

            {/* Informations de contact */}
            <div className="space-y-3 md:space-y-4">
              <motion.div 
                className="flex items-center gap-3 md:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center text-[#4CAF50]">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm md:text-base">Téléphone</h3>
                  <p className="text-gray-600 text-sm md:text-base">+33 1 23 45 67 89</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 md:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center text-[#4CAF50]">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm md:text-base">Email</h3>
                  <p className="text-gray-600 text-sm md:text-base">contact@example.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto bg-white rounded-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-3 md:space-y-4">
              <Input
                label="Nom complet"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="johndoe@gmail.com"
              />

              <Input
                label="Téléphone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+33 6 12 34 56 78"
              />

              <Select
                label="Type de bien"
                value={formData.propertyType}
                onChange={(value) => setFormData({...formData, propertyType: value})}
                options={[
                  { value: 'apartment', label: 'Appartement' },
                  { value: 'house', label: 'Maison' },
                  { value: 'villa', label: 'Villa' },
                  { value: 'other', label: 'Autre' }
                ]}
              />

              <Input
                label="Message"
                multiline
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Décrivez votre projet..."
              />

              <motion.button
                type="submit"
                className="w-full bg-[#4CAF50] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:shadow-xl hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 