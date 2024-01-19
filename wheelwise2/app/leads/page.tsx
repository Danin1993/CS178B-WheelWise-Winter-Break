import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import { Table, Box } from "@radix-ui/themes";
import LeadBadge from "./Badge";


const leads = async () => {

  const leads = await prisma.leads.findMany()

  return (
    <div>

      <Button>
        <Link href="/leads/new">Add New Lead</Link>
      </Button>

      <Box className="mt-5">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {leads.map(lead => (
              <Table.Row key={lead.id}>
                <Table.RowHeaderCell>{lead.firstName} {lead.lastName}</Table.RowHeaderCell>
                <Table.Cell>{lead.email}</Table.Cell>
                <Table.Cell>{lead.phone}</Table.Cell>
                <Table.Cell><LeadBadge status={lead.status} /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>



    </div>

  );
};

export default leads;
