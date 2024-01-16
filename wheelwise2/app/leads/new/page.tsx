"use client";

import { Button, TextField } from "@radix-ui/themes";
import { RiUserStarLine, RiUserStarFill } from "react-icons/ri";
import React from "react";

const NewLead = () => {
  return (
    <>
      <TextField.Root>
        <TextField.Slot>
          <RiUserStarLine />
        </TextField.Slot>
        <TextField.Input placeholder="First Name" />
      </TextField.Root>

      <TextField.Root>
        <TextField.Slot>
          <RiUserStarFill />
        </TextField.Slot>
        <TextField.Input placeholder="Last Name" />
      </TextField.Root>

      <TextField.Root>
        <TextField.Slot>
          <RiUserStarLine />
        </TextField.Slot>
        <TextField.Input placeholder="Phone Number" />
      </TextField.Root>

      <TextField.Root>
        <TextField.Slot>
          <RiUserStarLine />
        </TextField.Slot>
        <TextField.Input placeholder="Email Address" />
      </TextField.Root>

      <Button>Add Lead</Button>
    </>
  );
};

export default NewLead;
