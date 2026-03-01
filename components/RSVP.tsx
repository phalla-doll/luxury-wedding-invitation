'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';

type RSVPForm = {
  name: string;
  attending: string;
  guests: number;
  message: string;
};

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RSVPForm>();

  const onSubmit = (data: RSVPForm) => {
    console.log(data);
    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DCAE96', '#F7E7CE', '#2C5F2D']
    });
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)] relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-serif">RSVP</h2>
          <p className="text-center text-gray-500 mb-10">Please respond by May 1st, 2026</p>

          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[var(--color-dusty-rose)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-2">Thank You!</h3>
              <p className="text-gray-600">We can&apos;t wait to celebrate with you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 placeholder-transparent focus:border-[var(--color-dusty-rose)] focus:outline-none transition-colors"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-dusty-rose)]">Full Name</label>
                {errors.name && <span className="text-red-400 text-xs mt-1">This field is required</span>}
              </div>

              <div className="space-y-3">
                <p className="text-gray-500 text-sm">Will you attend?</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" value="yes" {...register('attending', { required: true })} className="accent-[var(--color-dusty-rose)] w-4 h-4" />
                    <span>Joyfully Accept</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" value="no" {...register('attending', { required: true })} className="accent-[var(--color-dusty-rose)] w-4 h-4" />
                    <span>Regretfully Decline</span>
                  </label>
                </div>
                {errors.attending && <span className="text-red-400 text-xs mt-1">Please select an option</span>}
              </div>

              <div className="relative">
                <input
                  type="number"
                  id="guests"
                  {...register('guests', { required: true, min: 1, max: 5 })}
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 placeholder-transparent focus:border-[var(--color-dusty-rose)] focus:outline-none transition-colors"
                  placeholder="Guests"
                />
                <label htmlFor="guests" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-dusty-rose)]">Number of Guests</label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  {...register('message')}
                  rows={3}
                  className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 placeholder-transparent focus:border-[var(--color-dusty-rose)] focus:outline-none transition-colors resize-none"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[var(--color-dusty-rose)]">Leave a Message (Optional)</label>
              </div>

              <button type="submit" className="w-full bg-[var(--color-ink)] text-white py-4 rounded-xl hover:bg-black/80 transition-colors tracking-widest uppercase text-sm font-semibold">
                Send RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
