import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import FormInput from "./../components/FormInput";

type FormData = {
  firstName: string;
  lastName: string;
};

const registerSchema = object({
  name: string().nonempty("Full name is required").max(100),
  email: string()
    .nonempty("Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().nonempty("Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const RegisterPage = () => {
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  //  Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registered successfully");
      navigate("/verifyemail");
    }

    if (isError) {
      console.log(error);
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      console.log("submit");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    //  Executing the RegisterUser Mutation

    registerUser(values);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 w-300 bg-light">
      <FormProvider {...methods}>
        <form>
          <FormInput name="name" label="Full Name" type="name" />
          <FormInput name="email" label="Email Address" type="email" />
          <FormInput name="password" label="Password" type="password" />
          <FormInput
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
          />
          <button type="submit" onSubmit={handleSubmit(onSubmitHandler)}>
            Submit
          </button>
        </form>
      </FormProvider>
    </Container>
  );
};

export default RegisterPage;
