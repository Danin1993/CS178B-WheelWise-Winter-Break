import React, { ReactNode, ElementType } from 'react'
import { Box, Callout } from '@radix-ui/themes'

interface Props {
	children: ReactNode
	icon: ElementType
	size?: '1' | '2' | '3'
	variant?: 'soft' | 'surface' | 'outline'
	color?:
	| 'tomato'
	| 'red'
	| 'ruby'
	| 'crimson'
	| 'pink'
	| 'plum'
	| 'purple'
	| 'violet'
	| 'iris'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'jade'
	| 'green'
	| 'grass'
	| 'brown'
	| 'orange'
	| 'sky'
	| 'mint'
	| 'lime'
	| 'yellow'
	| 'amber'
	| 'gold'
	| 'bronze'
	| 'gray'
	title?: string
}

const CallOut = ({
	children,
	title,
	icon: Icon,
	size = '2',
	variant = 'surface',
	color = 'red',
}: Props) => {
	return (
		<Box position='fixed' bottom='0' right='0' left='0' className='p-5'>
			<Callout.Root variant={variant} color={color} size={size}>
				<Callout.Icon>
					<Icon />
				</Callout.Icon>
				<Callout.Text>
					{title && <strong>{title} : </strong>} {children}
				</Callout.Text>
			</Callout.Root>
		</Box>
	)
}

export default CallOut
