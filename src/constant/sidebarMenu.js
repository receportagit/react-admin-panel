export const sidebarMenu = [
  {
    id: 1,
    name: 'Dashboard',
    link: '/',
    icon: { name: 'MdOutlineDashboard', iconSet: 'Md' }, // Dashboard ikonu
    subMenu: [],
  },
  {
    id: 2,
    name: 'Profilim',
    link: '/profile',
    icon: { name: 'FaUser', iconSet: 'Fa' }, // Kullanıcı profili ikonu
    subMenu: [
      { name: 'Kişisel Bilgiler', link: '/profile/personal-info' },
      { name: 'Şifre Değiştir', link: '/profile/change-password' },
    ],
  },
  {
    id: 3,
    name: 'Hakkımda',
    link: '/settings',
    icon: { name: 'MdInfoOutline', iconSet: 'Md' }, // Hakkımda ikonu (bilgi ikonu)
    subMenu: [
      { name: 'Biyografi', link: '/settings/bio' },
      { name: 'İletişim Bilgileri', link: '/settings/contact-info' },
    ],
  },
  {
    id: 4,
    name: 'Deneyimlerim',
    icon: { name: 'FaBriefcase', iconSet: 'Fa' }, // İş deneyimleri için çanta ikonu
    link: '/users',
    subMenu: [
      { name: 'İş Deneyimleri', link: '/experience/jobs' },
      { name: 'Eğitim', link: '/experience/education' },
      { name: 'Sertifikalar', link: '/experience/certifications' },
    ],
  },
  {
    id: 5,
    name: 'Yeteneklerim',
    icon: { name: 'FaLightbulb', iconSet: 'Fa' }, // Yetenekler için ampul ikonu
    link: '/skills',
    subMenu: [
      { name: 'Teknik Beceriler', link: '/skills/technical' },
      { name: 'Yazılım Dilleri', link: '/skills/programming-languages' },
    ],
  },
  {
    id: 6,
    name: 'Projelerim',
    icon: { name: 'FaProjectDiagram', iconSet: 'Fa' }, // Projeler için proje ikonu
    link: '/projects',
    subMenu: [
      { name: 'Tamamlanan Projeler', link: '/projects/completed' },
      { name: 'Devam Eden Projeler', link: '/projects/ongoing' },
      { name: 'Gelecek Projeler', link: '/projects/upcoming' },
    ],
  },
  {
    id: 7,
    name: 'Portföy',
    link: '/portfolio',
    icon: { name: 'FaClipboardList', iconSet: 'Fa' }, // Portföy için liste ikonu
    subMenu: [], // Alt menü yok
  },
];
