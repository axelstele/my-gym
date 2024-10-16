import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { phoneNumber } from '@/app/constants';

export const options = [
  {
    id: 1,
    icon: <HomeIcon fontSize='large' />,
    text: 'Cipolletti 1118, Bahía Blanca, CP 8000',
    type: 'address'
  },
  {
    id: 2,
    icon: <EmailIcon fontSize='large' />,
    text: 'maydottori@gmail.com',
    type: 'email'
  },
  {
    id: 3,
    icon: <WhatsAppIcon fontSize='large' />,
    text: phoneNumber.replace('+54', ''),
    type: 'whatsapp'
  },
  {
    id: 4,
    icon: <InstagramIcon fontSize='large' />,
    text: '/may.fitcoach',
    type: 'instagram'
  }
]