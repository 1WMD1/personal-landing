const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

const inputDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public');

(async () => {
  try {
    const files = await imagemin(
      ['public/lx01_*.jpg', 'public/lx02_*.jpg', 'public/wyq*.jpg', 'public/wmd.jpg'],
      {
        destination: outputDir,
        plugins: [
          imageminMozjpeg({
            quality: 75,
            progressive: true
          })
        ]
      }
    );
    
    console.log('✅ 图片压缩完成！');
    files.forEach(file => {
      console.log(`  - ${path.basename(file.destinationPath)}`);
    });
  } catch (error) {
    console.error('压缩失败:', error);
  }
})();
