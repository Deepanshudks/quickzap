import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BarChartIcon from "@mui/icons-material/BarChart";

import quickzapLogo from "Resources/quickLogo.png";
import classNames from "classnames";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    label: "Transaction Logs",
    path: "/transaction",
    icon: ReceiptLongIcon,
  },
  {
    label: "Roles & Permissions",
    path: "/roles",
    icon: SecurityIcon,
  },
  {
    label: "Merchants",
    path: "/merchants",
    icon: StoreIcon,
  },
  {
    label: "Enterprises",
    path: "/enterprises",
    icon: ApartmentIcon,
  },
  {
    label: "Products",
    path: "/products",
    icon: Inventory2Icon,
  },
  {
    label: "KYCs",
    path: "/kycs",
    icon: AssignmentIndIcon,
  },
  {
    label: "Commission reports",
    path: "/commissions",
    icon: BarChartIcon,
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <List
      disablePadding
      className="w-68 bg-black h-screen flex flex-col text-white"
    >
      <ListItem className="h-20 px-5 gap-3">
        <img src={quickzapLogo} alt="QuickZaps" className="w-10" />
        <p className="font-inter font-semibold text-lg">QuickZaps</p>
      </ListItem>

      <div className="flex flex-col px-2 py-4 gap-2">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.path}
              onClick={() => navigate(item.path)}
              className={classNames(
                "rounded-lg! px-6! py-2.5! flex gap-3!",
                isActive
                  ? "bg-[#3F7EF3]! text-white!"
                  : "text-[#A2A2A2]! hover:bg-[#1F2937]!"
              )}
            >
              <ListItemIcon className="min-w-0!">
                <Icon
                  fontSize="small"
                  className={isActive ? "text-white" : "text-[#A2A2A2]"}
                />
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  className: "font-inter font-medium text-sm leading-none",
                }}
              />
            </ListItemButton>
          );
        })}
      </div>
    </List>
  );
};

export default Sidebar;
