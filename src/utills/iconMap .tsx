// components/ui/IconMap.tsx

import {
    
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Plus,
  Minus,
  Menu,
  Search,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Send,
  Copy,
  Eye,
  EyeOff,
  User,
  Settings,
  Home,
  Code2,
  Layers3,
  Smartphone,
  Palette,
  Boxes,
  Cloud,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const iconMap = {
    FaGithub,
    LiaLinkedin,
    BsInstagram,
  Code2,
  Layers3,
  Smartphone,
  Palette,
  Boxes,
  Cloud,
  arrow: ArrowRight,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUpRight: ArrowUpRight,
  arrowDown: ArrowDown,

  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,

  check: Check,
  close: X,
  plus: Plus,
  minus: Minus,

  menu: Menu,
  search: Search,

  mail: Mail,
  phone: Phone,
  location: MapPin,

  external: ExternalLink,
  download: Download,
  send: Send,
  copy: Copy,

  eye: Eye,
  eyeOff: EyeOff,

  user: User,
  settings: Settings,
  home: Home,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 20,
  className = "",
  strokeWidth = 2,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}