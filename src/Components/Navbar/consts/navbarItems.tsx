import PeopleIcon from "@mui/icons-material/People";
import ImageIcon from "@mui/icons-material/Image";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DnsIcon from "@mui/icons-material/Dns";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Home",
    route: "/",
  },
  {
    id: 1,
    icon: <DnsIcon />,
    label: "About",
    route: "about",
  },
  {
    id: 2,
    icon: <ImageIcon />,
    label: "Gallery",
    route: "gallery",
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "Resources",
    route: "resources",
  },
  {
    id: 4,
    icon: <SettingsEthernetIcon />,
    label: "Events",
    route: "events",
  },
  {
    id: 5,
    icon: <SettingsInputComponentIcon />,
    label: "Contact",
    route: "contact",
  },
];
