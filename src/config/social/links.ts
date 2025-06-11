import { FaFacebookF } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaTwitter } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import { SocialLink } from '../../data/models/types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/Chicksgroup',
    icon: FaFacebookF,
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/chicksgold/',
    icon: PiInstagramLogoFill,
  },
  {
    platform: 'x',
    url: 'https://x.com/chicksgold',
    icon: FaTwitter,
  },
  {
    platform: 'discord',
    url: 'https://discord.com/invite/chicksgold',
    icon: BsDiscord,
  },
];
