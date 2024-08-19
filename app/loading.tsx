'use client'

import LoadingSpinner from '@/components/ui/loading-spinner';
import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 2 seconds delay
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Welcome to the Media and Designs Company</h1>
      <p className="mt-4 text-lg">Explore our services and portfolio.</p>
    </div>
  );
}
