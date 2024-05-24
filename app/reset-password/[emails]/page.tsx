"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPassword({
  params,
}: {
  params: { email: string };
}) {
  const searchParam = useSearchParams();
  const [authState, setAuthState] = useState({
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/reset-password", {
        email: params.email,
        signature: searchParam.get("signature"),
        password: authState.password,
        password_confirmation: authState.cpassword,
      })
      .then((res) => {
        const response = res.data;
        if (response.status == 400) {
          toast.error(response.message, { theme: "colored" });
        } else if (response.status == 200) {
          toast.success(response.message, { theme: "colored" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err..", err);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#f2f2f2] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Reset Passowrd ?</h1>

          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline"
                onChange={(event) =>
                  setAuthState({ ...authState, password: event.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your confirm password"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline"
                onChange={(event) =>
                  setAuthState({ ...authState, cpassword: event.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Processing.." : "Submit"}
              </button>
            </div>
            <div className="mt-5 text-center">
              <Link href="/" className="text-orange-400">
                {" "}
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}