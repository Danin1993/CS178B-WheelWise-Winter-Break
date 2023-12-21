"use client";

import React from "react";
import { Flex, TextField, TextArea, Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";

interface LeadForm {
  title: String;
  description: String;
}

const CreateNewLead = () => {
  const { register, handleSubmit } = useForm<LeadForm>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/leads", data);
      })}
    >
      <Flex direction="column" gap="3">
        <TextField.Root>
          <TextField.Input placeholder="Title ... " {...register("title")} />
        </TextField.Root>

        <TextField.Root>
          <TextField.Input
            placeholder="Description ..."
            {...register("description")}
          />
        </TextField.Root>

        <Button>Create Lead</Button>
      </Flex>
    </form>
  );
};

export default CreateNewLead;
