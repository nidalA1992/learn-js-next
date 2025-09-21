import React from 'react';

export interface MainLayoutProps extends React.PropsWithChildren {
  header: React.ReactNode;
  footer: React.ReactNode;
}
