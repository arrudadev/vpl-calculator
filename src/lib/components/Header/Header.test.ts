import { beforeEach, describe, expect, test } from 'vitest';
import { getByTestId, render } from '@testing-library/svelte';

import Header from '$lib/components/Header/Header.svelte';
import logo from '$lib/images/logo.png';
import github from '$lib/icons/github.svg';

describe('Header Component', () => {
	beforeEach(() => {
		render(Header);
	});

	test('should render the header with correct classes', () => {
		const element = document.querySelector('header');

		expect(element?.getAttribute('class')).toBe('bg-blue-gradient w-full');
	});

	test('should render the nav with correct classes', () => {
		const element = document.querySelector('header nav');

		expect(element?.getAttribute('class')).toBe(
			'm-auto flex w-full max-w-screen-xl items-center justify-between px-8 py-4'
		);
	});

	test('should render the brand wrapper with correct classes', () => {
		const container = document.querySelector('header nav') as HTMLElement;
		const element = getByTestId(container, 'brand-wrapper');

		expect(element.getAttribute('class')).toBe('flex items-center gap-2');
	});

	test('should render the brand logo image', () => {
		const container = document.querySelector(
			'header nav [data-testid="brand-wrapper"]'
		) as HTMLElement;
		const element = getByTestId(container, 'brand-logo');

		expect(element.getAttribute('src')).toBe(logo);
		expect(element.getAttribute('alt')).toBe('Logo');
		expect(element.getAttribute('class')).toBe('h-8 w-8');
	});

	test('should render the brand name with correct classes', () => {
		const container = document.querySelector(
			'header nav [data-testid="brand-wrapper"]'
		) as HTMLElement;
		const element = getByTestId(container, 'brand-name');

		expect(element.getAttribute('class')).toBe('text-blue-gradient text-2xl font-bold');
	});

	test('should render the github repository link with correct link address', () => {
		const container = document.querySelector('header nav') as HTMLElement;
		const element = getByTestId(container, 'github-link');

		expect(element.getAttribute('href')).toBe('https://github.com/arrudadev/vpl-calculator');
	});

	test('should render the github icon', () => {
		const container = document.querySelector(
			'header nav [data-testid="github-link"]'
		) as HTMLElement;
		const element = getByTestId(container, 'github-icon');

		expect(element.getAttribute('src')).toBe(github);
		expect(element.getAttribute('alt')).toBe('GitHub');
		expect(element.getAttribute('class')).toBe('h-8 w-8');
	});

	test('should render the nav children in correct order', () => {
		const elements = document.querySelectorAll('header nav > *');
		const brandElement = elements?.[0] as HTMLElement;
		const githubLinkElement = elements?.[1] as HTMLElement;

		expect(brandElement.getAttribute('data-testid')).toBe('brand-wrapper');
		expect(githubLinkElement.getAttribute('data-testid')).toBe('github-link');
	});
});
