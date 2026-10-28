import React from 'react';

export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.953 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.079 2.909 1.229 3.109.15.2 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.579-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.042 21.72a9.7 9.7 0 0 1-4.947-1.353l-.354-.21-3.676.964.981-3.583-.23-.367a9.68 9.68 0 0 1-1.483-5.184c0-5.36 4.364-9.724 9.727-9.724 2.599 0 5.043 1.012 6.88 2.85 1.838 1.838 2.85 4.282 2.85 6.884 0 5.362-4.365 9.727-9.728 9.727zm8.268-18.006A11.63 11.63 0 0 0 12.042.31c-6.438 0-11.678 5.24-11.678 11.679 0 2.058.537 4.068 1.558 5.841L0 24l6.335-1.662a11.63 11.63 0 0 0 5.707 1.484h.005c6.437 0 11.676-5.24 11.676-11.68 0-3.12-1.215-6.054-3.413-8.252z" />
  </svg>
);
