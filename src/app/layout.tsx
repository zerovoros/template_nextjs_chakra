import { fonts } from '../common/fonts/fonts';
import { Providers } from './providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${fonts.rubik.variable} ${fonts.oxygen.variable}`}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
