import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const menuItems = [
  {
    id: 'users',
    name: 'Users',
    icon: <GroupIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: <ReceiptIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 'monitor',
    name: 'Monitor',
    icon: <MonitorHeartIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: <EqualizerIcon sx={{ fontSize: 28 }} />,
  },
];
