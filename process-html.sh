#!/bin/bash

# Add script start time logging
echo "==== PROCESS-HTML SCRIPT STARTED: $(date) ===="
echo "Current directory: $(pwd)"
echo "Listing current directory contents:"
ls -la

# Array of image URLs - add your URLs here
declare -a IMAGES=(
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
)

declare -a LOGOS=(
    './images/1.png'
    './images/2.png'
    './images/3.png'
    './images/4.png'
    './images/5.png'
    './images/6.png'
    './images/7.png'
    './images/8.png'
    './images/9.png'
    './images/10.png'
)

echo "Number of images in IMAGES array: ${#IMAGES[@]}"
echo "Number of logos in LOGOS array: ${#LOGOS[@]}"

# Check if required environment variables are set
required_vars=("COMPANY_COLOR" "COMPANY_NAME" "COMPANY_EMAIL" "COMPANY_PHONE" "COMPANY_ADDRESS" "COMPANY_IMAGE" "COMPANY_LOGO")

echo "Checking required environment variables..."
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: $var is not set"
        exit 1
    else
        echo "� $var is set to: ${!var}"
    fi
done

# Directory containing HTML files
HTML_DIR="./src"
echo "HTML directory set to: $HTML_DIR"

# Check if directory exists
if [ ! -d "$HTML_DIR" ]; then
    echo "Error: Directory $HTML_DIR not found"
    exit 1
else
    echo "� Directory $HTML_DIR exists"
    echo "Listing HTML directory contents:"
    ls -la "$HTML_DIR"
fi

# Get count of HTML files
html_file_count=$(find "$HTML_DIR" -type f -name "*.html" | wc -l)
echo "Found $html_file_count HTML files to process"

# Process each HTML file in the directory
find "$HTML_DIR" -type f -name "*.html" | while read -r file; do
    echo "======================================"
    echo "Processing $file..."
    echo "File size before processing: $(stat -c %s "$file") bytes"
    
    # Create a temporary file
    temp_file=$(mktemp)
    echo "Created temporary file: $temp_file"
    
    # 1. Replace all "blue" in Tailwind classes with COMPANY_COLOR
    echo "Replacing 'blue' with '$COMPANY_COLOR' in Tailwind classes..."
    sed "s/\([a-z]*:\)\?\([a-z]*-\)blue\(-[0-9]*\)/\1\2$COMPANY_COLOR\3/g" "$file" > "$temp_file"
    
    # 2. Replace content for company details
    echo "Replacing company details..."
    sed -i "s|<[^>]*class=\"[^\"]*company-name[^\"]*\"[^>]*>[^<]*<|<span class=\"company-name\">$COMPANY_NAME<|g" "$temp_file"
    sed -i "s|<[^>]*class=\"[^\"]*company-email[^\"]*\"[^>]*>[^<]*<|<span class=\"company-email\">$COMPANY_EMAIL<|g" "$temp_file"
    sed -i "s|<[^>]*class=\"[^\"]*company-phone[^\"]*\"[^>]*>[^<]*<|<span class=\"company-phone\">$COMPANY_PHONE<|g" "$temp_file"
    sed -i "s|<[^>]*class=\"[^\"]*company-address[^\"]*\"[^>]*>[^<]*<|<span class=\"company-address\">$COMPANY_ADDRESS<|g" "$temp_file"
    
    # 3. Update title
    echo "Updating page title to: $COMPANY_NAME"
    sed -i "s|<title>[^<]*</title>|<title>$COMPANY_NAME</title>|g" "$temp_file"
    
    # 4. Handle company logo
    if [ ${#LOGOS[@]} -gt 0 ]; then
        logo_number=$((COMPANY_LOGO - 1))
        
        echo "Processing logo: COMPANY_LOGO=$COMPANY_LOGO, index=$logo_number"
        if [ $logo_number -ge 0 ] && [ $logo_number -lt ${#LOGOS[@]} ]; then
            logo="${LOGOS[$logo_number]}"
            echo "Selected logo path: $logo"
            sed -i "s|<img[^>]*class=\"[^\"]*nav-logo[^\"]*\"[^>]*src=\"[^\"]*\"|<img class=\"nav-logo\" src=\"$logo\"|g" "$temp_file"
        else
            echo "Warning: Logo index $logo_number is out of range (0-${#LOGOS[@]})"
        fi
    else
        echo "No logos defined in LOGOS array"
    fi

    # Handle custom company logo
    if [ ! -z "$COMPANY_CUSTOM_LOGO" ]; then
        echo "Using custom company logo: $COMPANY_CUSTOM_LOGO"
        escape_logo=$(printf '%s\n' "$COMPANY_CUSTOM_LOGO" | sed 's/[\/&]/\\&/g')
        sed -i "s|<img[^>]*class=\"[^\"]*nav-logo[^\"]*\"[^>]*src=\"[^\"]*\"|<img class=\"nav-logo\" src=\"$escape_logo\"|g" "$temp_file"
    else
        echo "No custom logo defined, using default from LOGOS array"
    fi
    
    # 5. Handle images based on COMPANY_IMAGE
    if [ ${#IMAGES[@]} -gt 0 ]; then
        image_number=$((COMPANY_IMAGE - 1))
        inverse_number=$((${#IMAGES[@]} - COMPANY_IMAGE))
        
        echo "Processing images: COMPANY_IMAGE=$COMPANY_IMAGE, index=$image_number, inverse=$inverse_number"
        if [ $image_number -ge 0 ] && [ $image_number -lt ${#IMAGES[@]} ]; then
            image1="${IMAGES[$image_number]}"
            image2="${IMAGES[$inverse_number]}"
            
            echo "Selected primary image (truncated): ${image1:0:50}..."
            echo "Selected secondary image (truncated): ${image2:0:50}..."
            
            escaped_image1=$(printf '%s\n' "$image1" | sed 's/[\/&]/\\&/g')
            escaped_image2=$(printf '%s\n' "$image2" | sed 's/[\/&]/\\&/g')

            # Replace background images
            echo "Replacing background images..."
            sed -i "s|background-image: *url([^)]*)|background-image: url($escaped_image1)|g" "$temp_file"
            sed -i '/compare-image/s|background-image: *url([^)]*)|background-image: url('"$escaped_image2"')|' "$temp_file"
            sed -i "/id=\"form-image\"/s|background-image: *url([^)]*)|background-image: url($escaped_image1)|g" "$temp_file"
        else
            echo "Warning: Image index $image_number is out of range (0-${#IMAGES[@]})"
        fi
    else
        echo "No images defined in IMAGES array"
    fi
    
    # Move the processed file back to original location
    echo "Moving processed file back to original location..."
    mv "$temp_file" "$file"
    echo "New file size after processing: $(stat -c %s "$file") bytes"
    echo "Completed processing $file"
    echo "======================================"
done

echo "All HTML files have been processed successfully!"
echo "==== PROCESS-HTML SCRIPT COMPLETED: $(date) ===="
