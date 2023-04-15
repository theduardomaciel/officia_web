'use client';
import { useState } from 'react';

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

type Theme = 'system' | 'light' | 'dark';

const ICONS = {
	system: <ThemeIcon width={14} height={14} />,
	light: <Sun width={14} height={14} color="var(--text-100)" />,
	dark: <Moon width={14} height={14} color="var(--text-100)" />
};

export default function ThemePicker() {
	const { theme, setTheme } = useTheme();

	return (
		<Select
			defaultValue={'system'}
			value={theme}
			onValueChange={(value) => setTheme(value as Theme)}
		>
			<SelectTrigger className="shadow-sm" icon={ICONS[theme as Theme]}>
				<SelectValue placeholder="Theme" />
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
