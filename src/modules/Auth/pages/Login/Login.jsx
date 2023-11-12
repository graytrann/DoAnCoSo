import React from "react";
import AuthStyles from "../../components/Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { signin } from "../../../../apis/user";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const loginSchema = object({
    account_name: string().required("Họ tên không được để trống"),
    password: string().required("Mật khẩu không được để trống"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      account_name: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    // khi người dùng blur nó thì sẽ tự động hiện ra lỗi
    mode: "onTouched",
  });

  const {
    mutate: handleSignin,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: () => {},
  });

  // sau khi form thành công
  const onSubmit = (values) => {
    console.log(values);
    // gọi API đăng ký
    handleSignin(values);
  };

  // sau khi form thất bại
  const onError = (error) => {
    console.log("Lỗi : ", error);
  };

  return (
    <div className={`${AuthStyles.auth}`}>
      <div
        className={`${AuthStyles.auth_container}`}
        style={{
          backgroundImage: `url(
            "https://wallpaperbrokers.com.au/cdn/shop/products/shutterstock_406740199_web.jpg?v=1495779660"
          )`,
        }}
      >
        <div className={`${AuthStyles.auth_container_form}`}>
          <h1>ĐĂNG NHẬP</h1>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* ACCOUNT */}
            <div className={`${AuthStyles.form_input}`}>
              <h6>Account</h6>
              <input
                className={`${AuthStyles.input_taiKhoan}`}
                type="text"
                placeholder="Tên tài khoản"
                {...register("account_name")}
              />
              {errors.account_name && <p>{errors.account_name.message}</p>}
            </div>
            {/* PASSWORD */}
            <div className={`${AuthStyles.form_input}`}>
              <h6>Password</h6>
              <input
                className={`${AuthStyles.input_email}`}
                type="password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="text-center">
              <button className="btn btn-success btn-lg" type="submit">
                Đăng Ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
