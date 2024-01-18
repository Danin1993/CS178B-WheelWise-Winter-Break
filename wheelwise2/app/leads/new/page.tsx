"use client";

import { Button, TextField, Box, Callout } from "@radix-ui/themes";
import { RiUserStarLine, RiUserStarFill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CallOut from "@/app/components/CallOut";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLeadSchema } from "@/app/components/Schemas";

interface NewLeadForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const NewLeadPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLeadForm>({
    resolver: zodResolver(createLeadSchema),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <div>
      {/* Error Handeling - Server Side */}
      {error && <CallOut icon={IoWarningOutline}>{error}</CallOut>}
      {success && (
        <CallOut icon={IoWarningOutline} color="green">
          {success}
        </CallOut>
      )}

      {/* Error Handeling - Client Side */}
      {(errors.firstName && (
        <CallOut icon={IoWarningOutline}>
          First Name : {errors.firstName.message}
        </CallOut>
      )) ||
        (errors.lastName && (
          <CallOut icon={IoWarningOutline}>
            Last Name : {errors.lastName.message}
          </CallOut>
        )) ||
        (errors.phone && (
          <CallOut icon={IoWarningOutline}>
            Phone Number : {errors.phone.message}
          </CallOut>
        )) ||
        (errors.email && (
          <CallOut icon={IoWarningOutline}>
            Email Address : {errors.email.message}
          </CallOut>
        ))}

      {/* Form - Add New Lead */}
      <form
        className="flex gap-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/leads", data);

            setSuccess("Lead has been added");

            setTimeout(() => {
              router.push("/leads");
            }, 2000); // 2000 milliseconds delay
          } catch (error) {
            setError("Error from API Server side!");
            setSuccess("");
          }
        })}
      >
        <TextField.Root>
          <TextField.Slot>
            <RiUserStarLine />
          </TextField.Slot>
          <TextField.Input
            placeholder="First Name"
            {...register("firstName")}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>
            <RiUserStarFill />
          </TextField.Slot>
          <TextField.Input placeholder="Last Name" {...register("lastName")} />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>
            <RiUserStarLine />
          </TextField.Slot>
          <TextField.Input placeholder="Phone Number" {...register("phone")} />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>
            <RiUserStarLine />
          </TextField.Slot>
          <TextField.Input placeholder="Email Address" {...register("email")} />
        </TextField.Root>

        <Button>Add Lead</Button>
      </form>
    </div>
  );
};

export default NewLeadPage;
