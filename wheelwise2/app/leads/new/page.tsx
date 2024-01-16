"use client";

import { Button, TextField } from "@radix-ui/themes";
import { RiUserStarLine, RiUserStarFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import React from "react";

interface NewLeadForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const NewLeadPage = () => {
  const { register, handleSubmit } = useForm<NewLeadForm>();

  return (
    <form
      className="flex gap-3"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <TextField.Root>
        <TextField.Slot>
          <RiUserStarLine />
        </TextField.Slot>
        <TextField.Input placeholder="First Name" {...register("firstName")} />
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
  );
};

export default NewLeadPage;
