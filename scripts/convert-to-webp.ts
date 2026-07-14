/* eslint-disable no-console */
import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname } from 'path'

const PUBLIC_DIR = join(process.cwd(), 'public', 'images')

async function convertPngToWebp(dir: string) {
	const entries = await readdir(dir, { withFileTypes: true })

	for (const entry of entries) {
		const fullPath = join(dir, entry.name)

		if (entry.isDirectory()) {
			await convertPngToWebp(fullPath)
		} else if (extname(entry.name).toLowerCase() === '.png') {
			const outputPath = fullPath.replace(/\.png$/i, '.webp')

			try {
				await sharp(fullPath).webp({ quality: 80 }).toFile(outputPath)
				console.log(`✓ Converted: ${entry.name} → ${entry.name.replace(/\.png$/i, '.webp')}`)
			} catch (err) {
				console.error(`✗ Failed: ${entry.name}`, err)
			}
		}
	}
}

console.log('Converting PNG images to WebP...')
await convertPngToWebp(PUBLIC_DIR)
console.log('Done!')
