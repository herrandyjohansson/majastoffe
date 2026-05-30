'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Resolver } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type RsvpFormDraft, type RsvpFormValues, rsvpSchema } from '../lib/rsvp-schema';

const labelClass =
  'mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70';

const inputClass =
  'w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20';

const selectClass = inputClass;

function RsvpForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormDraft, unknown, RsvpFormValues>({
    resolver: zodResolver(rsvpSchema) as Resolver<RsvpFormDraft, unknown, RsvpFormValues>,
    defaultValues: {
      name: '',
      person_count: '1',
      companion_name: '',
      email: '',
      accommodation: '',
      attending: '',
      dietary: '',
    },
  });

  const attending = watch('attending');
  const personCount = watch('person_count');

  useEffect(() => {
    if (personCount === '1') {
      setValue('companion_name', '');
    }
  }, [personCount, setValue]);

  useEffect(() => {
    if (attending !== 'yes') {
      setValue('accommodation', '');
      clearErrors('accommodation');
    }
  }, [attending, setValue, clearErrors]);

  const onSubmit = async (data: RsvpFormValues) => {
    const body = data;
    clearErrors('root');
    setSubmitSuccess(false);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setError('root', {
          type: 'server',
          message: result.error ?? 'Något gick fel. Försök igen senare.',
        });
        return;
      }
      setSubmitSuccess(true);
      reset({
        name: '',
        person_count: '1',
        companion_name: '',
        email: '',
        accommodation: '',
        attending: '',
        dietary: '',
      });
    } catch {
      setError('root', {
        type: 'server',
        message: 'Kunde inte nå servern. Kontrollera din uppkoppling.',
      });
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-[var(--muted)]/85 bg-white/55 p-6 shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off"
        noValidate
        suppressHydrationWarning
      >
        <div className="grid gap-6 sm:grid-cols-2" suppressHydrationWarning>
          <div>
            <label htmlFor="name" className={labelClass}>
              Namn *
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={`${inputClass} ${errors.name ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
              placeholder="Ditt namn"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
              {...register('name')}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              E-post *
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              className={`${inputClass} ${errors.email ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
              placeholder="din@epost.se"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email')}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="attending" className={labelClass}>
              Kommer du? *
            </label>
            <select
              id="attending"
              className={`${selectClass} ${errors.attending ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
              aria-invalid={errors.attending ? true : undefined}
              aria-describedby={errors.attending ? 'attending-error' : undefined}
              {...register('attending')}
            >
              <option value="" disabled>
                Välj ja eller nej
              </option>
              <option value="yes">Ja</option>
              <option value="no">Nej</option>
            </select>
            {errors.attending ? (
              <p id="attending-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                {errors.attending.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="person_count" className={labelClass}>
              Antal personer *
            </label>
            <select
              id="person_count"
              className={`${selectClass} ${errors.person_count ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
              aria-invalid={errors.person_count ? true : undefined}
              aria-describedby={errors.person_count ? 'person_count-error' : undefined}
              {...register('person_count')}
            >
              <option value="1">1 person</option>
              <option value="2">2 personer</option>
            </select>
            {errors.person_count ? (
              <p id="person_count-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                {errors.person_count.message}
              </p>
            ) : null}
          </div>
          {personCount === '2' ? (
            <div className="sm:col-span-2">
              <label htmlFor="companion_name" className={labelClass}>
                Namn på den andra personen *
              </label>
              <input
                id="companion_name"
                type="text"
                autoComplete="name"
                className={`${inputClass} ${errors.companion_name ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
                placeholder="Person 2"
                aria-invalid={errors.companion_name ? true : undefined}
                aria-describedby={errors.companion_name ? 'companion_name-error' : undefined}
                {...register('companion_name')}
              />
              {errors.companion_name ? (
                <p id="companion_name-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                  {errors.companion_name.message}
                </p>
              ) : null}
            </div>
          ) : null}

          {attending === 'yes' ? (
            <div className="sm:col-span-2">
              <label htmlFor="accommodation" className={labelClass}>
                Boende *
              </label>
              <p className="mb-2 text-[11px] leading-snug text-[var(--foreground)]/55">
                Önskas boende på hotellet?
              </p>
              <select
                id="accommodation"
                className={`${selectClass} ${errors.accommodation ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
                aria-invalid={errors.accommodation ? true : undefined}
                aria-describedby={errors.accommodation ? 'accommodation-error' : undefined}
                {...register('accommodation')}
              >
                <option value="" disabled>
                  Välj ja eller nej
                </option>
                <option value="yes">Ja</option>
                <option value="no">Nej</option>
              </select>
              {errors.accommodation ? (
                <p id="accommodation-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
                  {errors.accommodation.message}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="dietary" className={labelClass}>
            Kostönskemål / Anteckningar
          </label>
          <textarea
            id="dietary"
            rows={3}
            className={`${inputClass} ${errors.dietary ? 'border-red-600/50 ring-1 ring-red-600/20' : ''}`}
            placeholder="Eventuella allergier eller specialönskemål..."
            aria-invalid={errors.dietary ? true : undefined}
            aria-describedby={errors.dietary ? 'dietary-error' : undefined}
            {...register('dietary')}
          />
          {errors.dietary ? (
            <p id="dietary-error" className="mt-1.5 text-sm text-red-700/90" role="alert">
              {errors.dietary.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full rounded-full border border-[var(--foreground)] bg-[var(--foreground)] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--background)] shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:bg-transparent enabled:hover:text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Skickar…' : 'Skicka OSA'}
        </button>

        {submitSuccess ? (
          <p className="text-center text-sm text-[var(--foreground)]/80" role="status">
            Tack! Ditt svar har skickats.
          </p>
        ) : null}
        {errors.root?.message ? (
          <p className="text-center text-sm text-red-700/90" role="alert">
            {errors.root.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}

export function Rsvp() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section
      id="rsvp"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Fira med oss
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          OSA
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[var(--foreground)]/65">
          Vänligen meddela oss om du kan komma senast <strong>30 september 2026</strong>.
        </p>
      </div>

      {isHydrated ? (
        <RsvpForm />
      ) : (
        <div className="mx-auto max-w-xl py-8 text-center">
          <p className="text-sm text-[var(--foreground)]/65">Laddar formulär...</p>
        </div>
      )}

      <div className="mx-auto mt-12 max-w-md text-center">
        <p className="text-sm text-[var(--foreground)]/65">
          Problem med formuläret? Kontakta oss direkt.
        </p>
      </div>
    </section>
  );
}
