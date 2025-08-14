import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('🚀 Converting images to WebP format for lightning performance...');
  
  try {
    const files = await imagemin(['src/assets/*.{jpg,jpeg,png,JPG,JPEG,PNG}'], {
      destination: 'src/assets',
      plugins: [
        imageminWebp({
          quality: 85, // High quality but still optimized
          method: 6,   // Better compression
          autoFilter: true
        })
      ]
    });

    console.log(`✅ Successfully converted ${files.length} images to WebP format!`);
    
    // Create a size comparison
    let totalOriginalSize = 0;
    let totalWebpSize = 0;
    
    for (const file of files) {
      const originalPath = file.sourcePath;
      const webpPath = file.destinationPath;
      
      if (fs.existsSync(originalPath) && fs.existsSync(webpPath)) {
        const originalStats = fs.statSync(originalPath);
        const webpStats = fs.statSync(webpPath);
        
        totalOriginalSize += originalStats.size;
        totalWebpSize += webpStats.size;
        
        const reduction = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);
        console.log(`📸 ${path.basename(originalPath)} → ${path.basename(webpPath)} (${reduction}% smaller)`);
      }
    }
    
    const totalReduction = ((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n🎉 Total size reduction: ${totalReduction}% (${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalWebpSize / 1024 / 1024).toFixed(2)}MB)`);
    console.log('⚡ Your website will now load lightning fast!');
    
  } catch (error) {
    console.error('❌ Error converting images:', error);
  }
})();
