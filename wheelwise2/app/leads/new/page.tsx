"use client";

import { Button, TextField, Box, Callout } from "@radix-ui/themes";
import { RiUserStarLine, RiUserStarFill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewLeadForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const NewLeadPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewLeadForm>();
  const [error, setError] = useState("");

  return (
    <>
      {error && (
        <Box position="fixed" bottom="0" right="0" left="0" className="p-5">
          <Callout.Root variant="surface" size="3">
            <Callout.Icon>
              <IoWarningOutline />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        </Box>
      )}

      <form
        className="flex gap-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/leads", data);
            router.push("/leads");
          } catch (error) {
            setError("Error from API Server side!");
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
    </>
  );
};

export default NewLeadPage;
