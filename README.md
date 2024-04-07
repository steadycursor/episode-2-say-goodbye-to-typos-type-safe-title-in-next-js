![Steady Cursor](https://www.steadycursor.com/readme-episode-banner.png)

# Typesafe Markdown with Next.js and TypeScript

This repository serves as the source code for our YouTube episode on implementing typesafe markdown files in a Next.js project using TypeScript. For a more detailed explanation and step-by-step guide, please refer to our [blog post on Steady Cursor](https://www.steadycursor.com/episodes/say-goodbye-to-typos-type-safe-title-in-next-js) or check out whole [episode on YouTube](https://youtu.be/L-qUT-yxflM).

## Overview

To manage web application page titles in Next.js, use a type-safe Page component with TypeScript. It allows flexible title settings, ensuring correct spelling and formatting. For example, use "Contact | Steady Cursor" for sub-pages and "Steady Cursor" for the homepage. This system prevents errors and maintains brand consistency. All thanks to string template literals.

```typescript
export type PageProps = {
	title: string | null;
	headTitle: `${string} | Steady Cursor` | "Steady Cursor";
	children: ReactNode;
};

export const Page = ({ title, headTitle, children }: PageProps) => {
	return (
		<div>
			<Head>
				<title>{headTitle}</title>
			</Head>
			{title && <h1>{title}</h1>}
			{children}
		</div>
	);
};
```

## Tests for headTitle property

- ✅ `Steady Cursor`
- ✅ `Contact | Steady Cursor`
- ✅ `About us | Steady Cursor`
- 🚨 `Steady Crsor`
- 🚨 `About Us|Steady Cursor`
- 🚨 `Contact| Steady Cursor`
- 🚨 `Lear |Steady Cursor`
- 🚨 `Blog | Sady Cursor`
