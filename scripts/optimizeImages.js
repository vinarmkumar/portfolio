#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses all images in src/assets to reduce file size and bandwidth
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../src/assets');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    console.log('🎯 Starting image optimization...\n');

    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const originalSize = stats.size;
      totalOriginal += originalSize;

      // Skip if not an image
      if (!['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) continue;

      console.log(`📦 Processing: ${file}`);

      // Compress and convert to WebP (modern format)
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const tempPath = filePath + '.tmp';
        const webpPath = filePath.replace(/\.[^.]+$/, '.webp');
        
        // Compress original to temp file first
        if (ext === '.png') {
          await sharp(filePath)
            .png({ quality: 85, compressionLevel: 9 })
            .toFile(tempPath);
        } else {
          await sharp(filePath)
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tempPath);
        }

        // Replace original with compressed version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);

        // Create WebP version
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);

        const newStats = fs.statSync(filePath);
        const newSize = newStats.size;
        const savings = Math.round(((originalSize - newSize) / originalSize) * 100);
        
        console.log(`   ✓ Compressed: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`);
        console.log(`   ✓ WebP created: ${path.basename(webpPath)}\n`);
        
        totalOptimized += newSize;
      }
    }

    const totalSavings = Math.round(((totalOriginal - totalOptimized) / totalOriginal) * 100);
    console.log('✅ Optimization Complete!');
    console.log(`📊 Total savings: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOptimized / 1024 / 1024).toFixed(2)}MB (${totalSavings}% reduction)`);
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

optimizeImages();
