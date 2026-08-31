
export const navigation = {
    services: { name: 'Services', href: '#services' },
    cases: { name: 'Case Studies', href: '#cases' },
    about: { name: 'About Us', href: '#about' },
    blog: { name: 'Blog', href: '#blog' },
    contacts: { name: 'Contacts', href: '#contacts' },
} as const
export const navigationLinks = Object.values(navigation);