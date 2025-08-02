import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

// Data for footer links for easier maintenance and scalability
const footerLinkSections = [
  {
    title: 'Help & Support',
    links: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Returns & Exchanges', path: '/returns' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: 'Beds', path: '/shop/beds' },
      { name: 'Chairs', path: '/shop/chairs' },
      { name: 'All Furniture', path: '/shop' },
    ],
  },
];

const socialLinks = [
    { Icon: FaFacebook, name: 'Facebook', href: 'https://facebook.com' },
    { Icon: FaTwitter, name: 'Twitter', href: 'https://twitter.com' },
    { Icon: FaInstagram, name: 'Instagram', href: 'https://instagram.com' },
];

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-black py-16 dark:text-white dark:bg-gray-800'>
      <div className='section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8'>
        {/* logo and details */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>Panto</h2>
          <p className='text-gray-600'>
            Panto provides high-quality, modern furniture to elevate your home and office spaces.
          </p>
        </div>

        {/* Link Sections from data */}
        {footerLinkSections.map((section) => (
          <div key={section.title}>
            <h2 className='text-xl font-bold mb-4'>{section.title}</h2>
            <ul className='space-y-3'>
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-orange-500 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
          <ul className='space-y-3'>
            {socialLinks.map(({ Icon, name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300"
                >
                  <Icon size={20} />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Copyright section */}
      <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Panto Furniture. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer