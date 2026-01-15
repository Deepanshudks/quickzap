import { ArrowForwardIos } from "@mui/icons-material";
import { Avatar, Dialog, Divider, ListItemButton, Menu } from "@mui/material";
// import { useMutation } from "@tanstack/react-query";
// import { useUserContext } from "Context/Users";
// import validationSchema from "Schemas/Admin/ResetPassword";
// import { logOutFn } from "Services/Admin/Logout";
// import { resetInternalPasswordFn } from "Services/Admin/ResetPassword";
import { useFormik } from "formik";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import DownArrow from "Components/DownArrow";
import Notification from "Components/Notification";
// import Notifications from "../Notifications";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);

  //   const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResetPasswordClick = () => {
    setOpenResetPasswordModal(true);
    handleClose();
  };

  const handleResetPasswordClose = () => {
    setOpenResetPasswordModal(false);
    formik.resetForm();
  };

  //   const { mutate: changePassword } = useMutation({
  //     mutationFn: resetInternalPasswordFn,
  //     onSuccess: (response) => {
  //       //   toast.success(response.message);
  //       navigate(0);
  //     },
  //   });

  // //   const { user } = useUserContext();

  //   const { mutate: logOut } = useMutation({
  //     mutationFn: logOutFn,
  //     onSuccess: () => {
  //       navigate("/admin/signin");
  //       localStorage.clear();
  //     },
  //   });

  const formik = useFormik({
    initialValues: {
      current_password: "",
      password: "",
      password_confirmation: "",
    },
    // validationSchema: validationSchema,
    onSubmit: () => {
      //   changePassword(values);
      handleResetPasswordClose();
    },
  });

  //   const name = user?.name
  //     ?.trim()
  //     ?.split(" ")
  //     ?.map((i) => i && i?.slice(0, 1));

  return (
    <div className="flex justify-between w-full py-2 bg-[#FFFFFF] shadow-[0px_10px_30px_0px_rgba(235,28,36,0.05)]   h-20">
      <div className="font-inter font-bold text-2xl p-6 px-8 leading-none align-middle">
        Transaction Logs
      </div>
      <div className="flex items-center gap-5">
        <Notification />
        <div
          className="flex items-center gap-2 py-3 pr-10 lg:cursor-pointer"
          onClick={handleClick}
        >
          <Avatar className="bg-[#EFEFEF]!" src="/">
            D
          </Avatar>
          <div className="flex flex-col cursor-pointer">
            <p className="text-[#232D42]">Kuldeep</p>
            <p className="text-[13px] text-[#8A92A6] capitalize">Admin</p>
          </div>
          <p>
            <DownArrow />
          </p>
        </div>
      </div>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
        elevation={1}
        className="mt-2.5"
      >
        <div className="flex flex-col items-center justify-center py-5 w-72">
          <Avatar className="bg-[#A68A8A]! text-3xl! h-24! w-24!" src="/">
            D
          </Avatar>
          <p className="font-bold">Name</p>
          <p className="text-[15px]">Email</p>
          <p className="text-[15px] text-[#8A92A6]">Role</p>
        </div>
        <Divider />
        <ListItemButton
          className="flex p-3! justify-between!"
          onClick={handleResetPasswordClick}
        >
          Reset Password{" "}
          <ArrowForwardIos fontSize="small" className="text-[#A0A7BA]" />
        </ListItemButton>
        <Divider />
        <ListItemButton className="flex font-bold justify-center!">
          Log out
        </ListItemButton>
      </Menu>

      <Dialog
        open={openResetPasswordModal}
        onClose={handleResetPasswordClose}
        maxWidth="sm"
        fullWidth
      >
        <div className="flex justify-between p-3">
          <p>Reset Password </p>
        </div>
        <Divider />
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-1 p-4"
        >
          <CustomInput
            formLabel="Current Password"
            type="password"
            formik={formik}
            name="current_password"
          />
          <CustomInput
            formLabel="New Password"
            type="password"
            formik={formik}
            name="password"
          />
          <CustomInput
            formLabel="Confirm New Password"
            type="password"
            formik={formik}
            name="password_confirmation"
          />

          <div className="flex items-center justify-end gap-2 pt-4">
            <CustomButton
              className="w-28!"
              size="medium"
              onClick={handleResetPasswordClose}
              color="inherit"
            >
              Cancel
            </CustomButton>
            <CustomButton
              className="w-28!"
              size="medium"
              type="submit"
              color="error"
            >
              Reset
            </CustomButton>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Header;
