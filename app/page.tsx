import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import React from 'react'

const Marketing = () => {
  return (
    <div>
      This is the landing page
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Marketing;