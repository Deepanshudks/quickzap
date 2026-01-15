import { useNavigate } from "react-router-dom";
import sideImage from "Resources/loginBanner.png";
import CustomButton from "Shared/CustomButton";
import CustomInput from "Shared/CustomInput";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("quickzap-token", "token");
    localStorage.setItem("quickzap-role", "ADMIN");
    navigate("/transaction");
  };

  return (
    <div className="flex min-h-screen w-screen font-sans overflow-x-hidden">
      <div className="relative hidden lg:flex w-1/2 overflow-hidden">
        <img
          src={sideImage}
          alt=""
          className="absolute inset-0 w-full h-screen object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#05182a0f]" />
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center bg-[#F8F9FA]">
        <div className="w-lg h-116.75 p-10 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="text-center mb-10">
            <p className="font-inter font-semibold text-2xl tracking-normal text-center">
              Login
            </p>
            <p className="text-gray-500">Access your QuickZaps platform</p>
          </div>

          <div className="flex flex-col gap-6">
            <CustomInput
              name="email"
              formLabel="Email Address"
              placeholder="Enter your email"
              type="email"
              className="font-medium!"
              fullWidth
            />

            <div className="relative flex flex-col gap-2">
              <CustomInput
                name="password"
                formLabel="Password"
                placeholder="Enter your password"
                type="password"
                className="font-medium!"
                fullWidth
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-primary font-semibold hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <CustomButton
              fullWidth
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              onClick={handleLogin}
            >
              Login
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
