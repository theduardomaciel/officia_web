'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectGroup,
	SelectScrollUp,
	SelectScrollDown,
	SelectTrigger,
	SelectValue
} from 'components/ui/Select';

import { Sun, Moon } from 'lucide-react';
import { ThemeIcon } from 'components/Icons';
import { setCookie } from 'lib/cookies';

export type Theme = 'system' | 'light' | 'dark';

const ICONS = {
	system: <ThemeIcon width={14} height={14} />,
	light: <Sun width={14} height={14} color="var(--text-100)" />,
	dark: <Moon width={14} height={14} color="var(--text-100)" />
};

interface Props {
	initialTheme?: Theme;
}

// No futuro, quando houver dicionários de tradução, utilizar o método de SelectValue comentado

export default function ThemePicker({ initialTheme = 'system' }: Props) {
	const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);
	const { theme, setTheme } = useTheme();

	//console.log(currentTheme, ' - tema atual');
	//console.log(initialTheme, ' - tema inicial pelo servidor');

	useEffect(() => {
		if (theme) {
			setCookie('theme', theme);
			setCurrentTheme(theme as Theme);
		}
	}, [theme]);

	return (
		<Select
			defaultValue={currentTheme}
			value={currentTheme}
			onValueChange={(value) => setTheme(value as Theme)}
		>
			<SelectTrigger className="shadow-sm" icon={ICONS[currentTheme as Theme]}>
				{/* <SelectValue aria-label={currentTheme}>
					{currentTheme === 'system' ? 'Auto' : currentTheme}
				</SelectValue> */}
				<SelectValue placeholder={initialTheme} />
			</SelectTrigger>
			<SelectContent>
				<SelectScrollUp />
				<SelectGroup>
					<SelectLabel>Tema</SelectLabel>
					<SelectItem value="system" icon={ICONS.system}>
						Auto
					</SelectItem>
					<SelectItem value="light" icon={ICONS.light}>
						Claro
					</SelectItem>
					<SelectItem value="dark" icon={ICONS.dark}>
						Escuro
					</SelectItem>
				</SelectGroup>
				<SelectScrollDown />
			</SelectContent>
		</Select>
	);
}
