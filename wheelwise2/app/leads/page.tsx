import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const leads = () => {
  return (
    <Button>
      <Link href="/leads/new">Add New Lead</Link>
    </Button>
  );
};

export default leads;
