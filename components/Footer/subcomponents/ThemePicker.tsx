'use client';
import { useState } from 'react';
import Image from 'next/image';

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

type Theme = 'auto' | 'light' | 'dark';

const ICONS = {
    auto: (
        <Image
            src={`/icons/theme.svg`}
            width={14}
            height={14}
            className="w-auto h-auto"
            alt="System theme icon"
        />
    ),
    light: <Sun width={14} height={14} color="var(--text-100)" />,
    dark: <Moon width={14} height={14} color="var(--text-100)" />
};

export default function ThemePicker() {
    const DEFAULT_VALUE = 'auto';
    const [selected, setSelected] = useState<Theme>(DEFAULT_VALUE);

    return (
        <Select
            defaultValue={DEFAULT_VALUE}
            onValueChange={(value) => setSelected(value as Theme)}
        >
            <SelectTrigger /* className="w-[180px]" */ icon={ICONS[selected]}>
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectScrollUp />
                <SelectGroup>
                    <SelectLabel>Tema</SelectLabel>
                    <SelectItem value="auto" icon={ICONS.auto}>
                        Auto
                    </SelectItem>
                    <SelectItem value="light" icon={ICONS.light}>
                        Light
                    </SelectItem>
                    <SelectItem value="dark" icon={ICONS.dark}>
                        Dark
                    </SelectItem>
                </SelectGroup>
                <SelectScrollDown />
            </SelectContent>
        </Select>
    );
}
