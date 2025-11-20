# Build Script for Production Optimization
# Minifies CSS, JS, and HTML files and outputs to 'dist' folder

$sourceDir = $PSScriptRoot
$distDir = Join-Path $PSScriptRoot "dist"

Write-Host "Starting Build Process..." -ForegroundColor Cyan

# 1. Clean Dist Directory
if (Test-Path $distDir) {
    Remove-Item $distDir -Recurse -Force
}
New-Item -ItemType Directory -Path $distDir | Out-Null

# 2. Function to Minify CSS
function Minify-CSS ($content) {
    $content = $content -replace '/\*[\s\S]*?\*/', '' # Remove comments
    $content = $content -replace '\s+', ' '           # Collapse whitespace
    $content = $content -replace '\s*({|}|;|:|,)\s*', '$1' # Remove space around symbols
    return $content.Trim()
}

# 3. Function to Minify JS (Basic)
function Minify-JS ($content) {
    # Simple minification: remove comments and extra whitespace
    # Note: Full JS minification requires a parser, this is a basic approximation
    $content = $content -replace '//.*', ''           # Remove single line comments
    $content = $content -replace '/\*[\s\S]*?\*/', '' # Remove block comments
    $content = $content -replace '\s+', ' '           # Collapse whitespace
    return $content.Trim()
}

# 4. Function to Minify HTML
function Minify-HTML ($content) {
    $content = $content -replace '<!--[\s\S]*?-->', '' # Remove comments
    $content = $content -replace '>\s+<', '><'         # Remove whitespace between tags
    return $content.Trim()
}

# 5. Process Files
$files = Get-ChildItem -Path $sourceDir -Recurse -Exclude "dist", ".git", "build.ps1", "README.md"

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($sourceDir.Length + 1)
    $destPath = Join-Path $distDir $relativePath
    $destParent = Split-Path $destPath

    if (!(Test-Path $destParent)) {
        New-Item -ItemType Directory -Path $destParent -Force | Out-Null
    }

    if ($file.PSIsContainer) {
        continue
    }

    Write-Host "Processing: $relativePath" -ForegroundColor Gray

    if ($file.Extension -eq ".css") {
        $content = Get-Content $file.FullName -Raw
        $minified = Minify-CSS $content
        Set-Content -Path $destPath -Value $minified -Encoding UTF8
    }
    elseif ($file.Extension -eq ".js") {
        $content = Get-Content $file.FullName -Raw
        $minified = Minify-JS $content
        Set-Content -Path $destPath -Value $minified -Encoding UTF8
    }
    elseif ($file.Extension -eq ".html") {
        $content = Get-Content $file.FullName -Raw
        $minified = Minify-HTML $content
        Set-Content -Path $destPath -Value $minified -Encoding UTF8
    }
    else {
        # Copy other files (images, etc) as is
        Copy-Item $file.FullName $destPath
    }
}

Write-Host "Build Complete! Optimized files are in 'dist/'" -ForegroundColor Green