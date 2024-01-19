import { LeadStatus } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

interface Props {
    status: LeadStatus
}

const LeadBadge = ({ status }: Props) => {
    if (status === 'OPEN') return <Badge color='grass'>{status}</Badge>
    if (status === 'CLOSED') return <Badge color='red'>{status}</Badge>
    if (status === 'IN_PROCESS') return <Badge color='blue'>{status}</Badge>
}

export default LeadBadge
