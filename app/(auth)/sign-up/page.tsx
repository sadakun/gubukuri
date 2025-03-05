"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      password: "",
      cardNumberId: "",
      nationalIdentityCard: "",
    }}
    onSubmit={() => {}}
  />
);
export default page;
