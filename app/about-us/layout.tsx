import React from "react";

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy; Gardener is Great
    </div>
  )
}
