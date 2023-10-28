import React from 'react'
import { Menu } from 'lucide-react'

import { listItemNavbar } from '@/utils';

export const Navbar = () => {
  return (
    // <div className="bg-red-500/25 container mx-auto flex items-center justify-between px-4 h-12 md:bg-orange-500/25 lg:bg-green-500/25 xl:bg-purple-500/25">
    <div className="container mx-auto flex items-center justify-between px-4 h-12">
      <h1 className="font-semibold text-lg tracking-wider">TICs</h1>
      <div className="hidden lg:flex items-center justify-center gap-3">
        {listItemNavbar.map((item) => (
          <p className="lg:text-sm xl:text-base" key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      <Menu size={30} className="text-neutral-400 lg:hidden xl:hidden" />
    </div>
  );
}
