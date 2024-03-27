'use client';

import * as React from 'react';
import { Container, Heading } from '@chakra-ui/react';

function Home() {
	return (
		<Container maxWidth="lg">
			<Heading as="h1" size="2xl">
				Hello World
			</Heading>
		</Container>
	);
}

export default Home;
