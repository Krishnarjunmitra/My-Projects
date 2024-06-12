@echo off
setlocal

REM Base directory
set BASE_DIR=personal-website

REM Create directories
mkdir %BASE_DIR%\client\src\components\Header
mkdir %BASE_DIR%\client\src\components\Footer
mkdir %BASE_DIR%\client\src\components\HeroSection
mkdir %BASE_DIR%\client\src\components\ProjectSection
mkdir %BASE_DIR%\client\src\components\SkillsSection
mkdir %BASE_DIR%\client\src\components\ContactSection
mkdir %BASE_DIR%\client\src\components\AboutSection
mkdir %BASE_DIR%\client\src\styles
mkdir %BASE_DIR%\client\src\utils
mkdir %BASE_DIR%\client\public
mkdir %BASE_DIR%\server\src\controllers
mkdir %BASE_DIR%\server\src\models
mkdir %BASE_DIR%\server\src\routes
mkdir %BASE_DIR%\server\src\config
mkdir %BASE_DIR%\server\src\utils
mkdir %BASE_DIR%\tests\client
mkdir %BASE_DIR%\tests\server

REM Create files
copy NUL %BASE_DIR%\client\src\components\Header\Header.jsx
copy NUL %BASE_DIR%\client\src\components\Header\Header.css
copy NUL %BASE_DIR%\client\src\components\Footer\Footer.jsx
copy NUL %BASE_DIR%\client\src\components\Footer\Footer.css
copy NUL %BASE_DIR%\client\src\components\HeroSection\HeroSection.jsx
copy NUL %BASE_DIR%\client\src\components\HeroSection\HeroSection.css
copy NUL %BASE_DIR%\client\src\components\ProjectSection\ProjectSection.jsx
copy NUL %BASE_DIR%\client\src\components\ProjectSection\ProjectSection.css
copy NUL %BASE_DIR%\client\src\components\SkillsSection\SkillsSection.jsx
copy NUL %BASE_DIR%\client\src\components\SkillsSection\SkillsSection.css
copy NUL %BASE_DIR%\client\src\components\ContactSection\ContactSection.jsx
copy NUL %BASE_DIR%\client\src\components\ContactSection\ContactSection.css
copy NUL %BASE_DIR%\client\src\components\AboutSection\AboutSection.jsx
copy NUL %BASE_DIR%\client\src\components\AboutSection\AboutSection.css
copy NUL %BASE_DIR%\client\src\App.jsx
copy NUL %BASE_DIR%\client\src\index.jsx
copy NUL %BASE_DIR%\client\src\styles\global.css
copy NUL %BASE_DIR%\client\src\styles\theme.js
copy NUL %BASE_DIR%\client\src\utils\fetchAPI.js
copy NUL %BASE_DIR%\client\public\index.html
copy NUL %BASE_DIR%\client\public\favicon.ico
copy NUL %BASE_DIR%\client\public\manifest.json
copy NUL %BASE_DIR%\client\.env
copy NUL %BASE_DIR%\client\webpack.config.js
copy NUL %BASE_DIR%\server\src\controllers\authController.js
copy NUL %BASE_DIR%\server\src\controllers\projectController.js
copy NUL %BASE_DIR%\server\src\models\User.js
copy NUL %BASE_DIR%\server\src\models\Project.js
copy NUL %BASE_DIR%\server\src\routes\authRoutes.js
copy NUL %BASE_DIR%\server\src\routes\projectRoutes.js
copy NUL %BASE_DIR%\server\src\config\database.js
copy NUL %BASE_DIR%\server\src\app.js
copy NUL %BASE_DIR%\server\src\utils\generateToken.js
copy NUL %BASE_DIR%\server\src\utils\validateToken.js
copy NUL %BASE_DIR%\server\.env
copy NUL %BASE_DIR%\server\index.js
copy NUL %BASE_DIR%\tests\client\App.test.jsx
copy NUL %BASE_DIR%\tests\server\app.test.js
copy NUL %BASE_DIR%\.env.example
copy NUL %BASE_DIR%\.gitignore
copy NUL %BASE_DIR%\README.md
copy NUL %BASE_DIR%\package.json

echo Folder structure and files created successfully!

endlocal
