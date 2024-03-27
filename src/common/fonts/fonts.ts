import { Oxygen, Rubik } from 'next/font/google';

const oxygen = Oxygen({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
	variable: '--font-oxygen',
});

const rubik = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik',
});

export const fonts = {
	oxygen,
	rubik,
};
