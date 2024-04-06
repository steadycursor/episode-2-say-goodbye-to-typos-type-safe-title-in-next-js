import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

export type PageProps = {
	title: string | null;
	headTitle: `${string} | Steady Cursor` | "Steady Cursor";
	children: ReactNode;
};

export const Page = ({ title, headTitle, children }: PageProps) => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<Head>
				<title>{headTitle}</title>
			</Head>
			{title && <h1>{title}</h1>}
			{children}
		</div>
	);
};
