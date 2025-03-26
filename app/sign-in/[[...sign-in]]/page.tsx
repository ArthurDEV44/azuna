import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div 
      style={{
        backgroundColor: "#fcfcfc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn />
    </div>
  );
}
