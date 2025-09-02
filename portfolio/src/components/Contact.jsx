import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Integrate with EmailJS or backend
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Contact Me</h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto space-y-4"
        >
          <input {...register('name')} placeholder="Name" className="w-full p-2 bg-slate-700 rounded" />
          <input {...register('email')} placeholder="Email" className="w-full p-2 bg-slate-700 rounded" />
          <textarea {...register('message')} placeholder="Message" className="w-full p-2 bg-slate-700 rounded h-32" />
          <button type="submit" className="w-full px-6 py-3 bg-button-gradient text-white rounded-lg hover:scale-105 transition-transform">
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;